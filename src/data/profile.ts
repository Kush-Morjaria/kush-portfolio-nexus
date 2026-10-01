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
  /** The intro under the title on the project page. null shows a TODO. */
  summary: string | null;
  status: ProjectStatus;
  stack: string[];
  /** Public URL visitors can use. Leave null to hide the "Try it" button. */
  liveUrl: string | null;
  /** Public source code. Leave out for private repos. */
  codeUrl?: string;
  /** "Why I built it". null shows a TODO. */
  problem: string | null;
  /** "What it does": what someone can do with it. Never how it works. */
  highlights: string[];
  next?: string[];
  note?: string;
}

// Shown in this order, all the same size. Roughly biggest to smallest.
export const projects: Project[] = [
  {
    slug: "ark",
    name: "ARK",
    who: "Me, trying to lock in for the semester, and my brother, so we’d keep each other accountable.",
    changed: "Gym, meals and sleep happen on time now, and my prime hours go to my projects. Not just a winter arc. Every arc.",
    summary:
      "An app my brother and I use to plan our days and keep each other accountable.",
    status: "In development",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Postgres + RLS", "Tailwind v4", "PWA", "Vercel"],
    liveUrl: null,
    problem:
      "I wanted to lock in this semester. Everyone talks about a winter arc, but I wanted something that keeps me disciplined through every arc. My brother and I share most of our day, same train and same gym, so I built it for both of us to keep each other accountable.",
    highlights: [
      "The day is drawn as a vertical transit line. Shared blocks merge into one trunk, solo blocks split into two branches, and a live ‘now’ marker moves down it",
      "Each block only counts when you add proof, like a gym photo or a sentence in French.",
      "Shared blocks need both people to confirm",
      "Installable as a phone app",
    ],
    next: [
      "AI negotiator: describe what broke your day and an LLM proposes a revised plan",
      "Google Calendar sync",
      "A weekly letter written from the week’s records.",
    ],
    note: "ARK is private to its two users, so there is no public demo.",
  },
  {
    slug: "siza",
    name: "SIZA",
    who: "A client’s support team, stuck in HubSpot’s default screens.",
    changed: "My first full-scale project, and my first time working with a real client.",
    summary:
      "A support assistant and dashboard I built on HubSpot for a client’s support team.",
    status: "Client work",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui", "FastAPI", "HubSpot API", "OAuth2"],
    liveUrl: null,
    problem:
      "This was my first full project for a real client. Their support team was stuck in HubSpot’s default screens and needed something simpler for handling customers and tickets.",
    highlights: [
      "HubSpot sign-in",
      "Create, search, and triage tickets; priority and category edits sync back to HubSpot",
      "Contact and deal views with search, plus an assistant that looks up tickets and contacts on request",
      "Supports multiple support pipelines",
      "I still work on it with the client.",
    ],
    note: "This is client work, so there is no public demo or screenshots.",
  },
  {
    slug: "ares",
    name: "ARES 2.0",
    who: "Me, trying to make sense of my own stock trades.",
    changed: "I’m learning how markets move by building it. Next, it becomes my own trading research agent.",
    summary:
      "A stock research tool I’m building for myself, to learn how news moves the market.",
    status: "Working prototype",
    stack: ["Python", "ChromaDB", "Sentence Transformers", "yfinance", "Finnhub API"],
    liveUrl: null,
    problem:
      "I wanted to learn about stocks and trading, and building something is how I learn best. The question behind it: when news breaks, has something like it happened before, and how did the stocks move then?",
    highlights: [
      "An event memory of real historical events, with the 3-day and 10-day price moves that followed, verified against market data",
      "Hand-written ‘causal chain’ playbooks: which stocks react first, and which suppliers follow",
      "It’s upfront about its limits. The samples are still small, and the results haven’t been tested on new data yet.",
    ],
    next: ["Paper-trading ledger", "Larger event memory", "Scheduled runs with emailed reports"],
    note: "A research project, not investment advice.",
  },
  {
    slug: "website",
    name: "This website",
    who: "Me, with a resume link that led to a class assignment instead of my actual work.",
    changed: "Recruiters can see what I’ve built, even the projects I can’t open-source, and reach me in one step.",
    summary: "My portfolio, and the link on my resume.",
    status: "Live",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Lenis", "Web3Forms", "GitHub Pages"],
    liveUrl: null,
    codeUrl: "https://github.com/Kush-Morjaria/kush-portfolio-nexus",
    problem:
      "It started as an ePortfolio for a co-op course, built with Lovable. I wanted something I’d actually put on my resume, so I rebuilt it around the projects I’ve worked on and the people I built them for.",
    highlights: [
      "Shows every project, including the ones whose code is private",
      "Lets you message me straight from the page",
      "Works on a phone as well as a laptop",
    ],
  },
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
      "40 questions and a 60-minute timer, like the real exam, with the passage and questions side by side.",
      "Question palette with flagging, so you can skip and come back like in the real test",
      "Scores you right away with an estimated NCLC level, and explains every answer after.",
      "Six mock exams",
      "Works on phones",
    ],
    next: ["More mock exams", "Listening comprehension section"],
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
  tools: "Python, TypeScript, LangChain, OpenAI API, FastAPI, React, Next.js, Postgres/Supabase, Docker, ChromaDB, sentence-transformers, Ansible.",
};
