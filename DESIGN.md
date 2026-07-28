---
name: Rahmet Labs
description: A live operations terminal that proves Rahmet Labs turns fragmented manual work into one monitored, automated system.
colors:
  terminal-void: "#0A0B08"
  terminal-panel: "#12140D"
  terminal-panel-raised: "#181A11"
  hairline: "#2B2D22"
  ink: "#F3EFE4"
  ink-muted: "#93917F"
  ink-faint: "#5C5A4B"
  amber: "#E8A33D"
  amber-dim: "#8C6526"
  manual-red: "#C1503B"
  manual-red-dim: "#5A2F26"
typography:
  display:
    fontFamily: "IBM Plex Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  body:
    fontFamily: "IBM Plex Sans, Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.01em"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  row: "0.875rem"
  panel: "1.5rem"
  section: "clamp(4rem, 10vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.terminal-void}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.5rem"
---

# Design System: Rahmet Labs

## Overview

**Creative North Star: "The Market Terminal"**

Rahmet Labs proves it can turn fragmented, manual operations into one monitored, automated system — the way a market terminal turns raw chaotic data into a single trusted screen of positions and executed trades. The site presents itself as a live operations terminal, not a marketing brochure: two synchronized tracks (MANUAL vs AUTOMATED) run through the homepage, the same business functions ticking down in one column and climbing in the other, narrowing into one unified system by the close. Services read as terminal functions, delivered work reads as closed positions, process reads as an execution log.

This explicitly replaces the previous "AI-agency" look (mixed display faces, ungrounded neon/purple palette, glow and glass everywhere, gimmicky mode-toggle button) and refuses the industry-default glass-card/gradient-blob template and the generic "network map connecting nodes" cliché. Nothing here glows, blurs, or floats. Depth comes from hairline structure and tonal panels, never shadows.

**Key Characteristics:**
- Dense, hairline-ruled data grids and ticker rows, not spaced-out icon cards
- A persistent function-key command bar doubling as primary navigation
- Two named semantic states — MANUAL (red, stale, declining) and AUTOMATED (amber, live, climbing) — as the site's core visual grammar
- Monospace numerals for anything that is actually data, timestamps, or measurement; a humanist sans everywhere else
- Flat surfaces at all times: no shadow, no glass, no gradient, no glow

## Colors

A near-black terminal ground carries one warm amber signal color and one muted "manual/stale" red used only in explicit before/after comparisons.

### Primary
- **Amber Signal** (`#E8A33D`): the brand accent and the "AUTOMATED / live" state. Used for the live ticker column, primary buttons, active nav state, and the live-status dot. Never used as a background fill or gradient.

### Secondary
- **Manual Red** (`#C1503B`): exclusively the "MANUAL / stale" state paired opposite amber in before/after comparisons. Never used as a general alert or error color outside that pairing.

### Neutral
- **Terminal Void** (`#0A0B08`): page background. A warm near-black, not a pure or blue-black — the physical scene is a lit screen glanced at during a work day, so it must read crisp under any ambient light, not moody.
- **Terminal Panel** (`#12140D`) / **Terminal Panel Raised** (`#181A11`): panel and row backgrounds one and two steps above void, used to separate terminal "windows" without a shadow.
- **Ink** (`#F3EFE4`): primary text — warm paper/phosphor white, never pure `#fff`.
- **Ink Muted** (`#93917F`): secondary text, labels, timestamps.
- **Ink Faint** (`#5C5A4B`): disabled/placeholder text, tertiary metadata.
- **Hairline** (`#2B2D22`): all borders and dividers. 1px only.

### Named Rules
**The Two-Color Rule.** Amber and manual-red are the only saturated colors on the site, and manual-red only ever appears directly opposite amber in a stated before/after pair. No third accent color is introduced anywhere, including charts, tags, or icons.

## Typography

**Display Font:** IBM Plex Sans (with Inter, system-ui fallback)
**Body Font:** IBM Plex Sans (with Inter, system-ui fallback)
**Data/Label Font:** IBM Plex Mono (with ui-monospace fallback)

