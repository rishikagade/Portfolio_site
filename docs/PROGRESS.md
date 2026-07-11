# Portfolio Site — Progress Log

Running log of what changed and why. Newest entries at the top. Each entry dated.
See [OVERVIEW.md](./OVERVIEW.md) for the durable strategy and rationale.

## 2026-07-11 — Hero: replaced metric tiles with "What I do" focus areas

- Owner felt a KPI number row (37K records / 0.894 AUC / Marriott mention) read as
  vanity stats on a personal portfolio (the metrics already live on the project
  cards). Replaced the `heroStats` tiles — and the now-redundant "Core toolkit" chip
  row — with four capability areas (Analytics & Modeling, BI & Dashboards, Data
  Engineering, AI & Automation), mirroring the Skills section. Credentials block
  kept. `HomeSection.jsx` only.

## 2026-07-11 — Palette changed to "Violet + Amber"

- Owner disliked the blue. Replaced the Cool Blue + Cyan values in `src/index.css`
  with **Violet + Amber**: violet-600/400 brand, amber-600/400 accent (stat
  numbers), on plum-tinted neutrals. Values-only change to the CSS variables
  (`:root` + `:root.dark`); the `from-brand to-accent` divider is now violet→amber.

## 2026-07-11 — Follow-up: palette swap + multi-category tagging

- **Palette → "Cool Blue + Cyan"** (owner-selected, replaces Indigo + Teal).
  Values-only change to the CSS variables in `src/index.css` (`:root` +
  `:root.dark`); no component/config/markup edits since everything consumes the
  semantic tokens. Blue-600/400 brand, cyan-700/400 accent (stat numbers), on
  cool-navy neutrals. The `from-brand to-accent` divider is now blue→cyan.
- **Multi-category tagging**: `projectsData.js` `category: 'X'` →
  `categories: [...]` on all 11 projects (first entry = displayed primary label,
  so card eyebrows are unchanged). Genuine overlaps added across the board:
  - Finance filter now includes Credit Risk + Loan Approval (was Netflix only) —
    surfaces the strongest quant-finance work for the advisory profile.
  - Programming filter now includes DataTrust, Credit Risk, Marriott, Music
    (was only the two C/C++ console apps) — stronger SWE evidence for the
    database-SWE profile.
  - Green Chef +Product Analytics (churn/retention); Student Behaviors
    +Business Analytics. Gold stays Forecasting-only (Finance excluded per owner).
  - Filters updated to `.categories.includes(activeCategory)` in
    `ProjectsSection.jsx` and `AllProjectsPage.jsx`; `ProjectCard` reads
    `categories[0]` for the eyebrow. Featured/"All" view unchanged.

## 2026-07-11 — Full refresh implemented (Phases A–C)

**Phase A — factual & copy fixes**
- `SkillsSection.jsx`: "Business Intellegence" → "Business Intelligence"; added
  AWS (S3, Lambda, IAM) and a new "AI & Automation" category (Generative AI,
  AI-assisted development, Prompt Engineering) — all resume-sourced.
- `AboutSection.jsx`: degree kept as "M.S. in Business Administration"; undergrad
  now correctly splits into B.S. BIT @ Virginia Tech (3.88, May 2025) and B.S. CSE
  @ NMIMS (May 2025); minor lines kept (Global Business Analytics, Data Science).
- `HomeSection.jsx`: role positioning broadened to "Data Scientist & Business
  Analyst"; kept the client-facing financial-services line (per owner); degree
  wording correct.
- `ExperienceSection.jsx`: "Teaching Assistant" → "Graduate Teaching Assistant";
  L&T Realty scope unchanged; ordered most-recent-first.
- `ContactSection.jsx`: dropped "internships" (owner has graduated).
- `projectsData.js`: retitled "Credit Risk … MLOps Deployment Pipeline" →
  "Credit Risk Classification & Explainable AI", labeled "Independent project",
  dropped the standalone MLOps tag; added "simulated" to the Marriott check-in
  claim; surfaced MongoDB/REST/ETL (data-engineering) and the privacy-safe AI
  layer (AI-consulting) and Green Chef's client-presentation punchline.
- Deleted orphaned `public/assets/Resume_RishikaGade.pdf`; site serves
  `Rishika_Gade.pdf` (owner-confirmed current).

**Phase B — re-tiering & case-study depth**
- Featured order fixed to one anchor per role profile + the award: Green Chef →
  DataTrust-AI → Credit Risk → Loan Approval → Marriott kiosk.
- Added `timeframe`, `roleTags`, and `stats` (metric chips) to every project;
  homepage now shows all 5 featured (spotlight + 2×2 grid).

**Phase C — full visual refresh**
- New semantic color-token system (CSS variables) with light + **dark mode**;
  `tailwind.config.js` `darkMode:'class'`, no-flash init script in `index.html`,
  `ThemeToggle` in the header (persists to localStorage, honors OS preference).
- Rewrote `index.css` (tokens, `.surface-card`, `.chip`, `.role-tag`,
  `.stat-value`, nav, gradient divider, motion).
- Metrics-forward hero, case-study `ProjectCard` with stat chips + role tags,
  experience timeline, 4-category skills grid, refreshed buttons/footer.
- `useScrollReveal` hook: IntersectionObserver + MutationObserver (handles
  filtered/route-swapped cards), respects `prefers-reduced-motion`.

**Verification**
- `npm run build` clean (49 modules). Dev server boots, serves 200.
- Greps confirm: no "MLOps"/"production ML"/"Intellegence"/"internships"; no
  stale palette classes; "simulated", "Business Intelligence", correct degree and
  "Graduate Teaching Assistant" all present.
- Not yet done: manual visual pass in a real browser (light/dark, 375px mobile) —
  recommend the owner eyeball it via `npm run dev`.

## 2026-07-11 — Kickoff

- Created `docs/OVERVIEW.md` (audit, hiring-norms research, tiering, constraints)
  and this progress log.
- Plan approved: Phase A (factual/copy fixes) → Phase B (project re-tiering &
  case-study depth) → Phase C (full visual refresh with dark mode).

### Pending / open questions for Rishika
- Consider publishing a dedicated SQL/schema-design case-study repo to close the
  database-SWE gap (no such project exists; none was invented).
- Resume PDF (`Rishika_Gade.pdf`) is served as-is; not edited by this project.
