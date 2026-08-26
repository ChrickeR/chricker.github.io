---
title: "The Meter Was Always Running"
dek: "What it costs to find your way around an organization, paid by people for decades and only now showing up on an invoice."
topic: "Coordination cost"
indicator: "Handoff loss"
effect: "Reduces friction"
editorNotes:
  - "The estimate of time spent on coordination is from Asana's Anatomy of Work Index (2021 and later editions): self-reported survey data from a vendor of coordination software, cited here for its direction rather than its precision."
  - "The agent figures are from Anthropic's engineering write-up of its multi-agent research system (June 2025), which reports roughly fifteen times the token use of a chat and that token usage explained most of the performance variance in its evaluation. The phrase about the smallest set of high-signal tokens is from Anthropic's Effective context engineering for AI agents (September 2025)."
  - "The idea that a person and an agent pay the same coordination cost in different currencies, and that the work harness exists to make that cost smaller rather than to carry more of it, is this paper's own."
---

Every organization charges its own people for finding their way around it. The charge has never appeared anywhere, because people pay it in a currency nobody counts.

We build processes to help people work. Then governance, so the processes are followed. Then handoffs, because the work has to cross the boundaries we drew. Then coordination, because the handoffs lose things. Then meetings, to do the coordinating, and controls, to make sure the meetings reached the right conclusion. Each one was added for a sensible reason by someone trying to help.

Somewhere along the way the organization starts spending a significant share of its capacity navigating itself rather than creating value. Nobody decided that. It accumulated, one reasonable addition at a time, and it never showed up as a line anyone could point at, because it looks like work. A meeting looks like work. Waiting for an answer looks like being busy with something else.

## The same bill, paid two ways

Put a person and an AI agent in front of the same piece of work, inside the same organization, and they pay for the same friction in different currencies.

A person pays like this: an extra handoff, then a meeting, then waiting, then a question, then coordination.

An agent pays like this: an extra handoff, then context, then a tool call, then reasoning, then tokens.

It is the same route through the same organization. The person's version is spread across a week and absorbed into a calendar that was already full, which is why it has never been measured. The agent's version happens in seconds and is itemized, which is why it suddenly can be.

The human side has been estimated, roughly, for years. Asana's Anatomy of Work surveys put the share of time knowledge workers spend on what they call *work about work* — chasing status, searching for information, switching between tools, meeting about the work — at around sixty percent, and higher in large organizations. It is self-reported, and it comes from a company that sells a coordination tool, so I would not lean on the exact figure. The direction is hard to argue with.

The agent side is newer and far more precise. When Anthropic described the research system it built from several cooperating agents, it reported that such systems used around fifteen times as many tokens as an ordinary chat, and that in its evaluation token usage alone explained most of the difference in how well they performed. It also said plainly that work where every agent needs the same context, or where the agents depend heavily on each other, was not yet a good fit. That is a description of coordination cost, written by engineers, with a number on it.

## Friction almost has a meter

For as long as this paper has been arguing about friction, the hardest part has been getting anyone to see it. It hides in waiting, in rework, in the phrase *these things take time.* The four indicators exist because friction does not report itself.

AI does not remove that problem. It makes the cost much easier to observe. An agent that needs forty steps where four would do is not being inefficient. It is reporting, precisely, how much of the organization it had to navigate before it could act. That is the same number a new colleague would have produced in their first month, if anyone had thought to count.

I say *almost* a meter on purpose. The reading is honest only for as long as nobody is paid to lower it. The moment token spend becomes a target, people will start trimming the context agents are given rather than the friction that made the context necessary, and the meter will fall while the organization stays exactly as hard to navigate. That is the same failure as every other single number this paper declines to add up, and it arrives faster here because the number is so tempting.

## The question turns round

The natural reaction to an agent that keeps going round is to give it more. More documents, more access, more of the organization loaded in before it starts. It helps, a little, the way a longer onboarding helps a new hire. It also treats the symptom as the design goal.

The better question runs the other way. Not *how much context can we give the agent?* but:

**How little context does someone need to make a good decision?**

The people who build agents have arrived at the same place from the other direction. Anthropic's guidance on context engineering describes the goal as finding *the smallest possible set of high-signal tokens* that makes the outcome likely — not the largest set that fits.

The question applies to people exactly as much as to agents, and it is the one this paper has been asking all along under other names. Decision latency falls when the decision sits close to the information. Handoff loss falls when fewer boundaries sit between the people who know and the people who act. Ownership clarity is, among other things, the answer to the first question anyone needing context asks: who do I ask?

An organization where little context is needed is not one that has written everything down. It is one where most of the things that would otherwise need explaining have been decided, owned, and kept where the work is.

## The harness, and its other side

People and agents need the same surrounding structure to act with confidence: a clear outcome, the right context, boundaries, decision rights, tools, and feedback on what actually happened. I have started calling that structure a work harness — the organization, seen from the point of view of the one doing the work. The difference between a person and an agent is in how each uses it, not in what the organization has to provide. The work harness is the bridge between organizational intent and execution — regardless of whether the actor is human or artificial.

**The purpose of the work harness is to reduce the cost of navigating the organization — for people and agents alike.**

Which gives the idea an interesting other side. The point is not to build more harness. A thick harness is a sign of an organization that takes a great deal of navigating: every rule, every checkpoint and every piece of mandatory context is there because something around it was unclear. The harness worth having is the thinnest one that still lets someone act well, and it gets thinner only one way — by settling the things that made it thick.

That is why I do not think the arrival of agents is mainly a question about agents. It is the first time the cost of an organization's structure has shown up in a form that can be read off an invoice. The organizations that read it as a bill for their AI will try to spend less on AI. The ones that read it as a bill for their structure have been handed the most precise diagnostic they have ever had.

*Cultivating this: Reducing Friction, in Part III.*
