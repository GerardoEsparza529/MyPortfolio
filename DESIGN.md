# Design: Gerardo Esparza Portfolio

A locked design system for the portfolio. New surfaces should extend this system instead of creating a separate visual language.

## Genre

modern-minimal, technical studio

## Macrostructure family

- Marketing pages: Split Studio, alternating claim and visual proof.
- Project case studies: Workbench, screenshots and system decisions lead the narrative.
- Content pages: Long Document, compact technical prose with strong hierarchy.

## Theme

- `--color-paper`: `oklch(16% 0.012 55)`
- `--color-paper-2`: `oklch(20% 0.014 55)`
- `--color-surface`: `oklch(25% 0.014 55)`
- `--color-ink`: `oklch(95% 0.008 80)`
- `--color-ink-2`: `oklch(77% 0.012 70)`
- `--color-rule`: `oklch(34% 0.014 55)`
- `--color-accent`: `oklch(72% 0.18 45)`
- `--color-focus`: `oklch(78% 0.17 70)`

## Typography

- Display: Bricolage Grotesque, weight 700, normal.
- Body: Source Sans 3, weight 400.
- Mono: JetBrains Mono, weight 500.
- Display tracking: `-0.035em`.
- Display ceiling: `clamp(3rem, 7vw, 5.5rem)`.

## Spacing

4-point named scale defined in `tokens.css`. Components use tokens rather than raw spacing values.

## Motion

- Primary easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Reveal pattern: paired cross-fade and short directional movement.
- Reduced-motion fallback: opacity-only, 120 ms.

## CTA voice

- Primary: light solid control on dark paper, concise verb and object.
- Secondary: transparent control with a visible rule.

## What pages must share

- GE wordmark.
- Graphite mineral palette and signal-orange accent.
- Display, body and mono type roles.
- Maximum 12 px component radius.
- Claims paired with real evidence.

## What pages may differ

- Screenshot composition and project-specific diagrams.
- Section density according to the amount of verified material.
- Motion choreography, within the reduced-motion contract.

