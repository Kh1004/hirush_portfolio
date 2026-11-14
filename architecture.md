# Architecture — Hirush Automation Site

Companion docs: `prd.md` (what), `design.md` (look), `rules.md` (how to change), `task.md` (backlog), `memory.md` (state & gotchas).

---

## 1. Stack

| Layer | Choice | Version | Notes |
| --- | --- | --- | --- |
| Framework | Next.js App Router | `15.1.11` | RSC by default; no `pages/` dir |
| UI runtime | React | `19.0.3` | `react-dom` matched |
| Language | TypeScript | `^5` | `strict: true`, but build ignores type errors |
| Styling | Tailwind CSS | `3.4.6` | `@tailwind base/components/utilities` + custom `@layer` CSS |
| Fonts | `next/font/google` → Coda (400/800) | — | Arial for body |
| Icons | Hand-authored inline SVG maps | — | `src/components/icons/*.tsx` |
| Images | `next/image` | — | Local `/assets/images/*`; remote hosts allow-listed |
| Build/deploy | Netlify (`@netlify/plugin-nextjs`) | — | Dev port `4028` |
| Infra deps (legacy) | `jszip`, `archiver`, `@dhiwise/component-tagger`, `@heroicons/react` | — | Only tagger + heroicons are actually reachable; see T-10/T-16 |

No state library, no fetch layer, no database, no auth, no tests, no CI config in-repo.

## 2. Directory map

```
hirush_portfolio/
├── data.txt                     # Client-authored copy — SOURCE OF TRUTH for content
├── public/
│   ├── favicon.ico              # Unused duplicate (metadata points at logo.png)
│   └── assets/images/
│       ├── bg.jpg               # Hero background
│       ├── logo.png             # Header logo + metadata icon
│       ├── og-image.png         # 1200×630 social card
│       ├── no_image.png         # AppImage fallback
│       └── projects/            # Empty except README.md — 22 project photos outstanding
├── src/
│   ├── app/
│   │   ├── layout.tsx           # <html>, Coda font, metadata, 3× JSON-LD, vendor scripts
│   │   ├── page.tsx             # Composes the 12 blocks (server component)
│   │   ├── not-found.tsx        # 'use client' 404 (currently uses non-existent theme classes)
│   │   ├── robots.ts            # MetadataRoute.Robots
│   │   ├── sitemap.ts           # MetadataRoute.Sitemap (single URL)
│   │   ├── favicon.ico          # Also unused (metadata.icons overrides)
│   │   └── api/export/route.ts  # GET → zips src/ + public/ (Rocket scaffolding leftover)
│   ├── components/
│   │   ├── Navbar.tsx           # client — sticky header, mobile menu, click-only active state
│   │   ├── HeroSlider.tsx       # static hero (name is a misnomer)
│   │   ├── AboutSection.tsx
│   │   ├── MissionVision.tsx    # inline SVG mission/vision icons
│   │   ├── FeaturedServices.tsx # Services block — 5-up tiles, owns #services
│   │   ├── ToolsSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ProjectsSection.tsx  # client — filter + pagination
│   │   ├── TrainingsSection.tsx
│   │   ├── IndustriesServed.tsx
│   │   ├── ContactSection.tsx   # client — local form state only
│   │   ├── AnimateOnScroll.tsx  # client — IntersectionObserver wrapper
│   │   ├── Footer.tsx           # client (no state — could be server)
│   │   ├── icons/               # serviceIcons|toolIcons|productIcons|industryIcons (Record<key, JSX>)
│   │   └── ui/
│   │       ├── AppImage.tsx     # next/image wrapper with fallback + loading state
│   │       ├── AppIcon.tsx      # dynamic @heroicons lookup (used only by not-found)
│   │       └── AppLogo.tsx      # UNUSED — defaults to missing app_logo.png
│   ├── data/site.ts             # All content + types + SEO strings (721 lines)
│   └── styles/
│       ├── tailwind.css         # @tailwind directives + base/utilities overrides
│       └── index.css            # @import './tailwind.css' + fadeInUp delays
├── next.config.mjs              # tagger loader, remote images, sourcemaps, ignores TS/ESLint
├── image-hosts.config.mjs       # next/image remotePatterns allow-list
├── tailwind.config.js           # brand/site colour + font + fontSize tokens (largely unused)
├── postcss.config.js
├── tsconfig.json                # strict, bundler resolution, "@/*" → src/*
├── .eslintrc.json               # next/core-web-vitals + TS + prettier
└── .prettierrc
```

## 3. Rendering model

