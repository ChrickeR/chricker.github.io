---
title: "Settling the Few Things"
dek: "Cultivating the small set of decisions nobody should have to make twice."
topic: "Guardrails"
indicator: "Decision latency"
effect: "Both"
editorNotes:
  - "The decision records described here are Architecture Decision Records, and the format comes from Michael Nygard's 2011 post *Documenting Architecture Decisions* — one file per decision, written at the time, kept next to the code. It has barely needed changing since, and I have never had a reason to improve on it. What this chapter adds is only where it sits in the argument: an ADR is the cheapest guardrail available, because it settles a question without removing any authority from the people closest to the work."
---

Handing a team a capability without also settling the principles they can lean on doesn't produce autonomy. It produces a team guessing at what leadership actually wants — slower and considerably more anxious than asking outright would have been, and harder to spot, because from the outside it looks like empowerment working.

I have done this to people, believing I was giving them room. What I was actually giving them was the job of reverse-engineering my preferences from whatever I had reacted to last. Guardrails are what make ownership safe to take.

They are not fences, whatever the word sounds like. A fence stops you from crossing a line. A guardrail tells you where the road is, so you can drive fast without needing anyone's permission to take the next turn. A team that knows the boundaries can take real risks inside them, challenge ideas, and recover from mistakes without the mistake becoming a crisis. Constraints, chosen well, don't reduce creativity. They give it somewhere to push against.

None of that removes the need for courage. It changes what courage costs — the difference between a call you can defend by pointing at something agreed, and one you are making entirely on your own credibility.

Which leaves the practical question. If architecture isn't a review board and isn't a folder of diagrams, what does it actually leave behind?

A short list of decisions everyone else no longer has to make.

That is what a guardrail is. Not a rule to be complied with — a question that has been settled once, deliberately, so a team starting something new inherits the answer instead of relitigating it on a Tuesday.

The first one on my list has nothing to do with technology, and I did not come up with it. I picked it up from the way AWS talked about theirs, and it fits in a sentence: do what is best for the company.

That reads like something printed on a wall and ignored, right up until you follow it properly. It holds regardless of whether the honest answer takes power away from your department, shrinks the budget you are responsible for, hands a capability to a team that is not yours, or — followed far enough — removes the reason your own role exists.

I have made a number of those calls, and they are not the enjoyable part of the work. Recommending the thing that made my own function smaller. Arguing against the direction my department had already committed to and half-announced. Telling a leadership team that the platform we had spent a year on was the wrong place to keep going. Moving against the stream in a room where everyone had good reasons to keep swimming with it, several of them mine.

That is the job, though. Anyone who only recommends what is comfortable for the part of the organization they happen to sit in is doing advocacy, whatever the title on the recommendation says. The whole reason the competence is worth having is that someone has to hold the entire picture, including the parts of it that are inconvenient for them personally.

Everything after that one is technical, and matters considerably less. Which languages we write in. Which cloud we run on. How we use AI, and where we have agreed not to. How a decision gets recorded. Individually none of these are interesting. What makes them guardrails is that they were settled deliberately rather than by whoever happened to start first.

The test for what belongs on that list is narrower than the one most organizations apply: standardize where variation costs more than it buys, and leave it open everywhere else. A second language is not a problem in itself. A second language nobody else can maintain, chosen by one team in an afternoon, is a hiring constraint and an on-call problem two years out. A second cloud needs a reason strong enough to justify the complexity it introduces. A second way of writing decisions down is almost never worth it, and costs nearly nothing to prevent.

The failure mode is a preference wearing the costume of a standard. Most arguments I have had about guardrails were not really about the guardrail — they were about someone's taste, defended in the language of consistency, because consistency is the one thing that sounds unarguable. The question that settles it is what it actually costs when teams choose differently. If the honest answer is "not much," it was never a guardrail.

That last technical one — how a decision gets recorded — deserves more than a line, because it has quietly become the only architecture documentation I still care about.

