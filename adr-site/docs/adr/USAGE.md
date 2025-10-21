# ADR Usage Guidelines (Centralized)

We use **Log4brains** with ADRs stored **centrally** in this repository for better search, governance, and onboarding.
Individual services may reference these ADRs but do not store their own ADRs.

## Authoring
- One decision per file under `docs/adr/`
- Fill front matter: `domain`, `subdomain`, `bounded_context`, `team`, `decision_owners`, `supersedes`, `superseded_by`, `related`
- Create with: `npx log4brains adr new "Title"` then `npm run postadr`

## Workflow
`Draft → Proposed → Accepted/Rejected → Superseded`

## Search examples
`domain: Engineering Enablement`, `bounded_context: Tech Radar`, `team: Architecture Enablement`, `decision_owners: "Chief Architect"`, `supersedes: 0002`, `tags: adr`
