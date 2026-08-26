export interface Credit {
  name: string;
  relation: string;
  note: string;
  chapterSlug?: string;
}

// The opening of the Acknowledgments — the whole personal thank-you, one
// paragraph per entry. The credit list below follows it directly.
export const acknowledgmentsIntro: string[] = [
  'This paper is the product of twenty-five years of practice, reflection, conversations, and shared learning.',
  'My first and greatest thanks go to Anki, and to Isa, Tilde and Oliver.',
  'You are the best part of my life.',
  'Thank you for your patience, your love, and your unconditional support.',
  'My thanks also go to Lars Barkman, whose conversations became the starting point for many of the ideas in this paper, and whose feedback on the drafts improved them.',
  'And to David Pettersson, who read this properly and sent back the kind of notes that are only worth having from someone who took it seriously. Several things in this version are here because he raised them.',
  'And thank you to everyone else who read a draft, noted something that needed fixing, or simply talked it through with me. None of that time was owed, and I felt it in every one of those conversations.',
  "And to everyone I have had the privilege of working alongside over the past twenty-five years — colleagues, clients, and friends. You gave me perspectives I didn't have, challenged ideas I held too tightly, pushed me further than I would have gone on my own, and trusted me with opportunities long before I felt I had earned them.",
  'What follows are the books, research, ideas and practices I took inspiration from, and where I went looking to see whether what I thought I was noticing had already been noticed — and noticed more rigorously. Some confirmed what I had come to on my own. Some corrected it. They are acknowledged where their influence is most visible, rather than gathered at the back as references.',
];

// Shared by the Acknowledgments page and the downloadable paper, so the two
// can never drift apart.
export const credits: Credit[] = [
  {
    name: 'Drive: The Surprising Truth About What Motivates Us',
    relation: 'Daniel Pink',
    note: 'The autonomy, mastery, and purpose framework this paper leans on for what makes people thrive at work — and what turns out to map onto gardening almost too neatly.',
    chapterSlug: 'growing-the-team',
  },
  {
    name: 'Self-Determination Theory',
    relation: 'Edward Deci & Richard Ryan',
    note: 'The research underneath the autonomy, mastery, and purpose framework. Pink made it readable; Deci and Ryan did the work, and anyone wanting the evidence rather than the story should start with them.',
    chapterSlug: 'growing-the-team',
  },
  {
    name: 'Thinking in Systems',
    relation: 'Donella Meadows',
    note: 'The clearest available argument that systems behave according to their structure rather than anyone\'s intentions for them. The forest in this paper is its own image, but this is the thinking underneath it.',
    chapterSlug: 'organizations-as-systems',
  },
  {
    name: 'General System Theory',
    relation: 'Ludwig von Bertalanffy',
    note: 'The original case that living systems obey principles no machine model captures — decades before anyone applied it to organizations, and the lineage every version of this idea descends from, including this one.',
    chapterSlug: 'organizations-as-systems',
  },
  {
    name: 'The Fearless Organization',
    relation: 'Amy Edmondson',
    note: 'Psychological safety as a concept, and the research establishing it. This paper argues that safety follows from clear boundaries rather than running alongside them, which is a claim about sequence — the underlying idea is hers.',
    chapterSlug: 'ownership',
  },
  {
    name: 'Sociocracy, Holacracy & Open Space',
    relation: 'Practices this paper borrows from without adopting',
    note: 'Self-selection did not start in the room described in Ownership. These traditions worked it out first, and the chapter takes one narrow lesson from a much larger body of practice.',
    chapterSlug: 'ownership',
  },
  {
    name: 'Domain-Driven Design',
    relation: 'Eric Evans',
    note: "Bounded contexts are the closest existing relative to what this paper means by capabilities — drawing lines around what belongs together, and treating the lines rather than the systems inside them as the durable thing. The wider enterprise-architecture tradition is in here too, less as a single source than as the field where I learned which questions were worth asking.",
    chapterSlug: 'capabilities',
  },
  {
    name: 'Team Topologies',
    relation: 'Matthew Skelton & Manuel Pais',
    note: 'Team types, interaction modes, and cognitive load as a sizing constraint rather than headcount. Anyone drawing team boundaries should read the original rather than the summary of it in this paper. What I add is the argument about decision authority — that embedding business judgement in a team, rather than representing it, is what separates a team that can move from one that can only build.',
    chapterSlug: 'teams',
  },
  {
    name: 'Escaping the Build Trap',
    relation: 'Melissa Perri',
    note: 'The case that the project is the wrong unit, that the funding model produces the behaviour rather than the people, and that writing down what you expect before the work starts is what makes being wrong useful. She makes the argument more thoroughly than I do, including the part above the team that this paper skips. What I add is the friction reading — that a project assembles boundaries, a steering forum and a dissolution date on purpose, and so manufactures three of the four shapes before anyone has done any work.',
    chapterSlug: 'funding-what-doesnt-end',
  },
  {
    name: 'Building Evolutionary Architecture',
    relation: 'Neal Ford, Rebecca Parsons & Patrick Kua',
    note: "The clearest statement of the standard this paper's Architecture chapter uses — that an architecture's first job is to remain guided and changeable — and the operationalization I don't have, in the form of fitness functions. I apply the same standard one level out, to organizational decisions, where nothing can be automatically verified. Anyone applying it to systems should read them for the mechanics.",
    chapterSlug: 'architecture',
  },
  {
    name: 'Documenting Architecture Decisions',
    relation: 'Michael Nygard',
    note: 'The ADR format, unchanged since 2011 and still the only architecture documentation I care about keeping. The argument in Settling the Few Things for where decision records sit is mine; the thing itself is his.',
    chapterSlug: 'settling-the-few-things',
  },
  {
    name: 'Technology Radar',
    relation: 'ThoughtWorks',
    note: 'Adopt, trial, assess, hold — a format that makes technology decisions explicit, dated and reversible. Its real value is not the published list but the forum an organization has to create in order to produce its own.',
    chapterSlug: 'technology',
  },
  {
    name: 'Accelerate',
    relation: 'Nicole Forsgren, Jez Humble & Gene Kim',
    note: 'The measured research behind software delivery performance, and the reason this paper deliberately stops where it does. The four keys are properly operationalized and statistically validated; the four indicators here are diagnostic prompts sitting one layer upstream, and nothing in this paper carries the same evidential weight.',
    chapterSlug: 'technology',
  },
  {
    name: 'The Infinite Game',
    relation: 'Simon Sinek',
    note: 'The framing of organizations that treat learning as continuous because there is no finish line to reach — which turns out to describe the same posture that attracts the people worth keeping.',
    chapterSlug: 'people',
  },
];
