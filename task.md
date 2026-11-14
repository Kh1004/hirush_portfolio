# Backlog — Hirush Automation Site

Derived from a full read of the repo on 2026-11-14. Every item cites real files/lines. Priorities:

- **P0** — broken or misleading today; ship before showing the site to anyone.
- **P1** — visible quality/SEO defects; fix next.
- **P2** — systemisation, accessibility, housekeeping; schedule.
- **P3** — growth bets; needs client approval.

Effort: **S** < 1 h · **M** ≈ half day · **L** 1–3 days.

## Summary

| ID | Pri | Task | Effort | Depends on |
| --- | --- | --- | --- | --- |
| T-01 | P0 | Wire the contact form to a real endpoint | M | — |
| T-02 | P0 | Rebuild 404 page with real design tokens | S | — |
| T-03 | P0 | Remove duplicate CSS pipeline & conflicting keyframes | S | — |
| T-04 | P1 | Fix Coda font family (next/font vs literal `'Coda'`) | S | T-03 |
| T-05 | P1 | Project imagery: 22 photos or an honest fallback | M–L | — |
| T-06 | P1 | Nav scroll-spy, `aria-current`, expose Industries | M | — |
| T-07 | P1 | Stop `robots.txt` blocking `/_next/` | S | — |
| T-08 | P1 | Point JSON-LD logo at a first-party URL | S | — |
| T-09 | P1 | Fix `npm start` (runs `next dev`) | S | — |
| T-10 | P1 | Remove unused dependencies | S | — |
| T-11 | P2 | `<Container>` component | S | — |
| T-12 | P2 | `<SectionHeading>` component | M | T-11 |
| T-13 | P2 | Migrate hardcoded hex → design tokens | M | — |
| T-14 | P2 | Accessibility sweep | M | T-06 |
| T-15 | P2 | Footer links + contrast fixes | S | T-13 |
| T-16 | P2 | Housekeeping (export route, artifacts, README, scripts) | M | T-12 |
| T-21 | P2 | Playwright smoke test | M | T-11/T-12 |
| T-17 | P3 | Project detail pages or modal | L | T-05 |
| T-18 | P3 | Client wall / testimonials | M | — |
| T-19 | P3 | Project photo gallery | M | T-05 |
| T-20 | P3 | Analytics with consent + privacy page | S–M | — |

---

# P0 — Do first

## T-01 · Contact form delivers nothing while claiming success

**Where:** `src/components/ContactSection.tsx:13-24`, `:127-138`
**Problem:** `handleSubmit` calls `setSubmitted(true)` and clears the fields. No request is made. Every "Message Sent ✓" is false. `rules.md` R-0d.

**Fix (pick one, in order of preference for a static Netlify site):**
1. **Netlify Forms** — add `data-netlify="true"` + a hidden `form-name` input, deploy, verify in the Netlify UI. Zero backend code.
2. **Hosted endpoint** (Formspree / Web3Forms / Basin) — `fetch(POST)`; keep the endpoint ID in `NEXT_PUBLIC_CONTACT_ENDPOINT`.
3. **Route handler + Resend** — `src/app/api/contact/route.ts` with server-side validation and `RESEND_API_KEY` in host env. Do not expose the key client-side.

**Requirements:** loading state (disable button), success only on `2xx`, visible error + retry, honeypot field against bots, `aria-live="polite"` on the result region, keep both office phone numbers visible as a fallback.

**Done when:** a test submission arrives at `admin@hirushautomation.com`; a forced network failure shows an error, not a tick; no success message is possible without a 2xx.

---

## T-02 · 404 page uses classes that do not exist

**Where:** `src/app/not-found.tsx:21-46`
**Problem:** `bg-background`, `text-primary`, `text-onBackground`, `border-border`, `bg-accent`, `text-accent-foreground`, `text-primary-foreground` are shadcn/shadcn-theme tokens. This project's `tailwind.config.js` defines only `brand.*` and `site.*`, so those classes compile to nothing → unstyled white page with default link colours.

**Fix:** rewrite using `design.md` §5/§6 (Container, `brand-red`, Coda heading, primary + ghost buttons, `Link` from `next/link`). Prefer a server component; only `window.history.back()` needs client code, so keep a small client "Go back" button or use `Link href="/"` for both actions.

**Done when:** 404 renders on brand at 320/768/1440 px, classes exist in the compiled CSS, keyboard focus visible.

---

## T-03 · CSS is compiled twice with conflicting animations

