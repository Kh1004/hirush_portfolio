# Rules — How to Change This Codebase

Short, enforceable rules. Each has an ID other docs reference (e.g. `T-13` cites `R-4`). If a rule blocks you, raise it rather than silently breaking it.

---

## 0. Non-negotiables (read first)

| # | Rule |
| --- | --- |
| **R-0a** | Never edit the `rocketCritical` block in `package.json` (dependencies, devDependencies, scripts lists, warning). Scaffolding depends on it. |
| **R-0b** | Never remove the `@dhiwise/component-tagger/nextLoader` webpack rule in `next.config.mjs`. |
| **R-0c** | Never delete `data.txt`. It is the client's authored copy and the fallback source of truth. |
| **R-0d** | Never report success in the UI for an action that did not happen (see the contact form) — fix the action or show an error. |

---

## 1. Content

**R-1 — All user-visible copy lives in `src/data/site.ts`.** No headings, labels, blurbs, client names or phone numbers inline in JSX.

```tsx
// ✅
<h3>{service.title}</h3>

// ❌
<h3>PLC Programming</h3>
```

**R-2 — `data.txt` first.** When the client supplies copy, add it to `data.txt`, then to `site.ts`, then wire it. Keeps the canonical document and the site from diverging.

**R-3 — Exact legal names.** `Hirush Automation Pte Ltd`, `Hirush Automation (Pvt) Ltd`, `Public Utilities Board (PUB)`. Do not "tidy" client names, project titles or product names.

**R-4 — New content shape ⇒ new type field.** If a card needs a badge or date, extend the interface in `site.ts` and update every record. Do not special-case in JSX with `project.id === '…'`.

---

## 2. Styling

**R-5 — Design tokens for brand colour.** Prefer token classes; arbitrary hex is only acceptable when the exact value has no token (shadows, one-off borders). When touching a component, migrate its `#B81005` → `brand-red` if the token exists after T-13.

| Value | Token |
| --- | --- |
| `#B81005` | `brand-red` |
| `#940D05` | `brand-red-dark` |
| `#D61003` | `brand-red-light` |
| `#FC542B` | `brand-orange` |
| `#FB6441` | `brand-orange-alt` |
| `#111111` | `site-text-heading` |
| `#333333` | `site-text-dark` |
| `#AAAAAA` | `site-heading-gray` |
| `#FFFFFF` | `site-container` |
| `#F5F5F5` | section alternate bg (add token) |
| `#F9F9F9` | product card bg (add token) |

**R-6 — One container pattern.** Section content width is `w-[92%] max-w-[1720px] mx-auto`. Do not invent `max-w-7xl`, `container`, or `px-4` wrappers. Once `T-11` lands, use `<Container>`.

**R-7 — One section-heading pattern.** Uppercase Coda heading + 60×3 px `brand-red` underline + optional grey subtitle (`design.md` §5.2). Once `T-12` lands, use `<SectionHeading>`.

**R-8 — No new global CSS without justification.** Prefer Tailwind. If a keyframe/utility must be global, add it in exactly one file (`styles/tailwind.css` for base/utilities, `styles/index.css` only for `@import`). Duplicated `fadeInUp` definitions are a known defect (`T-03`).

**R-9 — Do not add a second styling system** (CSS modules, styled-components, shadcn theme, MUI). Inline `style={{}}` for computed shadows is acceptable; new libraries are not.

**R-10 — Motion is 200–300 ms, `ease-out`, transform/opacity only.** Respect `prefers-reduced-motion` for anything new.

---

## 3. Components & rendering

**R-11 — `'use client'` only when needed.** Needs it: state, effects, browser APIs, event handlers. Does not: pure props/markup. `Footer` currently declares it unnecessarily — do not add more.

**R-12 — Sections are self-contained.** They import their data directly from `@/data/site`; `page.tsx` only orders them. Do not introduce a props API for copy.

**R-13 — Adding a section requires:** component in `src/components/`, an `id` + `scroll-mt-32` if navigable, `nav` entry if it should appear in the header, and inclusion in `page.tsx` in the intended order.

**R-14 — Icon maps are exhaustive.** Adding an icon key means adding it to the union (`ServiceIconKey`, `ToolIconKey`, …) *and* the `Record` in `src/components/icons/*`. A missing map entry renders a blank circle with no error.

**R-15 — File names describe the block** (`ServicesSection.tsx`). Do not reuse misleading names; `HeroSlider` is a known misnomer (`T-16`).

---

## 4. Images

**R-16 — Use `next/image` for all raster assets.** Raw `<img>` is only tolerated for the header logo until T-14; do not add more.

**R-17 — Every `fill` container needs a defined aspect/height** to prevent CLS (`aspect-[16/10]`, `h-[500px]`).

