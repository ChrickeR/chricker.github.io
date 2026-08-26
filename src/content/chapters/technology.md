---
title: "Faster, and Still Wrong"
dek: "Technology multiplies a capability. It has no opinion on whether the capability was any good."
topic: "Technology"
indicator: "All four"
effect: "Reduces friction"
---

Every organization has bought a tool to solve a problem that wasn't a tool problem.

A collaboration platform to fix communication between two departments that don't agree who owns the outcome. A project tool to fix delivery that was actually blocked on a decision nobody had authority to make. A data platform to fix reporting when the reports were already accurate and simply arriving too late.

None of those purchases fail, exactly. The tool gets installed, adopted, and reported as delivered. The friction stays where it was, now with better dashboards pointed at it.

Technology scales a capability; what it cannot scale is the judgement about when and whether that capability should be used at all.

That distinction does a lot of work. A tool takes something the organization can already do and lets it do it more, faster, or at lower cost per unit. That's genuinely valuable and it's most of what technology is for. What a tool cannot do is supply the capability in the first place, or decide when the capability should be used differently.

So the useful question before any significant technology decision is not *what will this let us do*. It's *what capability does this scale, and is that capability currently good enough to be worth multiplying*.

Scale a capability that isn't working and you get more of what wasn't working, arriving faster, in more places at once. This is a recognizable pattern in any organization that has automated a bad process: nobody made anything worse, and everything got harder.

There's a second thing worth naming, because it's where technology creates friction rather than removing it. Every tool encodes assumptions about who decides what. A workflow system with an approval step has made an ownership decision, whether or not anyone at the time thought of it that way. A budgeting tool that only accepts annual figures has decided your funding rhythm.

Those decisions are architecture, made by a vendor, adopted by procurement, and discovered by everyone else two years later.

The practical version of this is a decision you can see. ThoughtWorks publishes its Technology Radar twice a year — tools, techniques, platforms and languages each placed as adopt, trial, assess or hold, with a stated reason — and the organizations I've seen get value from it are not the ones that read theirs. They are the ones that build their own. What the exercise produces is not the list. It is a standing forum where *what does this multiply* has to be answered out loud, before procurement rather than after it, and where **hold** is a legitimate and recorded outcome rather than a failure to decide.

Technology multiplies whatever is already there. Which makes it a poor first move and an excellent second one — after the capability is clear and the ownership is unmistakable.

## A note on engineering practice

There is a whole layer this paper deliberately does not cover, and leaving it unnamed would be a kind of dishonesty.

Between the conditions I have spent these chapters on and the value that eventually reaches someone, there is a set of engineering practices that determine how quickly and safely software actually moves: continuous integration, trunk-based development, automated testing, deployment automation, small batch sizes, the ability to release without ceremony. In a software-driven organization these are not incidental. They are where a great deal of friction is either removed or manufactured, day by day.

I have not written about them here for two reasons, and neither is that they don't matter.

The first is that they are already well covered, and covered better than I could. Anyone wanting to improve delivery practice should start with DORA's programme, summarized in *Accelerate*, rather than with me — the sample sizes and statistical work are beyond anything in this paper.

But I want to claim something from that research rather than only point at it, because it is the strongest external evidence this paper's central argument has.

What DORA established, across years and tens of thousands of respondents, is that the practices which reduce friction in the delivery path — small batches, automated testing, deployment without ceremony, loosely coupled architecture, teams that can release without asking permission outside themselves — produce measurably better organizational performance. Not better developer satisfaction, though that too. Commercial performance: profitability, market share, productivity.

Read that as a claim about friction rather than a claim about engineering and it says something considerably larger than it is usually taken to say. **Reducing structural friction increases throughput, and increased throughput is measurable value.** The mechanism is not motivational and it is not cultural. Work that used to wait stops waiting.

Two of DORA's four measures are, in this paper's vocabulary, friction measures wearing engineering clothes. Lead time for changes is decision latency and handoff loss combined, measured on the delivery path. Deployment frequency is what happens to throughput when both come down. The other two — change failure rate and time to restore — are the check that the speed was real rather than borrowed, which is the same distinction this paper draws between value grown and value extracted.

That is one domain, measured properly. The argument of this paper is that the same relationship holds outside the delivery path — in decisions, in ownership, in the boundaries between teams — where nobody has instrumented it and the friction is consequently larger. I cannot prove that at DORA's standard of evidence, and I am not going to pretend otherwise. But the one place it has been measured properly, it held.

The second is that they sit downstream of the conditions this paper is about. A team that cannot deploy without a release board is rarely blocked by tooling. It is blocked by ownership that never reached it, by a guardrail nobody settled, by a decision that has to travel. Continuous delivery in an organization with unclear ownership produces faster delivery of things nobody owns — which is the same trap as scaling a broken capability, arriving one layer down.

So the honest position is that these are two halves of the same problem. The practices are how flow is realized in software. The conditions are what determines whether the practices survive contact with the organization. Improve the practices and the conditions will limit how far you get. Improve the conditions and nothing happens at all until the practices catch up.

Technology multiplies a capability and has no opinion about whether the capability was worth multiplying.

What moves this is sequence rather than restraint. Establish who could say the output was wrong before scaling anything; ask what a platform assumes about how work gets approved before asking what it does; and pair one movement measure with one outcome measure so speed cannot be mistaken for progress. Nobody has to give up the platform — the argument is only about the eight weeks before it arrives.

*Cultivating this: Multiplying What's There, in Part III.*

If your delivery is slow and your ownership is clear, this paper has little to offer and *Accelerate* has a great deal. If your delivery is technically excellent and things still take nine months, the problem was never in the pipeline.
