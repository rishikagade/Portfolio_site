# Portfolio Site — Overview & Rationale

This document is the durable record of *why* the site is shaped the way it is.
It captures the audit, the target roles, the hiring-norms research, the factual
corrections, the featured-project tiering, and the visual-refresh direction.
Update this file when the strategy changes; log day-to-day execution in
[PROGRESS.md](./PROGRESS.md).

## Owner & context

Rishika Gade — M.S. in Business Administration (with minor in Global Business
Analytics), Virginia Tech Pamplin College of Business, May 2026. Job-hunting
across five overlapping early-career profiles:

1. **Strategy / transformation analyst** — business process analysis, operational
   strategy, stakeholder-facing recommendations.
2. **Investment / advisory analytics** — financial modeling, data-driven deal/asset
   analysis, client-facing reporting.
3. **Database-oriented software engineering** — SQL/database design, backend data
   systems, technical implementation.
4. **Applied-AI / AI-impact consulting** — translating AI capability into business
   value, technical-to-business communication, automation consulting.
5. **Data scientist / data analyst / business analyst** — end-to-end analysis,
   modeling, dashboards, honest evaluation.

Common threads recruiters screen for across all five: strong SQL/database fluency,
translating technical analysis into business language, end-to-end project
ownership, comfort with both structured data work and ambiguous problem framing,
and demonstrated impact/metrics over tools-used lists.

## 2026 hiring-norms research (summary)

- **3–5 polished, business-framed projects beat a long library.** Each needs
  problem → approach → measurable outcome and the decision the analysis informed.
  Tutorial-grade work (clean datasets, console apps) reads as academic-only.
- **SQL fluency is the #1 screened skill** for analyst and database-SWE roles
  (~57% of analyst JDs); schema/data-modeling evidence (ERDs, referential
  integrity, ETL) separates database-SWE candidates.
- **Data-scientist screens** reward end-to-end *deployed* projects a recruiter can
  click (FastAPI/Streamlit), honest model evaluation, and the "engineering half"
  of ML — not notebook-only work.
- **AI-consulting screens** look for shipped systems + human-AI workflow judgment
  (privacy-safe AI layers, quality/bias audits) and stakeholder communication.
- **Domain alignment matters**: finance/credit-risk for advisory; churn/retention
  for strategy.
- Documented GitHub repos measurably raise callback rates for <3 yrs experience.

Sources: Careery, Noetify, Dataquest, Jobright, Tredence, Data Engineer Academy,
Nucamp, Interview Kickstart, Towards Data Science.

## Audit findings

**Oversells (corrected):**
- "Work that shipped." + "production ML pipelines" section copy, combined with a
  project titled "…& MLOps Deployment Pipeline," edged toward professional-MLOps
  framing the owner forbids. Retitled to "Credit Risk Classification &
  Explainable AI"; section copy rewritten.
- Marriott kiosk outcome now says "**simulated** check-in time" (matches resume).
- Contact copy dropped "internships" (owner has graduated).

**Undersells (surfaced, resume-sourced only — nothing fabricated):**
- Database/SQL depth was invisible. Surfaced existing MongoDB + bidirectional REST
  API + Python ETL (nested JSON → analysis-ready) and DataTrust's referential-
  integrity / type-mismatch validation engine.
- AI-consulting angle: DataTrust's privacy-safe AI reporting layer (no raw data to
  any model) is exactly what 2026 AI-consulting screens want — now stated.
- Green Chef's client punchline (presented churn recommendations directly to Green
  Chef Product Manager + Commercial Strategy leadership) — the strongest strategy
  signal — now on the card.
- Skills: added AWS (S3, Lambda, IAM) and AI-assisted-development tools (resume-
  supported).

## Confirmed facts (verified with owner during planning)

- Degree name stays **"M.S. in Business Administration"** (transcript-accurate).
- **"Minor in Global Business Analytics"** is accurate — kept.
- Undergrad: **B.S. Business Information Technology @ Virginia Tech** (May 2025) and
  **B.S. Computer Science Engineering @ NMIMS** (May 2025). Not both from NMIMS.
- Hero line "client-facing experience in financial services and consumer insights"
  is accurate (capstone client work) — kept.
- Current resume is **`Rishika_Gade.pdf`**; the orphaned `Resume_RishikaGade.pdf`
  is removed from `public/assets/`.

## Hard constraints (must never be violated)

- The Credit Risk Classification project is an **independent academic-style
  technical project** — never employment, internship, or professional MLOps.
- L&T Realty internship scope is fixed: Power BI, Power Automate, API integrations,
  invoice automation, Excel/Power Query, presenting to leadership. No additions.
- No fabricated metrics, dates, or outcomes. Ambiguities are flagged, not filled.

## Featured vs. secondary tiering

**Featured (homepage), one per role profile plus the award:**
1. Green Chef Retention Intelligence Capstone — strategy / consumer insights.
2. DataTrust-AI Data Quality Auditor — shipped/deployed system; data engineering + applied AI.
3. Credit Risk Classification & Explainable AI — independent technical project; advisory + data engineering.
4. Loan Approval Prediction & Risk Segmentation — financial modeling / advisory.
5. AI + NFC Smart Check-In Kiosk (Marriott CodeFest — Honorary Mention) — external validation.

**Secondary (library page only):** Gold Price Forecasting, Netflix/COVID
correlation, Student AI-productivity viz, Music Genre KNN, Medical Calculators (C),
Hotel Management (C++). The two C/C++ console apps are the weakest 2026 signals;
kept in the library for raw-programming evidence but not featured.

## Open recommendations (not yet done)

- **Close the database-SWE gap** by publishing a dedicated SQL/schema-design case
  study (ERD, normalization, window functions) — no such project exists yet, and
  none was invented for the site.
- Resume PDF itself is not edited by this project.

## UI/UX direction

Full visual refresh within the existing stack (React 18 + Vite + Tailwind, no
router). New semantic color-token system backed by CSS variables with light/dark
mode, modern type scale, metrics-forward hero, case-study project cards with stat
chips and role-relevance tags, experience timeline, and subtle motion that
respects `prefers-reduced-motion`.
