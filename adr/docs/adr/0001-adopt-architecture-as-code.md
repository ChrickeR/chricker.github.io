---
id: 0001
title: Adopt Architecture-as-Code for Decisions and Knowledge
date: 2025-03-01
status: Accepted
tags: [aac, governance, enablement]
domain: Engineering Enablement
subdomain: Architecture
bounded_context: Architecture-as-Code
team: Architecture
decision_owners: [Chief Architect, Architecture Board]
supersedes: []
superseded_by: []
related: [0002]
---

> **Domain:** Engineering Enablement  
> **Subdomain:** Architecture-as-Code  
> **Bounded Context:** Architecture Knowledge Base  
> **Team:** Architecture Enablement  
> **Decision Owners:** Chief Architect  
> **Supersedes:** —  
> **Superseded by:** —  
> **Related:** 0002

## Context
Architecture knowledge is scattered across slides and chats. We need a single, versioned source of truth.

## Decision
Adopt **Architecture-as-Code (AaC)**: store architecture artefacts in version control, reviewed via pull requests, and published as static sites.

## Consequences
- Positive: shared understanding, faster onboarding
- Negative: requires minimal tooling ramp-up
