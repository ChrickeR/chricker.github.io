---
title: "Everyone Carries the Strictest Requirement"
dek: "A rule that belongs to one part of the organization has a way of becoming a rule for all of it."
topic: "Constraints"
indicator: "Decision latency"
effect: "Both"
---

Somebody once explained to me why a small internal tool, used by eleven people to track a training schedule, had taken nine months.

The explanation was entirely coherent. It had to go through the same review as anything touching customer data, because the review process did not distinguish. It had to run on the approved platform, because there was one approved platform. It needed a data classification, an architecture sign-off and an entry in a register, all of which existed because the organization handles genuinely sensitive information and had been fined once for handling it carelessly.

None of that was stupid. Every one of those controls was put there by somebody thoughtful, in response to something real. And a training schedule for eleven people had cost nine months.

That is the pattern, and once you have seen it you find it everywhere.

**Different parts of an organization genuinely need different conditions.**

They handle different information and carry different risk. The consequences when something goes wrong are not comparable. Some sit inside heavy regulation and some sit nowhere near it. Some need extraordinary resilience or security; others would gain far more from being able to try something on a Tuesday.

But constraints are written once and applied broadly, because writing one rule is much easier than writing seven and deciding which applies where. Over time the requirement that belongs to the most sensitive corner of the organization becomes the requirement everybody works under.

I have watched this most clearly in regulated environments. Banks, insurers and public institutions have excellent reasons to care about information, security, continuity, outsourcing, jurisdiction and third-party risk — and not one of those reasons applies equally to every capability they run.

If the organization is treated as one homogeneous thing, the most cautious corner ends up setting the conditions for all of it. Controls designed for the exceptional case become the ordinary case. Decisions move upward. Approvals multiply. The range of technologies anyone can even suggest narrows quietly, until people stop suggesting.

Not one of those decisions looks unreasonable on its own. Together they are structural friction, and the organization experiences it as caution rather than as cost — which is why it is so rarely questioned. Nobody wants to be the person arguing for less care.

## It happens in the infrastructure too, and there it is harder to see

The same mechanism runs one layer down, where it is even less visible because it looks like efficiency.

Shared infrastructure is genuinely good. A common platform lets teams inherit security, identity, observability and deployment without rebuilding any of it, and organizations that have one move visibly faster than those that do not. That is not the problem.

The problem starts when everything runs through the same database, the same integration layer, the same runtime, the same deployment process — because at that point the platform can only be configured for its most demanding tenant. The workload that needs the strictest data residency sets the residency for everyone on it. The system that cannot tolerate downtime sets the change process for everyone on it.

Infrastructure that was shared for efficiency has quietly become shared friction, and the accounting never shows it, because the platform genuinely is cheaper than seven platforms would have been.

## The related one is the choice nobody expects to revisit

There is a second version of this that spreads just as far, and it is quieter because it arrives looking like a decision rather than a rule.

Somebody chooses a platform, a provider or a SaaS product. It is the right choice at the time — it meets the need, it is secure, it is faster to start on than anything built in-house, and the alternative would have cost a year nobody had. Almost all of the thinking goes into getting in, which is entirely reasonable, because nobody selects a platform expecting to leave it and with luck nobody ever does.

Then something moves that was never part of the evaluation. Regulation. Ownership. Pricing. Geopolitics. Occasionally just a change of strategy.

And the organization finds out what it actually built: proprietary interfaces, data in formats nothing else reads, licensing written on the assumption of permanence, services coupled tightly enough that they cannot be taken apart, and several years of accumulated data that now has to go somewhere.

None of that was visible while everything was working, which is the whole point of it. Cloud and sovereignty questions get discussed as though they were about where data sits. In my experience they are mostly about this: how difficult somebody has made the next change, and whether anyone knew they were deciding that at the time.

The cost of a dependency is paid at the moment you need to change it, which is reliably the moment you are least able to absorb it.

## And the cost is paid by the people furthest from the reason

This is the part I find most worth noticing, because it explains why the pattern survives.

The team handling sensitive customer data lives with the controls and understands exactly why they exist. They are not the ones complaining. The friction lands hardest on the team doing something small and low-risk, who experience the whole apparatus as inexplicable — and who have no standing to question it, because questioning a security control from the outside looks like not taking security seriously.

So the people who could most easily say *this does not apply to us* are the people least able to say it, and the people who could change the rule rarely feel the cost of it.

Nobody chose to run the whole organization at the speed of its most cautious corner. It is simply what happens when a rule is written once and nobody is responsible for asking where it belongs.

*Cultivating this: Different Capabilities, Different Conditions and When Shared Infrastructure Becomes Shared Friction, in Part III.*
