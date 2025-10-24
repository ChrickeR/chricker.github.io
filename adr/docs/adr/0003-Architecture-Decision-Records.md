---
id: 0003
title: Adopt Architecture Decision Records (ADRs) for decision documentation
date: 2025-10-22
status: Accepted
tags: [adr, governance, documentation, enablement]
domain: Engineering Enablement
subdomain: Standards & Guardrails
bounded_context: Decision Records
team: Architecture Enablement
decision_owners: [Architecture Board]
supersedes: []
superseded_by: []
related: [0001, 0002]
---

# Adopt Architecture Decision Records (ADRs) for decision documentation

> **Domain:** Engineering Enablement  
> **Subdomain:** Standards & Guardrails  
> **Bounded Context:** Decision Records  
> **Team:** Architecture Enablement  
> **Decision Owners:** Architecture Board  
> **Supersedes:** —  
> **Superseded by:** —  
> **Related:** 0001, 0002

## Context
Key architectural decisions are often hidden in chats, slides, or people’s heads.  
Without a consistent, searchable record:
- context is lost when teams or priorities change,
- decisions are repeated or contradicted,
- onboarding slows down, and
- it’s hard to trace why something was chosen.

We need a lightweight, versioned way to capture decisions so teams can make **informed decisions — not endless discussions**.

## Decision
Adopt **Architecture Decision Records (ADRs)** as the **single standard** for documenting architecture and significant technical decisions.

**Tooling & location**
- Use **Log4brains** to create, preview and publish ADRs.
- Store sources in the monorepo under: `adr/docs/adr/`.
- Publish the static site to **`/adr-l4b`** (e.g. `https://troi.se/adr-l4b/`) via CI.

**When to write an ADR**
- Any decision with cross-team impact, notable risk/cost, long-term implications, or a meaningful trade-off.
- Prefer one decision per ADR.

**Required front matter fields**
```yaml
id: <running id, e.g. 0003>
title: <clear, short decision title>
date: YYYY-MM-DD
status: Draft | Proposed | Accepted | Superseded
domain: <e.g. Engineering Enablement>
subdomain: <e.g. Standards & Guardrails>
bounded_context: <e.g. Decision Records>
team: <owning team>
decision_owners: [roles or people]
related: [other-ids]
