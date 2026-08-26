---
title: "An Interface Nobody Can Find"
dek: "Two standards for the same need, and a form that made the waiting tidier rather than shorter."
topic: "Interfaces"
indicator: "Handoff loss"
effect: "Reduces friction"
---

Every capability is reached somehow.

Someone or something asks it to do its work, and the way that asking happens is a design decision — usually an unexamined one, and one that determines more about how the organization moves than the capability's own quality does.

There are only two fundamental shapes. **Synchronous:** ask, and wait for the answer before continuing. **Asynchronous:** announce what happened, and carry on without waiting.

The difference sounds technical and isn't. Synchronous means one capability's availability has become another's availability — if the thing you're calling is slow, you are slow; if it's down, you're down. You've coupled the two in time, which is the most expensive kind of coupling there is because it can't be scheduled around. Asynchronous decouples them and charges you differently: you give up certainty about *when*, and you take on the work of handling things arriving out of order or twice.

Neither is correct. What's incorrect is choosing without noticing you chose — which is what happens when the shape of the interface is inherited from whatever the first integration happened to do.

**But the friction that costs most isn't the shape. It's the hiding.**

Consider what it takes to use a capability someone else owns. In a healthy organization: you find it, read how it works, and use it. In most organizations: you ask around until you find out who owns it, book time with them, explain what you're trying to do, discover three special cases that aren't written down anywhere, and build against a shared understanding that exists only in the memory of the two people who had the conversation.

That conversation is a handover. It happens every single time anyone new needs the capability, forever, and it never appears as a cost because it looks like helpfulness.

Then the special cases accumulate, and they accumulate for a specific reason: when nobody can see how something was meant to be used, everybody uses it slightly differently, and every one of those differences has to be supported afterwards. Undocumented interfaces don't stay simple and undocumented. They become complicated *because* they were undocumented.

An interface nobody can find isn't an interface. It's a person you have to know.

**Which brings up the distinction most organizations get backwards.**

Internal and external interfaces are usually treated as two categories with two standards. External ones get documentation, versioning, examples, a support commitment, and someone who thinks about whether they're pleasant to use. Internal ones get a Slack message and the name of whoever built it.

The distinction is false, and the cost of believing in it is paid daily. An internal consumer has exactly the same needs as an external one — to discover that the thing exists, understand what it does, and use it without a meeting. The only difference is that internal consumers can't take their business elsewhere, so they absorb the friction quietly instead of complaining, and the organization never learns what it's paying.

**A form is not self-service. Neither is a shared mailbox, a ticket queue, or a request channel.** Every one of them is a handover with a nicer entrance. Somebody still has to read it, work out what was actually meant, decide whose it is, and get round to it — and the person who submitted it is still waiting on a human being they cannot see and cannot chase. What the form did was make the waiting tidier and much easier to report on, which is precisely why queues survive the initiatives meant to remove them.

Self-service is when the person asking gets what they need without anyone else being involved. Something they can call. Access they can grant themselves inside agreed limits. A dataset they can query, with the meaning of the fields written down next to it. The test takes a second: if the request lands in somebody's list, it is a queue.

It is worth naming the whole ladder once, because the rest of the paper keeps landing on one rung or another of it. A thing can be **automated**, so nobody is involved. Or **self-service**, so the asker gets it without entering anyone's list. Or a **queue**, where somebody works through requests in some order. Or **a person you have to know**, which is not really a rung so much as what is left when nobody built the others.

Most organizations have a few things at the top, a great deal in the middle, and considerably more than they realize at the bottom.

None of which is an argument against queues. Plenty of things need judgement, and a well-run queue with a name on it is far better than not knowing who to ask. The cost is in the mislabelling — an organization that believes it has built self-service stops looking, and the waiting carries on underneath, now with a dashboard on top of it.

What moves this is treating an internal consumer exactly as you would treat somebody who could take their business elsewhere — because the only difference between them is recourse, not need. That is a standard rather than a project, and it is applied one capability at a time.

*Cultivating this: Opening the Front Door and Agreeing on What Things Mean, in Part III.*