**Where:** `src/app/layout.tsx:4-5`, `src/styles/index.css:1,3-31`, `src/styles/tailwind.css:184-197`
**Problem:** `layout.tsx` imports `index.css` **and** `tailwind.css`; `index.css` already `@import`s `tailwind.css`. `@tailwind` directives therefore run twice. Both files define `fadeInUp` and `.animate-fade-in-up` with different durations (0.6 s vs 0.5 s); the winner depends on cascade order, not intent.

**Fix:** keep a single entry in `layout.tsx` (`import '../styles/index.css'`), move the delay variants (`delay-1/2/3`) into `tailwind.css` next to the single keyframe, delete the duplicate block from the other file. Do not change the animation look.

**Done when:** `grep -c "@tailwind base"` across `src/` = 1; only one `@keyframes fadeInUp` exists; sections still animate once on scroll.

---

# P1 — Next

## T-04 · Headings may not use the loaded Coda font

**Where:** `src/styles/tailwind.css:17-23,71-73`, `src/app/layout.tsx:8-13`, `tailwind.config.js:34-37`
**Problem:** `next/font` exposes the family as `var(--font-coda)`; the CSS sets `h1–h6` and `.font-coda` to the literal `'Coda'`. The custom `.font-coda` utility is emitted after Tailwind's, so it shadows the correct `fontFamily.coda` definition. If no local "Coda" is installed, headings silently render in `cursive`.

**Fix:** use `font-family: var(--font-coda), cursive, sans-serif;` in both places, or delete the custom `.font-coda` utility and rely on `tailwind.config.js`. Verify in DevTools → Computed → `font-family` contains the generated `__Coda_…` name, and that glyphs actually change.

**Done when:** computed `font-family` on an `h2` references the next/font hash; no literal `'Coda'` remains in CSS; screenshot diff shows display-font headings.

---

## T-05 · 0 of 22 project photos are wired; placeholder contradicts docs

**Where:** `src/data/site.ts:443-600` (only `:450-451` has `image: ''` + `imageAlt: 'Temporary image test'`), `src/components/ProjectsSection.tsx:10-33`, `public/assets/images/projects/README.md:57`
**Problem:** `ProjectMedia` returns `null` when `image` is falsy — and all 22 records are falsy (`image: ''` on the first, absent elsewhere) — so no card has a media area and the grid looks unfinished. The README promises "Projects without a photo show a branded fallback panel (capability icon + gradient)" — no such code exists.

**Fix (choose):**
- **A — supply photos:** collect approved site photos, export to 16:10 / 1600×1000 / WebP / ≤200 KB, name `<project-id>.webp` per the README table, set `image` + a real `imageAlt`. Confirm client permission per client logo/site.
- **B — build the fallback (do this even if A lands later):** render a 16:10 panel with a capability-specific icon (`ProjectCapability` → icon map), brand-red gradient, and the 2-digit index. No empty space, no broken image.
- Either way: delete `imageAlt: 'Temporary image test'`.

**Done when:** every one of the 22 cards has a 16:10 media area; filter/paging still correct; README matches the shipped behaviour; no LCP regression (lazy-load below the fold).

---

## T-06 · Navigation does not reflect scroll position and hides a section

**Where:** `src/components/Navbar.tsx:7,17-20`, `src/data/site.ts:101-110`
**Problem:** `activeItem` changes only on click, so arriving via anchor/scroll leaves the wrong item highlighted. `#industries` exists (`IndustriesServed.tsx:8`) but has no nav entry. No `aria-current`.

**Fix:** observe the 8 section IDs (`about, services, tools, products, projects, trainings, industries, contact`) with `IntersectionObserver` (rootMargin to account for the 120 px sticky header), set active on the top-most intersecting section, and set `aria-current="true"` on the active link. Add `Industries` to `nav` (or intentionally leave it out and document why). Handle "Home" as scroll-to-top with no active section.

**Done when:** scrolling through the page highlights the correct link; deep-linking `/#products` highlights Products; Tab order matches visual order; no layout shift when the active style toggles.

---

## T-07 · `robots.txt` blocks Next.js assets

**Where:** `src/app/robots.ts:9`
**Problem:** `disallow: ['/api/', '/_next/']` prevents crawlers from fetching JS/CSS chunks, which harms rendering and can hurt Core Web Vitals assessment.

**Fix:** disallow only `/api/`. Keep the sitemap pointer.

**Done when:** `/robots.txt` allows `/_next/*`; `sitemap.xml` still resolves; no other path blocked unexpectedly.

---

## T-08 · Structured-data logo is a third-party URL