```
                    ┌───────────────────────────────┐
                    │ app/layout.tsx   (server)     │
                    │ font, metadata, JSON-LD,      │
                    │ global CSS, vendor scripts    │
                    └───────────────┬───────────────┘
                                    │ children
                    ┌───────────────▼───────────────┐
                    │ app/page.tsx     (server)     │
                    │ imports 12 section components │
                    └───────────────┬───────────────┘
        ┌────────────────┬────────────────┬───────────────┬────────────────┐
        │ server-only    │ client (state) │ client(effect)│ server-only    │
        │ About, Mission │ Navbar,        │ AnimateOn     │ Featured,      │
        │ Industries     │ ContactSection,│ Scroll        │ Tools,         │
        │                │ ProjectsSection│ (wraps each   │ Products,      │
        │                │ Footer*        │  block)       │ Trainings      │
        └────────────────┴────────────────┴───────────────┴────────────────┘
```

\* `Footer` declares `'use client'` but holds no state — harmless, could become a server component.

**Why client components:** only three genuinely need it — `Navbar` (`useState`/`useEffect` scroll), `ProjectsSection` (filter + page state), `ContactSection` (form state). `AnimateOnScroll` requires `IntersectionObserver`.

**Consequence:** nearly every section is wrapped in exactly one `AnimateOnScroll`, so the *entire block* fades in as one unit. Fine today; if section-level staggering is wanted, wrap individual cards instead (see `memory.md` G-3).

## 4. Data flow

```
data.txt  ──(manual transcription)──▶  src/data/site.ts  ──import──▶  section components  ──▶  HTML
                                           │
                                           └── types: Service, Tool, Product, Project, Training,
                                                      Industry, Office, NavItem, FooterColumn, LinkItem
```

- `site.ts` exports `site`, `nav`, `hero`, `about`, `mission`, `vision`, `services`, `trainings`, `tools`, `products`, `projectReference`, `projectFilters`, `projects`, `industries`, `industriesClosing`, `footer`, `seo`.
- Every component imports its slice directly. There is **no** prop-drilling from `page.tsx` — sections are self-contained.
- Icons are selected by string key: `services[].icon` (`'plc' | 'hmi' | 'panel' | 'iot' | 'embedded'`) indexes `serviceIcons`. Adding a key without adding an icon renders `undefined` (blank circle) — no runtime guard.
- `Project.capability` (`'design' | 'management' | 'plc'`) drives filtering; `projectFilters` must keep matching keys.

## 5. Styling pipeline

```
app/layout.tsx
  ├── import '../styles/index.css'   ──▶ @import './tailwind.css' ──▶ @tailwind base/components/utilities
  └── import '../styles/tailwind.css' ──▶ SAME file again
```

Two problems baked in:

1. **Double compilation** — `tailwind.css` is pulled in twice (`layout.tsx:4-5` + `index.css:1`). Duplicate base resets and duplicated `fadeInUp` keyframes.
2. **Conflicting animation** — `index.css:3` defines `fadeInUp` at `0.6s`, `tailwind.css:184` at `0.5s`, both define `.animate-fade-in-up`. Last one wins per cascade order, which is not obvious.

Three competing styling idioms coexist:

| Idiom | Where | Example |
| --- | --- | --- |
| Tailwind arbitrary values | Most components | `text-[#B81005]`, `w-[92%] max-w-[1720px]` |
| Inline `style={{}}` | Shadows, exact greys, borders, text-shadow | `style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}` |
| Config tokens | `tailwind.config.js` | `brand.red`, `site.text-dark`, `fontSize.33px` — **almost never used** |

Net effect: brand red `#B81005` is repeated ~60× as a literal, and `tailwind.config.js` tokens are dead weight. Tokenisation is T-13.

## 6. Image pipeline

- Local files under `public/assets/images/`; `next/image` handles sizing/format.
- Remote hosts allow-listed in `image-hosts.config.mjs` (unsplash, pexels, pixabay, `img.rocket.new`, `hirushautomation.com`) and injected into `next.config.mjs → images.remotePatterns`.
- `HeroSlider` uses `<Image fill priority>` over `bg.jpg`.
- `ProjectsSection.ProjectMedia` uses `<Image fill sizes="(max-width:767px) 92vw, …">` with `aspect-[16/10]` and returns **`null`** when `project.image` is falsy — so none of the 22 cards show media today.
- `ui/AppImage.tsx` provides error fallback to `no_image.png` + `unoptimized` for external URLs; **it is not used by any section** (future-facing utility).
- `ui/AppLogo.tsx` defaults to `/assets/images/app_logo.png`, which does not exist; also unused.

Project photo contract (from `public/assets/images/projects/README.md`): **16:10, 1600×1000, WebP/JPG, < 200 KB**, named `<project-id>.webp`, wired via `image` + `imageAlt` in `site.ts`.

