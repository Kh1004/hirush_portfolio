# PRD — Hirush Automation Marketing Site

| Field | Value |
| --- | --- |
| Product | Hirush Automation corporate website |
| Repo | `hirush_portfolio` (`package.json` name: `hirushautomation`) |
| Version | 1.0 (baseline of current code) |
| Date | 2026-11-14 |
| Status | Live-in-progress — content complete, contact form not wired |
| Sources | `data.txt` (client copy), `src/data/site.ts` (typed content), 15 section components, `layout.tsx` |
| Related | `architecture.md`, `design.md`, `rules.md`, `task.md`, `memory.md` |

> Items marked **[ASSUMED]** are inferred from the code/content and must be confirmed with the client. See `memory.md` → Open questions.

---

## 1. Product summary

A single-page, statically rendered marketing site for **Hirush Automation Pte Ltd** (Singapore) and **Hirush Automation (Pvt) Ltd** (Sri Lanka) — an electrical, control and automation engineering firm.

The site exists to convert industrial buyers into enquiries by proving capability: five services, seven tools/platforms, six own-brand **HirushCore** software products, 22 named project references, four training programs and seven target industries.

It is **not** a store, portal, CMS or dashboard. There is no authentication, no pricing and no user accounts.

## 2. Problem & opportunity

| Problem | Consequence today |
| --- | --- |
| Capability is spread across a long Word-style document (`data.txt`) | Content is only updateable by editing code |
| Buyers judge integrators on *named* references and brands supported | Strength (PUB, NEA, Stats ChipPAC, Air Liquide…) is buried in Section 9 of a one-pager |
| Enquiries depend on a single email address | No tracked enquiry path; form is decorative (T-01) |
| Two-country presence is a differentiator | Offices are reduced to two small cards + footer text |

**Opportunity:** the page already contains unusually strong proof (public-sector clients, multi-brand PLC coverage, an own software suite). The work is presentation, trust and a real enquiry channel — not new content.

## 3. Goals

| ID | Goal | Measure |
| --- | --- | --- |
| G1 | A plant/procurement engineer can confirm "these people can do my job" within 60 seconds | Named-client and brand coverage visible above the 3rd scroll |
| G2 | Every enquiry reaches a human | 100% of submitted forms land in an inbox/tracker (T-01) |
| G3 | Content edits never require touching component code | 100% of copy sourced from `src/data/site.ts` |
| G4 | Site is crawlable and shareable | Valid `sitemap.xml`, `robots.txt`, OG image, structured data |
| G5 | Works on a phone at a plant site | No horizontal scroll at 320 px; tap targets ≥ 44 px |

## 4. Non-goals (this version)

- No CMS, admin panel or database.
- No multi-language (English only).
- No e-commerce, quoting engine, or price display.
- No customer login / HirushCore product demo environment.
- No blog (unless T-18 is scheduled).
- No offline/PWA behaviour.

## 5. Users & jobs to be done

| Persona | Context | Job | What they need on the page |
| --- | --- | --- | --- |
| **Procurement / project engineer** (primary) | Comparing 3–5 integrators for a water/gas/ACMV package | "Can they program my Siemens/AB/Mitsubishi PLC and build the panel?" | Services detail + brand list + comparable projects + contact |
| **Plant / maintenance manager** (primary) | Existing system needs upgrade, support or troubleshooting | "Who has done this before, locally?" | Project references by client type, Singapore + Sri Lanka offices |
| **Engineering graduate / technician** (secondary) | Looking for practical training | "Is there a PLC/SCADA course?" | Training areas + enquiry CTA |
| **Recruiter / partner** (tertiary) | Vetting the company | "Is this a real company?" | Company story, legal names, addresses, phone numbers |

## 6. Information architecture

Single route `/` composed of 12 blocks, in order (`src/app/page.tsx`):

