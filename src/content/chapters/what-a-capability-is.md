---
title: "What a Capability Is, and Is Not"
dek: "One word the rest of the paper leans on, defended once so it doesn't have to be re-explained in every chapter that uses it."
topic: "Capabilities"
editorNotes:
  - "Thinking about what an organization must always be able to do is not new — it runs through enterprise architecture as a discipline rather than through any single method. The closest existing relative is Domain-Driven Design: Eric Evans' bounded contexts do much the same work of drawing lines around what belongs together and treating those lines, rather than the systems inside them, as the durable thing. Formal capability-mapping notations exist as well, and I have never found the notation to be the valuable part. What matters here is the capability as the unit of continuity an organization is designed around, which is a claim about organizational design rather than about modelling."
---

This is the shortest chapter in the paper and the one most likely to save you an argument.

One word recurs from here to the end: *capability*. It has been borrowed by enough people to mean almost anything, and a term that means anything decides nothing. So it is worth pinning down once, here, where anyone dropping into a later chapter can find it.

**For this paper, a capability is an enduring business area — a bounded context that owns an outcome.** Enduring, because it outlives the systems, suppliers and reorganizations that happen to deliver it this decade. Bounded, because you can say what is inside it and what is not. And it owns an *outcome*, not an activity: settling claims, rather than operating the claims system.

It answers exactly one question: what must we always be able to do? Not how, not where, not with which tool — those change constantly and always will. Onboard a customer. Price a policy. Ship a release. Resolve a complaint.

In the tree, capabilities are the root system. Unseen, unglamorous, and the reason anything above ground gets to grow at all.

## Four things it keeps getting confused with

I have heard all four called capabilities in the same meeting, by people who were not being careless. The word invites it.

**People.** "We have a strong integration capability" almost always means five particular engineers. That is a competence, and it is a competence that can resign.

**Resources.** Headcount and budget are how much of something you have. A capability is a kind of thing, not a quantity of it. An organization can double the resources behind a capability nobody owns and get nothing but a larger queue.

**Competence.** This is the one worth slowing down on, because it costs the most: **capability belongs to the organization; competence belongs to people.** Underwriting is a competence — it arrives in the morning and leaves at night, and one day it does not come back. *Being able to underwrite* is a capability, and the organization needs it to survive that departure. The two are related in exactly one way: a capability is only as real as the competence currently staffing it. Which is why a capability with nobody behind it is an ambition on a slide, and competence with no capability to attach to is a talented person waiting to be told what they own.

**Skills.** These are the components competence is assembled from, and they sit a level or two below where anyone should be designing an organization.

## The ten-second test

Ask *who owns this?* and you should get one name. Ask *who can do this?* and you should get several.

If the first question returns several names, or none, the capability has no owner. If the second returns exactly one, the capability is a person, and it will walk out with them.

I have run that test in a lot of rooms, and the useful part is not the answer. It is watching how long the pause is before the answer arrives.

## None of this is about technology

Which is the part most often missed, probably because the vocabulary arrived through architecture.

A hospital must always be able to admit a patient. An insurer must always be able to settle a claim. A university must always be able to examine a student. Each of those has been performed by paper, by telephone, by three generations of software and by combinations of all three — and not one of them has changed as a capability in fifty years.

The methods are disposable. The capability is what the organization is left with when they go.
