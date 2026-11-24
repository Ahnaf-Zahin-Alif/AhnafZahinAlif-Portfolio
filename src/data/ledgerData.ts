import { LedgerItem } from "@/components/ParallaxLedgerCard";

export const leftLedgerItems: LedgerItem[] = [
  {
    id: "bup-ict",
    period: "2023–2027",
    role: "B.Sc. in Information & Communication Technology",
    institution: "Bangladesh University of Professionals (BUP)",
    badge: "ACADEMIC EXCELLENCE",
    metric: { label: "CUMULATIVE CGPA", value: "3.92 / 4.00" },
    summary:
      "Rigorous coursework in Data Structures, Database Systems, Computer Networks, and Object-Oriented Software Engineering.",
    skills: [
      "Data Structures & Algorithms (C++)",
      "Relational DBMS & SQL (MariaDB/PostgreSQL)",
      "Object-Oriented Programming (Java / OOP)",
    ],
  },
  {
    id: "dbms-specialization",
    period: "2024–ACTIVE",
    role: "Relational DBMS & Concurrency Architecture",
    institution: "Autonomous Engineering & Projects",
    badge: "SYSTEMS SPECIALIZATION",
    metric: { label: "TRANSACTION ISOLATION", value: "ACID REPEATABLE READ" },
    summary:
      "Designed and stress-tested relational reservation architecture under simulated concurrent lock contention with row-level mutexes.",
    skills: [
      "ACID compliant schema modeling",
      "Deadlock mitigation & row-level locking",
      "Indexing strategies & sub-50ms query latency",
    ],
  },
];

export const rightLedgerItems: LedgerItem[] = [
  {
    id: "cp-timeline",
    period: "2023–PRESENT",
    role: "Competitive Programming & Algorithmic Rigor",
    institution: "Codeforces & CodeChef Active Contender",
    badge: "ALGORITHMIC DISCIPLINE",
    metric: { label: "PROBLEMS SOLVED", value: "500+ PROBLEMS" },
    summary:
      "Consistently training in competitive programming to strengthen low-level problem decomposition, discrete mathematics, and time complexity bounds.",
    skills: [
      "Graph Theory & Dijkstra Shortest Path",
      "Dynamic Programming (Bitmask, 2D State)",
      "Number Theory & Binary Search Optimization",
    ],
  },
  {
    id: "network-engineering",
    period: "2024",
    role: "Enterprise Network Infrastructure Design",
    institution: "BUP Telecommunications & Networks Lab",
    badge: "INFRASTRUCTURE",
    metric: { label: "SIMULATION TOOL", value: "CISCO PACKET TRACER" },
    summary:
      "Engineered a segmented gaming center topology with multi-VLAN segmentation, DHCP address pooling, NAT translation, and restrictive ACLs.",
    skills: [
      "Router & Switch Configuration",
      "NAT, DHCP & Subnet Masking",
      "Access Control Lists (ACLs) Packet Filtering",
    ],
  },
];