| # | Block | Anchor | Component | Content source |
| --- | --- | --- | --- | --- |
| 1 | Header / nav (sticky) | — | `Navbar` | `nav`, `site` |
| 2 | Hero (background image + claim panel) | — | `HeroSlider` | `hero` |
| 3 | About us + offices | `#about` | `AboutSection` | `about`, `offices` |
| 4 | Mission & Vision | — | `MissionVision` | `mission`, `vision` |
| 5 | Services (5 tiles; long-form heading) | `#services` | `FeaturedServices` | `services[]` |
| 6 | Tools & platforms (7 cards) | `#tools` | `ToolsSection` | `tools[]` |
| 7 | Products — HirushCore (6 cards) | `#products` | `ProductsSection` | `products[]` |
| 8 | Project reference (22 cards, filter + paging) | `#projects` | `ProjectsSection` | `projects[]`, `projectFilters` |
| 9 | Training programs (4 cards) | `#trainings` | `TrainingsSection` | `trainings[]` |
| 10 | Industries we serve (7 cards + closing para) | `#industries` | `IndustriesServed` | `industries[]`, `industriesClosing` |
| 11 | Contact (offices + form) | `#contact` | `ContactSection` | `offices`, `site` |
| 12 | Footer (5 link columns + copyright) | — | `Footer` | `footer`, `site` |

The Services block is titled **"Comprehensive electrical, control, and automation solutions for industrial excellence"** and carries the `#services` anchor. The previous detailed rows section (full descriptions, feature bullets, CTA) was removed on 2026-11-14; its content remains in `services[].description` / `services[].features` for future use (e.g. T-17).

Plus non-visual routes: `/sitemap.xml`, `/robots.txt`, `/api/export` (leftover, see T-16), and `not-found.tsx` for 404.

## 7. Functional requirements

### FR-1 Navigation
- Sticky header with a 30 px brand-red top bar, logo left, 8 links centre, hamburger below `lg`.
- **MUST** indicate the section currently in view (`aria-current="true"`), not only the last-clicked link → T-06.
- **MUST** expose every anchored section; `#industries` currently has no nav entry → T-06.
- Mobile menu closes on link tap; `aria-expanded`/`aria-controls` required → T-14.
- Anchors must land below the sticky header (`scroll-mt-32`, already applied).

### FR-2 Hero
- Full-bleed `bg.jpg` (`priority`), dark overlay, right-aligned glass panel with H1, sub-label, supporting paragraph and two CTAs.
- Primary CTA → `#services`; secondary → `#contact`. Both must remain visible at 320 px.

### FR-3 Services
- One representation: five tiles (icon, title, short description), 5-up at `xl`, wrapping down to 1 column on mobile.
- The block is the `#services` anchor; its heading is the long-form phrase above (`text-[26px] md:text-[32px]`, 80 px underline, no subtitle).
- Tile titles link to `#services` — a leftover from when a detail section followed. It is now a self-link; consider removing the anchor (T-12/T-16).
- Full descriptions and feature lists stay in `services[]` (not rendered). There is no dedicated services CTA; conversion relies on the hero buttons, training CTAs and the contact form.

### FR-4 Tools / Products / Trainings / Industries
- Pure data-driven grids. Adding a record to `site.ts` **MUST** render a new card with no component edit.
- Product cards are capped at six features in the copy; layouts must tolerate 5–7.
- Every training card carries an "Enquire About Training" action → `#contact`.

### FR-5 Project reference
- 22 records; filter chips `All / Design & Build / Project Management / PLC, SCADA & HMI` with live counts; `PAGE_SIZE = 6`.
- "Show N more" increments by 6 and offers "Show fewer" when the last page is reached.
- Changing filter resets paging to 6.
- **MUST** render a deliberate placeholder when a project has no photo (currently renders nothing — README claims a "branded fallback panel" that does not exist) → T-05.
- Counts today: 13 design, 4 management, 5 PLC.

### FR-6 Contact
- Left panel: both offices (name, address, phones), email, domain.
- Right panel: Name, Email, Subject, Message (all required), submit.
- **MUST** deliver the message somewhere (email/CRM/webhook) and surface failure states → T-01. Success state must be announced to assistive tech (`aria-live`) → T-14.
- **MUST NOT** report success when nothing was sent (current behaviour).

### FR-7 Footer
- Five columns: Services, Training, Tools, Products, Offices.
- **SHOULD** make entries link to their sections; today they are plain `<li>` text → T-15.
- Copyright must state the legal entity and year.