Not diagrams, which go stale the week after they are drawn. Architecture decision records: what we decided, why, what we considered instead, and what it costs us — written down at the time by whoever decided it, in markdown files sitting in the repository next to the code. A decision record nobody can find is the same as no decision record.

Three things come out of that, and none of them are documentation for its own sake. Decisions stop being re-opened, because the reasoning is available to anyone who wants to challenge it, and most people, having read it, don't. New people onboard against the reasoning rather than against the current state, which is a far quicker route to being useful than inferring intent from whatever happens to exist. And you can watch the architecture grow — read them in order and you have the actual history of how the thing came to be this shape, rather than an archaeology exercise conducted by whoever is left.

The usual objection is that writing them is a chore, and I think that mistakes which part is the work. Making the decision is the job. Writing it down afterwards takes ten minutes.

Those ten minutes buy months. The alternative is passing every decision along mouth to mouth, and transmission like that drifts — each person keeps a slightly different version, fills the gaps with their own assumptions, and passes on the composite in perfectly good faith. Nobody is careless. The discrepancies simply accumulate, unnoticed, until two teams find they have spent a quarter building against different understandings of something everyone was certain had been settled.

The reason to keep the list short is that every item on it is a decision taken away from the people closest to the work. That is worth doing for the few things where it genuinely pays, and corrosive everywhere else.

And none of it holds if the guardrails were handed down rather than built together. Principles a team didn't help write are someone else's opinion wearing a badge of authority. Principles a team co-created are the team's own commitments, restated — and that difference shows up immediately in how the team treats them: as a rulebook to work around, or as the thing that makes their own decisions easier.

Guardrails also aren't a poster on a wall. They have to be visible in the actual rhythm of the work — onboarding, planning, retrospectives — and modeled first by whoever's asking the team to follow them. Teams follow behavior, not documents, and no set of principles survives a leader who doesn't act like it applies to them too.

A guardrail that makes the organization harder to change has failed at its job, however tidy it looks. Which means the list has to live where the work happens rather than in a governance portal, and has to be revisited — because the reason something was decided in 2019 is often not a reason at all by now.

**What changes.** The default flips. Instead of deciding what needs approval, you decide the few things that are settled — and everything else becomes someone's to decide without asking.

**Write the list, and keep it embarrassingly short.** If it does not fit on a page, it is not a set of guardrails, it is a policy manual with a friendlier name.

**For each item, record what it would take to change it.** A guardrail nobody can move is a rule. A guardrail with a stated route out is a decision the organization can revisit when the world does.

**Retire one thing a quarter.** Standards accumulate silently and are never audited for whether their reason still holds. Take the oldest item on the list and make someone defend it.

**Put it where the work happens.** A guardrail in a governance portal is a guardrail nobody reads. In the repository, the template, the checklist people already open — that one gets followed without anyone being asked to.

## The half that points outward

All of that is friction — decisions that stop having to travel. There is a second effect, slower and easier to miss, and it is the one that eventually convinced me this was worth the trouble.

A team that knows what is settled has attention left over. Not time exactly — attention. The energy that was going into working out whether something needed asking, who to ask, and how to phrase it goes somewhere else, and where it tends to go is the work itself. People start noticing things about what they are building that nobody had asked them to notice.

That is not a claim I can measure, and I would treat anyone who offered you a number for it with suspicion. But it shows up the same way every time: a few months after the list gets short, someone in the team raises a question about whether the thing they are building is right, rather than whether they are allowed to build it. That question was always available. It was simply competing for room with the other one.

Which is the case for keeping the list short beyond the obvious speed argument. Every item on it costs a small amount of somebody's attention, permanently, and attention is what value creation is made of.

Settle the few things worth settling. Leave the rest to the people doing the work, and write down why, so nobody has to decide it twice.

*This cultivates: A Meeting Grew Here, in Part II.*
