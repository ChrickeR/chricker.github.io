---
title: "Agreeing on What Things Mean"
dek: "Everyone says they have an information model. Almost nobody means quite the same thing by it."
topic: "Information"
indicator: "Handoff loss"
effect: "Both"
---

I have asked for an information model in more organizations than I can remember.

The answer is usually some version of yes, of course.

What arrives next varies. Sometimes it is a database model. Sometimes an integration diagram, a collection of API schemas or the object model from whatever platform happens to sit at the centre of things. Suppliers are particularly good at producing these. Give them a few minutes and somebody will open a diagram with a reassuring number of boxes and lines.

There is usually nothing wrong with it.

It is simply a model of something else.

What I was looking for was much less technical, and in some ways much harder: what are the things this business actually knows about?

A customer. An agreement. A product. An order. A payment.

What do those things mean here? How do they relate? Can an agreement exist without a customer? Is the thing we sell the same thing as the thing we deliver? When two parts of the organization say customer, are they actually talking about the same thing?

Those questions sound almost embarrassingly basic. They also become surprisingly difficult once you ask them across organizational boundaries.

I have rarely found an organization that could answer them consistently.

What they usually have instead are answers embedded in solutions. The CRM has one definition of a customer because that is the definition it needs. Finance has another. The sales platform has a product structure designed around selling. The delivery system has one designed around delivering. Each makes sense where it lives.

Then somebody tries to connect them.

At that point what looks like an integration problem is often something older. Two perfectly functioning systems disagree about the world.

The integration team gets asked to solve it, so it does what good integration teams do. It maps one representation to another. A transformation is added. An exception appears. Somebody writes down that this particular type of customer is represented differently over here. Eventually enough knowledge accumulates in the integration itself that changing either side requires finding someone who remembers why the mapping looks the way it does.

The solution has started carrying meaning the organization never settled.

That is structural friction.

## The model underneath the systems

A conceptual information model is much less ambitious than people sometimes make it sound.

It is not an attempt to model everything the organization knows. It does not describe users, permissions, access control, filtering, visibility rules or application behaviour. It does not say which system should store something or what an API should look like.

It describes the core business concepts, what they mean, and how they relate to each other.

That is all.

And that is quite a lot.

The distinction matters because systems are temporary. Even the ones everyone currently calls strategic will eventually be replaced, merged, split or quietly become the legacy system nobody is allowed to call legacy yet.

The business concepts tend to survive them.

This is the same distinction I made earlier with capabilities. A capability describes something the organization needs to remain able to do without saying how today's organization or technology happens to do it.

A conceptual information model does something similar for meaning.

Capabilities describe what the organization needs to be able to do. The information model describes what the organization needs to understand.

Neither needs to know which application happens to be fashionable this decade.

## Shared meaning is part of flow

This matters here because information is one of the things Organizational Flow depends on moving.

But moving information is not enough.

It has to arrive with its meaning intact.

I have seen plenty of integrations where every message arrived, every field was populated and every technical monitoring light was green, while people on the two sides still understood the information differently. Technically, information had moved perfectly. Organizationally, it had not.

That is a particularly awkward form of friction because the problem often appears somewhere else.

It appears as reconciliation in finance. As manual correction in operations. As another mapping in an integration. As a meeting between two teams trying to establish which number is right. As a project spending its first six weeks discovering what the previous project already discovered.

Eventually those things become accepted as complexity.

Some of them are complexity. A large organization really does contain different views of the same world, and forcing everything into one universal definition can create more friction than it removes.

But there is a difference between deliberately allowing two meanings and simply never discovering that you have them.

The model is useful because it makes that difference visible.

## Not another central model

There is an obvious way to get this wrong.

Create an enterprise information model. Give somebody ownership of maintaining it. Put it in a modelling tool. Establish a governance forum. Require projects to comply with it.

A year later the organization has acquired another place decisions have to travel to, which would be a slightly unfortunate outcome for a paper about reducing structural friction.

That is not what I mean.

The value is not in having a model for its own sake.

The value is in having enough shared understanding that teams can make decisions without repeatedly reconstructing what the organization means.

Some concepts genuinely need to be shared because they cross almost every boundary. Others belong inside a capability and should stay there. The useful architecture is not the largest possible common model. It is the smallest one that preserves coherence where coherence actually matters.

The same principle keeps turning up.

Share what is genuinely common. Let the rest remain local.

## Why this matters more now

For years we could get away with leaving much of this knowledge implicit.

People translated.

Architects knew that customer meant one thing here and something slightly different over there. Integration developers learned the exceptions. Someone in finance knew which number was the real one. The organization accumulated people who could navigate the differences, and eventually mistook their ability to navigate them for simplicity.

That was expensive, but it worked.

It becomes much more interesting when creating technology gets dramatically easier.

An AI can generate an interface, a data transformation or an application surprisingly quickly. What it cannot do is magically resolve a distinction the organization itself has never made.

If two systems disagree about what an agreement is, faster code does not settle the question.

It lets us encode the disagreement faster.

So as the cost of building falls, knowing what we mean becomes more important rather than less. Not because every organization suddenly needs a grand information architecture programme, but because the knowledge that used to survive in people's heads is increasingly being asked to guide machines as well.

Before we ask technology to move information faster, it is worth knowing whether we agree on what is moving.

Otherwise we may simply become very good at moving misunderstandings.

*This cultivates: An Interface Nobody Can Find, in Part II.*
