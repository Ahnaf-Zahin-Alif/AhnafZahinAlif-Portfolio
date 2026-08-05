# Portfolio Architecture & Design Specification

## Tech Stack
* Framework: Next.js or React (Vite)
* Styling: Tailwind CSS
* Deployment Target: Vercel

## Typography
* Primary Font: 'Inter' (Google Fonts) - Main text.
* Monospace Font: 'JetBrains Mono' (Google Fonts) - Code/technical text.

## UI/UX Requirements & Layout
* Global Layout: Two-column layout featuring a fixed Left-Hand Dashboard (Sidebar) and a main scrolling content area on the right.
* Dashboard (Sidebar) Navigation Links:
  * Home
  * Projects
  * CV
  * Reviews
* Dark/Light Mode: 
  * Implement a theme toggle switch (place either at the bottom of the left sidebar or top-right of the main content area).
  * Default state: Dark Mode.
  * Use CSS variables or Tailwind's dark mode classes.

## Component Structure
1. Left Sidebar Dashboard (Navigation Links)
2. Main Content Area:
   - Hero Section (Includes Profile Picture Placeholder, Introduction, and Profile Links Panel)
   - Tech Stack Section
   - Projects Section (Empty placeholders for future)
   - CV Section (Empty placeholders for future)
   - Reviews Section (Empty placeholders for future)