# Design Flow — the mandatory pipeline

Five skills, five jobs. Read each skill file fully before using it. When rules
conflict, the hierarchy is: **taste-frontend pre-flight > impeccable tokens >
cinematic-scroll motion rules > high-end-visual-design component patterns.**

| Skill | Path | Job |
|---|---|---|
| design-taste-frontend | `/Users/mac/Documents/Development/rahmetlabs/.agents/skills/design-taste-frontend/SKILL.md` | The referee: brief inference, dials, 60-point pre-flight check |
| high-end-visual-design | `/Users/mac/.claude/skills/high-end-visual-design/SKILL.md` | Component craft: double-bezel cards, button-in-button CTAs, spatial rhythm, spring-physics hovers |
| cinematic-scroll | `/Users/mac/.agents/skills/cinematic-scroll/SKILL.md` | Motion grammar, type reveals, depth layers, the Wow Gate, performance budget |
| impeccable | `/Users/mac/.claude/skills/impeccable/SKILL.md` | Design-system tokens + drift enforcement |
| agency-agents | GitHub `msitarzewski/agency-agents` (fetch persona files) | Adversarial review personas |

---

## Phase 0 — Design read (declare before building)

Follow design-taste-frontend Section 0. Declare in one line, e.g.:
*"Reading this as: B2B studio landing for founders/ops leaders in KZ + Gulf,
with a premium interactive language, leaning toward Next.js + Tailwind + GSAP
+ custom typography."*

Set the three dials explicitly (Section 1). Recommended starting point for
this brief: `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 7`, `VISUAL_DENSITY: 3`.
Adjust with a reason, not by default.

## Phase 1 — Art direction + the Wow Gate (do not skip)

Follow cinematic-scroll Phase 1 + 1.5 (`references/asset-direction.md`,
`references/wow-gate.md` inside the cinematic-scroll skill directory):

1. Define the visual world: premise, palette, type pairing, material language,
   motif system. Write it as `design/DESIGN.md` (new system — the old one is
   reference only).
2. Define the **one signature moment** — the thing a visitor screenshots and
   sends to a friend. It must pass the Wow Gate (hard pass/fail + rubric
   ≥ 8/12). A failed concept gets regenerated before any code.
3. Palette discipline per taste-frontend 4.2: one accent, locked across the
   whole page; no AI-purple; not the banned beige+brass family.
4. Type discipline per taste-frontend 4.1: no Inter/Roboto/Space Grotesk/
   Geist defaults; sans display by default; serif only if the world is
   genuinely editorial and you can say why this serif fits this brand.
   All fonts must carry Cyrillic + Cyrillic-extended glyphs (RU/KZ) — verify
   before committing to a family.
5. Restraint rule from the owner: **max one pinned/scroll-hijacked sequence
   on the home page.** Everything else scrolls naturally with motivated
   reveals. (A previous version pinned 250vh twice and was hated for it.)

## Phase 2 — Tokens and locks

Write the token sheet into `design/DESIGN.md` and mirror it in Tailwind config
/ CSS variables: colors, type scale, spacing rhythm, radii, easings, motion
durations. One corner-radius system. One accent. Theme lock: one theme for the
whole page (light OR dark OR a single deliberate theme-switch moment).

## Phase 3 — Build

- Next.js App Router, `[locale]` segment with dictionary files (pattern in
  `content/content.js`), Tailwind, Lenis smooth scroll.
- Motion per cinematic-scroll Phase 4 rules: GSAP ScrollTrigger for
  pin/scrub, Motion or CSS for reveals, **no `window.addEventListener('scroll')`**,
  transform/opacity only, `useEffect` cleanups, reduced-motion fallbacks
  everywhere, mobile keeps scroll-coupled motion but no pinning.
- Component craft per high-end-visual-design Section 4: double-bezel on major
  cards/media, button-in-button primary CTA, macro-whitespace (`py-24` to
  `py-40`), custom cubic-beziers.
- Real images: the two work screenshots in `assets/work/`; generate any
  additional imagery with an available image-gen tool. No div-fake screenshots.
- Home page narrative (from COPY.md): hero (signature moment) → what we build
  (4 patterns) → manual-vs-system proof → work ledger → process → principles →
  final CTA → newsletter. Each section a different layout family
  (taste-frontend Section-Layout-Repetition ban).

## Phase 4 — Adversarial review (mandatory)

1. Run the taste-frontend Section 14 pre-flight checklist mechanically, every
   box. Zero em-dashes. Eyebrow count ≤ ceil(sections/3). CTA labels unique
   per intent. Button contrast AA.
2. Fetch 2-3 design personas from GitHub `msitarzewski/agency-agents`
   (e.g. art direction / creative direction / UX). Have each attack the built
   pages (screenshots + DOM) with specific, located criticisms. Fix everything
   real; document dismissals with reasons.
3. Screenshot every section at desktop + 375px mobile and review the frames
   like an art director: focal point at every depth, hierarchy order, no
   stuck-halfway reveals, no collisions.

## Phase 5 — Polish and prove

- `next build` clean; Lighthouse Performance ≥ 90, a11y ≥ 95.
- Keyboard navigation, focus states, form contrast, alt text.
- i18n parity check: same sections, same motion, Cyrillic line-integrity
  (headlines don't wrap awkwardly at desktop).
- Reduced-motion run-through: full content visible, nothing broken.
- Write `POLISH-REPORT.md` with the checklist results.

---

### What "wow" means here (operational definition)

1. A first viewport that moves with intent (the signature moment).
2. Type that enters like it was choreographed, not faded.
3. Cards and buttons that feel machined (nested bezels, kinetic tension).
4. One continuous motif (line, thread, grid, or mark) that recurs and evolves.
5. Nothing on the page that a template could have produced.
