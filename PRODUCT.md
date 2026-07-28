# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Rahmet Labs serves founders and SMB owners, enterprise operations leaders, and technical product teams who need to replace fragmented manual work with dependable digital systems (automation, AI, web/mobile products, Web3 infrastructure). They arrive evaluating a technical delivery partner, not self-serving through a software product. They compare studios/agencies, judge technical credibility fast, and decide whether to start a sales conversation.

## Product Purpose

Rahmet Labs is a full-stack technology studio building automation, AI systems, web/mobile products, backend/API platforms, and Web3 infrastructure. The website's job is to convert visitor interest directly into qualified sales conversations and booked project starts — it is explicitly a selling instrument, not a portfolio brochure. The site must also perform as a lead-generation surface for both traditional search (SEO) and AI answer/generative engines (AEO/GEO), since future outbound lead-gen agents will point prospects at it.

## Positioning

Rahmet Labs replaces fragmented manual operations and disconnected point solutions with one accountable partner who ships automation, AI, and product engineering as connected systems — not a menu of disconnected freelance services.

## Operating Context

Visitors land from search, referrals, or (in future) outbound agent-sourced conversations, size up credibility in seconds, and either self-serve into a sales conversation or bounce. Current relationship channels: WhatsApp, Telegram, and email (rahmetlabs@gmail.com — a professional domain email and scheduling tool remain open setup items). Domain: rahmetlabs.com.

## Capabilities and Constraints

- Preserve multilingual content: English, Russian, and Kazakh, driven by `src/lib/i18n.js` (or its successor).
- Full rebuild of the visual system and codebase is authorized — the current implementation (dark "AI-agency" theme, mixed typefaces, ungrounded neon palette, no real scroll-driven storytelling) is discarded as anti-reference, not preserved.
- The site must support a genuinely scroll-scrubbed experience (scroll-position-linked animation/narrative), not just fade-in-on-scroll reveals, with accessible reduced-motion fallbacks.
- SEO, AEO (answer-engine optimization), and GEO (generative-engine optimization) are first-class requirements: structured data, crawlable semantic HTML, clear factual statements an LLM can cite, fast performance, and sitemap/metadata quality all matter as much as visual design.
- Primary conversion goal: get the visitor into a sales conversation — via a direct "start a project" action and/or WhatsApp/Telegram/email — with the path feeling considered and low-friction, not a generic contact form nobody reads.

## Brand Commitments

Name is fixed: Rahmet Labs. No other visual, tone, or identity commitments are binding — the current dark/emerald "Akatsuki cloud" look is explicitly rejected as underdesigned and outdated, and a new visual world will be established in the design phase.

## Evidence on Hand

- The existing `src/lib/i18n.js` contains real service categories and general business logic (automation, AI, web/mobile, backend/APIs, Web3, enterprise) confirmed as truthful.
- Specific numbers in the current site (500+ projects, 95% satisfaction, 2x efficiency, 48hrs saved/week) are confirmed by the client as inflated/unverifiable and must not be reused as precise claims. Treat any performance stats going forward as illustrative at most, not verified metrics, unless the client supplies real ones.
- The ~15 portfolio case studies, About-page team bios, and testimonials in `src/lib/i18n.js` mix truthful and irrelevant/fabricated material; the rebuild must curate this down to what is credible and relevant rather than reusing it wholesale. Flag specific items back to the client for a quick keep/cut pass rather than silently inventing replacements.
- No verified customer logos, third-party testimonials, or case-study metrics have been independently supplied. Do not fabricate these.

## Product Principles

1. The site's job is to close and qualify sales conversations, not just look impressive.
2. Demonstrate systems thinking through the product itself (clarity, structure, interaction) rather than claiming it in copy.
3. Never state a number, testimonial, or case study that hasn't been confirmed truthful.
4. Optimize simultaneously for human persuasion and machine legibility (SEO/AEO/GEO) — these are not in tension when the content is genuinely clear and well-structured.
5. Make the next step (message us / start a project) feel obvious and low-friction from any scroll position.

## Accessibility & Inclusion

Provide visible keyboard focus, semantic navigation and headings, sufficient color contrast, responsive layouts across breakpoints, and a reduced-motion fallback that preserves the full narrative/content without relying on scroll-scrub animation.
