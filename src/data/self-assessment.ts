export interface Axis {
  id: string;
  kpi: KpiKey;
  anchor: boolean;
  /** Tier weight: foundational 1.5, structural 1.25, operational 1.0, downstream 0.75 */
  w: number;
  short: string;
  /** What this axis suggests when it scores low. Written tentatively on
   *  purpose — the reader is the only one who can tell whether it holds. */
  notice: string;
  q: string;
  o: string[];
  move: string;
  /** Where to read next. Slugs rather than numbers — the paper shows no
   *  chapter numbers, and numbering shifts whenever a chapter is added.
   *  The primary slug is always the Part II chapter that describes this
   *  condition; the secondary is either another Part II chapter that
   *  elaborates it, or its Part III counterpart on deliberately cultivating
   *  it — never the reverse, so the assessment always states a position
   *  against Part II before pointing anywhere else. */
  reads: { slug: string; why: string }[];
}

export type KpiKey = 'own' | 'hand' | 'dec' | 'learn' | 'value';

export interface Kpi {
  name: string;
  q: string;
  /** CSS custom property holding this indicator's accent colour. */
  varName: string;
  /** Which half of the proposition this indicator moves. Deliberately not a
   *  clean split: deciding sooner and learning faster reduce friction *and*
   *  create value, because a shorter loop improves the next choice about what
   *  is worth building at all. */
  half: 'Reduces friction' | 'Both' | 'Creates value';
  /** One line on how it reaches value, shown under the indicator's score. */
  halfNote: string;
  /** The Part II chapters this indicator rolls up — one condition, several
   *  places it's described, because a KPI this size is rarely one chapter's
   *  argument. Shown as the indicator's reading list on the results page. */
  chapters: { slug: string; note: string }[];
}

export const KPI: Record<KpiKey, Kpi> = {
  own: {
    name: 'Ownership Clarity', q: 'Can people act without asking?', varName: '--kpi-own',
    half: 'Reduces friction',
    halfNote: 'Recovers capacity. It says nothing about what the capacity gets spent on.',
    chapters: [
      { slug: 'purpose', note: 'Whether a team can name the outcome it owns, not just the activity it performs.' },
      { slug: 'ownership', note: 'Whether governance is filling a gap that ownership left open.' },
      { slug: 'capabilities', note: 'Whether the organization is arranged around what must always be true, or around today’s tools.' },
      { slug: 'leadership', note: 'Whether a reorganization is treated as the structural decision it actually is.' },
    ],
  },
  hand: {
    name: 'Handoff Loss', q: 'How much is rebuilt at each boundary?', varName: '--kpi-hand',
    half: 'Reduces friction',
    halfNote: 'Stops the same understanding being rebuilt. Pure recovery, no direction.',
    chapters: [
      { slug: 'teams', note: 'Whether a team can decide about its own domain, or only ask about it.' },
      { slug: 'interfaces', note: 'Whether using what another team owns takes reading, or knowing someone.' },
    ],
  },
  dec: {
    name: 'Decision Latency', q: 'How long from necessary to made?', varName: '--kpi-dec',
    half: 'Both',
    halfNote: 'Deciding sooner is not only cheaper — it is how you find out sooner whether the decision was any good.',
    chapters: [
      { slug: 'the-loop', note: 'Whether information and decisions reach the people who need them, on time.' },
      { slug: 'architecture', note: 'Whether decisions travel to the judgement they need, or queue for it.' },
      { slug: 'people', note: 'Whether leadership time goes into shaping conditions, or instructing outcomes.' },
    ],
  },
  learn: {
    name: 'Learning Cycle Time', q: 'Does an outcome change a decision?', varName: '--kpi-learn',
    half: 'Both',
    halfNote: 'The one that converts speed into value. Faster iteration is worth little until the outcome comes back and changes the next choice.',
    chapters: [
      { slug: 'learning', note: 'Whether the last thing that went wrong changed a decision, or just produced a document.' },
      { slug: 'technology', note: 'Whether delivery speed and stability are measured well enough for a measurement to ever change a decision.' },
    ],
  },
  value: {
    name: 'Value Creation', q: 'Does the work change anything outside?', varName: '--kpi-value',
    half: 'Creates value',
    halfNote: 'Aims the capacity the other four recover. Without it an organization gets very fast at whatever it was already doing.',
    chapters: [
      { slug: 'value', note: 'Delivery is a fact about you. Value is a fact about them — and why organizations measure the first and assume the second.' },
      { slug: 'people', note: 'Nothing tends itself. Value is what people, not structure, ultimately create.' },
    ],
  },
};

