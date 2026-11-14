# Memory — Project State & Gotchas

Living document. **Update this when you finish work** that changes state, adds a gotcha, or resolves a task. Last verified: **2026-11-14** against commit `5f5ae9f`.

Other docs: `prd.md` (requirements) · `architecture.md` (how it fits together) · `rules.md` (how to change it) · `design.md` (visual system) · `task.md` (backlog).

---

## 1. Snapshot

| Question | Answer |
| --- | --- |
| What is this? | Single-page marketing site for an electrical/control/automation integrator |
| Client | Hirush Automation Pte Ltd (Singapore) + Hirush Automation (Pvt) Ltd (Sri Lanka) |
| Framework | Next.js 15.1.11 App Router, React 19.0.3, TypeScript strict |
| Styling | Tailwind 3.4.6 + one custom CSS utility layer |
| Content | `data.txt` (client copy) mirrored into `src/data/site.ts` (721 lines, typed) |
| Sections | 12, one route `/` |
| Backend | None — except a leftover `/api/export` zip route |
| State | Content complete · form not wired · 0/22 project photos · detailed services section removed · docs uncommitted |
| Deploy | Netlify (`@netlify/plugin-nextjs`), dev port `4028` |
| Tests / CI | None |
| Git | Working tree dirty (service-section removal + 6 new docs); history is `init`, `ui updated`, `layout fixed`, `fix`, `fix`, `fixed`… |

**One-line status:** *Visually finished, functionally incomplete.* The three things that make it untrue today are the fake form (T-01), the 404 theming (T-02) and duplicated CSS (T-03).

## 2. Commands

```bash
npm install
npm run dev          # next dev -p 4028  → http://localhost:4028
npm run build        # next build (does NOT fail on type/lint errors)
npm run serve        # next start (correct production serve)
npm start            # ⚠ currently next dev — see T-09
npm run type-check   # tsc --noEmit  ← run before every commit
npm run lint         # next lint
npm run format       # prettier over src/**/*.{ts,tsx,css,md,json}
```

There is no test command. No `.env` file is committed.

## 3. Environment & deploy

| Variable | Used by | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `src/data/site.ts:91` → canonical, sitemap, JSON-LD | `https://hirushautomation.com` |
| `DIST_DIR` | `next.config.mjs:6` | `.next` |
| `WATCH_IGNORED_PATHS` | dev watch ignores (comma-separated) | empty |
| Contact endpoint var | *not yet implemented* (T-01) | — |

Build silently tolerates TS and ESLint failures (`typescript.ignoreBuildErrors`, `eslint.ignoreDuringBuilds`). Never trust a green build — run the checks in §2.

## 4. Where things live

| You want to change… | Edit |
| --- | --- |
| Any wording, client name, phone, address | `src/data/site.ts` (and mirror in `data.txt`) |
| Section order | `src/app/page.tsx` |
| Page title/description/OG/JSON-LD | `src/app/layout.tsx`, `seo` in `site.ts` |
| Nav labels/links | `nav` in `site.ts` |
| Colours, fonts, spacing tokens | `tailwind.config.js` (+ `design.md`) |
| Base element styles, scrollbar, focus ring | `src/styles/tailwind.css` |
| Social share image | `public/assets/images/og-image.png` (1200×630) |
| Hero background | `public/assets/images/bg.jpg` |
| Logo | `public/assets/images/logo.png` |
| Project photos | `public/assets/images/projects/<project-id>.webp` |
| Robots / sitemap | `src/app/robots.ts`, `src/app/sitemap.ts` |
| Icons | `src/components/icons/*.tsx` |

### Server vs client components

| Client (`'use client'`) | Why |
| --- | --- |
| `Navbar.tsx` | scroll state, mobile menu |
| `ProjectsSection.tsx` | filter + pagination state |
| `ContactSection.tsx` | form state |
| `AnimateOnScroll.tsx` | `IntersectionObserver` |
| `not-found.tsx` | `useRouter` / `history.back()` |
| `Footer.tsx` | ← unnecessary, no state |

Everything else is a server component. `ui/AppIcon.tsx`, `ui/AppImage.tsx`, `ui/AppLogo.tsx` are client but unused (AppIcon only by `not-found`).

## 5. Gotchas (verified against code)

