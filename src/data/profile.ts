// Everything the site says lives in this file. Update content here, not in the page components.

export const profile = {
  name: "Kush Morjaria",
  role: "Technical Systems Analyst",
  location: "Toronto, ON",
  // Shown in the masthead. Edit by hand whenever you update the site — it is never generated.
  lastUpdated: "September 2026",
  hero: {
    headline: "Most of what I build started as a problem someone next to me had.",
    // Set in italic inside the headline.
    emphasis: "someone next to me",
    // The three problems under the headline, by project slug. The text is each project's `who` line,
    // and each links to its project.
    sub: ["siza", "tef-simulator", "ares"],
    note: "CS at York, graduating 2027.",
    // Where I'm from and the languages I speak: three short lines under the hero.
    about: [
      "I grew up in Mozambique, where you learned to make things work with what you had.",
      "Came to Canada in September 2023. Brampton first, Vaughan since this summer.",
      "I speak English, Portuguese, Hindi and Gujarati, and I’m learning French.",
    ],
    cta: "What’s the problem next to you?",
  },
  email: "kushmorjaria567@gmail.com",
  contact: {
    // The single config spot for the contact form. Web3Forms access keys are meant to be public:
    // the key only lets someone send mail to this inbox, nothing else.
    web3formsKey: "5544aa86-ada2-400a-ae7d-8f0ff778c87a",
    topics: ["Coffee chat", "Opportunity", "Project idea", "Something else"],
    fastest: "This form is the fastest way to reach me.",
  },
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
  { code: "03", name: "Today", section: "experience" },
  { code: "04", name: "Contact", section: "contact" },
];

export type ProjectStatus = "Live" | "In development" | "Working prototype" | "Client work";

