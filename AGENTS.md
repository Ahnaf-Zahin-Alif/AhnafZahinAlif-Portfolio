# AGENTS.md

## Stack
Next.js (App Router), TypeScript, Tailwind CSS, next-themes, lucide-react. Deployed on Vercel.

## Read first
- UI or styling work → `DESIGN.md`
- File placement or structure → `Architecture.md`
- Any text, bio, project, or link → `Portfolio-content.md` (single source of truth)

## Commands
- Dev: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

## Definition of done
1. `npm run lint` has zero errors and zero warnings
2. `npm run build` succeeds
3. UI checked in both light and dark themes, and at mobile width
4. No console errors, no hydration warnings

## Git workflow
- Only commit after "Definition of done" passes. Never push a broken build.
- Stage specific files (`git add <paths>`), never `git add .`. Run `git status` first.
- Never stage `.env*`, `node_modules`, or `.next`.
- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- One logical change per commit. Don't bundle unrelated work.
- After a passing build, push: `git push origin main`.

## Code rules
- Components are small and single-purpose, one per file in `src/components/`.
- Split any file approaching 150 lines.
- Add `"use client"` only when a component needs state, effects, or browser APIs.
- Theme-dependent UI must be hydration-safe (use the `mounted` pattern in `ThemeToggle.tsx`).
- Tailwind only. No inline styles, no new CSS files, no new UI libraries without asking.
- Interactive elements need `aria-label` or visible text, plus a focus style.
- Remove unused imports. Don't leave dead code.

## Content rules
- Never change Name, Bio, Tech Stack, or Social Links unless explicitly told to.
- No Lorem Ipsum, no invented projects, no fake reviews.
- Sections awaiting content stay clean and empty.

## Quality and bloat rules
- Default to server components. Add `"use client"` only for state, effects, or browser APIs, and keep that component as small as possible.
- Images: `next/image` only, with width and height or `fill`. Source files under 200 KB, WebP or AVIF preferred.
- Before adding any dependency, check whether Tailwind, React, or an installed package already does the job. Ask first.
- Run `npm run check` before every commit. Zero warnings.
- Run `npx knip` after refactors and delete anything it flags as unused.
- Same markup in two places means extract a component.
- No commented-out code, no `console.log`, no TODOs left behind.
- No `any` types. No `// eslint-disable` without a written reason.
- Prefer deleting code over adding it. Report net lines added/removed in each summary.

## Decision log
- Maintain `DECISIONS.md` as you work. Log a decision when you:
  - choose between two or more reasonable approaches
  - add, remove, or replace a dependency
  - change structure, file placement, or a pattern used across components
  - deviate from `DESIGN.md`, `Architecture.md`, or any rule here
  - skip, defer, or work around something the task asked for
- Do NOT log trivial edits (typos, spacing, renaming a variable).
- Write the entry in the same commit as the change. Use the next free `D-XXX` ID and update the Index table.
- The "Why" must name a concrete reason. "Cleaner" or "better practice" alone is not a reason.
- Always list at least one rejected alternative. If none existed, it wasn't a decision.
- Before starting a task, skim `DECISIONS.md` so you don't reverse a past decision without superseding it.
- Never rewrite history: add a new entry that supersedes the old one.
- Definition of done includes: decision log updated.