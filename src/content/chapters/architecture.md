---
title: "The Long Way to a Yes"
dek: "The decision is small. The distance to the judgement it needs is not."
topic: "Architecture"
indicator: "Decision latency"
effect: "Reduces friction"
editorNotes:
  - "The standard this chapter settles on — that architecture should make things easier to change — has a much more rigorous statement elsewhere. *Building Evolutionary Architecture* (Neal Ford, Rebecca Parsons and Patrick Kua) makes guided, incremental change the first property an architecture should have, and then does the part I do not: it operationalizes it, through fitness functions that make the properties you care about continuously and automatically verifiable. What I am doing here is applying the same standard one level out, to organizational decisions — team boundaries, reporting lines, funding structures — where there is nothing to automate and no equivalent of a fitness function to lean on. That makes this chapter weaker as engineering and, I think, useful anyway, because the decisions that most often make an organization hard to change are not the ones in the codebase. Anyone applying the idea to systems should go to them for the mechanics."
---

*A note on the word, for anyone dropping in here. This paper uses **architecture** in a wider sense than the technical one — the deliberate shaping of how an organization is put together, of which system design is one part. A reorganization is an architectural decision. So is a funding model, a team boundary and a reporting line. [What a Capability Is, and Is Not](/organizational-flow/what-a-capability-is/) in Part I sets out the vocabulary this rests on.*

I helped build the reputation architecture still carries in some organizations. Ownership has the story: a board created to review significant decisions, which people stopped bringing decisions to, which slowed everything down while seeing less than before.

The lesson I drew was not the one I went looking for. The problem was not that we reviewed too much or too little. The problem was that architecture had been made into a *place*.

Architecture is a competence, not a role.

And it is worth being exact about what the competence is for, because the field has spent thirty years defining itself by its instruments rather than its purpose.

**Architecture is the practice of reducing structural friction.**

It is not primarily the design of technology. Nor is it the design of organizations. It is the continuous cultivation of the conditions under which value gets created.

Diagrams, target states, standards, reference models, governance forums — all of those are instruments architecture may reach for, and each is useful in the narrow case where it earns its cost. None of them is what architecture *is*. A beautiful landscape model of an organization that still cannot decide anything is the instrument delivered and the job skipped.

The moment it becomes a role, three things follow automatically. Decisions have to travel to reach it, which adds delay. The people who make decisions daily stop developing the judgement to make them well, because someone else is responsible for that. And whoever holds the role, now at a distance, starts optimizing for consistency — the only thing visible from a distance — rather than for whether the organization can change.

That last one is the quiet damage. Consistency is not a bad goal, but it is the goal you drift toward when you can see the shape of things and not the cost of changing them.

A note on who *whoever* means, because the word architect does more harm than good here. In some organizations this work sits with people carrying that title. In others it is an engineering manager, a head of product, a CTO, or a founder who has never once thought of themselves as doing architecture. In smaller companies it is often whoever happens to have the longest memory of why things are the way they are. The title varies; the work does not. Somebody in every organization is already deciding which boundaries hold, which decisions get escalated, and what becomes expensive to reverse — deliberately or, more often, as a side effect of deciding something else.

Which is the argument for spreading the competence rather than concentrating it. If this were genuinely a specialist function, keeping it in one department would be defensible. It isn't. The decisions that most shape whether an organization can change are made in budget rounds, in reorganizations, in board meetings about acquisitions and operating models — rooms where nobody present would describe the conversation as architectural, and where the cost of getting it wrong takes two years to show up and is attributed to something else by then. That competence belongs in those rooms, held by whoever is already sitting in them.

Here is the standard I'd use instead, and it's the only one I've found that survives contact with a real organization:

**Architecture should make the organization, and what it builds, easier to change.**

Worth being precise about what kind of claim that is, because it sits at a different level than "reducing structural friction" above, not in competition with it. Reducing friction is the purpose — the reason the competence exists at all, so more of what the organization spends actually reaches value. Easier to change is the test applied to one decision at a time, because it is the sharpest question I have found for telling in advance whether a specific choice is moving toward that purpose or quietly working against it.

None of this makes security, compliance or consistency optional, and I don't want to be read as saying it does — a design that fails them isn't a design, whatever else it gets right. What changes is where they sit. They are constraints any real solution has to survive, settled the way the guardrails chapter in Part III describes. They are not what the practice organizes around. An architecture optimized for consistency or compliance and nothing else will produce both, reliably, right up until the organization needs to become something those constraints didn't anticipate — which is the one thing every organization eventually needs to do.

That standard is unusually testable. Take any architectural decision, in the broad sense this paper uses — a system choice, a team boundary, a reporting line, a funding structure — and ask what it makes harder to reverse. Then ask whether the thing being made irreversible is one you're confident enough about to be stuck with.

Most bad architecture isn't wrong so much as premature — a reasonable decision made irreversible before anyone knew enough to make it permanent.

And this is where the competence has to live in the teams rather than above them, because the person closest to the work is usually the only one who can see which decisions are cheap to change and which quietly aren't. That judgement doesn't transfer through a review meeting. It has to be grown where the decisions are made.

Which brings the chapter to the claim underneath all of this, and the one Part III is built on: **architecture is not the practice of designing solutions. It is the practice of cultivating the conditions where good solutions keep emerging.** If architecture is cultivation rather than design, it was never going to be a place solutions get sent to.

One boundary is worth drawing before this goes any further, because a chapter this expansive about architecture invites the wrong conclusion. **Architecture can influence Organizational Flow. It cannot own it.** Flow is produced by the organization as a whole — through decisions made in leadership, in teams, in how capabilities are funded and who is trusted to decide. Architecture is one competence among several that shape those conditions, and a paper that let it stand in for the whole would be making the same mistake as the board in the story at the top of this chapter.

A decision that has to travel to find its judgement will arrive late, changed, or not at all.

What moves this is shortening the journey by moving the judgement rather than speeding up the queue — writing down the answer once with the reasoning attached, being present in the rooms that do not think of themselves as architectural, and converting recurring reviews into things a team can carry. Governance asks *was this decision approved*. Architecture, done as a competence, asks *are the people making these decisions equipped to make them well* — and the slow work of making that true is what Part III is for.

*Cultivating this: Equipping, Not Reviewing, in Part III.*
