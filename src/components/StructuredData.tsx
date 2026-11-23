import { LINKS } from "@/lib/links";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ahnaf-zahin-alif.vercel.app/#person",
        name: "Md. Ahnaf Zahin Alif",
        url: "https://ahnaf-zahin-alif.vercel.app",
        image: "https://ahnaf-zahin-alif.vercel.app/profile.jpg",
        jobTitle: "Fullstack Software Engineer",
        description:
          "Fullstack Software Engineer focused on backend development, system design, and competitive programming.",
        email: "mailto:ahnafzahinalif@gmail.com",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Bangladesh University of Professionals (BUP)",
        },
        sameAs: [
          LINKS.github,
          LINKS.codeforces,
          LINKS.codechef,
          LINKS.linkedin,
          "https://x.com",
        ],
        knowsAbout: [
          "Software Engineering",
          "Backend Development",
          "System Design",
          "Algorithms",
          "Competitive Programming",
          "C",
          "C++",
          "Java",
          "Python",
          "React",
          "Node.js",
          "PostgreSQL",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://ahnaf-zahin-alif.vercel.app/#website",
        url: "https://ahnaf-zahin-alif.vercel.app",
        name: "Md. Ahnaf Zahin Alif Portfolio",
        description:
          "Fullstack Software Engineer focused on backend development, system design, and competitive programming.",
        publisher: {
          "@id": "https://ahnaf-zahin-alif.vercel.app/#person",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