**Where:** `src/app/layout.tsx:71`
**Problem:** `logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13a747c68-1769707086868.png"` — a scaffold asset. The real logo is committed at `public/assets/images/logo.png`.

**Fix:** use `` `${site.url}/assets/images/logo.png` ``. While there, consider adding `address` per office from `offices` and `email` to the Organization node, and drop `SoftwareApplication` or correct its description (it currently describes the *services* as a free application).

**Done when:** no `rocket.new` URL remains in `layout.tsx`; JSON-LD validates in Google's Rich Results Test.

---

## T-09 · `npm start` runs the dev server

**Where:** `package.json:44`
**Problem:** `"start": "next dev -p 4028"` — production start accidentally runs dev mode (slow, verbose, not minified). `serve` correctly runs `next start`.

**Fix:** `"start": "next start -p 4028"` (or `next start`), update `README.md:60` accordingly. Do not touch the `rocketCritical.scripts` list.

**Done when:** `npm run build && npm start` serves the optimised build on 4028.

---

## T-10 · Four dependencies are unused

**Where:** `package.json:56-62,82`
**Unused (zero imports):** `recharts`, `lucide-react`, `archiver` (+ `@types/archiver`), `tailwindcss-animate` (not in `plugins: []` either).

**Fix:** `npm uninstall recharts lucide-react archiver @types/archiver tailwindcss-animate`, then `npm run build` + `npm run type-check`.
⚠ `recharts` appears inside the protected `rocketCritical.dependencies` list (`rules.md` R-0a). Leave that block untouched; if the hosting platform validates it, keep `recharts` installed and note why in `memory.md`.

**Done when:** `npm ls` is clean, build passes, no source imports a removed package, bundle size drops.

---

# P2 — Systemisation & quality

## T-11 · Extract `<Container>`

**Where:** repeated in `AboutSection.tsx:9`, `MissionVision.tsx:59` (1100px variant), `FeaturedServices.tsx:11`, `ToolsSection.tsx:14`, `ProductsSection.tsx:10`, `ProjectsSection.tsx:59`, `TrainingsSection.tsx:9`, `IndustriesServed.tsx:10`, `ContactSection.tsx:29`, `Footer.tsx:15`.

**Fix:** `src/components/ui/Container.tsx` with `width?: 'default' | 'narrow'` → `w-[92%] max-w-[1720px] mx-auto` / `max-w-[1100px]`. Replace all call sites.

**Done when:** zero raw `w-[92%] max-w-[1720px]` strings outside the component; pixel-identical layout at 320/768/1440.

---

## T-12 · Extract `<SectionHeading>`

**Where:** the heading + 60×3 underline + subtitle block in `About`, `Tools`, `Products`, `Projects`, `Trainings`, `Industries`, `Contact` (7 instances); `FeaturedServices` uses its own 26/32 px + 80 px variant.

**Fix:** `SectionHeading({ title, subtitle?, size?: 'default' | 'featured', id? })` implementing `design.md` §5.2. Keep the `#heading` id behaviour if anything links to it.

**Done when:** one implementation, 7 call sites, no visual diff (screenshot compare), subtitle spacing (`mb-12 -mt-4`) preserved.

---

## T-13 · Migrate hardcoded hex to tokens

**Where:** every component; `tailwind.config.js:10-33` currently ships `brand.*`, `site.*`, `fontSize.*` that nothing uses; `#B81005` appears ~60×.

**Fix:** add missing tokens (`site-surface-alt #F5F5F5`, `site-surface-card #F9F9F9`, `site-input #EDEDED`, `site-text-muted #555`, `site-text-subtle #777`, `site-text-footer #B0B0B0`, `site-rule #CCCCCC`), then replace arbitraries class-by-class. Do not combine with content edits (`rules.md` R-35).

**Done when:** `grep -rc "#B81005" src/components` is near zero (only shadows/gradients allowed); visual diff clean; `design.md` table matches config.

---

## T-14 · Accessibility sweep

**Where:** `Navbar.tsx:36-40,67-70`, `ContactSection.tsx:142-208`, `FeaturedServices.tsx:34`, `AnimateOnScroll.tsx:12`, `styles/tailwind.css:32-39`.

