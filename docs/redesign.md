# Portfolio redesign — status and decisions

Working notes for the design rescue, so any session (local or cloud) can pick up where the last one stopped.
Last session: 2026-09-25.

## Working rules (from Kush)

- Work one step at a time and **show each step (screenshot) before moving on**.
- **Don't commit until Kush approves** — except when he explicitly asks.
- Keep all real content. Never invent projects, stats, tools or details. Empty → leave a visible `TODO`.
- Copy that sounds like AI or marketing: **list it for Kush to rewrite**, don't rewrite it yourself.
- No new heavy dependencies or stack changes without asking.

## Locked decisions

- **Transit line**: fixed rail on the left (desktop) with stations `01 Vaughan · 02 Projects · 03 Today · 04 Contact` (station 03 was renamed from "Now" to "Today"; the Weekends station was removed — the job is one plain row in Today); amber fill follows scroll; each station lights when its section arrives. Phones: 2px amber progress bar at the top. It is the page's one showy effect. (`src/components/TransitLine.tsx`, stations in `src/data/profile.ts`)
- **KM constellation** mark in the header (`src/components/KMConstellation.tsx`), lines redraw on hover, none for reduced motion.
- **Favicon: option A** — the "K" constellation with lines (`public/favicon.svg`).
- **Amber `#F5A623`** is the only accent: transit fill, active station, links, contact button.
- **No RBC work, projects or results anywhere.** RBC appears only as the current job title in the Today section.
- No caption on the photo. Keep the current photo for now (Kush may swap in a candid one).
- Lenis smooth scroll + full reduced-motion support.
- All site text lives in `src/data/profile.ts`.

## Chosen direction: A, "Broadsheet" (with changes)

Mockup: `docs/design/a-broadsheet-mockup.html`, screenshots `docs/design/a-broadsheet-*.png`.

- **Fonts**: **Source Serif 4** (display), IBM Plex Sans (body), IBM Plex Mono (labels).
- **Palette**: base `#12110F`, ink `#EEE7DA`, muted `#9C9387`, rules `#2C2925`, amber `#F5A623`.
- **Masthead** header with a double rule; right side shows `Toronto · Last updated <month year>` from a **manual** field in `profile.ts` (never auto-generated).
- **Hero**: big serif headline; the three problem lines as three ruled columns, each linking to its project (SIZA, TEF Simulator, ARES 2.0); `CS at York, graduating 2027.`; amber CTA "What’s the problem next to you?".
- **Projects**: no card grid, no tag pills, no generated illustrations. TEF Simulator (live) as the lead story; ARK, ARES 2.0, SIZA as ruled column briefs. Status as plain mono text. Real photos only if Kush adds them to `src/assets/real/`, otherwise text.
- **Sections**: "section flag" treatment (rule + name + right-aligned note) — not the repeated eyebrow-over-heading template.
- **Navigation = one system**: no separate header menu on desktop; the rail is the nav. **On phones, the header shows B's readout "Now at [station] · Next [station]"** plus the progress bar; the menu lists the same four stations.
- **Signature detail**: when a station arrives, its section's top rule draws left to right, synced with the dot (transform-only).

## Content answers already given

- Hero first line: keep "A client’s support team, stuck in HubSpot’s default screens."
- Past RBC roles: **title and dates only**, no descriptions (Technical Systems Analyst Co-op May–Dec 2025; Gen AI Developer Part-time Jan–May 2026). Current: Technical Systems Analyst (Co-op), Sep–Dec 2026.
- Skills: cut the tag cloud to **one plain line** of tools actually used (keep Ansible, Splunk, Grafana), fold into the Today section; drop Agents, RAG, Prompt engineering, Evaluation, Embeddings, Vector databases.
- About: TEF was built for **Kush’s brother’s** French exam, not his own prep — match the hero.
- About moved into station 01 as three lines under the hero (Mozambique; Canada since Sept 2023, Brampton then Vaughan; languages). No separate About section.
- Weekends: not emphasized. No station or section; one plain row in Today.
- Contact wording approved; a real test submission through Web3Forms arrived.
- Apostrophes and quotes are curly (’ ‘ ’) in all visible text.

## Phase 3 — status

Design system in `src/index.css` (tokens) + `tailwind.config.ts` (names only). (The dev-only `/_system` specimen was deleted at sign-off.)

Done and approved: design system · hero + masthead + one-nav (rail / phone readout / menu) · Projects (lead + briefs, `who`/`changed` lines) · Today (station 03) · Contact (Web3Forms, station 04) · project pages (no drawings/pills; "how" removed from What it does) · footer · 404.

Remaining, in order:
1. **Realism pass** — list every marketing/AI-sounding line with where it appears; Kush rewrites them himself (includes the ARES summary and "Why I built it"). Real photos from `src/assets/real/<slug>.jpg` if he adds any.
2. **Validate** — build, type-check, run; self-critique (top 3 weaknesses; does it still look AI-generated?).
3. Delete `/_system`, then deploy (`npm run deploy`) only when Kush says so. The live site is still the pre-redesign version plus the TEF wording fix.

## Audit findings (Phase 1)

All addressed in Phase 3 except copy tone (the realism pass).

## Tools

- Screenshots for review were made with Playwright (headless Chromium). Locally a copy lives in another project; in a cloud session install it on demand (`npx playwright install chromium`) if needed.
- Dev server: `npm run dev` → http://localhost:8080/kush-portfolio-nexus/