**Character:** A working engineering typeface pairing, not a display face doing marketing theater — headlines are set in the same humanist sans as body copy, just heavier and larger, while every number, timestamp, nav label, and function-key is set in IBM Plex Mono with tabular figures. Full Cyrillic and Kazakh-extended glyph coverage in both families keeps EN/RU/KZ visually identical in register.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 5.5vw, 4.75rem)`, 1.02): section-opening system statements; short lines, never a paragraph.
- **Headline** (600, `clamp(1.5rem, 3vw, 2.25rem)`, 1.1): sub-section headings inside terminal panels.
- **Title** (600, 1.125rem, 1.3): panel/row titles, service and case names.
- **Body** (400, 1.0625rem, 1.6, 65–75ch measure): descriptive copy inside panels.
- **Label** (600, 0.6875rem, tracking 0.14em, uppercase, IBM Plex Mono): panel headers, nav items, function-key captions, table column headers.
- **Data** (500, 0.875rem, tabular-nums, IBM Plex Mono): ticker values, timestamps, prices, stats — always decimal/character-aligned in a grid.

### Named Rules
**The One Mono Reason Rule.** Monospace is used only for data, timestamps, code, or measurement — never as a "technical-looking" costume on prose or headlines.

## Layout

The page is built as a stack of full-bleed terminal "screens" (sections), each a `terminal-panel` with a thin top rule and a mono label acting as its window title, rather than centered marketing blocks floating in whitespace. Content max-width is 1400px for wide data grids (ticker comparisons, portfolio tables) and 720px for prose-heavy panels (about, FAQ). Side padding 1.5rem mobile / 2.5rem–4rem desktop.

A persistent function-key bar spans the viewport bottom on desktop (collapses into a bottom sheet triggered from a compact nav on mobile) and never scrolls away — it is both navigation and the permanent reminder that a live conversation is one press away.

Vertical rhythm is generous between narrative beats (`clamp(4rem, 10vw, 7rem)` between sections) but dense within a panel — ticker rows, table rows, and log lines sit close (`0.875rem` row gap) with hairline dividers, because density is the point of the metaphor: precision instruments read tight.

## Elevation & Depth

Flat throughout. No box-shadow anywhere in the system. Depth is conveyed by exactly three background tones (void → panel → panel-raised) and 1px hairlines — a panel "lifts" only by moving one tone lighter, never by a shadow or blur. Hover/focus states shift background tone or add an amber hairline, never a glow.

### Named Rules
**The Flat Terminal Rule.** If a state change needs to communicate elevation, change the panel's background tone one step, not its shadow. Nothing on this site casts a shadow.

## Shapes

Near-zero radius everywhere (`2px` — enough to prevent visual harshness on large panels, not enough to read as "rounded"). Borders are always 1px hairlines in `hairline` or `amber` (active/focus state). No pill shapes except the single live-status dot, which is a genuine functional indicator, not decoration.

## Components

### Buttons
- **Shape:** 2px radius, 1px border or solid fill, never a pill.
- **Primary ("Executed"):** solid amber fill, terminal-void text, IBM Plex Mono label styling (uppercase, tracked), rendered like a function-key: `[ START A PROJECT ]`.
- **Hover/Focus:** fill inverts to ink; a 1px amber outline appears on keyboard focus. No transform, no shadow.
- **Ghost/Secondary:** transparent fill, 1px hairline border, ink text; hover adds an amber hairline.

### Terminal Panel (signature component)
Every section is a `terminal-panel`: a `terminal-panel` background, a thin top hairline, and a mono-label header bar (e.g. `SERVICES.SYS`, `WORK.LOG`) in the top-left corner like a window title, with a live-status dot and optional timestamp top-right. Content sits inside with `panel` spacing (1.5rem+).

### Ticker Row (signature component)
A two-column comparison row: label on the left, MANUAL value styled in `manual-red` with a "stale" tabular timestamp on one side, AUTOMATED value in `amber` with a "live" timestamp on the other, separated by a 1px hairline. Used in the hero comparison and echoed in the proof section.

### Data Table
Hairline-ruled rows (no zebra striping, no card wrapping per row), mono column headers in `label` style, body cells in `data` style with tabular figures, used for services-as-functions and work-as-closed-positions.

### Navigation / Function-Key Bar
Fixed bottom bar (desktop) with function-key–styled entries (`F1 SERVICES`, `F2 WORK`, `F3 ABOUT`, `F4 CONTACT`) plus a highlighted amber `START` key. Active route gets an amber top hairline over its key. Mobile collapses to a slim top bar with a status dot, wordmark, and a menu control that opens the same bar as a bottom sheet.

### Inputs / Fields
1px hairline border, terminal-panel background, mono placeholder text in `ink-faint`. Focus state: border turns amber, no glow/shadow.

## Do's and Don'ts

### Do:
- **Do** use amber exclusively for the "automated/live" state, primary actions, and active navigation.
- **Do** keep every number decimal/character-aligned in IBM Plex Mono with tabular figures.
- **Do** convey depth with tone steps and hairlines only.
- **Do** keep the function-key bar visible and consistent across every page.
- **Do** vary section density deliberately — a dense data panel earns a quiet, text-only panel next to it.

### Don't:
- **Don't** use box-shadow, blur, glassmorphism, or glow anywhere.
- **Don't** use gradient text or gradient fills.
- **Don't** introduce a third saturated color beyond amber and manual-red.
- **Don't** build the page as a grid of same-size icon+heading+text cards.
- **Don't** use rounded pill buttons or rounded-2xl/3xl card shapes.
- **Don't** fabricate a stat, testimonial, or case-study number that hasn't been confirmed truthful — label anything illustrative as such.