**Fix:**
- Add a "Skip to content" link as the first focusable element.
- Mobile toggle: `aria-expanded`, `aria-controls`, close on `Escape`.
- Header logo: `next/image` with real dimensions (raw `<img>` causes CLS).
- Form: `htmlFor`/`id` on all four fields, `autoComplete` attrs, error text tied via `aria-describedby`.
- Result banner: `role="status"` + `aria-live="polite"`.
- `FeaturedServices`: card titles should be `h3` under the section `h2`.
- Respect `prefers-reduced-motion` for `fadeInUp` and hover lifts.
- `AnimateOnScroll`: if `IntersectionObserver` is unavailable, render visible (today content would stay `opacity-0`).

**Done when:** axe/Lighthouse a11y ≥ 95; full keyboard pass; VO/NVDA announces form errors and success.

---

## T-15 · Footer is non-interactive and low-contrast

**Where:** `src/components/Footer.tsx:22-63,66-76`, `site.ts:657-709`
**Problem:** five columns of plain text (six of seven tools, all products) with no links; `footer.description` is `''` leaving an empty 24 px band; link colour `#8F8F8E` (3.9:1) and credit `#CCCCCC` on `#B81005` (4.2:1) fail AA.

**Fix:** give `FooterColumn.items` a `href` (services → `#services`, trainings → `#trainings`, tools/products → their sections, offices → `#contact`); restore or remove the description row; raise footer text to `#B0B0B0` and credit to `#FFFFFF`; render the year server-side.

**Done when:** every footer item is a link that lands correctly; contrast ≥ 4.5:1; no empty band.

---

## T-16 · Housekeeping

Batch these; do not mix with feature work.

| Item | Where | Action |
| --- | --- | --- |
| Leftover zip endpoint | `src/app/api/export/route.ts`, `package.json` (`jszip`) | Delete route, uninstall `jszip`/`@types/jszip`. Unauthenticated full-source export. |
| Tracked build artifact | `tsconfig.tsbuildinfo` | `git rm --cached`, add to `.gitignore` |
| Duplicate favicons | `public/favicon.ico`, `src/app/favicon.ico` | Keep one; point `metadata.icons` at a real favicon (currently `logo.png`), or accept the logo and delete both |
| Public sourcemaps | `next.config.mjs:5` | Set `false` in production |
| Unused components | `ui/AppLogo.tsx` (missing asset), `ui/AppImage.tsx` (unused) | Adopt `AppImage` where a fallback is useful, otherwise delete; delete `AppLogo` |
| Misnamed component | `HeroSlider.tsx` | Rename to `Hero.tsx` (it does not slide) |
| Vendor scripts | `layout.tsx:109-110` | Client decision: keep Rocket analytics/tagger or remove. If kept, document + add a privacy note |
| README | `README.md` | Replace boilerplate with real stack/run/content workflow; fix the `npm start` claim |
| Env docs | — | Add `.env.example` (`NEXT_PUBLIC_SITE_URL`, contact endpoint) |
| Duplicate prose | `data.txt` vs `site.ts` | Document the transcription workflow in `README.md` |

**Done when:** repo has no scaffolding leftovers, build passes, `git status` clean after a build.

---

## T-21 · Add a smoke test

**Why:** T-11–T-13 are refactors with no safety net.
**Fix:** Playwright with three checks — (1) page loads with the 12 expected section headings; (2) project filter "PLC, SCADA & HMI" yields 5 cards; (3) form validation blocks empty submit. Optionally a screenshot baseline at 1440 px.
**Done when:** `npm run test:e2e` runs headless in CI or locally and fails on a broken section.

---

# P3 — Growth (needs approval)

## T-17 · Project detail pages or modal
22 records with only title/client/role — no narrative. Add `summary`, `scope[]`, `outcome` per project and a route `/projects/[id]` (or accessible dialog). **L.**

## T-18 · Client wall / testimonials
Named clients already act as social proof; a logo row would strengthen it. Requires written permission for logos and any quote attribution. **M.**

## T-19 · Project photo gallery
Multiple images per project (before/after, panel internals). Needs an image schema change (`images: {src, alt}[]`) and T-05 complete. **M.**

## T-20 · Analytics + privacy
Pick a consent-respecting tool (Plausible/Umami), add a short privacy page, remove or gate the Rocket scripts. **S–M.**

---

# Suggested sequence

1. **Sprint 1 (P0):** T-01, T-02, T-03 — makes the site truthful and consistent.
2. **Sprint 2 (P1):** T-09, T-07, T-08, T-04, T-10 (quick wins), then T-05 and T-06 (larger).
3. **Sprint 3 (P2):** T-21 first (so refactors are protected), then T-11 → T-12 → T-13, then T-14, T-15, T-16.
4. **Backlog:** T-17–T-20 after client sign-off.
