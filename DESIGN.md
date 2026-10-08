# DESIGN.md

## Principles
Minimal, neutral, and calm. Zinc does the heavy lifting, accents are rare and intentional.
Every component must look right in **both** light and dark.

## Color
| Role | Light | Dark |
|---|---|---|
| Surface (controls) | `bg-zinc-200/80` | `dark:bg-zinc-800/80` |
| Surface hover | `hover:bg-zinc-300/80` | `dark:hover:bg-zinc-700/80` |
| Border | `border-zinc-300/50` | `dark:border-zinc-700/50` |
| Text / icon | `text-zinc-700` | `dark:text-zinc-200` |
| Placeholder / skeleton | `bg-zinc-200/50` | `dark:bg-zinc-800/50` |
| Accent (light-mode cue) | `text-amber-500` | n/a |
| Accent (dark-mode cue) | n/a | `text-blue-400` |
| Focus ring | `focus:ring-2 focus:ring-blue-500/50` | same |

Page background, primary text, and brand accent: TODO (copy from `globals.css`).
Do not introduce colors outside the zinc scale, amber, and blue.

## Shape and elevation
- Radius: `rounded-xl` for controls and cards
- Shadow: `shadow-sm` only
- Borders: 1px, semi-transparent (`/50`)

## Spacing
- Icon buttons: `p-2.5`, icon size `h-5 w-5`
- Inline gaps: `gap-2`
- Skeleton size matches the final control (`w-10 h-10`) to prevent layout shift

## Motion
- Default: `transition-all duration-300`
- Loading placeholders: `animate-pulse`
- Icon swaps: rotate plus scale, not fade alone
- No animation libraries. Tailwind transitions only.

## Interaction
- Hover: step one shade (200 → 300 light, 800 → 700 dark)
- Focus: `focus:outline-none` always paired with the blue ring
- Every icon-only button has `aria-label` and `title`

## Typography
TODO: fonts and size scale (check `layout.tsx` and `tailwind.config.ts`).
Responsive pattern seen so far: hide secondary labels below `sm` (`hidden sm:inline-block`).

## Don'ts
- No new colors, shadows, or radii without updating this file
- No hard-coded hex values
- No light-only or dark-only styling