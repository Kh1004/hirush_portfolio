# Design System — Hirush Automation

The visual language is a **legacy corporate/industrial** look: brand red, Coda display headings, dense grey body copy, square cards and dotted separators. It deliberately echoes the client's older WordPress site rather than a modern SaaS aesthetic.

Rules for applying it: `rules.md` §2. Tokens live in `tailwind.config.js` (largely unmigrated — see T-13).

---

## 1. Colour

### 1.1 Brand

| Token | Hex | Use |
| --- | --- | --- |
| `brand-red` | `#B81005` | Primary: nav active, section underlines, CTA fills, icon badges, product top border, footer top rule |
| `brand-red-dark` | `#940D05` | Hover state for red fills |
| `brand-red-light` | `#D61003` | Reserved (button border accent) |
| `brand-orange` | `#FC542B` | Hero H1 only; global `<a>` default |
| `brand-orange-alt` | `#FB6441` | Reserved |

### 1.2 Neutrals

| Token | Hex | Use |
| --- | --- | --- |
| `site-text-heading` | `#111111` | Section/card headings |
| `site-text-dark` | `#333333` | Body copy, dark panels, footer background |
| `—` | `#555555` | Secondary body (feature bullets, card descriptions) |
| `site-heading-gray` | `#AAAAAA` | Reserved / decorative |
| `—` | `#777777` | Section subtitles, meta lines |
| `—` | `#888888` | Paging status text |
| `—` | `#8F8F8E` | Footer link text (contrast risk) |
| `—` | `#999999` | Input borders, chip counts |
| — | `#B0B0B0` | Footer list text, address/label text on dark |
| `—` | `#CCCCCC` | Footer credit text, separator rules |
| `—` | `#DDDDDD` | Dark-panel headings, hero body text |
| `—` | `#EEEEEE` | Hero eyebrow, dark-panel list items |
| `—` | `#F5F5F5` | Alternate section background (Tools, Projects) |
| `—` | `#F9F9F9` | Product card background |
| `—` | `#EDEDED` | Input background |
| `site-container` | `#FFFFFF` | Default section background |

Accent usage is strict: **red is the only accent.** Never introduce blue/green/purple. Success state currently borrows red + `✓`.

### 1.3 Background rhythm

Alternating to break the page: white (`About`, `Mission`, `Services`, `Products`, `Trainings`, `Industries`, `Contact`) → `#F5F5F5` (`Tools`, `Projects`) → dark (`#333` contact info panel, footer). `Featured`/`Services` are one block. Keep adjacency: never two `#F5F5F5` sections back-to-back.

---

## 2. Typography

| Role | Family | Size | Weight | Line height | Colour |
| --- | --- | --- | --- | --- | --- |
| Hero H1 | Coda | 24 → 36 → 48 px (`text-2xl/4xl/5xl`) | 700 | 1.15 | `#FC542B` |
| Hero eyebrow | Coda | 10 → 12 → 14 px | 600 | — | `#EEEEEE`, uppercase, `tracking-wider` |
| Section title | Coda | 28 → 34 px | 400 | 1.25 | `#111111`, uppercase |
| Feature tile title | Coda | 23 px | 400 | 1.25 | `#111111` |
| Card title (product) | Coda | 18 px | 400 | 1.25 | `#111111` |
| Card title (tool) | Coda | 17 px | 400 | 1.25 | `#111111` |
| Training title | Coda | 17 px | 400 | 1.25 | `#111111` |
| Industry title | Coda | 16 px | 400 | 1.25 | `#111111` |
| Project title | Arial | 14 px | 400 | 1.45 | `#111111` |
| Body | Arial | 14 px | 400 | 1.6–1.7 | `#333333` |
| Card body | Arial | 12–13 px | 400 | 1.5–1.6 | `#555555` |
| Section subtitle | Arial | 14 px | 400 | 1.6 | `#777777` |
| Meta / phone / address | Arial | 11–13 px | 400 | 1.5 | `#B0B0B0` on dark |
| Nav | Coda | 13 px | 400 | — | `#B81005`, uppercase |
| Buttons | Arial | 11–13 px | 700 | — | white, uppercase, `tracking-wider` |
| Footer heading | Coda | 20 px | 400 | — | `#DDDDDD`, uppercase, `text-shadow: 1px 1px 1px #000` |
| Footer link/list | Arial | 12 px | 400 | 1.6 | `#B0B0B0` |

