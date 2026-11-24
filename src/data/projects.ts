import { ProjectItem } from "@/types/projects";

export const secondaryProjects: ProjectItem[] = [
  {
    id: "medicare",
    index: "02",
    badge: "JAVA OOP & HEALTHCARE",
    title: "MediCare: Hospital Management System",
    tagline: "Java OOP Healthcare Administration & Patient Admissions Pipeline",
    description:
      "Full-featured Java OOP hospital administration suite managing inpatient admissions, ICU and general ward occupancy, doctor shifts, and relational medical records.",
    extendedBreakdown:
      "Engineered with strict Object-Oriented principles in Java, featuring modular appointment controllers, synchronized ward telemetry, and transactional patient record isolation to avoid concurrent scheduling conflicts.",
    architectureDetails: [
      "Java OOP Architecture with Polymorphic Service Controllers",
      "Ward Occupancy Telemetry & Synchronized Bed Allocation",
      "Doctor Shift Scheduling Engine with Conflict Prevention",
      "Relational Database Schema for Patient & Medication Records",
    ],
    tags: ["Java", "OOP", "Swing / AWT", "Relational DB", "Healthcare"],
    type: "hospital",
    repoUrl: "https://github.com/Ahnaf-Zahin-Alif/Hospital-Management-System",
    metrics: {
      label: "INPATIENTS",
      value: "142 Active",
      sublabel: "94.2% Ward Occupancy",
    },
  },
  {
    id: "orion-sentinel",
    index: "03",
    badge: "DISTRIBUTED UAV MESH",
    title: "Orion Sentinel: Swarm SOS Mesh Interface",
    tagline: "Decentralized UAV Emergency Coordination & Telemetry Broadcaster",
    description:
      "Decentralized UAV swarm communication mesh for emergency coordinate broadcasting, peer-to-peer node heartbeats, and low-bandwidth telemetry synchronization.",
    extendedBreakdown:
      "Architected using C++ for low-latency node telemetry aggregation and Python for mission control visualization. Implements distributed gossip routing to maintain emergency link fidelity in disconnected environments.",
    architectureDetails: [
      "Low-Latency C++ Socket Engine with Asynchronous Telemetry Buffering",
      "Gossip Protocol for Swarm-wide Emergency Coordinate Broadcasts",
      "Real-time Telemetry Dashboard with Mapbox GIS Coordinates",
      "Heartbeat Ping Protocol Tolerant to High Packet Loss",
    ],
    tags: ["C++", "Python", "Mesh Protocol", "Telemetry", "Socket.IO"],
    type: "uav",
    repoUrl: "https://github.com/Ahnaf-Zahin-Alif",
    metrics: {
      label: "LINK INTEGRITY",
      value: "98.4% Fidelity",
      sublabel: "Latency: 12ms • 120m Alt",
    },
  },
  {
    id: "bice25-portal",
    index: "04",
    badge: "ACADEMIC PORTAL",
    title: "BICE '25 Portal & CGPA Calculator",
    tagline: "BUP ICT Academic Resource Management & GPA Forecasting Engine",
    description:
      "Comprehensive academic management portal for BUP ICT students featuring real-time credit auditing, weighted CGPA forecasting, and course syllabus repositories.",
    extendedBreakdown:
      "Built with Next.js App Router and TypeScript, providing reactive semester audits, grade point distribution forecasting, and PostgreSQL storage with sub-millisecond calculation speeds.",
    architectureDetails: [
      "Next.js App Router & TypeScript Type-Safe Calculation Models",
      "Interactive GPA Target Simulation with Dynamic Course Weighting",
      "PostgreSQL Relational Schema for Curriculums & Credit Audits",
      "Responsive Layout with Fast SSR Initial Document Delivery",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    type: "academic",
    repoUrl: "https://github.com/Ahnaf-Zahin-Alif",
    metrics: {
      label: "TARGET CGPA",
      value: "3.92 / 4.00",
      sublabel: "68 / 148 Credits Audited",
    },
  },
  {
    id: "project-tracker",
    index: "05",
    badge: "PRODUCTIVITY & WEB",
    title: "ProjectTracker: Milestone Velocity Engine",
    tagline: "Sprint Milestone Tracker & Lead-Time Analytics Pipeline",
    description:
      "Task tracking and sprint milestone engine with progress velocity analytics, lead time metrics, and priority scheduling for engineering projects.",
    extendedBreakdown:
      "Designed for agile engineering pipelines, calculating sprint burn-down rates, task completion velocity, and offline-first state synchronization.",
    architectureDetails: [
      "Asynchronous Task Queue & Priority Queue Scheduling",
      "Lead-Time Metric Generation & Sprint Completion Forecasting",
      "Zero-Dependency Local Storage Cache with Offline Persistence",
      "Clean Keyboard Navigation & Instant Status Filtering",
    ],
    tags: ["JavaScript", "Full-Stack", "Task Flow", "Analytics"],
    type: "tracker",
    repoUrl: "https://github.com/Ahnaf-Zahin-Alif/ProjectTracker",
    metrics: {
      label: "SPRINT 04",
      value: "24 / 26 Done",
      sublabel: "92% Velocity • Lead: 1.8d",
    },
  },
  {
    id: "python-suite",
    index: "06",
    badge: "ALGORITHMS & AUTOMATION",
    title: "30DaysOfPython: Algorithmic Suite",
    tagline: "Python Algorithmic Problem Solving & Automated Test Harness",
    description:
      "Comprehensive Python codebase demonstrating functional programming, data structures, automated unit testing, and algorithmic problem solutions.",
    extendedBreakdown:
      "A structured algorithmic suite covering recursion, dynamic programming, file manipulation, and complex mathematical algorithms with 100% automated test coverage.",
    architectureDetails: [
      "Modular Python Packages with PyTest Automated Verification",
      "Functional Programming Patterns & Recursive Backtracking",
      "Algorithmic Data Structures (Trees, Heaps, Stacks, Queues)",
      "Zero External Dependencies for Core Computational Logic",
    ],
    tags: ["Python", "Algorithms", "Automation", "Unit Testing"],
    type: "python",
    repoUrl: "https://github.com/Ahnaf-Zahin-Alif/30DaysOfPython",
    metrics: {
      label: "TEST COVERAGE",
      value: "30 / 30 Passed",
      sublabel: "100% Tests Passing",
    },
  },
];