**R-18 — Project photos:** `public/assets/images/projects/<project-id>.webp`, 16:10, 1600×1000, ≤200 KB, plus `image` + `imageAlt` in `site.ts`. Never hotlink a client's site.

**R-19 — Remote hosts must be allow-listed** in `image-hosts.config.mjs` before use in `next/image`.

**R-20 — `alt` describes the content, not the filename.** `"Polishing system control panel installed at Stats ChipPAC"`, never `"Temporary image test"`.

---

## 5. Accessibility

**R-21 — Every input has a programmatic label** (`<label htmlFor>` + `id`, or `aria-label`). Current form fails this (`T-14`).

**R-22 — Interactive state is announced.** Links/tabs that reflect position use `aria-current`; the mobile menu uses `aria-expanded` + `aria-controls`; async feedback regions use `aria-live="polite"`.

**R-23 — Keyboard first.** Visible `focus-visible` outline (`2px` `brand-red`), no `outline: none` without a replacement, menu operable by Tab/Enter/Escape.

**R-24 — Body text ≥ 4.5:1.** Known failures to fix when touched: `#777` on white/F5, `#888` on F5, `#8F8F8E` on `#333`, `#CCCCCC` on `brand-red` (`design.md` §9).

**R-25 — Heading order is hierarchical.** One `h1` per page (the hero). Section titles `h2`; card titles `h3`. Do not use `h2` for card titles inside a section that already has an `h2` (`FeaturedServices` does).

---

## 6. TypeScript & quality gates

**R-26 — Build config lies.** `next.config.mjs` sets `ignoreBuildErrors` and `ignoreDuringBuilds`. A green `npm run build` proves nothing about correctness. Before every commit:

```bash
npm run type-check   # tsc --noEmit
npm run lint         # next lint
```

**R-27 — No new `any`.** Existing `any` in `ui/AppImage.tsx` / `ui/AppIcon.tsx` is legacy; don't extend the pattern. ESLint warns.

**R-28 — No `console.log` in shipped code.** `console.warn/error/info` allowed.

**R-29 — No dead code left behind.** If you replace a component or dependency, delete the old one in the same change (see `AppLogo`, `recharts`, `archiver`).

**R-30 — No secrets in the repo.** Use `NEXT_PUBLIC_*` only for genuinely public values; server-only tokens belong in host env vars. There is currently no `.env.example` — add one if you introduce variables.

---

## 7. Dependencies

**R-31 — Justify every dependency.** This site needs React, Next, Tailwind, and (currently) heroicons. `recharts`, `lucide-react`, `archiver`, `tailwindcss-animate` are unused — do not build on them, and remove them when safe (T-10).

**R-32 — No CSS-in-JS, no UI kit, no animation library** unless it replaces ≥3 hand-rolled behaviours and is approved.

**R-33 — Pin major versions** as the existing manifest does; do not auto-upgrade Next/React in an unrelated change.

---

## 8. Git & review

**R-34 — Commit messages describe the change, not "fix"/"updated".** The current history (`fix`, `updated`, `layout fixed`) is not acceptable going forward. Format: `area: imperative summary` (e.g. `contact: deliver enquiries via Formspree`).

**R-35 — One concern per commit.** Do not mix a refactor (T-11/T-12) with content edits.

**R-36 — Build artifacts stay untracked.** `tsconfig.tsbuildinfo` is currently committed; `.gitignore` covers only `node_modules` and `.next` (T-16).

**R-37 — PR checklist:**

- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] No copy added outside `site.ts`
- [ ] Checked at 320 px, 768 px, 1440 px
- [ ] Keyboard-navigated the nav, project filters and form
- [ ] `alt` text present for any new image
- [ ] No new dependency without justification

---

## 9. What not to touch

| Path | Why |
| --- | --- |
| `package.json → rocketCritical` | Scaffolding contract (R-0a) |
| `next.config.mjs → webpack → component-tagger` | Build-time tagger used by the platform (R-0b) |
| `src/app/api/export/route.ts` | Only until T-16 is approved — it is scaffolding, not a feature; don't build on it |
| `data.txt` | Read-only client source (R-0c) |
| `public/assets/images/bg.jpg`, `logo.png`, `og-image.png` | Live brand assets; replace only with client-approved files of the same dimensions |

## 10. When in doubt

1. Does the change add copy? → `site.ts` first.
2. Does it add a colour? → reuse a token or add one to `tailwind.config.js`.
3. Does it add a section? → `design.md` §5.2 blueprint + R-13.
4. Does it add behaviour? → smallest possible client component, no new library.
5. Unsure if it's in scope? → check `prd.md` §4 Non-goals and `task.md` priority.
