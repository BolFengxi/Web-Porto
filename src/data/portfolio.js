// Only publish facts and URLs supplied by the owner or verified in the repository.
// Empty optional fields hide their section/action; never fill them with fake data.
export const portfolio = {
  profile: {
    displayName: 'Iqbal',
    fullName: 'Iqbal Rafi Nuryana',
    bio: 'Undergraduate Computer Science student at University of Indonesia',
    resume: null,
  },
  // Optional overrides. Title/description otherwise follow the profile.
  metadata: {
    title: null,
    description: null,
    siteUrl: null,
  },
  about: {
    photos: [
      { src: '/photos/iqbal-campus-cutout.webp', alt: 'Iqbal wearing glasses and a yellow Universitas Indonesia blazer.', caption: 'on campus', width: 1087, height: 1447 },
      { src: '/photos/iqbal-futsal.webp', alt: 'Iqbal on an indoor futsal court, holding a trophy and a third-place Sportfest 2026 board.', caption: 'beyond the screen', width: 1200, height: 1600 },
    ],
    summary: 'My projects span web applications, Flutter apps, and Python automation. Alongside building software, I have experience in teaching assistance and student organization treasury.',
    education: [
      { institution: 'Universitas Indonesia', program: 'Computer Science', qualification: 'Undergraduate' },
    ],
    experience: [
      {
        title: 'Teaching Assistant',
        organization: 'Faculty of Computer Science, Universitas Indonesia',
        period: 'Jul 2026 — Present',
        details: ['Introduction to Computer Organization'],
      },
      {
        title: 'Student Organization Treasurer',
        organization: null,
        period: null,
        details: [],
      },
    ],
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
    { id: 'linkedin', label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/iqbal-rafi-nuryana-201836315/' },
    { id: 'github', label: 'Find me on GitHub', href: 'https://github.com/BolFengxi' },
  ],
};
