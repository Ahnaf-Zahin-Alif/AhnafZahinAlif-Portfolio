# DESIGN.md

## Principles
Warm, editorial, and tactile. Built on the **Golden Ratio ($\phi \approx 1.618$)** across chromatic distribution, luminance steps, and spatial typography.
Clean typographic restraint, intentional whitespace, and zero artificial ornamentation.

## Golden Ratio (60-30-10) Color Architecture
The palette follows the classical Golden Ratio / Fibonacci distribution (61.8% Ground : 30.9% Structure : 7.3% Focal Accent):

| Hierarchy | Role | Dark Canvas (#161617) | Light Canvas (#F4F0EB) | Golden Ratio Proportions |
|---|---|---|---|---|
| **61.8% Base Ground** | Canvas Background | `#161617` | `#F4F0EB` | Primary open visual breathing room |
| **30.9% Structure** | Card Surface | `#1F1E1D` | `#EAE4DA` | Reading containers & bento cards |
| | Interactive Surface | `#252422` | `#E2DBD0` | Hover states & chip containers |
| | Elevated / Hairline | `#2E2C29` | `#DFD5C6` | 1px subtle geometric boundary |
| | Primary Text | `#F4F0EB` | `#1B1B1C` | High contrast body typography |
| | Secondary Text | `#A39E95` | `#5C5852` | Editorial attributions & descriptors |
| **7.3% Focal Accent** | Primary Accent (Terracotta) | `#C85A32` | `#C85A32` | Primary CTA pills, index badges, key strokes |
| | Hover Accent | `#B24B25` | `#B24B25` | Deepened terracotta for press states |
| **~2% Telemetry** | Status Accent (Sage) | `#7D9B7A` | `#5A6E58` | Golden Angle offset ($\approx 137.5^\circ$) for live telemetry |

## Shape and Depth
- Buttons / CTA Pills: `rounded-full` (high-contrast terracotta pill for the primary action)
- Cards & Bento Containers: `rounded-3xl`
- Borders: 1px hairline borders (`#2E2C29` on dark, `#DFD5C6` on light)
- Topographic Background: SVG elevation contour lines with dynamic opacity adapting between sections

## Typography
- Display Headlines: Oswald (uppercase bold condensed typography, `leading-[0.92]`, `tracking-tighter`)
- Body Copy: Space Grotesk / Inter (`leading-relaxed`, `text-sm` / `text-base`)
- Monospace Font: JetBrains Mono for telemetry metrics, status indicators, and numeric indices (`00 //`, `01 //`, `02 //` with `tabular-nums`)
- Section Tags: Monospace uppercase, small (`text-xs`), with `#C85A32` index highlight

## Interaction
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]`
- Links and interactive elements: Smooth transitions (`duration-200` or `duration-300`)
- Hover micro-animations: 2px card lift, 1.02 portrait scale, spring-damped active button press (`active:scale-95`)
- Respect `prefers-reduced-motion` across all GSAP and Framer Motion choreographies
- All interactive elements include explicit `aria-label` or visible text