// Eighteen questions grouped into the five indicators. Anchor axes carry
// double weight inside their indicator; tier weights order the priorities by
// sequence (ownership before structure, structure before operations, and value
// last — not because it matters least, but because it is the hardest to move
// while the conditions upstream of it are still poor).
//
// Every axis reads Part II first — the paper's account of what the condition
// actually is — and only then, as the second stop, either another Part II
// chapter or the Part III chapter on deliberately cultivating it. The state
// this assessment reports is a position against Part II's fourteen
// conditions; where to go next is a separate question, answered second.
export const AXES: Axis[] = [

  {id:"own",   kpi:"own",   anchor:true,  w:1.5,  short:"Ownership",
   notice:"Who is allowed to decide appears to be less obvious than the org chart would suggest, which usually means people check first to be safe.",
   q:"Would three people in different departments name the same owner for a given capability, without checking with each other first?",
   o:["Three different answers, and each person would be confident.",
      "Two answers, and the disagreement is well known and unresolved.",
      "Mostly the same answer, with genuine ambiguity at a few boundaries.",
      "One answer, and the person named would agree it's theirs."],
   move:"Pick one capability. Ask three people in different parts of the organization who owns it. Don't correct the answers — collect them.",
   reads:[{slug:"ownership", why:"Why governance grows in exactly the space ownership left open, and why removing the meeting first brings it back."}, {slug:"nobody-could-say-management-put-me-here", why:"The one time I watched ownership arrive on its own — and why self-selection was not the active ingredient."}, {slug:"leadership", why:"Why a reorganization is an architectural decision, made by people told it was somebody else's job."}, {slug:"tending-what-grew", why:"What you can actually do with a structure nobody designed, since it cannot be redesigned or copied."}]},

  {id:"guard", kpi:"own",   anchor:false, w:1.5,  short:"Guardrails",
   notice:"There seem to be few settled principles for people to lean on, so taking ownership may feel closer to exposure than to authority.",
   q:"When someone is unsure whether a decision is theirs to make, what do they usually do?",
   o:["Escalate. Asking is safer than deciding, and everyone knows it.",
      "Ask around informally until somebody senior enough nods.",
      "Check the written principles, which exist but were written for the teams rather than with them.",
      "Decide, and point at the principle they leaned on if anyone asks later."],
   move:"Ask a team to list the decisions they escalate. For each one, establish whether anyone actually requires them to.",
   reads:[{slug:"ownership", why:"Why ownership without something to lean on is exposure rather than authority."}, {slug:"settling-the-few-things", why:"The short list that makes ownership safe to take, and how a team co-writes its own."}, {slug:"a-tollbooth-on-a-road-with-a-bypass", why:"What happens when a control becomes a place decisions must travel to — told as my own mistake."}, {slug:"different-capabilities-different-conditions", why:"The minimum structure needed to preserve coherence — rather than the safest possible structure applied everywhere."}, {slug:"everyone-carries-the-strictest-requirement", why:"How a control written for the most sensitive corner becomes the control everybody works under."}]},

  {id:"purp",  kpi:"own",   anchor:false, w:1.5,  short:"Purpose",
   notice:"Teams here may be able to describe what they are working on more readily than what it is for.",
   q:"Can each team name an outcome it owns, rather than an activity it performs?",
   o:["Teams could describe what they're working on, not what they're for.",
      "There's a stated purpose, but it sits a level of abstraction above anything actionable.",
      "Most teams can name their purpose; a few overlap with each other.",
      "Every team can name a specific outcome it, and only it, is responsible for."],
   move:"Ask each team to write, in one sentence, the outcome they alone are responsible for. Collect them and look for the overlaps.",
   reads:[{slug:"purpose", why:"Why work carries on long after its reason quietly expired, and nobody notices."}, {slug:"what-a-capability-is", why:"The word underneath it: an enduring business area that owns an outcome."}, {slug:"leading-without-deciding", why:"Doing the design work on purpose, in the rooms that never thought of themselves as designing."}]},

  {id:"struct",kpi:"own",   anchor:false, w:1.25, short:"Structure",
   notice:"Reorganizations appear to be treated as people decisions, with the structural consequences turning up later wearing a different name.",
   q:"Think of the last reorganization here. Could anyone say beforehand what it would make slower?",
   o:["No. It was announced as a people change, and the slow parts turned up later as culture problems.",
      "Somebody raised it, and was heard after the decision had already been made.",
      "It was discussed for the big reorganization, but not for the smaller boundary changes since.",
      "Yes. What it would make slow, and who would feel it first, was asked before the decision."],
   move:"Before the next organizational change, ask what it makes slow and who notices first. Write the answer down before the change.",
   reads:[{slug:"leadership", why:"Friction designed upstairs, felt downstairs, by people who would be surprised to hear they designed any."}, {slug:"organizations-as-systems", why:"Why nobody is defending the current shape — nobody chose it."}, {slug:"the-conditions-dont-come-in-the-box", why:"Why the borrowed operating model does not bring what made it work."}, {slug:"tending-what-grew", why:"Trace where work waited rather than mapping the chart, and prune one thing at a time."}, {slug:"drawing-the-line-around-a-team", why:"Bringing the people a boundary will move into the room while the decision is still open."}]},

  {id:"hand",  kpi:"hand",  anchor:true,  w:1.0,  short:"Handoffs",
   notice:"Work seems to lose context each time it changes hands, and that cost may not be counted anywhere.",
   q:"How much context is rebuilt each time work passes between groups?",
   o:["Every handover restarts understanding; nobody counts this as a cost.",
      "Handovers are recognized as painful and managed with more documentation.",
      "Some boundaries have been removed; others remain because moving them is political.",
      "Boundaries are drawn where they cost least, and reviewed when the cost changes."],
   move:"Ask a receiving team how long they spend reconstructing what the sending team already knew.",
   reads:[{slug:"teams", why:"The boundary drawn around the work rather than around the judgement."}, {slug:"everyone-left-agreeing", why:"The handover as a meeting where half the participants are not in the room."}, {slug:"an-interface-nobody-can-find", why:"Two standards for the same need, and the form that made the waiting tidier rather than shorter."}, {slug:"reducing-friction", why:"Saying it back before anyone leaves the room, and recording assumptions rather than only decisions."}]},

  {id:"team",  kpi:"hand",  anchor:false, w:1.25, short:"Team makeup",
   notice:"Teams appear able to build what is asked of them without being able to decide about it — the answer seems to live somewhere else.",
   q:"Can a team decide about its own domain, or only ask about it?",
   o:["Requirements arrive from elsewhere; the team delivers what was specified.",
      "Someone in a coordinating role relays questions to the people who have the answers.",
      "Someone who knows the domain sits in the team, but represents decisions made elsewhere.",
      "Someone in the team can decide about the domain, carries the consequences, and doesn't have to check."],
   move:"Take one team and list what they escalated last month. If any of it was a question about the domain rather than about money or headcount, the decision isn't in the team.",
   reads:[{slug:"teams", why:"Why a representative who relays a decision cannot actually decide."}, {slug:"how-much-can-one-team-hold", why:"Cognitive load as the sizing constraint, and why adding people to an overloaded team makes it worse."}, {slug:"what-a-capability-is", why:"What the boundary should be drawn around in the first place."}, {slug:"drawing-the-line-around-a-team", why:"Moving the judgement inside the line, and choosing the interaction rather than inheriting it."}, {slug:"growing-the-team", why:"How a team gets grown rather than assembled."}]},

  {id:"cap",   kpi:"hand",  anchor:false, w:1.25, short:"Capabilities",
   notice:"The organization looks arranged around systems, suppliers and projects rather than around what it must always be able to do.",
   q:"Ask three people what this organization must always be able to do. What comes back?",
   o:["System names, supplier names, or the name of a project.",
      "A list somebody made for a workshop once, which nobody has opened since.",
      "Business outcomes, mostly, though planning still tends to start from the tool.",
      "The same handful of business outcomes from all three, and that is what gets funded."],
   move:"Take one thing currently funded as a project and describe it as a capability instead — an enduring business area, not an activity. Notice which reporting stops working.",
   reads:[{slug:"what-a-capability-is", why:"What a capability is, what it is not, and the ten-second ownership test."}, {slug:"capabilities", why:"What survives the reorganization, and why organizations keep rediscovering it at full price."}, {slug:"multiplying-whats-there", why:"Keeping the map alive, and fixing ownership before scaling anything."}, {slug:"different-capabilities-different-conditions", why:"Why the strictest requirement in the organization becomes everybody's, and what boundaries are actually for."}, {slug:"everyone-carries-the-strictest-requirement", why:"Why the people who could most easily say this does not apply to us are the least able to say it."}]},

  {id:"iface", kpi:"hand",  anchor:false, w:1.0,  short:"Interfaces",
   notice:"Using what another team owns may still depend on knowing who to ask rather than on reading something.",
   q:"To use what another team owns, do you read something or ask someone?",
   o:["You ask around to find who owns it, then book time with them to understand it.",
      "Some documentation exists; it's out of date, and the real answers still come from a conversation.",
      "Anything customer-facing is properly documented; internal ones are handled informally.",
      "Anything anyone depends on is discoverable and documented to the same standard, inside or outside."],
   move:"Pick something another team owns and try to use it without asking anyone. Note where you get stuck and how long it took.",
   reads:[{slug:"interfaces", why:"The capability reachable only through one person, and what it costs her."}, {slug:"an-interface-nobody-can-find", why:"Automated, self-service, a queue, or a person you have to know — the whole ladder, named."}, {slug:"the-detective-work", why:"The weeks every initiative spends establishing facts before anyone starts."}, {slug:"opening-the-front-door", why:"Automate it, then make it self-service, then run a proper queue — in that order."}]},

  {id:"dec",   kpi:"dec",   anchor:true,  w:1.0,  short:"Latency",
   notice:"Decisions appear to travel further than the knowledge behind them, and the waiting may not appear in any system.",
   q:"How long passes between a decision becoming necessary and being made?",
   o:["Weeks or months, and nobody has ever measured it.",
      "It's known to be slow; the delay is attributed to how busy everyone is.",
      "Measured for some decision types, improving unevenly.",
      "Measured and visible, and the gap between deciding and waiting to decide is small."],
   move:"Time the next significant cross-team decision. Record when it became necessary and when it was made. Bring both numbers, no recommendation attached.",
   reads:[{slug:"architecture", why:"Why a decision has to travel to reach the judgement it needs."}, {slug:"the-loop", why:"Why it almost never breaks inside a stage, and always at the joints."}, {slug:"equipping-not-reviewing", why:"Converting a queue into a capability, and being in the rooms that do not know they are architectural."}]},

  {id:"info",  kpi:"dec",   anchor:false, w:1.0,  short:"Information",
   notice:"Getting hold of what you need in order to decide seems to take going and finding it, which usually means some decisions get made without it.",
   q:"The last time you needed a fact in order to decide something, how did you get hold of it?",
   o:["Asked around until somebody knew, then took their word for it.",
      "Found it eventually, a bit after the point where it would have been useful.",
      "It existed in a report somewhere, and I went and dug it out myself.",
      "It reached me at the point I needed it, without my having to go looking."],
   move:"Take the three most-produced reports here and trace each one to a decision it actually changed last quarter.",
   reads:[{slug:"the-loop", why:"Information should move, not accumulate. The scarcity is never the information."}, {slug:"everyone-left-agreeing", why:"Eight people, eight pictures, and the checking question nobody asks."}, {slug:"closing-the-loop", why:"Routing the outcome back to whoever chose, by name rather than to a list."}]},

  {id:"fund",  kpi:"dec",   anchor:false, w:1.25, short:"Funding",
   notice:"Funding appears to be committed to scopes and dates rather than to outcomes over a period.",
   q:"What is money attached to, and how often can it move?",
   o:["Annual budgets attached to projects and systems; reallocation requires an exception.",
      "Annual cycle with a mid-year adjustment that is theoretically possible and rarely used.",
      "Funding follows capabilities for some areas; the rhythm is still slower than the work.",
      "Capabilities are funded, outcomes are reviewed, and funding moves at the pace decisions need."],
   move:"Take one funded initiative and ask what it was meant to produce, then whether anyone will check.",
   reads:[{slug:"funding-what-doesnt-end", why:"The project as a dissolution date with a boundary and a steering group attached."}, {slug:"leading-without-deciding", why:"Funding capabilities for periods rather than projects for dates."}, {slug:"where-to-start", why:"The one move that cannot be delegated, because it uses authority nobody else has."}]},

  {id:"cult",  kpi:"dec",   anchor:false, w:0.75, short:"Cultivation",
   notice:"Whether it is safe to raise a problem early may vary more between teams here than anyone would want.",
   q:"The last time a team here was visibly struggling, what did leadership actually do?",
   o:["Intervened on the output: reviewed the work, moved people, set a target.",
      "Restated that the team was empowered, then took that back until things recovered.",
      "Worked on the conditions around the team, once the struggle was obvious enough.",
      "Asked what was in the way, changed that, and left the work to the team."],
   move:"For one month, log where leadership time went: shaping conditions, or intervening on outcomes.",
   reads:[{slug:"people", why:"The wait that appears in no system, because the people in it moved on."}, {slug:"nobody-opts-out-of-the-arithmetic", why:"Why every principle in this paper still passes through one person choosing to help another."}, {slug:"it-shows-up-in-people-first", why:"Frustration and silence as the same person, six months apart."}, {slug:"ten-minutes-today", why:"The norm that shortens the largest queue in the organization, and its companion."}, {slug:"the-half-life-of-knowledge", why:"Symptoms that look organizational and are partly a competence problem — slower decisions, more coordination, structure unchanged."}]},

  {id:"learn", kpi:"learn", anchor:true,  w:1.0,  short:"Learning",
   notice:"Outcomes seem to reach the people who chose the work late, or not at all, which suggests similar choices may get made again.",
   q:"After the last significant thing that went wrong, what is now different?",
   o:["Nothing. There may be a document.",
      "A retrospective happened and produced actions nobody owns.",
      "Some outcomes change subsequent decisions, depending on who was involved.",
      "There is a named decision that would go differently, and someone can point to it."],
   move:"Take the last significant failure and name the decision that would now go differently. If there isn't one, that's the finding. Then fix the routing: make sure whoever chose the work hears what happened to it.",
   reads:[{slug:"learning", why:"Why the loop stays open, in three structural reasons that have nothing to do with interest."}, {slug:"closing-the-loop", why:"Closing those three, in the order that works rather than the order everyone tries."}, {slug:"no-incident-no-story", why:"Why prevention is career-invisible and rescue is not."}, {slug:"the-half-life-of-knowledge", why:"Why an organization cannot learn faster than the people inside it are, and what that looks like when it falls behind."}]},

  {id:"eng",   kpi:"learn", anchor:false, w:1.0,  short:"Delivery",
   notice:"The delivery path itself appears to add friction — usually the most visible kind, and often the least expensive to address.",
   q:"Are delivery speed and stability measured, and has a measurement ever changed a decision?",
   o:["Delivery speed is discussed in impressions. No numbers exist, and opinions stand in for them.",
      "Numbers exist somewhere in a tool. Nobody reviews them, and nothing has changed because of one.",
      "Lead time and failure rate are tracked for parts of the organization; improvements are local and occasional.",
      "The four delivery measures are tracked, reviewed on a rhythm, and have visibly changed how work is organized."],
   move:"Take one team and one month. Measure deployment frequency, lead time for changes, change failure rate and time to restore service. Bring the four numbers with no recommendation attached.",
   reads:[{slug:"technology", why:"Scaling a capability that is not working, faster."}, {slug:"observing-organizations", why:"Four places friction becomes visible, as a number or as a question."}, {slug:"multiplying-whats-there", why:"Pairing one movement measure with one outcome measure, so speed cannot be mistaken for progress."}, {slug:"shared-infrastructure-shared-friction", why:"How difficult have we made the next change? Dependency, exit, and keeping the trade visible when it is made."}]},

  {id:"amp",   kpi:"learn", anchor:false, w:0.75, short:"Amplification",
   notice:"Technology may be being asked to scale something whose ownership is not yet settled.",
   q:"The last tool or AI decision made here — can anyone say what it was meant to speed up?",
   o:["It was bought to fix something that was never really a tool problem.",
      "Adoption was the goal. Nobody asked what was being scaled up.",
      "It followed a decision about what the organization needed to be able to do.",
      "It named what it multiplies, and somebody checked that thing was worth multiplying."],
   move:"For the next tool or AI decision, name the capability it multiplies — and whether that capability is currently good enough to be worth multiplying.",
   reads:[{slug:"artificial-intelligence", why:"The same pilot in three organizations, three outcomes, and the technology explains none of it."}, {slug:"owning-what-ai-cant", why:"Checking ownership before capability, and what survives when translation stops being scarce."}, {slug:"technology", why:"Why technology multiplies whatever is already there, including the parts you would rather it did not."}, {slug:"shared-infrastructure-shared-friction", why:"Establishing the sovereignty a capability genuinely needs, and what shared infrastructure costs when needs differ."}]},

  {id:"val",   kpi:"value", anchor:true,  w:1.0,  short:"Outcome",
   notice:"What gets measured appears to be what was produced rather than what arrived for anyone outside.",
   q:"After something ships, does anyone find out whether it made a difference?",
   o:["Delivery is the finish line. Whether it landed is nobody's question after go-live.",
      "Benefits were estimated at funding and never revisited, because by then the decision was old.",
      "Some initiatives get followed up, usually the large or the contested ones.",
      "Every significant piece of work has someone who finds out what changed, and says so even when nothing did."],
   move:"Take something that shipped six months ago. Find out what it changed for the people outside. Report the answer whether or not it is flattering.",
   reads:[{slug:"value", why:"Every report accurate, every project delivered, and nothing any better."}, {slug:"creating-value", why:"The other half of the work, cultivated as deliberately as friction is removed."}, {slug:"measuring-value", why:"Four rungs from we delivered it to something is decided differently because of it."}]},

  {id:"prox",  kpi:"value", anchor:false, w:1.0,  short:"Proximity",
   notice:"Contact with the outside may be stopping at the next team in the chain. That feels like proximity, and the questions another developer asks are not the questions the person at the end would ask.",
   q:"When did someone who builds here last speak directly to someone who uses what they built?",
   o:["I cannot think of an occasion. It reaches them through other people.",
      "We talk to the team that consumes our work — developers on the other side of the ecosystem — but not to anyone past them.",
      "We meet an actual end user now and then, usually at an arranged session or after something has gone wrong.",
      "Regularly, with the people the work is ultimately for, and it does not need arranging."],
   move:"Put one person who builds in the same room as one person who uses, for an hour, with no agenda and nobody translating.",
   reads:[{slug:"creating-value", why:"Putting somebody in the room who experiences the outcome — and who that actually is."}, {slug:"value", why:"Why delivery is a fact about you and value is a fact about them."}, {slug:"downstream-of-the-conditions", why:"Why the people who could tell you are the ones with the most choice about where to work."}]},

  {id:"stop",  kpi:"value", anchor:false, w:0.75, short:"Stopping",
   notice:"Work that has stopped being worth doing may not have an obvious way of being stopped.",
   q:"When did the organization last stop something that was running exactly as planned?",
   o:["Never that anyone can recall. Work ends when it is finished, not when it stops being worth doing.",
      "Things get quietly deprioritized and starved, but nothing is ever formally stopped.",
      "It happens, usually driven by a budget round rather than by evidence about the outcome.",
      "There are recent examples of work stopped on its merits, decided by whoever owned the outcome."],
   move:"Ask each owner to name one thing they would stop if stopping carried no cost. Then find out what the cost actually is.",
   reads:[{slug:"value", why:"Extracted value and grown value look identical on the way up."}, {slug:"funding-what-doesnt-end", why:"Why a project cannot ask whether it is still worth doing."}, {slug:"measuring-value", why:"A measure that cannot change a decision is decoration."}]},
];
