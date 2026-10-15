// Only publish facts and URLs supplied by the owner or verified in the repository.
// Empty optional fields hide their section/action; never fill them with fake data.
export const portfolio = {
  profile: {
    displayName: 'Iqbal',
    intro: 'Ide, eksperimen, dan cerita di balik sebuah karya.',
    bio: null,
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
      id: 'web-porto',
      title: 'Web Porto',
      category: 'PERSONAL WEBSITE / DALAM PENGEMBANGAN',
      summary: 'Halaman yang sedang kamu jelajahi. Portofolio pribadi dengan panel komik, warna berani, dan konten yang ditulis langsung di dalam project.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vite'],
      repositoryUrl: 'https://github.com/BolFengxi/Web-Porto',
      demoUrl: null,
    },
  ],
  contacts: [
    { id: 'github', label: 'Temui di GitHub', href: 'https://github.com/BolFengxi' },
  ],
};
