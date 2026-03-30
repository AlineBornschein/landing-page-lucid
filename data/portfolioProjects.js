const PLACEHOLDER = '/images/portfolio/placeholder.svg';

export const portfolioProjects = [
  {
    slug: 'brahma-sutras',
    name: 'Brahma Sutras',
    url: 'https://www.brahmsutras.com',
    tagline: 'A refined digital presence for classical wisdom and commentary.',
    summary: [
      'We partnered with Brahma Sutras to translate a rich textual tradition into a calm, readable web experience that respects the depth of the source material while remaining approachable for modern readers.',
      'Our team focused on typography, hierarchy, and performance so long-form content loads quickly and reads comfortably across devices.',
      'Lucid Code Labs delivered a maintainable front end and content structure that the client can extend as their library and audience grow.',
    ],
    tags: ['Content-led design', 'Performance', 'Responsive layout'],
    screenshots: [
      { src: '/images/yoga_village1.png', alt: 'Brahma Sutras website — primary view', caption: 'Landing and hero presentation.' },
      { src: '/images/yoga_village2.png', alt: 'Brahma Sutras website — content section', caption: 'Key content and layout.' },
      { src: '/images/yoga_village3.png', alt: 'Brahma Sutras website — interior section', caption: 'Additional section and typography.' },
      { src: '/images/yoga_village4.png', alt: 'Brahma Sutras website — detail view', caption: 'Further pages and responsive treatment.' },
      { src: '/images/yoga_village5.png', alt: 'Brahma Sutras website — additional screen', caption: 'Extended layout and visual system.' },
    ],
  },
  {
    slug: 'atma-shambhala',
    name: 'Atma Shambhala',
    url: 'https://www.atmashambhala.com',
    tagline: 'Immersive storytelling for a conscious brand.',
    summary: [
      'Atma Shambhala needed a digital space that mirrors the tone of their work: spacious, intentional, and emotionally resonant.',
      'We implemented responsive layouts and subtle motion where it supports the brand.',
      'The launch gave their team a flexible foundation to grow their community online.',
    ],
    tags: ['Brand-led UX', 'Visual storytelling', 'Motion'],
    screenshots: [
      { src: '/images/atma1.png', alt: 'Atma Shambhala website — primary view', caption: 'Landing and brand presentation.' },
      {
        src: '/images/atma2.png',
        alt: 'Atma Shambhala website — content section',
        caption: 'Key sections and layout.',
        objectFit: 'cover',
      },
      { src: '/images/atma3.png', alt: 'Atma Shambhala website — experiences and journeys', caption: 'Experiences, search, and program cards.' },
      { src: '/images/atma4.png', alt: 'Atma Shambhala website — screen 4', caption: 'Additional views and layout.' },
      { src: '/images/atma5.png', alt: 'Atma Shambhala website — screen 5', caption: 'Further pages and detail.' },
      { src: '/images/atma6.png', alt: 'Atma Shambhala website — screen 6', caption: 'Extended layout and visual system.' },
    ],
  },
  {
    slug: 'loyalty-club-plc',
    name: 'Loyalty Club PLC',
    url: 'https://www.loyaltyclubplc.com',
    tagline: 'Enterprise-grade loyalty software and companion app, built for scale.',
    summary: [
      'Loyalty Club PLC required a robust platform for partners and end customers.',
      'Lucid Code Labs engineered the experience end to end—from information architecture and UI through to scalable implementation.',
      'We also developed a companion mobile app for the loyalty platform so the product reaches users wherever they are.',
      'The platform supports growth with a codebase and design system the team can evolve confidently.',
    ],
    tags: ['SaaS', 'Mobile app', 'Product design', 'Full-stack delivery'],
    screenshots: [
      { src: '/images/loyalty1.png', alt: 'Loyalty Club PLC platform — primary view', caption: 'Product overview and key interface.' },
      { src: '/images/loyalty2.png', alt: 'Loyalty Club PLC platform — feature section', caption: 'Core flows and layout.' },
      { src: '/images/loyalty3.png', alt: 'Loyalty Club PLC platform — additional screen', caption: 'Further views and responsive treatment.' },
    ],
  },
  {
    slug: 'inner-sphere',
    name: 'Inner Sphere',
    url: 'https://www.inner-sphere.net',
    tagline: 'A focused web presence for a niche digital community.',
    summary: [
      'Inner Sphere needed a site that communicates purpose quickly and invites the right audience to go deeper.',
      'Technical delivery emphasised fast first paint, accessible contrast, and semantic structure.',
      'The outcome is a lightweight, credible presence that supports ongoing updates.',
    ],
    tags: ['Landing experience', 'Accessibility', 'SEO-minded structure'],
    screenshots: [
      { src: PLACEHOLDER, alt: 'Inner Sphere', caption: 'Add screenshots to public/images/portfolio/inner-sphere' },
    ],
  },
  {
    slug: 'awakenest',
    name: 'Awakenest (Stayfly Studio)',
    url: 'https://www.stayflystudio.com/awakenest',
    tagline: 'Festival marketing: wellness, community, and tickets in one flow.',
    summary: [
      'Awakenest is a community celebration of wellness and conscious living at Stayfly Studio in Koh Phangan.',
      'We built a structured, bilingual experience with clear calls to action for tickets and practical festival details.',
      'Lucid Code Labs delivered a production-ready marketing site that scales with schedule and FAQ updates.',
    ],
    tags: ['Event marketing', 'Bilingual content', 'Conversion-focused UI'],
    screenshots: [
      { src: PLACEHOLDER, alt: 'Awakenest', caption: 'Add screenshots to public/images/portfolio/awakenest' },
    ],
  },
  {
    slug: 'myth-os',
    name: 'Myth-OS',
    url: 'https://myth-os.net',
    tagline: 'Minimal, atmospheric web shell for an ideas-led project.',
    summary: [
      'Myth-OS called for a quiet entry point—fast, sparse, and memorable.',
      'We kept the footprint small with crisp typography and intentional negative space.',
      'Lucid Code Labs applied the same engineering discipline as on larger builds.',
    ],
    tags: ['Minimal UI', 'Performance', 'Experimental'],
    screenshots: [
      { src: PLACEHOLDER, alt: 'Myth-OS', caption: 'Add screenshots to public/images/portfolio/myth-os' },
    ],
  },
];

export function getPortfolioSlugs() {
  return portfolioProjects.map((p) => p.slug);
}

export function getPortfolioProjectBySlug(slug) {
  return portfolioProjects.find((p) => p.slug === slug) ?? null;
}