export interface Project {
  slug: string;
  name: string;
  /** One line: the problem, and who had it. null shows a TODO. */
  who: string | null;
  /** One line: what changed for them. Never how it works. null shows a TODO. */
  changed: string | null;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  /** Public URL visitors can use. Leave null to hide the "Try it" button. */
  liveUrl: string | null;
  problem: string;
  /** "What it does": what someone can do with it. Never how it works. */
  highlights: string[];
  next?: string[];
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "tef-simulator",
    name: "TEF Simulator",
    who: "My brother, studying for his French exam.",
    changed: "He practises under real exam conditions, and I’ll use it next. I’m learning French too.",
    summary:
      "A timed practice exam for the TEF Canada reading test, built for my brother while he studied for it.",
    status: "Live",
    stack: ["Node.js", "Express", "JavaScript", "pdf-parse", "Responsive UI"],
    liveUrl: "https://tef-ce-simulator.onrender.com/exam.html?exam=exam-1",
    problem:
      "My brother was studying for the TEF Canada Compréhension écrite, and the practice material came as PDFs. Reading a PDF is nothing like sitting the real exam: no clock, no split screen, no score at the end. I built this so he could practise under exam conditions.",
    highlights: [
      "Full exam flow: 40 questions, 60-minute countdown, and a split-screen layout with the text beside the questions",
      "Question palette with flagging, so you can skip and come back like in the real test",
      "Instant scoring with an estimated NCLC level, then a review mode that explains every answer",
      "Six mock exams",
      "Works on phones",
    ],
    next: ["More mock exams", "Listening comprehension section"],
  },
  {
    slug: "ark",
    name: "ARK",
    who: "Me, trying to lock in for the semester, and my brother, so we’d keep each other accountable.",
    changed: "Gym, meals and sleep happen on time now, and my prime hours go to my projects. Not just a winter arc. Every arc.",
    summary:
      "A shared-day accountability app for two brothers. The day is drawn as a transit map: the lines merge for what you do together and split for what you do alone.",
    status: "In development",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Postgres + RLS", "Tailwind v4", "PWA", "Vercel"],
    liveUrl: null,
    problem:
      "My brother and I already live the same day — same train, same gym, same dinner. Habit apps treat that as two separate people ticking boxes. ARK makes the shared day visible, and every block only counts if you leave evidence behind.",
    highlights: [
      "The day is drawn as a vertical transit line. Shared blocks merge into one trunk, solo blocks split into two branches, and a live ‘now’ marker moves down it",
      "Proof of work closes each block: a gym photo, a note on what you read, or a sentence written in French",
      "Shared blocks need both people to confirm",
      "Installable as a phone app",
    ],
    next: [
      "AI negotiator: describe what broke your day and an LLM proposes a revised plan",
      "Google Calendar sync",
      "A weekly letter written from the week’s actual records",
    ],
    note: "ARK is private to its two users, so there is no public demo.",
  },
  {
    slug: "ares",
    name: "ARES 2.0",
    who: "Me, trying to make sense of my own stock trades.",
    changed: "I’m learning how markets move by building it. Next, it becomes my own trading research agent.",
    summary:
      "Event-driven market research. ARES reads live financial headlines, spots when one resembles a kind of event that has happened before, and reports how the related stocks moved last time.",
    status: "Working prototype",
    stack: ["Python", "ChromaDB", "Sentence Transformers", "yfinance", "Finnhub API"],
    liveUrl: null,
    problem:
      "News moves stocks in recognizable patterns: a NASA budget approval, an AI chip earnings beat. I wanted to test whether a system could recognize the type of event from a headline and recall what happened the last few times.",
    highlights: [
      "An event memory of real historical events, with the 3-day and 10-day price moves that followed, verified against market data",
      "Hand-written ‘causal chain’ playbooks: which stocks react first, and which suppliers follow",
      "Documents its own limits: small samples, chosen after the fact, not validated out-of-sample",
    ],
    next: ["Paper-trading ledger", "Larger event memory", "Scheduled runs with emailed reports"],
    note: "A research project, not investment advice.",
  },
  {
    slug: "siza",
    name: "SIZA",
    who: "A client’s support team, stuck in HubSpot’s default screens.",
    changed: "My first full-scale project, and my first time working with a real client.",
    summary:
      "An AI support assistant and help-centre dashboard built on HubSpot for a client’s support team.",
    status: "Client work",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui", "FastAPI", "HubSpot API", "OAuth2"],
    liveUrl: null,
    problem:
      "The client’s support team was working in HubSpot’s general-purpose interface. They needed one focused place to find customers, handle tickets, and get quick answers.",
    highlights: [
      "HubSpot sign-in",
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

// RBC appears as a job title and dates only: no descriptions of RBC work, projects, or results anywhere on the site.
export const experience: Role[] = [
  {
    title: "Technical Systems Analyst (Co-op)",
    org: "RBC",
    period: "Sep – Dec 2026",
    current: true,
    points: [],
  },
  {
    title: "Gen AI Developer (Part-time)",
    org: "RBC",
    period: "Jan – May 2026",
    points: [],
  },
  {
    title: "Technical Systems Analyst (Co-op)",
    org: "RBC",
    period: "May – Dec 2025",
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
  now: "Final year of Computer Science at York University (Lassonde)",
  graduating: "Graduating April 2027",
  award: { title: "Entrance Award", org: "York University", period: "Fall 2023" },
};

// Station 03, "Today": a plain /now-style status. Work and school come from `experience` and `education`.
export const today = {
  building: { text: "ARK, with my brother", project: "ark" },
  weekends: "Frames Stylist at Dumonde Eyecare. It’s where I learn how to talk to all kinds of people, and how to look after VIP clients.",
  // One plain line of tools actually used. No buzzword tags.
  tools: "Python, TypeScript, JavaScript, Java, SQL, React, Next.js, Node.js, Express, FastAPI, Tailwind CSS, Postgres/Supabase, MongoDB, MySQL, Docker, Grafana, Splunk, Ansible, Vault, Vercel, LangChain, OpenAI API.",
};