### FR-8 SEO
- Server-rendered metadata: title, description, canonical, OpenGraph, Twitter card, icons (`layout.tsx`).
- JSON-LD: `Organization`, `WebPage`, `SoftwareApplication` present. Logo should be a first-party URL → T-08.
- `robots.txt` must not block `/_next/` (crawl assets) → T-07.
- `sitemap.xml` lists `/` only — correct while single-page.

## 8. Content requirements

- **Source of truth:** `data.txt` → transcribed into `src/data/site.ts`. No copy may be hardcoded in components (see `rules.md` R-1).
- Tone: factual, engineering-led, no marketing superlatives beyond the client's own wording.
- Brand naming must stay exact: `Hirush Automation Pte Ltd`, `Hirush Automation (Pvt) Ltd`, `HirushCore SCADA / Alert / Sentinel / Data Collector / AppStudio / App`.
- Client names are legal entities and must not be abbreviated (`Petrochemical Corporation of Singapore Pte Ltd`, `Public Utilities Board (PUB)`).
- No claims about certifications, headcount, revenue or years in business — none appear in source copy.

## 9. Non-functional requirements

| Area | Requirement |
| --- | --- |
| Performance | LCP < 2.5 s on 4G; hero image `priority`; below-fold images lazy; no layout shift (aspect boxes on media) |
| Accessibility | WCAG 2.1 AA intent: labelled inputs, focus-visible rings, 4.5:1 body contrast, keyboard-operable menu/carousel-of-cards |
| Responsiveness | 320 px → 1920 px; content width `92%` capped at 1720 px |
| Compatibility | Evergreen Chrome/Safari/Firefox/Edge; iOS Safari ≥ 15 |
| Privacy | No third-party analytics beyond what is explicitly approved (Rocket scripts currently load unconditionally — T-16) |
| Maintainability | Copy changes confined to `site.ts`; one shared container and one shared heading pattern (T-11/T-12) |
| Reliability | No build-time reliance on `ignoreBuildErrors`; `npm run type-check` must pass (T-16, `rules.md` R-8) |

## 10. Success metrics

**[ASSUMED]** — instrument before trusting.

| Metric | Baseline | Target |
| --- | --- | --- |
| Enquiry form submissions / month | 0 (not wired) | ≥ 10 qualified |
| Contact CTA click-through | unknown | ≥ 3% of sessions |
| Projects section interaction (filter/load-more) | unknown | ≥ 20% of sessions |
| Bounce on mobile | unknown | < 55% |
| Lighthouse mobile perf / a11y / SEO | unknown | ≥ 85 / 95 / 100 |

## 11. Milestones

| Milestone | Scope | Exit criteria |
| --- | --- | --- |
| M1 — Trustworthy baseline (P0) | T-01 form delivery, T-02 404, T-03 CSS/font | Test enquiry arrives in inbox; 404 branded; no duplicate Tailwind output |
| M2 — Complete proof (P1) | T-04…T-10 | Correct heading font, project photos or honest placeholders, nav scroll-spy, clean crawl, local logo, unused deps gone |
| M3 — Systemisation (P2) | T-11…T-16 | Container/heading components, tokenised colour, a11y sweep, footer links, housekeeping |
| M4 — Growth (P3) | T-17…T-20 | Only if approved — each adds routes or integrations |

## 12. Out of scope / future

Project detail pages or modals (`T-17`), testimonial/logo wall (`T-18`), per-project photo gallery (`T-19`), consent + analytics (`T-20`), careers, blog, downloadable brochure PDF, multi-language, HirushCore product microsites.

## 13. Glossary

| Term | Meaning |
| --- | --- |
| PLC | Programmable Logic Controller — plant-level control hardware (Siemens, Allen-Bradley, Mitsubishi, Schneider) |
| HMI | Human Machine Interface — operator screen |
| SCADA | Supervisory Control and Data Acquisition — central monitoring/control |
| ACMV | Air Conditioning, Mechanical Ventilation |
| RO / DI | Reverse Osmosis / Deionised water treatment |
| BMS | Building Management System |
| CWRP | Changi Water Reclamation Plant |
| PUB / NEA | Public Utilities Board / National Environment Agency (Singapore) |
| HirushCore | The company's own industrial software suite (6 products) |
