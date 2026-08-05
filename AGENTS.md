# AI Agent Workspace Guidelines

## 1. Auto-Push to GitHub Rule
- Whenever modifications, new features, bug fixes, or file edits are completed in this repository, always stage (`git add .`), commit with a descriptive message (`git commit -m "..."`), and push to GitHub (`git push origin main`).

## 2. Pre-Push Build Rule
- Before staging and pushing any code to GitHub, you MUST run the local build command (e.g., `npm run build`) to ensure there are no compilation or routing errors. Never push broken builds to the `main` branch.

## 3. Git Commit Standards
- Use Conventional Commits for all messages to maintain a clean history (e.g., `feat: added sidebar navigation`, `fix: corrected Tailwind layout on mobile`, `chore: updated vercel.json`).
- Make atomic commits. Do not lump unrelated features into a single massive commit.

## 4. Component Modularity Rule
- Keep React components small, modular, and single-purpose. 
- Separate UI components (like the Sidebar, Hero section, and Tech Stack badges) into their own distinct files within a `/components` directory.
- Avoid writing monolithic files exceeding 150-200 lines of code.

## 5. Linting and Terminal Checks
- Monitor the terminal output for ESLint warnings, unused imports, or hydration errors.
- Resolve any warnings or errors before marking a task as complete or pushing to GitHub.
- Ensure all Tailwind CSS classes are logical and do not conflict.

## 6. Content Strictness
- Do not alter the core portfolio content (Name, Bio, Tech Stack, Social Links) provided in the initial setup. 
- Do not use "Lorem Ipsum" or generate fake projects. If a section is meant to be populated later, leave the UI clean but empty.
