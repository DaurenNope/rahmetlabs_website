# Hero Motion Storyboard

## Emotional Arc

| Phase | Scroll % | Emotion | Visual |
|-------|----------|---------|--------|
| Chaos | 0–25% | Friction, disorder | Scattered data points, manual-red flicker |
| Spark | 25–50% | Possibility, intrigue | Amber pulse appears, data begins organizing |
| System | 50–75% | Confidence, clarity | Full ring formation, data flows between nodes |
| Action | 75–100% | Resolve, invitation | "That's what we build" + CTA |

## Pattern: Pinned Hero (Pattern 1)

Single pinned chapter, 300vh scroll distance. Multi-depth parallax with KineticHeadline title reveal.

## Depth Configuration

```
Layer 0 (0.15x): Atmospheric void — radial gradient, subtle terminal grid
Layer 1 (0.34x): Data noise — scattered terminal characters (hidden mobile)
Layer 2 (0.62x): System visualization — 24 nodes forming ring (canvas)
Layer 3 (1.00x): UI text — title, summary, CTA (no parallax on body copy)
Layer 4 (1.20x): Foreground — scroll cue, phase indicator
```

## Title Treatment

Split-line-rise (KineticHeadline). Each line rises from translateY(110%) with 0.09s stagger. Accent color (amber) on final line.

## Pacing

- Pin duration: 300vh (within 150–400vh range, guardrails §3.2/§3.3)
- Title reveal: 30–40% of pin (90–120vh range, guardrails §3.5)
- Stagger offset: 0.09s per word (within 5–8% range, guardrails §3.6)
- Motion density: 3 simultaneous motion types max (parallax + title reveal + system viz)

## Easing

- Hero entrances: `power3.out` (cubic-bezier(0.16, 1, 0.3, 1))
- Chapter exits: `power2.in` (cubic-bezier(0.7, 0, 0.84, 0))
- Micro-interactions: `back.out(1.4)` (cubic-bezier(0.34, 1.56, 0.64, 1))

## Mobile Degradation

- Disable pin below 768px
- Reduce depth layers to 3 (0.2x, 0.6x, 1.0x)
- Title reveal becomes simple opacity fade
- System visualization: static composition

## Reduced Motion

- All parallax disabled
- Title shown static, fully visible
- System visualization: static frame, no animation