| # | Gotcha | Proof | Task |
| --- | --- | --- | --- |
| G-1 | Contact form fakes success; no network call | `ContactSection.tsx:19-24` | T-01 |
| G-2 | 404 uses shadcn-style classes that don't exist here | `not-found.tsx:21-46` vs `tailwind.config.js` | T-02 |
| G-3 | Tailwind is compiled twice; two `fadeInUp` keyframes (0.6 s / 0.5 s) | `layout.tsx:4-5`, `index.css:1,3-31`, `tailwind.css:184` | T-03 |
| G-4 | `.font-coda` in CSS uses literal `'Coda'`, shadowing the `next/font` variable | `tailwind.css:17-23,71-73` | T-04 |
| G-5 | All 22 projects lack an image; `ProjectMedia` returns `null`; README claims a fallback that doesn't exist | `ProjectsSection.tsx:11`, `site.ts:450`, `projects/README.md:57` | T-05 |
| G-6 | Nav active state is click-only; `#industries` has no nav entry | `Navbar.tsx:7,17-20`, `site.ts:101-110` | T-06 |
| G-7 | `robots.txt` disallows `/_next/` | `robots.ts:9` | T-07 |
| G-8 | JSON-LD logo is an `img.rocket.new` scaffold URL | `layout.tsx:71` | T-08 |
| G-9 | `npm start` runs `next dev` | `package.json:44` | T-09 |
| G-10 | `recharts`, `lucide-react`, `archiver`, `tailwindcss-animate` unused; `recharts` is inside protected `rocketCritical` | grep + `package.json:5-40` | T-10 |
| G-11 | `92%/1720px` container duplicated 10×; section heading duplicated 7× (6 standard + 1 featured variant) | see T-11/T-12 | T-11, T-12 |
| G-12 | `#B81005` repeated ~60× while `brand.red` goes unused | `tailwind.config.js:10-33` | T-13 |
| G-13 | Logo is a raw `<img>`; form labels unassociated; menu lacks `aria-expanded` | `Navbar.tsx:36`, `ContactSection.tsx:142-208` | T-14 |
| G-14 | Footer columns are plain text; 3.9:1 and 4.2:1 contrast failures | `Footer.tsx:22-76` | T-15 |
| G-15 | `/api/export` zips the source tree with no auth | `api/export/route.ts` | T-16 |
| G-16 | `tsconfig.tsbuildinfo` is tracked; both `favicon.ico` files are unused (metadata points at `logo.png`) | `git ls-files`, `layout.tsx:47-51` | T-16 |

### Non-obvious behaviour worth knowing

- **Adding an icon key renders nothing, silently.** `serviceIcons[key]` is a plain object lookup; no fallback. Add to the `Record` and the TS union together (R-14).
- **`AnimateOnScroll` starts at `opacity-0`.** If `IntersectionObserver` never fires (e.g. an ancestor with `overflow:hidden` and zero height), the whole section stays invisible. One wrapper per section today, so a failure hides an entire block.
- **Every section is wrapped in a single `AnimateOnScroll`**, so the whole block fades at once, not card-by-card. Pass `delay={1|2|3}` only if you re-wrap children.
- **`#services` now lives on `FeaturedServices`.** `ServicesSection.tsx` was deleted (2026-11-14); the services block is the tile grid titled "Comprehensive electrical, control, and automation solutions for industrial excellence". The tile `<a href="#services">` links are now self-links.
- **`ProjectsSection` media index is `index + 1` of the *filtered* list**, so numbering restarts on filter change and after "show more".
- **Sticky header is ~120 px tall** (30 px bar + 90 px row); newly added anchored sections need `scroll-mt-32`.
- **`HeroSlider` is not a slider.** It is a static hero; the name is legacy.
- **`AppImage` defaults to `/assets/images/no_image.png`** on error and auto-`unoptimized` for `http(s)` sources — good pattern, just not adopted yet.
- **`AppLogo` defaults to `/assets/images/app_logo.png`, which does not exist.** Unused; delete or fix.
- **`data.txt` is the only client-authored source.** It is tracked in git; do not treat it as scratch.

## 6. Domain glossary

