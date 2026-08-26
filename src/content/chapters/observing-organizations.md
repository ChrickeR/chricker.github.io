---
title: "Observing Organizations"
dek: "Four places friction becomes visible — as a number if you have the time, as a question if you don't."
indicator: "All four"
effect: "Both"
editorNotes:
  - "The four numbers are diagnostic prompts, not validated metrics, and the difference matters. They come from noticing the same patterns across twenty-five years of work, not from a research programme — there is no dataset behind them, no construct validation, and no evidence that a particular reading predicts a particular outcome. Where measured research does exist it is worth going to directly: DORA's four keys (Forsgren, Humble and Kim, Accelerate) are properly operationalized and statistically validated for software delivery performance. This chapter sits deliberately upstream of those, measuring conditions rather than delivery, and nothing here carries the same evidential weight."
  - "The reflexivity here — that observing a social system is a way of acting on it — is second-order cybernetics, and the fading of the effect once attention moves on is usually filed under the Hawthorne effect. Neither is worked through in this chapter, which takes the practical consequence and leaves the theory to people who have done it properly."
  - "Decision latency is lead time applied to decisions rather than to work, and handoff loss is a restatement of flow efficiency. Both are borrowed from Lean and from the Theory of Constraints, where they have been defined and measured far more rigorously than they are here."
---

Flow is hard to look at directly and surprisingly easy to notice sideways, through the traces it leaves. The four shapes friction takes, named in The Cost of Value Never Created, are the same four worth watching for — and each one can be looked at two ways.

One is a number: deliberately narrow, collected the same way twice, useful for a trend line. The other is a question: askable in the room you're already in, with no instrumentation and no delay, useful the moment someone reaches for it. Neither replaces the other. The number is what you build a case with. The question is what you notice with, this week, before there's a case to build.

## Decision latency

**What you are actually looking at.** Elapsed time from a decision becoming necessary to that decision being made, in calendar days — the weekend is part of the wait for whoever is blocked by it. The clock starts at the first recorded request and stops when the decision reaches the people who have to act on it, not when it was made in a room nobody outside it heard about.

**How to get hold of it.** Take the last ten cross-team decisions — ten rather than five, because the distribution matters more than the average. For each, record start, stop, and how much of the gap was deliberation rather than waiting. Report the median and the worst case, never the mean. In a healthy organization deliberation and waiting are close. In most, deliberation is minutes and waiting is weeks, and the ratio between them is the actual finding.

**Or just ask.** *What did the last decision at this level cost in waiting, as opposed to in deliberation?* A bad answer sounds like "these things take time." Split the total, out loud, in the room — the ratio is usually a fact nobody there has seen before.

## Handoff loss

**What you are actually looking at.** Effort spent rebuilding context that already existed, each time work crosses a boundary between groups, in person-hours per handover. Ask the receiving team, about one specific piece of work: how long before you could act without going back to ask? Count meetings, message threads, and anything the sending team had already settled that got settled again.

**How to get hold of it.** Multiply by frequency. Four hours of reconstruction on a boundary crossed twice a year is a rounding error. The same four hours on a boundary crossed weekly is most of a full-time role, spent entirely on remembering. This is the softest of the four numbers — it relies on self-report, and people systematically under-count work that feels like helpfulness. Treat it as an order of magnitude rather than a figure.

**Or just ask.** *Is this boundary here for a reason that still holds?* A bad answer sounds like a history lesson. Reorganizations, acquisitions and one departed executive's preference all leave boundaries behind, and those boundaries outlive their reason by an average of about a decade. If nobody can name a current reason, you have found something.

## Ownership clarity

**What you are actually looking at.** Whether responsibility for a capability is unambiguous to the people around it. Name one capability. Ask five people in different parts of the organization, separately and without preamble, who owns it. Record the answers verbatim.

**How to get hold of it.** One answer, confirmed by the person named, is clear. Two answers is a boundary dispute. Three or more is where governance will grow next, whether or not anyone decides to allow it. A cheaper variant: ask a team whether they deliver *to* the business or *with* it, and listen for which preposition they reach for without thinking — ten seconds, and right more often than it has any business being.

**Or just ask.** *What must we always be able to do here — regardless of which system, team or vendor happens to be doing it now?* A bad answer sounds like a system name, a supplier, or a department. If the answer can't survive replacing the tool, it was a description of the current arrangement rather than of the capability.

## Learning cycle time

**What you are actually looking at.** Elapsed time between an outcome and a decision that changed because of it — or, honestly, a binary: did any decision change at all. Take the last significant thing that went wrong. Name the specific decision that would now be made differently, and find the date it changed. Not the date of the retrospective. The date the changed decision took effect.

**How to get hold of it.** If no such decision exists, the number isn't large — it's undefined, and the loop is open. That is the most common result and the most expensive one, because it means the organization is paying full price for the same mistake more than once.

**Or just ask.** *What changed as a result of the last thing that went wrong?* A bad answer sounds like a document, an action list, or a process that was "tightened." Push for a named decision that would now go differently, and a date it took effect. If neither exists, the same failure is still fully funded.

## What these are, and are not

The numbers are indicators, not targets. Managed as targets they get optimized directly and stop measuring anything, which is the usual fate of any organizational number that acquires a bonus. Decision latency in particular is trivially gamed by deciding faster and worse. Nor are they benchmarks — none of this has been measured across enough organizations for anyone to know what a good value would be. The number is only useful against your own earlier number, which means the first measurement is worth very little on its own, and the fourth is worth a great deal.

There is more to say about that first measurement, because it is not the limitation it looks like. Ask five people who owns a capability and you have not taken a neutral reading — you have put the question into five heads that were not holding it that morning. Someone reconsiders an approval. Someone mentions it to the person they think should own it. The reading and the intervention are the same act.

Which is the right way round. Observation here is not a probe held outside the organization; it is information moving, which is the first item in the definition this paper runs on. The question is the cheapest cultivation available — an afternoon, no mandate, no permission — and what it costs is precision in the first reading. That is a good trade. Read the trend rather than the level, expect it to move both ways, and treat a line that only improves while somebody is watching as a measurement of the watching.

The questions carry a different risk: they stop working the moment they read as an audit. Three things keep them on the useful side of that line. Ask about one concrete instance rather than the general case — *how did the last one go* produces evidence, *how do we handle these* produces a description of the process. Ask people about their own experience of waiting, not about someone else's performance; nobody is defensive about having waited. And be willing to be the answer — the question about who is waiting on you is the most valuable one on this list, and it is only safe to ask if you are visibly prepared to hear your own name.

Four is deliberately few, and each is a summary of several things this paper has spent chapters on. Ownership clarity sits on top of purpose, guardrails, and whether anyone treated the last reorganization as an architectural decision. Handoff loss sits on top of team composition and whether a capability was split across two groups. Decision latency sits on top of information reach, funding rhythm, and whether managers are still the place decisions go. Learning cycle time sits on top of everything, which is why it is usually the worst of the four.

That is the useful property of the four, measured or asked. They are not separate observations — they are one condition, visible from two places, which means you can start with either and end up in the same conversation.
