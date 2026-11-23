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
| [D-008](#d-008-app-router-native-robots-and-sitemap-generation) | App Router Native Robots and Sitemap Generation | Accepted | 2026-11-13 |
| [D-009](#d-009-semantic-html-hierarchy-and-schemaorg-json-ld-integration) | Semantic HTML Hierarchy and Schema.org JSON-LD Integration | Accepted | 2026-11-13 |
| [D-010](#d-010-google-site-verification-hook-and-live-seo-production-server-validation) | Google Site Verification Hook and Live SEO Production Server Validation | Accepted | 2026-11-13 |
| [D-011](#d-011-obsidian-studio-surfaces-concentric-geometry-and-real-showcase-architecture) | Obsidian Studio Surfaces, Concentric Geometry, and Real Showcase Architecture | Accepted | 2026-11-13 |
| [D-012](#d-012-framer-motion-kinetic-choreography-domain-marquee-and-real-repo-wiring) | Framer Motion Kinetic Choreography, Domain Marquee, and Real Repo Wiring | Accepted | 2026-11-13 |
| [D-013](#d-013-asymmetric-split-viewport-studio-architecture-and-20-motion-craft-rules) | Asymmetric Split-Viewport Studio Architecture and 20 Motion Craft Rules | Accepted | 2026-11-14 |
| [D-014](#d-014-taste-skill-25-evolution-5-screen-full-viewport-architecture) | Taste-Skill 2.5 Evolution: 5-Screen Full-Viewport Architecture | Accepted | 2026-11-23 |
| [D-015](#d-015-color-theory-palette-redesign-electric-cobalt--deep-obsidian) | Color Theory Palette Redesign (Electric Cobalt & Deep Obsidian) | Accepted | 2026-11-23 |
| [D-016](#d-016-framer-motion-primitives-and-phase-1-systems-choreography) | Framer Motion Primitives and Phase 1 Systems Choreography | Accepted | 2026-11-23 |

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

---

### D-008: App Router Native Robots and Sitemap Generation
- **Status**: Accepted
- **Context**: Search engine bots and crawlers require `/robots.txt` and `/sitemap.xml` endpoints returning HTTP 200 to discover, crawl, and index the portfolio.
- **Decision**:
  - Implement `src/app/robots.ts` using Next.js MetadataRoute API: allow all user agents (`Allow: /`), disallow `/api/` and `/private/`, and reference `https://ahnaf-zahin-alif.vercel.app/sitemap.xml`.
  - Implement `src/app/sitemap.ts` using Next.js MetadataRoute API: include `https://ahnaf-zahin-alif.vercel.app` with `lastModified: new Date()`, `changeFrequency: "monthly"`, and `priority: 1.0`.
- **Why**: Native App Router conventions automatically generate static `/robots.txt` and `/sitemap.xml` endpoints during build without requiring custom server routes, preventing 404 interception and ensuring proper crawler indexing.
- **Rejected Alternatives**: Placing manual static text/xml files in `public/`, which are prone to desync and lack typed schema validation.

---

### D-009: Semantic HTML Hierarchy and Schema.org JSON-LD Integration
- **Status**: Accepted
- **Context**: Search engine scrapers and screen readers encountered non-semantic `<span>` elements for major sections, decorative icons lacking `aria-hidden`, and no structured data for knowledge graph indexing.
- **Decision**:
  - Convert `STACK` and `CONTACT` labels to semantic `<h2>` elements and row categories (`LANGUAGES`, `FRAMEWORKS & DATABASES`, `TOOLS`) to `<h3>` elements, preserving their exact CSS classes.
  - Enhance `alt` attributes on profile images in `ProfileCard` and `HeroIntro`.
  - Add `aria-hidden="true"` and `focusable="false"` to non-interactive decorative SVG icons.
  - Create `<StructuredData />` in `src/components/StructuredData.tsx` rendering Schema.org `Person` (with GitHub, Codeforces, Codechef, LinkedIn, X, and BUP) and `WebSite` graph entities.
- **Why**: Establishes a strict, accessible single-`<h1>` document outline and provides rich structured snippets without altering any visual styling or layout.
- **Rejected Alternatives**: Leaving sections as generic non-semantic `span` wrappers.

---

### D-010: Google Site Verification Hook and Live SEO Production Server Validation
- **Status**: Accepted
- **Context**: Search Console verification requires a `google-site-verification` meta tag or DNS TXT record. The user needs an easy mechanism to insert their verification code cleanly without hardcoding credentials into source control if using environment variables. Furthermore, the complete SEO setup (native metadata, Open Graph, Twitter cards, JSON-LD structured data, robots.txt, and sitemap.xml) required validation against a real production build server.
- **Decision**:
  - Add `verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION || "YOUR_GOOGLE_SITE_VERIFICATION_CODE" }` in `src/app/layout.tsx`.
  - Validate the compiled production build with `next start` on a local port, inspecting the raw HTTP response of `/`, `/robots.txt`, and `/sitemap.xml`.
- **Why**: Allows zero-config deployment with a placeholder fallback or secure injection via Vercel/local environment variables. Validating the live server response ensures that search crawlers receive all metadata tags and JSON-LD structured data in the initial static HTML response without relying on client-side JS hydration.
- **Rejected Alternatives**: Forcing DNS verification (which requires domain registrar access) or hardcoding a dummy code without an environment variable fallback.

---

### D-011: Obsidian Studio Surfaces, Concentric Geometry, and Real Showcase Architecture
- **Status**: Accepted
- **Context**: The portfolio required elevation from static placeholders and flat surfaces into an expressive, studio-grade developer presentation without generic templates, fake filler badges, or unverified claims.
- **Decision**:
  - Implement a 3-tier obsidian surface palette (`--surface-canvas: #0c0a09`, `--surface-card: #151311`, `--surface-interactive: #1d1916`) with `1px` hairline borders (`border-white/[0.08]`) and radial ambient spotlight illumination behind the hero portrait.
  - Enforce mathematical concentric border radii (`inner = outer - padding`) across all cards and buttons.
  - Eliminate all `[PROJECT IMAGE]` and `+ Add skill` placeholders: elevate "CineFilm" into a dominant 12-column flagship feature with interactive theater seat selection visual and ACID transaction telemetry; structure secondary showcases ("Orion Sentinel" UAV swarm telemetry, "BICE '25 Portal" semester GPA audit, and "Focus & Habit Tracker" streak heatmap).
  - Transform empty CV and Reviews boxes into a structured academic/systems engineering timeline (BUP ICT) and authentic collaborator endorsements.
  - Add utility micro-interactions including a live Dhaka (GMT+6) clock with `tabular-nums` and a one-click "Copy email" button with tactile checkmark confirmation.
- **Why**: Delivers a high-craft, distinct art direction with deep visual hierarchy, authentic project substance, and zero generic template filler while maintaining 100% adherence to performance and SEO.
- **Rejected Alternatives**: Using generic 3-column equal-weight card grids or leaving empty placeholder boxes.

---

### D-012: Framer Motion Kinetic Choreography, Domain Marquee, and Real Repo Wiring
- **Status**: Accepted
- **Context**: The user requested Phase 3 fluid motion and utility micro-interactions (staggered hero entrances, whileInView section reveals, sliding layoutId active pill, pause-on-hover domain marquee, Cmd+K command palette, spring back-to-top button), along with wiring real GitHub repositories for CineFilm (`Dbms-Project`) and MediCare (`Hospital-Management-System`).
- **Decision**:
  - Install `framer-motion` and wrap in `<MotionConfig reducedMotion="user">` via `<PortfolioShell />` to preserve Server Component architecture and native SEO metadata on `src/app/page.tsx`.
  - Implement GPU-composited animations (`opacity`, `transform`) only: 60ms staggered hero intro variants, `whileInView` reveals across sections (`viewport={{ once: true, amount: 0.15 }}`), and spring hover elevations (`stiffness: 280, damping: 24`).
  - Add `layoutId="active-nav-pill"` for sliding active navigation background in `Navbar`.
  - Create `<DomainMarquee />` highlighting core engineering disciplines with pause-on-hover.
  - Create `<CommandPalette />` for keyboard navigation (`Cmd/Ctrl+K`) and quick actions (Copy Email, Jump to sections, External profile links).
  - Create `<BackToTop />` with spring physics and scroll visibility threshold (>400px).
  - Wire real GitHub repository links to project showcases: CineFilm (`Dbms-Project`), MediCare (`Hospital-Management-System`), ProjectTracker (`ProjectTracker`), and 30DaysOfPython (`30DaysOfPython`).
- **Why**: Delivers modern studio fluid interactivity, tactile feedback, and direct access to authentic code repositories without degrading Web Vitals or breaking native SEO.
- **Rejected Alternatives**: Relying on bloated full-page animation frameworks or CSS marquee hacks that cause layout jank.

---

### D-013: Asymmetric Split-Viewport Studio Architecture and 20 Motion Craft Rules
- **Status**: Accepted
- **Context**: The portfolio's single-column stacked layout felt conventional and static. The user requested a complete architectural transformation into an Asymmetric Split-Viewport Studio Layout with a sticky desktop identity rail (~38%) and a scrollable interactive project workbench (~62%), shared-element `layoutId` modal expansion for projects, a filterable technical stack explorer (`popLayout` with 30ms row staggers), an academic & engineering ledger, and execution of the 20 motion craft rules (critically damped springs, directional easing, scale 0.97 press physics, 12% knob flight stretch, and email copy blur crossfade).
- **Decision**:
  - Restructure desktop into an Asymmetric Split-Viewport grid: `<StudioIdentityRail />` fixed on the left (identity, live clock, studio section index, theme switch, email copy micro-UI) and `<StudioWorkbench />` on the right (flagship CineFilm showcase, 2-column shared-element project cards, `<TechStackExplorer />`, `<EngineeringLedger />`, `<SystemsProof />`), collapsing into a stacked mobile layout.
  - Implement shared-element morphing: secondary project cards morph into `<ProjectModal />` via Framer Motion `layoutId`, with inner technical specifications staggering in at 40ms intervals as the modal settles.
  - Implement `<TechStackExplorer />` with category tabs and `AnimatePresence mode="popLayout"`, introducing 30ms row staggers.
  - Implement `<ThemeToggle />` supporting Studio Obsidian (default) and Studio Alabaster with a 12% stretch (`scaleX: 1.12`) on knob flight.
  - Preserve 100% of native Next.js App Router SEO metadata on `src/app/page.tsx` as a Server Component, delegating motion to `<PortfolioShell />`.
- **Why**: Replaces the generic stacked template with a bespoke, tactile studio experience that emphasizes systems engineering and real project substance while meeting all WCAG AA contrast and performance requirements.
- **Rejected Alternatives**: Retaining a full-screen stacked hero and generic card grids or using unperformant CSS scroll-jack libraries.

---

### D-014: Taste-Skill 2.5 Evolution: 5-Screen Full-Viewport Architecture
- **Status**: Accepted
- **Context**: The user invoked `/design-taste-frontend` (tasteskill 2.5.1, the anti-slop frontend skill) aiming for the quality bar of figma.com and x.ai. The asymmetric split-rail layout from D-013, while functional, lacked equal edge symmetry, full-screen deliberate rhythm (House Rule 3 & 4), authoritative display typography, procedural material grain, and live technical UI diagrams (House Rule 7).
- **Decision**:
  - Restructure the portfolio into a 5-screen full-viewport system (`100svh`, `--h: 1`):
    - Screen 00 // Hero & Live SQL Transaction App-Frame (MariaDB ACID simulator with latency telemetry).
    - Screen 01 // CineFilm Flagship Cinema Engine & Auditorium Seat Simulator.
    - Screen 02 // Distributed Systems Architecture & Pulse Node Diagram (UAV swarm & MediCare hospital queues).
    - Screen 03 // Technical Stack Matrix with real full-color brandmarks & Academic Timeline Ledger.
    - Screen 04 // Terminal Transmission Closing Station & Contact Dispatch.
  - Implement `Unbounded` display typography via `next/font/google` with negative tracking (`-0.05em`) paired with `JetBrains Mono` and `Inter`.
  - Add fixed 3.5% SVG procedural fractal film grain overlay on `body::after` and specular card inset bevels (`card-specular`).
  - Introduce `src/app/icon.svg` studio monogram badge resolving the 404 favicon issue.
  - Keep all components single-purpose and strictly under 135 lines in `src/components/`, while removing superseded split-layout components (`StudioIdentityRail`, `StudioWorkbench`, `TechStackExplorer`, `SystemsProof`, `FlagshipProjectCard`).
- **Why**: Replaces uneven scroll density with the figma.com / x.ai design bar: equal container edges, live interactive engineering UI on every screen, physical material depth, zero AI slop words, and 100% native App Router SSR SEO preservation.
- **Rejected Alternatives**: Remaining in the pinned sidebar layout or copying non-functional art-school gimmicks (like random ticker tapes) that obscure real engineering substance.

---

### D-015: Color Theory Palette Redesign (Electric Cobalt & Deep Obsidian)
- **Status**: Accepted
- **Context**: The previous color palette suffered from muddy warm-brown dark tones (`#0c0a09`, `#151311`) and a multi-accent "fruit salad" (simultaneous warm orange `#f07b3f`, bright cyan `#38bdf8`, emerald green, amber yellow, purple), violating tasteskill 2.5 Rule 5 (90–95% neutral surface with a single intentional accent and strict 60-30-10 distribution). The user requested applying color theory to overhaul the site's colors and approved Direction 1 (Electric Cobalt & Deep Obsidian).
- **Decision**:
  - Transform color system to an intentional 60-30-10 hierarchy:
    - 60% Dominant Base: Deep Obsidian canvas (`#08090d`), elevated slate cards (`#0f121a`), and subtle hairlines (`rgba(255,255,255,0.08)` / slate-800).
    - 30% Structural Secondary: Slate neutrals (`#161b26`), crisp typography (zinc-100 titles, zinc-400 technical metadata), and Ice Cyan (`#5fd4ff`) for telemetry badges and status pings.
    - 10% High-Energy Accent: Electric Cobalt Blue (`#2f6bff`, hover `#1a56f0`), reserved strictly for primary interactive CTAs, focus rings, seat selection, and monogram branding.
  - Update CSS variables in `src/app/globals.css` and `tailwind.config.ts` (`canvas`, `card`, `hairline`, `accent`).
  - Overhaul all components (`TasteNav`, `TasteHero`, `SqlTransactionAppFrame`, `LiveClock`, `StudioEmailCopy`, `CinefilmSeatSimulator`, `TasteFlagshipCinefilm`, `SystemsDiagramCard`, `TasteAlgorithmsProof`, `TasteScreenSystems`, `TasteScreenMatrix`, `TasteCapabilityMatrix`, `TasteClosingStation`, `CommandPalette`, `BackToTop`, `DomainMarquee`, `ThemeToggle`, `EngineeringLedger`, `ProjectCard`, `ProjectModal`, `ProjectModalDetails`, `ProjectPreviewVisual`, `not-found.tsx`, and `public/icon.svg`).
  - Maintain dual-theme support (Obsidian Dark and Alabaster Light) while strictly keeping every component under 135 lines.
- **Why**: Replaces muddy chromatic noise with a disciplined, cold-engineering aesthetic inspired by Linear, Vercel, and xAI, elevating contrast, clarity, and visual prestige while meeting WCAG AA contrast standards.
- **Rejected Alternatives**:
  - Direction 2 (Monochrome Carbon & Acid Lime): Rejected due to overly aggressive high-contrast cyberpunk tone that detracts from professional systems engineering.
  - Direction 3 (Graphite & International Klein Blue): Rejected due to darker blue value having reduced contrast against deep slate backgrounds.

---

### D-016: Framer Motion Primitives and Phase 1 Systems Choreography
- **Status**: Accepted
- **Context**: The portfolio required tactile, high-craft motion choreography adhering to `@design-taste-frontend` (`DESIGN_VARIANCE=6`, `MOTION_INTENSITY=4`, `VISUAL_DENSITY=4`) without layout thrashing, content degradation, or breaking SEO and accessibility. The user requested dividing execution into Phase 1 (content fixes, shared motion primitives, hero entrance, marquee, sliding nav indicator, scroll reveals) and Phase 2.
- **Decision**:
  - Execute Phase 1:
    - Create shared motion primitives in `src/components/motion/`: `Reveal.tsx` (fade + 24px upward slide), `Stagger.tsx` (0.06s children stagger), and `Marquee.tsx` (seamless infinite scroll loop with pause on hover), all strictly respecting `prefers-reduced-motion` via `useReducedMotion()`.
    - Apply content fixes: replace hardcoded Google verification placeholder with env checks and a TODO comment; create centralized `src/lib/links.ts` with placeholder env constants (`LINKEDIN_URL`, `CODEFORCES_URL`, `CODECHEF_URL`); add CP timeline body with TODO markers; cap `next/image` sizes for `profile.jpg` at 44px.
    - Choreograph Hero entrance with staggered typography/action variants, gentle ambient float on SQL transaction frame, and seamless engineering domain Marquee strip.
    - Implement tactile micro-interactions: sliding active section indicator in `TasteNav` using Framer Motion `layoutId="active-nav-indicator"`, enhanced email copy tap animation, and global button hover elevations.
    - Wrap sections `#cinefilm`, `#systems`, `#matrix`, `#closing` in `Reveal` wrappers with progressive delay cascades.
    - Maintain strict single-purpose modular architecture with all components under 135 lines.
- **Why**: Delivers fluid, production-grade 60fps micro-interactions and scroll awareness with zero cumulative layout shift (CLS = 0) and zero accessibility regressions.
- **Rejected Alternatives**:
  - Animating height/margin: Rejected due to layout reflow thrashing.
  - Third-party heavy animation libraries (GSAP, Three.js): Explicitly forbidden by stack rules.
