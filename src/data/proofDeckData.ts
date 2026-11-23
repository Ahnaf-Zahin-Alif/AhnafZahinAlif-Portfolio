import { DeckItem } from "@/components/ProofDeckCard";
import { LINKS } from "@/lib/links";

export const deckItems: DeckItem[] = [
  {
    id: "review-systems",
    type: "review",
    authorOrTitle: "SYSTEMS PEER — BUP ICT",
    roleOrHandle: "Collaborator Endorsement",
    textOrSpecialty:
      "Collaborated on low-level socket programming and database architectures. Exceptionally rigorous on ACID isolation and edge cases.",
    highlight: "ACID Rigor & Sockets",
    icon: "award",
  },
  {
    id: "review-fullstack",
    type: "review",
    authorOrTitle: "FULL-STACK COLLAB — CINEFILM",
    roleOrHandle: "Project Collab Endorsement",
    textOrSpecialty:
      "Engineered robust backend API contracts with clean data normalization. Always prioritizes schema sanity before touching UI code.",
    highlight: "Schema Sanity & APIs",
    icon: "award",
  },
  {
    id: "codeforces-card",
    type: "profile",
    authorOrTitle: "Codeforces",
    roleOrHandle: "Handle: AhnafZahin",
    textOrSpecialty:
      "Contest competitor in C++. Training dynamic programming, Dijkstra shortest paths, segment trees, and asymptotic bounds.",
    highlight: "Graph Theory & DP",
    url: LINKS.codeforces,
    icon: "terminal",
  },
  {
    id: "codechef-card",
    type: "profile",
    authorOrTitle: "CodeChef",
    roleOrHandle: "Handle: AhnafZahin",
    textOrSpecialty:
      "Algorithmic problem decomposition, discrete mathematics, and time complexity bounds in competitive division matches.",
    highlight: "Algorithmic Speed",
    url: LINKS.codechef,
    icon: "code",
  },
  {
    id: "review-algo",
    type: "review",
    authorOrTitle: "ALGORITHMIC PEER — CP",
    roleOrHandle: "Competitive Programming Peer",
    textOrSpecialty:
      "Consistent algorithmic rigor in C++. Strong grasp of asymptotic complexity, shortest path optimizations, and state machines.",
    highlight: "C++ Asymptotics",
    icon: "award",
  },
];