| Term | Meaning |
| --- | --- |
| **HirushCore** | Own software suite: **SCADA** (web monitoring/HMI design), **Alert** (SMS/Email/WhatsApp notifications), **Sentinel** (central alarm monitoring), **Data Collector** (multi-protocol comms engine), **AppStudio** (mobile app builder), **App** (mobile runtime) |
| PLC | Programmable Logic Controller — Siemens, Allen-Bradley, Mitsubishi, Schneider |
| HMI | Human Machine Interface |
| SCADA | Supervisory Control and Data Acquisition |
| ACMV | Air Conditioning, Mechanical Ventilation |
| RO / DI | Reverse Osmosis / Deionised water |
| BMS | Building Management System |
| PUB / NEA | Singapore Public Utilities Board / National Environment Agency |
| CWRP | Changi Water Reclamation Plant |
| Design & Build | Project capability filter — in-house engineering + construction |
| Project Management | Capability filter — PM/technical support roles |

## 7. How do I…?

**Change a phone number / address** → `offices` in `site.ts`; used by About, Contact and (optionally) JSON-LD.

**Add a service** → append to `services` with an existing `icon` key; the 5-up tile grid updates. If the key is new, extend `ServiceIconKey` + `serviceIcons`. Full descriptions/features are stored but not rendered (the detail section was removed 2026-11-14).

**Add a project** → append `{ id, title, client, role, capability }`; filter counts derive automatically. Photo is optional (T-05).

**Add a section** → component + `id` + `scroll-mt-32` + `nav` entry + `page.tsx` order (`rules.md` R-13). Use the `SectionHeading` pattern.

**Rebrand the accent colour** → after T-13, one line in `tailwind.config.js`; before T-13, a global find/replace on `#B81005` (60 hits).

**Take the site live** → `npm run type-check && npm run lint && npm run build`, then deploy via Netlify. Verify `/robots.txt`, `/sitemap.xml`, OG preview, and that `NEXT_PUBLIC_SITE_URL` is set.

**Debug "section is invisible"** → check `AnimateOnScroll` visibility state; confirm the section has height and the observer fired.

## 8. Open questions (need client input)

1. **Where should enquiries go?** `admin@hirushautomation.com`? A ticketing inbox? Which service (Netlify Forms / Formspree / Resend)?
2. **Do we have approved project photos?** 22 projects, 16:10, 1600×1000, WebP, ≤200 KB — plus written permission for any client site imagery.
3. **Can we display client logos / testimonials?** (T-18)
4. **Should the Rocket scripts stay?** `rocket-web.js` + `rocket-shot.js` load from `static.rocket.new` on every page; they are analytics/editing helpers, not site features.
5. **Is `#industries` meant to be in the main nav?** It has an anchor but no link.
6. **Are the phone numbers current?** Singapore `+65 8183 0763`; Sri Lanka `+94 21 435 8220`, `+94 76 609 9261`.
7. **Legal pages required?** No privacy/terms exist; a public site collecting names and emails usually needs one in SG/EU contexts.
8. **Does the site need to stay single-page?** T-17 changes the architecture.

## 9. Decisions log

| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-11-14 | Docs added: `prd`, `architecture`, `rules`, `design`, `task`, `memory` | Single source for intent, structure and backlog; the repo only had a boilerplate README |
| 2026-11-14 | `data.txt` retained as content source of truth | Client-authored; prevents copy drifting between doc and site |
| 2026-11-14 | `/api/export` marked for deletion, not repaired | Scaffolding, unauthenticated, irrelevant to the product (T-16) |
| 2026-11-14 | No new dependencies proposed for P0–P2 work | Site needs only React/Next/Tailwind/heroicons |
| 2026-11-14 | Design tokens treated as the target, arbitrary hex as debt | `brand.*` already exists in config; migration is mechanical (T-13) |
| 2026-11-14 | Removed the detailed services rows; one services block only | Avoids rendering the same five services twice; FeaturedServices already carried the long-form heading and now owns `#services`. Content kept in `site.ts` |

## 10. Changelog

| Date | Change |
| --- | --- |
| 2026-11-14 | Created the six project docs. No source files modified. |
| 2026-11-14 | Removed `ServicesSection` (heading "Our Services"); `FeaturedServices` now owns `#services` and is titled "Comprehensive electrical, control, and automation solutions for industrial excellence". Docs updated to match. |

---

**Maintenance:** when you complete a task, tick it in `task.md`, update §1 Snapshot, add any new gotcha to §5 with a `file:line` proof, and append a row to §10. Keep this file honest — a stale memory file is worse than none.
