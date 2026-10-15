// Only publish facts and URLs supplied by the owner or verified in the repository.
// Empty optional fields hide their section/action; never fill them with fake data.
export const portfolio = {
  profile: {
    displayName: 'Iqbal',
    bio: 'Undergraduate Computer Science student at University of Indonesia',
    resume: null,
  },
  // Optional overrides. Title/description otherwise follow the profile.
  metadata: {
    title: null,
    description: null,
    siteUrl: null,
  },
  projects: [
    {
      id: 'sporta-kuler',
      title: 'Sporta Kuler',
      monogram: 'SK',
      category: 'WEB APPLICATION / COURSE PROJECT',
      summary: 'A Django application for managing sports products, with user accounts, product CRUD, and AJAX interactions.',
      technologies: ['Python', 'Django', 'JavaScript'],
      repositoryUrl: 'https://github.com/BolFengxi/sporta_kuler',
      demoUrl: null,
    },
    {
      id: 'minatoko',
      title: 'MinaToko',
      monogram: 'MT',
      category: 'MOBILE APPLICATION / COURSE PROJECT',
      summary: 'A Flutter product catalog with forms, product details, and session-based authentication connected to a Django backend.',
      technologies: ['Flutter', 'Dart', 'Django integration'],
      repositoryUrl: 'https://github.com/BolFengxi/minatoko',
      demoUrl: null,
    },
    {
      id: 'neo-tube-automator',
      title: 'Neo Tube Automator',
      monogram: 'NT',
      category: 'AUTOMATION / PERSONAL EXPERIMENT',
      summary: 'A Python and Selenium experiment for searching video links in batches and automating a download workflow.',
      technologies: ['Python', 'Selenium'],
      repositoryUrl: 'https://github.com/BolFengxi/Neo-Tube-Automator',
      demoUrl: null,
    },
  ],
  contacts: [
    { id: 'github', label: 'Find me on GitHub', href: 'https://github.com/BolFengxi' },
  ],
};