## 7. SEO surface

| Item | Where | State |
| --- | --- | --- |
| `metadataBase`, title, description | `layout.tsx` | ✅ from `seo` in `site.ts` |
| Canonical | `layout.tsx` (`alternates.canonical = site.url`) | ✅ |
| OpenGraph / Twitter | `layout.tsx` | ✅ local `og-image.png` |
| Icons | `metadata.icons` → `/assets/images/logo.png` | ✅ but both `favicon.ico` files are unused |
| JSON-LD Organization | `layout.tsx:63` | ⚠ logo points to `img.rocket.new` (T-08) |
| JSON-LD WebPage | `layout.tsx:78` | ✅ |
| JSON-LD SoftwareApplication | `layout.tsx:91` | ⚠ describes "Engineering Services" as a free app — semantically loose |
| `robots.txt` | `src/app/robots.ts` | ⚠ disallows `/_next/` (T-07) |
| `sitemap.xml` | `src/app/sitemap.ts` | ✅ single URL, `weekly`, priority 1.0 |
| Semantic headings | sections | ⚠ multiple `h2` levels skip (`FeaturedServices` uses `h2` for card titles under an `h2`) |
| Base URL | `NEXT_PUBLIC_SITE_URL` env, fallback `https://hirushautomation.com` | ✅ |

## 8. Routes

| Route | Type | Behaviour |
| --- | --- | --- |
| `/` | Static (RSC) | The 12 sections |
| `/robots.txt` | Metadata route | Rules + sitemap pointer |
| `/sitemap.xml` | Metadata route | `[site.url]` |
| `/api/export` | Route handler (GET) | Zips `src/` + `public/` from `process.cwd()` and returns the archive. No auth. Legacy scaffolding — should be deleted (T-16) |
| any unmatched | `not-found.tsx` | Client component; classes reference a shadcn-style theme that does not exist here (T-02) |

## 9. Build & deploy

| Concern | Detail |
| --- | --- |
| Dev | `npm run dev` → `next dev -p 4028` |
| Production build | `npm run build` → `next build` (output `.next`, or `$DIST_DIR`) |
| Production serve | `npm run serve` → `next start` |
| `npm start` | ⚠ currently `next dev -p 4028` — wrong for prod (T-09) |
| Type safety | `next.config.mjs → typescript.ignoreBuildErrors: true` — build cannot fail on TS |
| Lint | `eslint.ignoreDuringBuilds: true` — build cannot fail on lint |
| Sourcemaps | `productionBrowserSourceMaps: true` — public source in prod (T-16) |
| Webpack | `@dhiwise/component-tagger/nextLoader` applied to all non-`node_modules` `jsx|tsx` |
| Watch ignores | `WATCH_IGNORED_PATHS` env (comma-separated) |
| Hosting | Netlify via `@netlify/plugin-nextjs` |
| Vendor scripts | `static.rocket.new/rocket-web.js` + `rocket-shot.js` load unconditionally in `<head>` |

## 10. Extension recipes

**Add a service**
1. Append to `services: Service[]` in `src/data/site.ts` (must have `icon: ServiceIconKey`).
2. If the icon key is new: add an entry to `src/components/icons/serviceIcons.tsx` and extend `ServiceIconKey`.
3. Nothing else — `FeaturedServices` (the `#services` block) maps the array. Note the 5-up tile grid assumes 3–5 items.

**Add a project**
1. Append `{ id, title, client, role, capability }` to `projects`.
2. Optional image: drop `public/assets/images/projects/<id>.webp` (16:10, ≤200 KB) and set `image` + `imageAlt`.
3. Filter counts derive automatically.

**Add a nav section**
1. Give the `<section>` an `id` and `scroll-mt-32`.
2. Append `{ label, href: '#id' }` to `nav`.
3. No routing change required (single page).

**Change copy** — edit `data.txt` (source of truth) and mirror in `site.ts`. Never inline strings in JSX.

## 11. Architectural risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Build ignores TS/ESLint | Broken code ships silently | Run `npm run type-check` + `npm run lint` before every commit (`rules.md` R-8) |
| Fake contact form | Zero real enquiries | T-01 |
| No tests | Regressions from refactors (T-11/T-12/T-13) are invisible | Add Playwright smoke test when refactoring |
| Token drift (`#B81005` ×60) | Global rebrand is a find/replace nightmare | T-13 |
| 21/22 projects imageless | Page reads as unfinished; README lies about fallback | T-05 |
| `/api/export` unauthenticated | Anyone can pull the source tree | T-16 |
| Vendor scripts from `rocket.new` | Third-party JS + privacy exposure | Decide with client (T-16) |
| Unused deps | Install time, audit noise | T-10 |
