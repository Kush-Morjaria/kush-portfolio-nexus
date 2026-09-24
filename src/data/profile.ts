// Everything the site says lives in this file. Update content here, not in the page components.

export const profile = {
  name: "Kush Morjaria",
  role: "Technical Systems Analyst",
  location: "Toronto, ON",
  hero: {
    headline: "Most of what I build started as a problem someone next to me had.",
    // Set in italic inside the headline.
    emphasis: "someone next to me",
    sub: [
      "A client’s support team, stuck in HubSpot’s default screens.",
      "My brother, studying for his French exam.",
      "Me, trying to make sense of my own stock trades.",
    ],
    note: "CS at York, graduating 2027.",
    cta: "What’s the problem next to you?",
  },
  about: [
    "I grew up in Mozambique, where resources were scarce and you learned to make things work with what you had. That habit stuck: I like problems that need a working answer, not a perfect one.",
    "Today I'm finishing a B.Sc. in Computer Science at York University. Outside class and work I build tools I actually use — for my French exam prep, my daily routine, and market research.",
  ],
  email: "kushmorjaria567@gmail.com",
  // Set to e.g. "KushMorjaria-Resume.pdf" (placed in /public) once the updated resume is ready.
  resumeUrl: null as string | null,
  socials: {
    github: "https://github.com/Kush-Morjaria",
    linkedin: "https://www.linkedin.com/in/kush-morjaria",
    instagram: "https://www.instagram.com/kushmorjaria",
    x: "https://x.com/KushMorjaria",
  },
};

// The transit line down the left edge: one station per section, in page order.
export const stations = [
  { code: "01", name: "Vaughan", section: "intro" },
  { code: "02", name: "Projects", section: "projects" },
  { code: "03", name: "Now", section: "experience" },
  { code: "04", name: "Weekends", section: "weekends" },
  { code: "05", name: "Contact", section: "contact" },
];

export const weekends = {
  role: "Frames Stylist",
  org: "Dumonde Eyecare",
  note: "Part-time",
  lines: [
    "Most people can’t tell you what frames they want. They can tell you when something feels wrong.",
    "Fitting frames taught me to work out what someone needs before they can say it. It’s what I try to do with AI tools, too.",
  ],
};

export type ProjectStatus = "Live" | "In development" | "Working prototype" | "Client work";