Base CSS (`styles/tailwind.css`): `body` Arial 14 px / 1.6; `h1` 30, `h2` 23, `h3` 20, `h4` 17, `h5` 15, `h6` 13. **Section titles override this to 28/34 px.**

⚠ **Font caveat:** `tailwind.css` sets `h1–h6` and `.font-coda` to the literal family `'Coda'`, while `next/font` exposes it as `--font-coda`. Unless a system "Coda" exists, headings fall back to `cursive`. Tailwind's `fontFamily.coda` (which correctly uses the variable) is shadowed by the later custom utility. **Verify visually and fix via T-04.**

Type rules: headings uppercase only for section titles/eyebrows/nav; card titles are sentence case; never use Coda below 16 px; never justify headings.

---

## 3. Type tokens in config vs. reality

`tailwind.config.js` declares `fontSize: 33px, 23px, 20px, 13px, 11px` and `colors.brand.*` / `colors.site.*`. Components use arbitrary values (`text-[13px]`, `text-[#B81005]`) instead. Treat config as the *intended* system; T-13 migrates toward it. New code should use named tokens where they exist, not new arbitrary values.

---

## 4. Layout

| Property | Value |
| --- | --- |
| Content width | `w-[92%]` with `max-w-[1720px]`, centred (`mx-auto`) |
| Narrow variant | `max-w-[1100px]` — Mission/Vision, industries closing |
| Section padding | `py-12 md:py-16 lg:py-24` (48 / 64 / 96 px) |
| Sticky offset | `scroll-mt-32` on every anchored section |
| Header | 30 px red bar + 90 px white row, `sticky top-0 z-50`, shadow after 10 px scroll |
| Grid gutters | `gap-5` (project grid), `gap-6` (industries), `gap-8` (services/products/tools/footer) |
| Project grid | 1 → 2 (`md`) → 3 (`xl`) columns |
| Products/Tools | 1 → 2 → 3 columns |
| Industries | 1 → 2 → 3 → 4 columns |
| Trainings | 1 → 2 columns |
| Footer | 1 → 2 → 3 → 5 columns |

Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280`.

---

## 5. Section blueprint

### 5.1 Order
Navbar → Hero → About → Mission/Vision → Services (tiles) → Tools → Products → Projects → Trainings → Industries → Contact → Footer.

### 5.2 Standard section header (repeated 6×, will become `<SectionHeading>` in T-12)

```tsx
<div className="flex flex-col items-center mb-8">
  <h2 className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase
                 leading-[1.25] text-[#111111]">
    Section Name
  </h2>
  <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
</div>
<p className="text-center text-[#777777] text-[14px] mb-12 -mt-4">
  One-line subtitle, no full stop.
</p>
```

`FeaturedServices` (the Services block) is the exception: 26/32 px title, 80 px underline, no subtitle, with a separator rule after the tiles.

### 5.3 Section alternation
White sections and `#F5F5F5` sections alternate as listed in §1.3. The `ProjectsSection` grid sits on `#F5F5F5` with white cards.

---

## 6. Components

### 6.1 Header / nav
- 30 px `#B81005` bar (empty).
- White row, `min-h-[90px]`, logo `max-h-[90px] max-w-[300px]`.
- Desktop links: 13 px Coda uppercase, `px-4 py-3`; active = white on red; hover = `#940D05` text.
- Mobile: 3-bar hamburger, bars rotate to X; menu drops as white panel with stacked red links.
- Focus: `focus-visible:outline-2 outline-[#B81005]`.

### 6.2 Hero
- Height `500px`, `lg:600px`; `bg.jpg` `object-cover`, overlay `black/30`.
- Panel: `max-w-[550px]`, `bg-black/75`, `backdrop-blur-sm`, `rounded-xl`, `border border-white/10`, `p-6 md:p-8`, right-aligned at `md+`.
- Primary CTA: red fill, `hover:-translate-y-0.5`; secondary: 1 px white outline.
- Bottom 45 px fade to `rgba(170,170,170,0.5)`.

### 6.3 Cards
| Card | Spec |
| --- | --- |
| **Feature tile** | No border; 40 px icon, 23 px Coda title, justified 14 px copy, divider after row. This block carries `#services` and a 26/32 px heading with an 80 px underline |
| **Tool card** | White, `p-5`, 1 px border, hover red, 48 px icon badge, 11 px uppercase red category |
| **Product card** | `#F9F9F9`, `p-6`, 3 px red top border, 48 px badge, 6 bullet features |
| **Training card** | Header strip `rgba(184,16,5,.04)` + red "Training Area" pill + 2-digit index; body bullets; full-width red footer CTA |
| **Industry card** | White, `p-5`, 48 px badge, 16 px title, 12 px copy |
| **Project card** | White, 1 px border, hover red + shadow-lg; optional 16:10 media with bottom gradient and index; client row with building icon; role row with dashed top border |
| **Mission/Vision card** | Centred, 3 px top border that turns red on hover, `-translate-y-1.5` lift |
| **Office chip (About)** | `border-l-[3px]` red, `p-4`, country label + company |

**Icon badge rule:** 48 px (`w-12 h-12`) circle, `background: rgba(184,16,5,0.08)`, icon `#B81005`; on card hover the circle fills red and the icon turns white (`transition-all duration-300`).

### 6.4 Buttons
| Variant | Spec |
| --- | --- |
| Primary | `bg-[#B81005] hover:bg-[#940D05] text-white uppercase text-[11–13px] font-bold tracking-wider px-5/6 py-3`, `shadow-md`, optional `-translate-y-0.5` |
| Secondary On Dark | transparent, 1 px white border, `hover:bg-white/10` |
| Chip | `text-[11–12px] uppercase px-3/4 py-2 border`; active = red fill/white; idle = white/grey, hover red border+text |
| Ghost | transparent, 1 px red border, red text, fills red on hover |
| Footer/training CTA | Full-width red block, centred text, `py-2` |

Corner radius varies by context: `rounded-xl` (hero panel), `rounded` (hero buttons), `rounded-sm` (badges/section cards), square (project cards/chips/footer CTA). Keep the existing choice for the block you're editing; do not normalise without approval.

### 6.5 Form
- Inputs/textarea: `#EDEDED` bg, 1 px `#999` border, `border-radius: 5px`, 14 px `#333`, `px-[7px] py-[10px]`.
- Labels: 13 px `#333`, uppercase, `tracking-wide`, above field.
- Focus: border `#B81005`, ring `0 0 0 2px rgba(184,16,5,.15)`.
- Submit: red fill, 2 px `#E01F0A` border, `text-shadow: 1px 1px 1px #000`, `h-[35px]`.
- Success: `rgba(184,16,5,.06)` panel, 1 px red border, `✓` at 4xl, title + reassurance line.

### 6.6 Dark panel (contact info, footer)
- Background `#333333`; headings `#DDDDDD` Coda 20 px uppercase with `1px 1px 1px #000` text-shadow.
- Contact panel heading has a 2 px red bottom border; icon column `#B81005` 20 px.
- Footer: `border-top: 7px solid #B81005`; each column list separated by dotted `#111`/`#555` rules with a 6×6 red bullet GIF (`background-image: url(data:image/gif;base64,…)`), `padding: 3px 0 3px 17px`.
- Credit bar: `#B81005` background, `#CCCCCC` 13 px, centred.

### 6.7 Motion
| Effect | Where | Spec |
| --- | --- | --- |
| `fadeInUp` | every section via `AnimateOnScroll` | translateY(30px) → 0, 0.6 s ease-out, `forwards`; layered 0.1/0.2/0.3 s variants |
| Card hover lift | Mission/Vision `-translate-y-1.5`, buttons `-translate-y-0.5` | 300 ms |
| Border/colour | cards, chips, nav | 200–300 ms |
| Project image zoom | `group-hover:scale-[1.04]` | 500 ms |
| Image badge invert | icon circles | 300 ms |
| Header shadow | after 10 px scroll | 300 ms |

Known defect: two `fadeInUp` keyframes exist (0.6 s vs 0.5 s) and duplicate `.animate-fade-in-up` classes — T-03.

---

## 7. Imagery

| Asset | Spec |
| --- | --- |
| Hero `bg.jpg` | Full-bleed, ≥1920 px wide, dark enough for white text at 30% black overlay |
| Logo | `logo.png`, transparent, rendered ≤300×90 |
| OG image | `og-image.png`, 1200×630, brand red + logo |
| Project photos | 16:10, 1600×1000, WebP, ≤200 KB, named `<project-id>.webp` |
| Fallback | `no_image.png` via `AppImage` (currently unused) |
| Icons | 1.5 px stroke, `currentColor`, single-colour line art — never filled multi-colour |

---

## 8. Responsive behaviour notes

- Hero panel is centred on mobile, right-aligned from `md`; H1 steps 24 → 36 → 48 px.
- Service rows stack and lose the alternating direction below `md`.
- Section padding never drops below 48 px vertical.
- The 30 px red bar is kept on mobile (brand signature) — do not collapse it.
- At 320 px the two hero CTAs wrap; they must not overflow. Project filter chips wrap to 2–3 rows.
- Logo shrink-to-fit: `max-w-[300px]` leaves ~60 px for the hamburger at 320 px — test before enlarging.

---

## 9. Accessibility & contrast audit

Measured with the WCAG 2.1 relative-luminance formula (approximate, verify with DevTools):

| Pair | Ratio | Verdict |
| --- | --- | --- |
| `#B81005` on `#FFFFFF` | 6.7 : 1 | ✅ AA normal |
| `#FC542B` on `#111111` | 5.8 : 1 | ✅ AA normal |
| `#333333` on `#FFFFFF` | 12.6 : 1 | ✅ AAA |
| `#555555` on `#FFFFFF` | 7.5 : 1 | ✅ AAA |
| `#777777` on `#FFFFFF` | 4.5 : 1 | ⚠ borderline AA |
| `#777777` on `#F5F5F5` | 4.1 : 1 | ❌ fails normal text (section subtitles) |
| `#888888` on `#F5F5F5` | 3.3 : 1 | ❌ fails (paging status, 12 px) |
| `#B0B0B0` on `#333333` | 5.8 : 1 | ✅ AA |
| `#8F8F8E` on `#333333` | 3.9 : 1 | ❌ fails (footer links) |
| `#CCCCCC` on `#B81005` | 4.2 : 1 | ❌ fails normal, ✅ large (footer credit 13 px) |
| `#DDDDDD` on `#333333` | 9.3 : 1 | ✅ AAA |
| `#999999` on `#FFFFFF` | 2.9 : 1 | ❌ (chip counts only; decorative-ish) |

Fixes belong to T-14/T-15: darken subtitles to `#666`, paging text to `#666`, footer links to `#B0B0B0`, footer credit to white, chip counts to `#666`.

Other a11y notes: no skip link; logo is a raw `<img>`; form labels are not associated with inputs; success message is not announced; mobile menu has no `aria-expanded`; no `prefers-reduced-motion` handling.

---

## 10. Anti-patterns

Do **not**:

1. Introduce new hues, gradients (except the hero bottom fade), or glassmorphism beyond the hero panel.
2. Replace `92% / 1720px` with `container` or a narrower max-width.
3. Use Coda for body copy or below 16 px.
4. Add `rounded-full` to cards, or `rounded-2xl`.
5. Use shadows above `rgba(0,0,0,0.12)` — the system is flat and light.
6. Centre long paragraphs; body copy is left-aligned and justified in service/about blocks.
7. Add emoji or filled icon sets.
8. Animate layout properties (`width`, `height`, `top`) — transform/opacity only.
9. Give two adjacent sections the same background.
10. Change the hero H1 colour away from `#FC542B`; it is the only orange on the page.

---

## 11. Design debt

| Item | Fix |
| --- | --- |
| Tokens defined in config but unused; ~60 raw `#B81005` | T-13 |
| Container markup duplicated 10× | T-11 |
| Section heading duplicated 6× | T-12 |
| Radius inconsistency (xl / rounded / sm / square) | Decide a per-component table, then normalise |
| Two `fadeInUp` definitions | T-03 |
| Coda literal vs `--font-coda` | T-04 |
| 404 page references a non-existent theme | T-02 |
| `text-justify` applied to short card copy | Use left alignment for < 3 lines |
