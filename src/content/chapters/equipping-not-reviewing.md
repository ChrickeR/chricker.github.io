---
title: "Equipping, Not Reviewing"
dek: "What changes when architecture stops being somewhere decisions go and becomes something the people deciding already have."
topic: "Architecture"
indicator: "Decision latency"
effect: "Both"
---

*A note on the word, for anyone dropping in here. This paper uses **architecture** in a wider sense than the technical one — the deliberate shaping of how an organization is put together, of which system design is one part. A reorganization is an architectural decision. So is a funding model, a team boundary and a reporting line. [What a Capability Is, and Is Not](/organizational-flow/what-a-capability-is/) in Part I sets out the vocabulary this rests on.*

The Long Way to a Yes described decisions travelling to find the judgement they needed. This is the chapter about shortening that journey, and the honest summary of it is that you cannot. What you can do is move the judgement.

That sounds like a slogan, so here is what it looked like the first time I did it properly, some years after taking apart the board that taught me the lesson.

We had a recurring pattern where teams brought us integration questions. Reasonable ones — should this be synchronous, who owns the contract, what happens when the other end is down. Each conversation took about twenty minutes and each one had waited nine days for a slot. The nine days were not our fault and not theirs; that was simply how long it took two calendars to agree.

So we wrote down the answers. Not a standard, not a policy — four paragraphs about when to wait for a response and when not to, with the reasoning attached and a named person to argue with if it did not fit. It took an afternoon. Within about two months the integration questions had mostly stopped coming, and the ones that did come were genuinely interesting, which was considerably more fun for everyone.

What that afternoon actually did was convert a queue into a capability. The judgement had been real and it had been ours, and it had also been sitting nine days away from every person who needed it.

## What changes

Architecture stops being a place decisions are sent, and becomes a competence sitting where the decisions are made. That is a change in how people spend their week rather than in what anyone is called — and most of the people doing this work do not have the word architect in their title at all. In a lot of organizations it is an engineering manager, a head of product, a CTO, or whoever has been there longest and can still remember why the boundaries are where they are.

## Making other people's decisions better

Every review is a decision that had to travel. That is not an argument against reviewing anything; some decisions genuinely need more eyes, and a handful are expensive enough to be worth the wait. It is an argument for knowing how many of them are in the second category. In my experience it is a small fraction of the total, and the rest are there because somebody was not trusted or, much more often, was not equipped.

The useful experiment is small: take one recurring review and try to convert it into something the team can carry. Sometimes that is a guardrail. Sometimes it is a conversation that only has to happen once. Sometimes you discover the review was doing something real, and you keep it — which is a good outcome too, because now you know.

Writing things down helps more than it should, on one condition: write down the decision and the reason, not the target state. The reason is what expires. Anyone who finds the record in three years needs to know what was true when it was made, so they can work out whether it still is. A target state tells them nothing except that somebody was once optimistic.

## Being in the rooms that don't know they're architectural

Leadership's chapter made the case that the most consequential architecture gets decided in budget rounds, organization design, hiring and vendor selection, by people who would not describe any of it as architecture. The cultivation that follows from that is unglamorous: be in those rooms.

Not to review them. To be the person who says, quietly and early, *if we split it that way, everything that touches it needs both teams from now on*. That sentence takes four seconds and saves several years. It is also completely unpersuasive after the decision has been made, which is why the timing matters more than the argument.

## The standard, and the other half of it

Once a proposal clears the floor that security and compliance set — and it is a floor, not a test — there is one question worth putting to it: does this leave the organization, and what it builds, easier to change than before.

That question is entirely about friction, and for a long time it was the only one I asked. It is not sufficient. An organization can become beautifully easy to change and change nothing anyone wanted. The second question is slower and less comfortable: who is better off if this works, and how would we find out.

Most architecture conversations never reach the second one, because the first is answerable in the room and the second is not. But asking it changes the shape of the conversation immediately. Half the proposals I have seen survive the ease-of-change question fall apart quietly on *who is better off*, usually before anyone has had to say no — and the ones that survive both tend to be the ones people are still glad about two years later.

Governance asks whether a decision was approved. Architecture as a competence asks whether the people making these decisions are equipped to make them well, and whether anyone will be better off afterwards, and then does the slow, unheroic work of making both of those more true than they were last quarter.

*This cultivates: The Long Way to a Yes and A Tollbooth on a Road With a Bypass, in Part II.*
