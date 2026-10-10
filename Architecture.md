# Portfolio Architecture & Design Specification

## Tech Stack
* Framework: Next.js (App Router)
* Styling: Tailwind CSS
* Deployment Target: Vercel
* Icons: lucide-react

## Typography
* Primary Font: 'Inter' (Main text, titles, descriptions)
* Monospace Font: 'JetBrains Mono' (Tags, badges, status labels, code)

## UI/UX Requirements & Layout
* Global Layout: Full-width responsive layout with top navigation header and clean horizontal grid sections.
* Top Header Navigation:
  * Brand badge 'AZ' on top left
  * Navigation links: Home, Projects, CV, Reviews
  * Theme Toggle (light / dark mode)
* Main Content Sections:
  1. Hero Section (3-Column layout on desktop):
     - Left: Fullstack SWE tag, bold name heading, NOW status block with accent border, and primary/secondary CTA pill buttons.
     - Center: Profile picture card with offset yellow/cream shadow depth effect.
     - Right: Contact panel with email, phone, and direct platform links (GitHub, X, Codeforces, Codechef).
  2. Stack Section:
     - Languages with descriptive role tags.
     - Frameworks & Databases section with '+ Add skill' slot.
     - Tools section with '+ Add skill' slot.
  3. Projects Section ("Selected work"):
     - Top bar with section tag, 'Selected work' title, and 'All projects →' pill button.
     - 3-column grid of detailed project cards (Toy Shop, Cinefilm, Gaming Center Network).
  4. CV Section:
     - Experience & Education details / placeholder matching the warm palette.
  5. Reviews Section:
     - Endorsements / Testimonials placeholder.