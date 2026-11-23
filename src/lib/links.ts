/**
 * External Profiles & Social Links
 * Configured via environment variables with fallback placeholders.
 */
export const LINKS = {
  github: "https://github.com/Ahnaf-Zahin-Alif",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://linkedin.com/in/TODO_LINKEDIN_USERNAME",
  codeforces:
    process.env.NEXT_PUBLIC_CODEFORCES_URL ||
    "https://codeforces.com/profile/TODO_CODEFORCES_HANDLE",
  codechef:
    process.env.NEXT_PUBLIC_CODECHEF_URL ||
    "https://www.codechef.com/users/TODO_CODECHEF_HANDLE",
  email: "ahnafzahinalif@gmail.com",
} as const;
