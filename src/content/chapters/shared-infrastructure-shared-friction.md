---
title: "When Shared Infrastructure Becomes Shared Friction"
dek: "Cloud, sovereignty and the exit nobody plans for — three versions of the same question about how much freedom to change is worth keeping."
topic: "Infrastructure"
indicator: "All four"
effect: "Both"
editorNotes:
  - "The regulatory examples are current at the time of writing and will date faster than the rest of the paper. The EU Data Act sets requirements intended to make switching between data-processing services easier and to reduce obstacles to portability and interoperability. The European Commission's proposed Cloud and AI Development Act frames levels of cloud and AI sovereignty against risk and need rather than assuming maximum sovereignty everywhere. I cite them as evidence that the architectural question is being asked at policy level, not as advice on compliance — anyone acting on either should read the sources and take proper counsel rather than take my summary of them."
---

Different Capabilities, Different Conditions makes the case for telling needs apart. This is that argument where it is hardest to act on and easiest to measure: infrastructure.

For years the cloud conversation was framed as a destination. Should we move to the cloud? How much? Should we be cloud-first? For regulated organizations the answer was rarely simple, and the concerns were legitimate ones: where information is stored, who can reach it, which jurisdiction applies, how a service is recovered, what happens when a supplier becomes unavailable.

The problem was never that those constraints exist. Many of them should.

## From cloud-first to the right cloud

A capability perspective changes the question being asked. Instead of *what is our cloud strategy*, it becomes: what does this capability actually require, and which infrastructure supports that?

Different capabilities need different levels of security, availability, resilience, data residency, operational control and technological independence. Which gives a more useful principle than any strategy statement I have seen: **establish the level of sovereignty a capability genuinely requires, then choose the architecture that supports it.**

This thinking is becoming visible in European policy, which I find quietly encouraging. The Commission's proposed Cloud and AI Development Act frames different levels of cloud and AI sovereignty against risk and need, rather than assuming every workload requires the maximum. That distinction is the same one this chapter is making, arrived at from a completely different direction.

So a highly sensitive capability may need infrastructure under substantial European or national control. Another may be perfectly well served by a global provider. A third may be best served by a SaaS product where what you gain from the platform plainly outweighs the dependency it creates. There does not have to be one answer for the whole organization, and an organization that insists on one has usually chosen the most restrictive.

**There is a catch, and it is the one the previous chapter named.**

Different infrastructure choices are only available when the architecture lets capabilities be separated in the first place. Draw the distinction on a slide while everything still runs through the same database and the same deployment process, and you have described a separation you do not have.

## The friction we hope never to feel

There is a side of this that gets very little attention: getting out.

Choosing a platform, a SaaS product or a provider concentrates almost all the thinking on getting in. Does it meet our needs? Is it secure? How fast can we start? What does it cost? Which is reasonable — nobody picks a platform expecting to leave it, and with luck you never do.

But architecture has to hold the other question too. A change in regulation, in ownership, in pricing, in geopolitics or in strategy can turn a perfectly sensible choice into something that now has to change.

The friction built out of proprietary interfaces, data formats, licensing, tightly coupled services and simply the volume of data accumulated over years stays almost completely invisible until that moment. Then it is extremely visible.

European regulation is interesting here as a signal rather than as instruction. The Data Act introduced requirements meant to make switching between data-processing services easier. But the underlying architectural question is much older than any of it, and it is a good question to ask about anything:

*How difficult have we made the next change?*

Which is why exitability, in this paper's terms, is not really about planning to leave. It is about preserving the ability to change.

## Dependency is not the enemy

There is an easy trap waiting at the end of that argument. If dependency creates future friction, perhaps architecture should minimize dependency.

It cannot, and it should not try.

Every modern organization depends on platforms, suppliers, cloud providers, open-source projects and each other, and those dependencies are frequently the entire reason it can move at all. Staying genuinely portable across every provider creates a great deal of complexity today in order to insure against an event that may never happen. That is friction too — paid immediately, in exchange for a possibility.

So the question is not whether dependency exists. It is whether anybody understands the one they have.

For each capability there are two related questions, and they are worth asking out loud at the point of choosing rather than afterwards:

**How much control do we actually need?** And **how much freedom to change do we need to keep?**

The answers differ by capability, which is the whole argument of the previous chapter arriving in a different form. For one, accepting deep dependency on a provider is entirely rational, because the capability gains far more from that platform than it loses in optionality. For another, being unable to move would be unacceptable, and the extra complexity is the premium on an insurance policy somebody has consciously bought.

What architecture owes the organization is not the answer. It is making the trade visible at the moment it is being made, rather than eight years later when somebody discovers what was decided by nobody.

## Infrastructure follows the need

Which lands back on the rule from the previous chapter, applied one layer down.

Shared infrastructure removes enormous amounts of friction. A good platform lets teams inherit security, identity, observability, deployment and operations without rebuilding any of it, and the organizations that have one are visibly faster than those that do not. Sharing stops helping at exactly the point where it forces fundamentally different needs into the same constraints.

The goal is neither maximum standardization nor maximum independence. It is infrastructure that gives each capability the conditions it needs, while keeping enough freedom for the organization to change — including the changes nobody has thought of yet.

Exit is friction we hope never to experience. The work is making sure it does not become friction we cannot overcome.

*This cultivates: Everyone Carries the Strictest Requirement, in Part II.*
