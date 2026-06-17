# WTFManuals

Field-manual launch system for turning operational chaos into usable
documentation, product pages, planning artifacts, and customer-ready operating
playbooks.

This repository is an active public project in the Lipford-Dutch org. It is the
documentation and launch-system lane: brand assets, business planning, web kit,
financial assumptions, legal templates, CRM setup, and a static interactive
assembly demo.

## Current Signal

| Area | Status |
| --- | --- |
| Project lane | Field operations and documentation systems |
| Static product page | `index.html` and `docs/index.html` |
| Launch system assets | Brand, business plan, marketing, web kit, PM, finance, HR/legal, CRM |
| Org discussion threads | Kickoff and bot-scan review are enabled |
| Next enrichment | CI validation, template coverage, and clearer product positioning |

## The Unfair Advantage

Most teams let field knowledge rot in chats, PDFs, screenshots, and scattered
checklists. WTFManuals turns that mess into a launch-ready operating system:
manuals, customer-facing pages, lead workflows, assumptions, and execution
checklists that can be reviewed, versioned, and improved like software.

## Repo Map

| Path | Purpose |
| --- | --- |
| `1_BrandAssets/` | Brand guidelines, logo, and visual source material. |
| `2_BusinessPlan/` | Business plan, audience notes, and market context. |
| `3_Marketing/` | Marketing strategy and channel planning. |
| `4_WebsiteKit/` | Website plan and starter HTML/CSS/JS kit. |
| `5_PM_Materials/` | Project timeline and milestone planning. |
| `6_Financials/` | Forecast CSV and financial assumptions. |
| `7_HR_Tax_Insurance/` | HR, tax, insurance, and compliance starting points. |
| `8_LegalDocs/` | Contract, privacy, terms, NDA, and policy templates. |
| `9_CRM_and_Leads/` | CRM setup, lead generation, automation, and scoring. |
| `index.html` | Static interactive assembly demo / marketing surface. |
| `README` | Legacy launch-system notes preserved for continuity. |

## Run Locally

Open the static page directly:

```shell
python -m http.server 8080
```

Then browse to:

```text
http://localhost:8080/
```

## Operating Standard

- Keep field-facing docs concise, useful, and versioned.
- Preserve static artifacts unless a migration plan exists.
- Convert scan findings into the bot-scan discussion, then into issues or PRs.
- Treat legal, tax, insurance, and financial templates as starting points that
  require professional review before real-world use.

## Active Discussions

- [Kickoff: next 30-day field plan](https://github.com/Lipford-Dutch/wtfmanuals/discussions/3)
- [Bot scan review: findings, false positives, and fixes](https://github.com/Lipford-Dutch/wtfmanuals/discussions/4)
