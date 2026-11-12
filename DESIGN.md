# DESIGN.md

## Principles
Warm, editorial, and tactile. Charcoal/dark warm background with bright warm orange and cream/gold accents.
Clean typographic restraint, intentional whitespace, and zero artificial ornamentation.

## Color Palette
| Role | Dark (Default) |
|---|---|
| Background | `bg-[#12100e]` |
| Card Surface | `bg-[#161311]` or `bg-[#1a1715]` |
| Card Hover | `hover:border-zinc-700` |
| Primary Accent | `bg-[#f07b3f]` / `text-[#f07b3f]` |
| Secondary Accent | `bg-[#fce19b]` (cream/gold) |
| Subtle Border | `border-zinc-800` |
| Text Primary | `text-zinc-100` |
| Text Muted | `text-zinc-400` |
| Labels | `text-zinc-400` / `text-zinc-500` |

## Shape and Depth
- Buttons / CTA Pills: `rounded-full`
- Cards: `rounded-3xl`
- Offset Depth Effect: Profile card features an offset layer (`bg-[#fce19b]` shifted right and down) to create a distinct tactile depth.
- Borders: 1px subtle borders on dividers, cards, and input slots. Avoid nested double borders.

## Typography
- Primary Font: Inter for headings, navigation, labels, and descriptive text.
- Monospace Font: JetBrains Mono restricted strictly to code, technical stack tags, handles, and numeric indices (`01`, `02`, `03` with `tabular-nums`).
- Section tags: uppercase, tracked (`tracking-widest`), small (`text-xs` / `text-[11px]`).
- Text wrapping: `text-balance` on headings, `text-pretty` on descriptive paragraphs.

## Interaction
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100e]`
- Links and interactive elements: interactive hover state with smooth transitions (`duration-150` or `duration-200`).
- No gratuitous hover scaling or looping animations.
- Respect `prefers-reduced-motion`.
- All icon-only buttons include `aria-label`.
