# 🧭 Architecture Decision Records (ADR) — Guide & CLI Tutorial

Architecture Decision Records (ADRs) document **key technical and architectural decisions**, the reasoning behind them, and their consequences.  
They provide a transparent and lightweight way to ensure that decisions are understood, traceable, and evolve with your system.

## 💡 Best Practices

✅ Keep each ADR about one clear decision.
✅ Capture reasoning, trade-offs, and alternatives — not just the conclusion.
✅ Record decisions when they happen — not retroactively.
✅ Use clear statuses: Draft → Proposed → Accepted → Superseded.
✅ Link related ADRs using related:, supersedes:, and superseded_by: fields.
✅ Never delete ADRs — supersede them to preserve history.
✅ Use pull requests for discussion and approval.
✅ Keep ADRs concise and easy to read.
✅ Store supporting diagrams or assets next to the ADR file if needed.
✅ Treat ADRs as code — reviewed, versioned, and published.

## Why ADR
Architecture knowledge often disappears into slides, chats, and memory. 
When teams or technologies change, context is lost, and decisions are repeated or contradicted.

> **Good architecture isn’t about getting every decision right — it’s about making the reasoning visible.**

ADRs ensure:
• Transparency — everyone knows why choices were made.
• Continuity — new team members understand the reasoning.
• Accountability — clear ownership and decision status.
• Traceability — decisions can be followed over time.

The goal is informed decisions — not discussions.

## CLI Tutorial
We use Log4brains to create, preview, and publish ADRs easily.
Each ADR is a simple Markdown file, managed in version control and published as a static site.



### Create a New ADR
```bash
cd adr
npx -y log4brains@latest adr new
```