export interface Project {
  slug: string;
  name: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  /** Public URL visitors can use. Leave null to hide the "Try it" button. */
  liveUrl: string | null;
  problem: string;
  highlights: string[];
  next?: string[];
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "tef-simulator",
    name: "TEF Simulator",
    summary:
      "A realistic, timed practice exam for the TEF Canada reading test — the tool I wanted while preparing for it myself.",
    status: "Live",
    stack: ["Node.js", "Express", "JavaScript", "pdf-parse", "Responsive UI"],
    liveUrl: "https://tef-ce-simulator.onrender.com/exam.html?exam=exam-1",
    problem:
      "Practice material for the TEF Canada Compréhension écrite comes as PDFs. Reading a PDF is nothing like sitting the real exam: no clock, no split screen, no score at the end. I wanted to rehearse under exam conditions.",
    highlights: [
      "Full exam flow: 40 questions, 60-minute countdown, and a split-screen layout with the text beside the questions",
      "Question palette with flagging, so you can skip and come back like in the real test",
      "Instant scoring with an estimated NCLC level, then a review mode that explains every answer",
      "Six mock exams, with a PDF-parsing pipeline to turn practice papers into structured question sets",
      "Works on phones: stacked panes, sticky navigation, and a viewport fix for mobile browsers",
      "Retries with backoff while a free-tier server wakes up, so the first visit doesn't just fail",
    ],
    next: ["More mock exams", "Listening comprehension section"],
  },
  {
    slug: "ark",
    name: "ARK",
    summary:
      "A shared-day accountability app for two brothers. The day is drawn as a transit map: the lines merge for what you do together and split for what you do alone.",
    status: "In development",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Postgres + RLS", "Tailwind v4", "PWA", "Vercel"],
    liveUrl: null,
    problem:
      "My brother and I already live the same day — same train, same gym, same dinner. Habit apps treat that as two separate people ticking boxes. ARK makes the shared day visible, and every block only counts if you leave evidence behind.",
    highlights: [
      "The day is drawn as a vertical transit line. Shared blocks merge into one trunk, solo blocks split into two branches, and a live 'now' marker moves down it",
      "Proof of work closes each block: a gym photo, a note on what you read, or a sentence written in French",
      "Shared blocks need both people to confirm. This is enforced in Postgres with row-level security and tightly scoped database functions",
      "Custom time axis that compresses long untracked stretches (like work hours) so the whole day fits on a phone",
      "Installable as a phone app. Proof forms work before JavaScript loads, and photos are resized in the browser to stay under upload limits",
      "Built in documented stages, with unit tests on the scheduling and diagram logic",
    ],
    next: [
      "AI negotiator: describe what broke your day and an LLM proposes a revised plan, returned as structured JSON",
      "Google Calendar sync",
      "A weekly letter written from the week's actual records",
    ],
    note: "ARK is private to its two users, so there is no public demo.",
  },
  {
    slug: "ares",
    name: "ARES 2.0",
    summary:
      "Event-driven market research. ARES reads live financial headlines, spots when one resembles a kind of event that has happened before, and reports how the related stocks moved last time.",
    status: "Working prototype",
    stack: ["Python", "ChromaDB", "Sentence Transformers", "yfinance", "Finnhub API"],
    liveUrl: null,
    problem:
      "News moves stocks in recognizable patterns: a NASA budget approval, an AI chip earnings beat. I wanted to test whether a system could recognize the type of event from a headline and recall what happened the last few times.",
    highlights: [
      "An event memory of real historical events, with the 3-day and 10-day price moves that followed, verified against market data",
      "Headlines are embedded and matched against the memory in a Chroma vector database",
      "Two-gate filtering: a keyword pre-filter by domain, then a similarity threshold calibrated on labelled headlines. This cuts false alarms like a rocket launch matching a budget story",
      "Hand-written 'causal chain' playbooks: which stocks react first, and which suppliers follow",
      "A regression test suite that must pass after any change to keywords, threshold, or data",
      "Documents its own limits: small samples, chosen after the fact, not validated out-of-sample",
    ],
    next: ["Paper-trading ledger", "Larger event memory", "Scheduled runs with emailed reports"],
    note: "A research project, not investment advice.",
  },
  {
    slug: "siza",
    name: "SIZA",
    summary:
      "An AI support assistant and help-centre dashboard built on HubSpot for a client's support team.",
    status: "Client work",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui", "FastAPI", "HubSpot API", "OAuth2"],
    liveUrl: null,
    problem:
      "The client's support team was working in HubSpot's general-purpose interface. They needed one focused place to find customers, handle tickets, and get quick answers.",
    highlights: [
      "HubSpot OAuth2 sign-in with automatic token refresh",
      "Create, search, and triage tickets; priority and category edits sync back to HubSpot",
      "Contact and deal views with search, plus an assistant that looks up tickets and contacts on request",
      "Supports multiple support pipelines",
      "Actively maintained and extended since mid-2025",
    ],
    note: "This is client work, so there is no public demo or screenshots.",
  },
];

export interface Role {
  title: string;
  org: string;
  period: string;
  current?: boolean;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Technical Systems Analyst (Co-op)",
    org: "RBC",
    period: "Sep 2026 – Dec 2026",
    current: true,
    // RBC appears as a job title only: no descriptions of RBC work, projects, or results anywhere on the site.
    points: [],
  },
  {
    title: "IT Assistant",
    org: "York University",
    period: "Sep 2024 – Apr 2025",
    points: [
      "Resolved support tickets for faculty and staff: device setup, VPN, 2FA, re-imaging, and access issues",
      "Wrote procedures and trained new student staff on the ticketing workflow",
    ],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "York University — Lassonde School of Engineering",
  period: "2023 – 2027",
  notes: ["Entrance Award, Fall 2023"],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "AI & LLMs",
    items: ["Agents", "RAG", "Prompt engineering", "Evaluation", "LangChain", "OpenAI API", "Embeddings", "Vector databases"],
  },
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
  { group: "Web", items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Tailwind CSS"] },
  {
    group: "Data & Infra",
    items: ["Postgres / Supabase", "MongoDB", "MySQL", "Docker", "Grafana", "Splunk", "Ansible", "Vault", "Vercel"],
  },
  { group: "Spoken", items: ["English", "Portuguese", "Hindi", "Gujarati", "French (learning)"] },
];
