// Who and what the site is, said once. Structured data, bylines and the
// services page all read from here, so the name, the company and the
// location cannot drift apart between pages.

export const SITE_URL = 'https://troi.se';

export const author = {
  name: 'Christoffer Råsten',
  role: 'Enterprise architect, technical leader and senior advisor',
  email: 'christoffer.rasten@troi.se',
  linkedin: 'https://www.linkedin.com/in/christofferrasten',
  city: 'Stockholm',
  country: 'Sweden',
  countryCode: 'SE',
  languages: ['English', 'Swedish'],
};

export const company = {
  name: 'TROi',
  legalName: 'TROi Arkitektur AB',
  address: {
    street: 'Gnejsvägen 13B',
    postalCode: '132 35',
    locality: 'Saltsjö-Boo',
    region: 'Nacka, Stockholm',
    country: 'Sweden',
  },
};

export const paperName = 'Organizational Flow';

/** The subjects the author actually works in. Used in Person.knowsAbout. */
export const expertise = [
  'Enterprise architecture',
  'Solution architecture',
  'Organizational design',
  'Organizational friction',
  'Organizational Flow',
  'Business capabilities',
  'Bounded contexts',
  'Team boundaries and cognitive load',
  'Decision rights and autonomy',
  'Architecture for organizations using AI agents',
  'Architecture governance and guardrails',
  'Architecture decision records',
  'Sociotechnical architecture',
  'Enterprise architecture in insurance',
  'Media and advertising architecture',
  'Subscription and payment architecture',
];

/** Default image for link previews. The book cover is the one image the site
 *  has that says what it is at thumbnail size. */
export const defaultOgImage = '/book/cover.jpg';

const PERSON_ID = `${SITE_URL}/about/#person`;
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
export const BOOK_ID = `${SITE_URL}/organizational-flow/#book`;

export const personRef = { '@id': PERSON_ID };
export const orgRef = { '@id': ORG_ID };

/** Emitted on every page: the site, the company and the person behind it. */
export function baseGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: company.name,
      legalName: company.legalName,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      email: author.email,
      founder: personRef,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        postalCode: company.address.postalCode,
        addressLocality: company.address.locality,
        addressRegion: company.address.region,
        addressCountry: author.countryCode,
      },
      areaServed: [{ '@type': 'Country', name: author.country }, 'Europe'],
      knowsAbout: expertise,
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: author.name,
      jobTitle: author.role,
      url: `${SITE_URL}/about/`,
      email: author.email,
      sameAs: [author.linkedin],
      worksFor: orgRef,
      address: { '@type': 'PostalAddress', addressLocality: author.city, addressCountry: author.countryCode },
      knowsLanguage: author.languages,
      knowsAbout: expertise,
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: company.name,
      url: `${SITE_URL}/`,
      publisher: orgRef,
      inLanguage: 'en',
    },
  ];
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
