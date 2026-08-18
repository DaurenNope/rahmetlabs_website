# Rahmet Labs — Website Redesign: Master Brief

> Read this first. Then `DESIGN-FLOW.md` (the process), then `COPY.md` (the words).
> You are building a complete new marketing website from scratch. Everything you
> need is in this directory. Do not reference the old codebase's components.

---

## 1. What this is

**Rahmet Labs** is a full-stack technology studio in Almaty, Kazakhstan, working
with clients across Central Asia and the Gulf. It builds:

- **Business automation** (n8n/Make pipelines, browser automation, system sync)
- **AI systems** (support/sales agents, qualification, routing, human handoff)
- **Web & mobile products** (intake, portals, dashboards, booking flows)
- **Backend & data platforms** (one source of record, APIs, trusted dashboards)

The website's job is to **convert visitors into qualified sales conversations**
(WhatsApp / Telegram / email / project inquiry). It is a selling instrument, not
a portfolio brochure. It must also be machine-legible: SEO + AEO (answer
engines) + GEO (generative engines) are first-class requirements.

**Audience:** founders and SMB owners, enterprise operations leaders, technical
product teams. They judge technical credibility in seconds. Many are
Russian-speaking; the site ships in **English, Russian, and Kazakh** with full
parity.

**Domain:** rahmetlabs.com · **Contact channels:** WhatsApp, Telegram,
rahmetlabs@gmail.com · **Languages:** EN / RU / KZ.

## 2. The bar (read twice)

The owner wants a **professional, rich, wow-effect website** — "outstandingly
designed, rich and professional, full-blown professional and interactive."
Think $100k studio build. Motion libraries (GSAP, Lenis, Motion, anime.js) are
pre-approved. Three.js is allowed **only** if a specific moment justifies it.

Equally important — what has already been **tried and rejected** (do not
resubmit these):

| Attempt | Verdict |
|---|---|
| Dark "AI agency" neon theme (original site) | Rejected: dated, underdesigned |
| Austere "studio clean" minimalism | Rejected: "even more basic", stripped of UI/UX elements |
| Maximalist chaotic redesign | Rejected: "super weird", sloppy |
| Light "field notebook" theme (current production, rahmetlabs.com) | Tolerated, rated ~7/10: "no awesome wow-feeling details" |

**Conclusion:** the target is *rich but disciplined*. Premium craft details,
one signature interactive moment, motivated motion, real imagery — on a
coherent, professional, conversion-focused structure. Not austere. Not chaos.

## 3. Hard requirements

1. **Pages:** Home, Services, Work, About, Contact. Home carries the narrative.
2. **i18n:** EN / RU / KZ with full parity, dictionary-driven (see
   `content/content.js` for the existing pattern and translations). Native-quality
   Russian and Kazakh — no machine-translated feel.
3. **SEO/AEO/GEO:** unique titles/descriptions per page per locale, Open Graph,
   JSON-LD (Organization, WebPage, FAQPage), semantic crawlable HTML, sitemap,
   canonical URLs, fast LCP. Factual statements an LLM can cite (see COPY.md).
4. **Stack:** Next.js (App Router) + Tailwind CSS. Smooth scroll (Lenis).
   Scroll-linked animation with GSAP ScrollTrigger or Motion. All motion
   transform/opacity-only in hot paths; `prefers-reduced-motion` gets the full
   content statically. Mobile is excellent, not an afterthought.
5. **Honesty (non-negotiable):** no invented metrics, testimonials, client
   logos, or case studies. No "500+ projects" style claims. Real work entries
   and screenshots are in `content/content.js` and `assets/work/`.
6. **Typography/copy rules:** zero em-dashes (`—`) or en-dash separators
   anywhere visible. No placeholder furniture (no "FIG. 01", "SHEET 02/04",
   section-number eyebrows, version labels, scroll-cue labels). No filler verbs
   ("elevate", "seamless", "next-gen").
7. **Real visuals:** use the real work screenshots; generate additional
   brand-appropriate imagery with an image-generation tool if available.
   Never fake product UI with styled divs.

## 4. Brand facts that must survive

- Name: **Rahmet Labs** (fixed). Based in Almaty; works EN/RU/KZ; replies on
  WhatsApp/Telegram/email.
- Positioning: **one accountable senior team** that designs, ships, *and runs*
  the systems — replacing spreadsheets, copy-paste, and follow-up threads.
- Proofs that are true and usable: three shipped systems are live and clickable
  (ageu.edu.kz, q-university.edu.kz, qgroup.asia, beyond-lines, unhireable —
  see `content/content.js` work section); process is 4-12 weeks first call to
  running system; first-week diagnostic produces a scored system plan the
  client keeps; first build stage is fixed-price.
- The strongest narrative asset: **manual chaos resolved into a running
  system**. The current site expresses it as a scribble resolving into a clean
  line. You may evolve, replace, or elevate this metaphor — but the site must
  *demonstrate* systems thinking, not claim it.

## 5. What's in this directory

```
BRIEF.md               ← this file
KICKOFF-PROMPT.md      ← paste this to the build agent to start
DESIGN-FLOW.md         ← the mandatory skills pipeline + quality gates
COPY.md                ← copy deck, elevation notes, honesty constraints
content/content.js     ← full EN/RU/KZ structured copy (source of truth)
content/PRODUCT.md     ← product/audience/principles detail
design/DESIGN.md       ← the current (7/10) design system: reference, not law
assets/work/           ← real live-site screenshots (beyond-lines, unhireable)
references/a-signal.html ← one craft-bar reference mock (dark cinematic direction)
```

## 6. Definition of done

- `next build` passes; all three locales render all pages.
- The DESIGN-FLOW.md gates all pass: Wow Gate, taste pre-flight checklist,
  adversarial review round, performance/a11y checks.
- Lighthouse Performance ≥ 90 on home.
- The owner opens it and says "wow" in the first viewport — and a B2B buyer
  still trusts it by the second.
