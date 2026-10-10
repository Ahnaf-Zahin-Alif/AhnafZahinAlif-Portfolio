# DESIGN.md

## Principles
Warm, editorial, and tactile. Charcoal/dark warm background with bright warm orange and cream/gold accents.
Every component must look right in **both** light and dark themes.

## Color Palette
| Role | Dark (Default) | Light |
|---|---|---|
| Background | `bg-[#141210]` or `dark:bg-zinc-950` | `bg-[#fcfaf7]` or `bg-zinc-50` |
| Card Surface | `bg-[#1c1916]` or `dark:bg-zinc-900/90` | `bg-white` or `bg-zinc-100` |
| Card Hover | `hover:bg-[#23201c]` | `hover:bg-zinc-50` |
| Primary Accent | `bg-[#f07b3f]` / `text-[#f07b3f]` / `text-orange-500` | same |
| Secondary Accent | `bg-[#fce19b]` (cream/gold) | `bg-[#fce19b]` |
| Subtle Border | `border-[#2e2a25]` / `dark:border-zinc-800` | `border-zinc-200` |
| Text Primary | `text-zinc-100` / `text-stone-100` | `text-zinc-900` |
| Text Muted | `text-stone-400` / `text-zinc-400` | `text-zinc-600` |
| Labels | `text-stone-500` / `text-zinc-500` | `text-zinc-500` |

## Shape and Depth
- Buttons / CTA Pills: `rounded-full`
- Cards: `rounded-2xl` to `rounded-3xl`
- Offset Depth Effect: Profile card features an offset layer (`bg-[#fce19b]` or amber rounded background shifted 8-10px right and down) to create a distinct tactile depth.
- Borders: 1px subtle borders on dividers, cards, and input slots.

## Typography
- Primary Font: Inter for titles and descriptive text.
- Monospace Font: JetBrains Mono for tags, numbers (01, 02, 03), handles, and code annotations.
- Section tags: uppercase, tracked (`tracking-wider` / `tracking-widest`), small (`text-xs` / `text-[11px]`).

## Interaction
- Focus: `focus:outline-none focus:ring-2 focus:ring-orange-500/50`
- Links and interactive elements: interactive hover state with smooth transitions.
- All icon-only buttons include `aria-label`.