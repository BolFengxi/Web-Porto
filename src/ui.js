/** Allow real web/email destinations; reject script URLs and fake placeholders. */
export function safeHref(value, { allowLocal = false } = {}) {
  if (typeof value !== 'string' || !value.trim()) return null;
  if (allowLocal && /^\/(?!\/)[^\\\s]+$/.test(value)) return value;
  try {
    const url = new URL(value);
    if (url.protocol === 'https:' && url.hostname && !url.username && !url.password) return url.href;
    if (url.protocol === 'mailto:' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url.pathname)) return url.href;
  } catch { /* Missing or invalid destinations do not become links. */ }
  return null;
}

function setVisible(document, selector, visible) {
  document.querySelectorAll(selector).forEach((element) => { element.hidden = !visible; });
}

function externalLink(document, label, href, className = 'text-link') {
  const link = document.createElement('a');
  link.className = className;
  link.href = href;
  link.textContent = label;
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = ' ↗';
  link.append(arrow);
  // Same-tab navigation keeps keyboard behavior predictable.
  return link;
}

export function renderPortfolio(document, data) {
  const { profile, projects = [], contacts = [] } = data;
  document.querySelectorAll('[data-name]').forEach((element) => { element.textContent = profile.displayName; });
  document.querySelector('[data-intro]').textContent = profile.intro;
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  document.querySelector('.wordmark').setAttribute('aria-label', `${profile.displayName}, ke beranda`);

  const resume = safeHref(profile.resume, { allowLocal: true });
  const hasBio = typeof profile.bio === 'string' && Boolean(profile.bio.trim());
  setVisible(document, '#tentang, [data-about-link]', hasBio || Boolean(resume));
  document.querySelector('[data-bio]').textContent = profile.bio ?? '';
  const resumeLink = document.querySelector('[data-resume]');
  resumeLink.hidden = !resume;
  resumeLink.removeAttribute('href');
  if (resume) resumeLink.setAttribute('href', resume);

  const projectList = document.querySelector('#project-list');
  projectList.replaceChildren();
  const seen = new Set();
  const validProjects = projects.filter((project) => {
    if (!project.id || seen.has(project.id) || !project.title?.trim() || !project.summary?.trim()) return false;
    seen.add(project.id);
    return true;
  });
  setVisible(document, '#karya, [data-project-link]', validProjects.length > 0);
  const template = document.querySelector('#project-template');
  validProjects.forEach((project, index) => {
    const card = template.content.cloneNode(true);
    card.querySelector('.project-number').textContent = String(index + 1).padStart(2, '0');
    card.querySelector('[data-project-monogram]').textContent = project.title;
    card.querySelector('.project-category').textContent = project.category ?? 'PROJECT';
    card.querySelector('.project-title').textContent = project.title;
    card.querySelector('.project-summary').textContent = project.summary;
    const technologies = card.querySelector('.technology-list');
    (project.technologies ?? []).forEach((technology) => {
      const tag = document.createElement('li');
      tag.textContent = technology;
      technologies.append(tag);
    });
    technologies.hidden = technologies.children.length === 0;
    const actions = card.querySelector('.project-actions');
    [['Lihat website', project.demoUrl], ['Lihat source', project.repositoryUrl]].forEach(([label, value]) => {
      const href = safeHref(value);
      if (href) {
        const link = externalLink(document, label, href);
        link.setAttribute('aria-label', `${label}: ${project.title}`);
        actions.append(link);
      }
    });
    actions.hidden = actions.children.length === 0;
    projectList.append(card);
  });

  const contactList = document.querySelector('#contact-list');
  contactList.replaceChildren();
  const validContacts = contacts.filter((contact) => contact.label?.trim() && safeHref(contact.href));
  setVisible(document, '#terhubung, [data-contact-link]', validContacts.length > 0);
  validContacts.forEach((contact) => {
    contactList.append(externalLink(document, contact.label, safeHref(contact.href), 'button button-paper'));
  });
}
