# Architecture & Implementation Decisions

## Index
| ID | Title | Status | Date |
|---|---|---|---|
| [D-001](#d-001-eslint-flat-config-migration) | ESLint Flat Config Migration | Accepted | 2026-10-10 |
| [D-002](#d-002-portfolio-layout-redesign-to-match-mockup) | Portfolio Layout Redesign to Match Mockup | Accepted | 2026-10-10 |
| [D-003](#d-003-removal-of-theme-toggle-and-standardization-on-dark-theme) | Removal of Theme Toggle & Standardization on Dark Theme | Accepted | 2026-10-10 |
| [D-004](#d-004-real-profile-photo-integration-via-nextimage) | Real Profile Photo Integration via next/image | Accepted | 2026-10-10 |
| [D-005](#d-005-mobile-only-compact-profile-photo-placement) | Mobile-Only Compact Profile Photo Placement | Accepted | 2026-10-10 |
| [D-006](#d-006-unslop-design-system-polish) | Unslop Design System Polish | Accepted | 2026-11-13 |
| [D-007](#d-007-native-app-router-seo-metadata-architecture) | Native App Router SEO Metadata Architecture | Accepted | 2026-11-13 |

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

---

### D-005: Mobile-Only Compact Profile Photo Placement
- **Status**: Accepted
- **Context**: On mobile viewports, the large profile card occupied entire screen heights below the CTA buttons while leaving unused space to the right of the two-line hero name. The user requested placing a smaller photo in that free space only for the mobile version.
- **Decision**: Add a compact photo frame (`w-24 h-28 sm:w-28 sm:h-32`) alongside the name in `HeroIntro` with `md:hidden`, keeping the signature cream offset accent. Hide the large `ProfileCard` on mobile using `hidden md:flex`.
- **Why**: Utilizes free horizontal space efficiently on mobile devices, eliminates excessive scrolling, and leaves the desktop 3-column layout untouched.
- **Rejected Alternatives**: Shrinking the full-size `ProfileCard` in place below the buttons, which would still take excessive vertical space without utilizing the empty area beside the name.

---

### D-006: Unslop Design System Polish
- **Status**: Accepted
- **Context**: Overuse of monospace fonts on non-code UI elements, redundant duplicate section eyebrows, gratuitous image hover scaling, duplicate horizontal dividing lines, and unpolished focus rings created an artificial "AI-generated" look.
- **Decision**:
  - Confine `font-mono` strictly to technical tokens, code identifiers, handles, and numeric indices (`01`, `02`, `03` with `tabular-nums`).
  - Drop redundant eyebrows above headings (`RESUME` above `Curriculum Vitae`, `TESTIMONIALS` above `Reviews & Recommendations`).
  - Remove duplicate dividing lines in `ContactPanel` and `TechStack`.
  - Remove decorative hover scaling on the profile portrait.
  - Implement `text-balance` on headings, `text-pretty` on descriptive paragraphs, and accessible `focus-visible:` styling across all interactive controls.
  - Standardize all colors to clean warm dark theme tokens without leftover unused prefixes.
- **Why**: Elevates the design to an intentional, human-crafted editorial finish with clean typography and hierarchy.
- **Rejected Alternatives**: Keeping decorative font-mono everywhere and leaving redundant duplicate borders in place.

---

### D-007: Native App Router SEO Metadata Architecture
- **Status**: Accepted
- **Context**: The site lacked canonical URL resolution, complete Open Graph tags, Twitter card tags, and unique route-level metadata.
- **Decision**:
  - Set `metadataBase` to `https://ahnaf-zahin-alif.vercel.app` in `src/app/layout.tsx`.
  - Establish a title template (`%s | Md. Ahnaf Zahin Alif`) with default `Md. Ahnaf Zahin Alif | Fullstack Software Engineer`.
  - Add keyword-focused descriptions highlighting backend development, system design, and competitive programming.
  - Configure full Open Graph (`og:title`, `og:description`, `og:url`, `og:type: website`, `og:image`) and Twitter Card (`summary_large_image`) metadata.
  - Provide dedicated unique metadata on `src/app/page.tsx` (`canonical: "/"`) and `src/app/not-found.tsx` (`Page Not Found`, `robots: noindex, nofollow`).
- **Why**: Complies with Next.js App Router best practices, prevents duplicate indexing, and enables rich social previews without modifying any visual CSS or layout.
- **Rejected Alternatives**: Adding raw `<head>` tags in HTML or using third-party SEO wrapper libraries.
