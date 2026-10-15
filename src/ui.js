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
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  document.querySelector('.wordmark').setAttribute('aria-label', `${profile.displayName}, home`);

  const resume = safeHref(profile.resume, { allowLocal: true });
  const hasBio = typeof profile.bio === 'string' && Boolean(profile.bio.trim());
  setVisible(document, '#tentang, [data-about-link]', hasBio || Boolean(resume));
  document.querySelector('[data-bio]').textContent = profile.bio ?? '';
  const resumeLink = document.querySelector('[data-resume]');
  resumeLink.hidden = !resume;
  resumeLink.removeAttribute('href');
  if (resume) resumeLink.setAttribute('href', resume);

  renderBackground(document, data);

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
    card.querySelector('[data-project-monogram]').textContent = project.monogram ?? project.title.slice(0, 2).toUpperCase();
    card.querySelector('[data-project-stack]').textContent = (project.technologies ?? []).slice(0, 2).join(' / ');
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
    [['View website', project.demoUrl], ['View source', project.repositoryUrl]].forEach(([label, value]) => {
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

function renderBackground(document, data) {
  const about = data.about ?? {};
  const photoList = document.querySelector('[data-about-photos]');
  photoList.replaceChildren();
  (about.photos ?? []).filter((photo) => /^\/photos\/[a-z0-9][a-z0-9-]*\.(png|webp|jpe?g)$/i.test(photo.src) && photo.alt?.trim()
    && Number.isInteger(photo.width) && photo.width > 0 && Number.isInteger(photo.height) && photo.height > 0).slice(0, 2).forEach((photo) => {
    const figure = document.createElement('figure');
    figure.className = 'photo-print';
    const image = document.createElement('img');
    image.setAttribute('src', photo.src);
    image.setAttribute('alt', photo.alt);
    image.setAttribute('width', String(photo.width));
    image.setAttribute('height', String(photo.height));
    image.setAttribute('loading', 'lazy');
    image.setAttribute('decoding', 'async');
    figure.append(image);
    if (photo.caption?.trim()) {
      const caption = document.createElement('figcaption');
      caption.textContent = photo.caption;
      figure.append(caption);
    }
    photoList.append(figure);
  });
  photoList.hidden = photoList.children.length === 0;
  const summary = typeof about.summary === 'string' ? about.summary.trim() : '';
  document.querySelector('[data-full-name]').textContent = data.profile.fullName ?? data.profile.displayName;
  document.querySelector('[data-about-summary]').textContent = summary;
  setVisible(document, '[data-about-note]', Boolean(summary));

  const educationList = document.querySelector('#education-list');
  educationList.replaceChildren();
  (about.education ?? []).filter((item) => item.institution?.trim() && item.program?.trim()).forEach((item) => {
    const entry = backgroundEntry(document, item.institution, item.program, item.qualification);
    educationList.append(entry);
  });
  setVisible(document, '[data-education-group]', educationList.children.length > 0);

  const experienceList = document.querySelector('#experience-list');
  experienceList.replaceChildren();
  (about.experience ?? []).filter((item) => item.title?.trim()).forEach((item) => {
    const entry = backgroundEntry(document, item.title, item.organization, item.period);
    if (item.details?.length) {
      const details = document.createElement('ul');
      details.className = 'background-details';
      item.details.filter((detail) => typeof detail === 'string' && detail.trim()).forEach((detail) => {
        const line = document.createElement('li');
        line.textContent = detail;
        details.append(line);
      });
      if (details.children.length) entry.append(details);
    }
    experienceList.append(entry);
  });
  setVisible(document, '[data-experience-group]', experienceList.children.length > 0);
  setVisible(document, '[data-background-notes]', educationList.children.length > 0 || experienceList.children.length > 0);
  setVisible(document, '[data-about-details]', Boolean(summary || educationList.children.length || experienceList.children.length));

  const hasBackground = Boolean(summary || educationList.children.length || experienceList.children.length || photoList.children.length);
  setVisible(document, '#profil', hasBackground);
  const hasHeroAbout = !document.querySelector('#tentang').hidden;
  setVisible(document, '[data-about-link]', hasBackground || hasHeroAbout);
  document.querySelectorAll('[data-about-link]').forEach((link) => {
    link.setAttribute('href', hasBackground ? '#profil' : '#tentang');
  });
}

function backgroundEntry(document, title, subtitle, note) {
  const entry = document.createElement('article');
  entry.className = 'background-entry';
  const heading = document.createElement('h4');
  heading.textContent = title;
  entry.append(heading);
  if (subtitle?.trim()) {
    const line = document.createElement('p');
    line.className = 'background-subtitle';
    line.textContent = subtitle;
    entry.append(line);
  }
  if (note?.trim()) {
    const line = document.createElement('p');
    line.className = 'background-period';
    line.textContent = note;
    entry.append(line);
  }
  return entry;
}
