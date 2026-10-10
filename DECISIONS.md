# Architecture & Implementation Decisions

## Index
| ID | Title | Status | Date |
|---|---|---|---|
| [D-001](#d-001-eslint-flat-config-migration) | ESLint Flat Config Migration | Accepted | 2026-10-10 |
| [D-002](#d-002-portfolio-layout-redesign-to-match-mockup) | Portfolio Layout Redesign to Match Mockup | Accepted | 2026-10-10 |
| [D-003](#d-003-removal-of-theme-toggle-and-standardization-on-dark-theme) | Removal of Theme Toggle & Standardization on Dark Theme | Accepted | 2026-10-10 |
| [D-004](#d-004-real-profile-photo-integration-via-nextimage) | Real Profile Photo Integration via next/image | Accepted | 2026-10-10 |

---

### D-001: ESLint Flat Config Migration
- **Status**: Accepted
- **Context**: Running `npm run lint` threw an invalid directory error because Next.js 16 CLI no longer supports `next lint`. Additionally, ESLint 9 crashed with a circular reference error in `@eslint/eslintrc` FlatCompat.
- **Decision**: Remove legacy `.eslintrc.json`, configure `eslint.config.mjs` directly with `@next/eslint-plugin-next` and `typescript-eslint` flat configs, and update `package.json` to `"lint": "eslint ."`.
- **Why**: Allows zero-error, zero-warning linting with native ESLint 9 and Turbopack Next.js 16.
- **Rejected Alternatives**: Downgrading ESLint to v8 or disabling lint rules.

---

### D-002: Portfolio Layout Redesign to Match Mockup
- **Status**: Accepted
- **Context**: The user provided a comprehensive design mockup requesting to change the entire portfolio page to match it. The mockup specifies a top navigation bar with 'AZ' badge, a 3-column hero section with an offset profile frame and contact details column, a structured stack grid, and 3-column selected work project cards.
- **Decision**: Transition from the fixed left sidebar to a clean top header and containerized grid layout. Keep components modular, single-purpose, and under 150 lines in `src/components/`.
- **Why**: Faithfully reproduces the user's uploaded mockup across desktop, tablet, and mobile breakpoints while preserving accessibility and both light/dark theme support.
- **Rejected Alternatives**: Keeping the left sidebar and cramming the 3-column hero inside the remaining right area, which broke responsive proportions and did not match the provided mockup.

---

### D-003: Removal of Theme Toggle and Standardization on Dark Theme
- **Status**: Accepted
- **Context**: The user explicitly requested "No need for a dark and light button". The mockup and brand visual language are fundamentally dark and warm editorial.
- **Decision**: Remove the `ThemeToggle` and `ThemeProvider` components and standardize the entire site permanently on the warm dark theme (`dark` class on `<html>`, `#12100e` background).
- **Why**: Directly satisfies user instruction, removes dead code, prevents hydration mismatches, and reduces bundle footprint.
- **Rejected Alternatives**: Hiding the toggle button with CSS while leaving unused provider code in place.

---

### D-004: Real Profile Photo Integration via next/image
- **Status**: Accepted
- **Context**: The user provided an actual portrait photo to replace the placeholder in the hero profile card.
- **Decision**: Store the image in `public/profile.jpg` (104 KB, well below the 200 KB limit), render via `next/image` with `fill`, `priority`, responsive `sizes`, and `object-cover object-[center_45%]` within the offset shadow card frame.
- **Why**: Ensures optimal Core Web Vitals (LCP) performance, proper responsive layout, and visual fidelity with the editorial offset frame.
- **Rejected Alternatives**: Using standard unoptimized HTML `<img>` tag or embedding base64 in CSS.
