# Portfolio redesign — status and decisions

Working notes for the design rescue, so any session (local or cloud) can pick up where the last one stopped.
Last session: 2026-09-24.

## Working rules (from Kush)

- Work one step at a time and **show each step (screenshot) before moving on**.
- **Don't commit until Kush approves** — except when he explicitly asks.
- Keep all real content. Never invent projects, stats, tools or details. Empty → leave a visible `TODO`.
- Copy that sounds like AI or marketing: **list it for Kush to rewrite**, don't rewrite it yourself.
- No new heavy dependencies or stack changes without asking.

## Locked decisions

- **Transit line**: fixed rail on the left (desktop) with stations `01 Vaughan · 02 Projects · 03 Now · 04 Weekends · 05 Contact`; amber fill follows scroll; each station lights when its section arrives. Phones: 2px amber progress bar at the top. It is the page's one showy effect. (`src/components/TransitLine.tsx`, stations in `src/data/profile.ts`)
- **KM constellation** mark in the header (`src/components/KMConstellation.tsx`), lines redraw on hover, none for reduced motion.
- **Favicon: option A** — the "K" constellation with lines (`public/favicon.svg`).
- **Amber `#F5A623`** is the only accent: transit fill, active station, links, contact button.
- **No RBC work, projects or results anywhere.** RBC appears only as the current job title in the Now section.
- No caption on the photo. Keep the current photo for now (Kush may swap in a candid one).
- Lenis smooth scroll + full reduced-motion support.
- All site text lives in `src/data/profile.ts`.

## Chosen direction: A, "Broadsheet" (with changes)

Mockup: `docs/design/a-broadsheet-mockup.html`, screenshots `docs/design/a-broadsheet-*.png`.

- **Fonts**: display serif **TBD — Kush picks between Newsreader and Source Serif 4** (see `docs/design/font-compare.png`). Body IBM Plex Sans, labels IBM Plex Mono.
- **Palette**: base `#12110F`, ink `#EEE7DA`, muted `#9C9387`, rules `#2C2925`, amber `#F5A623`.
- **Masthead** header with a double rule; right side shows `Toronto · Last updated <month year>` from a **manual** field in `profile.ts` (never auto-generated).
- **Hero**: big serif headline; the three problem lines as three ruled columns, each linking to its project (SIZA, TEF Simulator, ARES 2.0); `CS at York, graduating 2027.`; amber CTA "What’s the problem next to you?".
- **Projects**: no card grid, no tag pills, no generated illustrations. TEF Simulator (live) as the lead story; ARK, ARES 2.0, SIZA as ruled column briefs. Status as plain mono text. Real photos only if Kush adds them to `src/assets/real/`, otherwise text.
- **Sections**: "section flag" treatment (rule + name + right-aligned note) — not the repeated eyebrow-over-heading template.
- **Navigation = one system**: no separate header menu on desktop; the rail is the nav. **On phones, the header shows B's readout "Now at [station] · Next [station]"** plus the progress bar; the menu lists the same five stations.
- **Signature detail**: when a station arrives, its section's top rule draws left to right, synced with the dot (transform-only).

## Content answers already given

- Hero first line: keep "A client’s support team, stuck in HubSpot’s default screens."
- Past RBC roles: **title and dates only**, no descriptions (Technical Systems Analyst Co-op May–Dec 2025; Gen AI Developer Part-time Jan–May 2026). Current: Technical Systems Analyst (Co-op), Sep–Dec 2026.
- Skills: cut the tag cloud to **one plain line** of tools actually used (keep Ansible, Splunk, Grafana), fold into the Now section; drop Agents, RAG, Prompt engineering, Evaluation, Embeddings, Vector databases.
- About: TEF was built for **Kush’s brother’s** French exam, not his own prep — match the hero.

## Phase 3 plan (after the font pick)

1. Design system: CSS variables for colour, spacing and a type scale (large display/body contrast); remove one-off values.
2. Redesign in place, showing each before the next: hero → Projects → Now → Weekends → Contact → project pages → footer.
3. Fold in the earlier list:
   - **Now section (station 03)**, plain like a /now page: RBC title + dates only; final year CS at York (Lassonde), graduating April 2027; building ARK with my brother; weekends: Frames Stylist at Dumonde Eyecare; `Last updated: [month year]` from `profile.ts`, edited manually.
   - **Contact**: short form (name, email, "What’s this about?" = Coffee chat / Opportunity / Project idea / Something else, message) via **Web3Forms**; access key lives once in `profile.ts`; Web3Forms honeypot; real success/error from the actual response; line saying it’s the fastest way to reach me; below: email with one-click copy, LinkedIn, GitHub.
   - **Realism pass**: real photos from `src/assets/real/` where provided, plain text elsewhere; list every marketing/AI-sounding line for Kush.
   - Project/experience copy: one line on the problem and who had it, one on what changed. Never explain how it works.
4. Validate: build, type-check, run; then a self-critique (top 3 weaknesses, and whether it still looks AI-generated).

## Audit findings still open (Phase 1)

Repeated section template; flat 3-step type scale; trendy default fonts; shadcn rounded cards; evenly spread empty space; header menu disagrees with the rail; Experience timeline competes with the rail; identical fade-up on everything; faint rail labels; photo as floating rounded card; 2×2 identical project cards; fake UI drawings (and ARK drawing breaks the one-accent rule); tag pills everywhere; skills tag cloud; project pages explain *how*.

## Tools

- Screenshots for review were made with Playwright (headless Chromium). Locally a copy lives in another project; in a cloud session install it on demand (`npx playwright install chromium`) if needed.
- Dev server: `npm run dev` → http://localhost:8080/kush-portfolio-nexus/
