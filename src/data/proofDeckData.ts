import { DeckItem } from "@/components/ProofDeckCard";
import { LINKS } from "@/lib/links";

export const deckItems: DeckItem[] = [
  {
    id: "review-tanvir",
    type: "review",
    authorOrTitle: "Tanvir Ahmed",
    roleOrHandle: "BUP ICT Systems Peer",
    textOrSpecialty:
      "Collaborated on low-level socket programming and database architectures. Exceptionally rigorous on ACID isolation and edge cases.",
    highlight: "ACID Rigor & Sockets",
    icon: "award",
  },
  {
    id: "review-mahir",
    type: "review",
    authorOrTitle: "Mahir Faysal",
    roleOrHandle: "Fullstack Collab Partner",
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
    id: "review-samin",
    type: "review",
    authorOrTitle: "Samin Yasar",
    roleOrHandle: "Algorithms & CP Collaborator",
    textOrSpecialty:
      "Consistent algorithmic rigor in C++. Strong grasp of asymptotic complexity, shortest path optimizations, and state machines.",
    highlight: "C++ Asymptotics",
    icon: "award",
  },
];
