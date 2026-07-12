// Hardcoded UI strings kept out of components.
// Profile/project content lives in profile.js and projects.js.

export const ui = {
  header: {
    logo: 'lucaspujol',
    nav: [
      { href: '#status', label: 'Status' },
      { href: '#work', label: 'Work' },
      { href: '#about', label: 'About' },
      { href: '#stack', label: 'Stack' },
      { href: '#contact', label: 'Contact' },
    ],
  },

  hero: {
    viewWork: 'View work',
    resume: 'Resume',
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
  },

  sections: {
    status: { index: '01', title: 'Status' },
    about: { index: '02', title: 'About' },
    work: { index: '03', title: 'Selected work' },
    stack: { index: '04', title: 'Stack' },
    contact: { index: '05', title: 'Get in touch' },
  },

  projects: {
    otherHeading: 'Other projects',
    legend: [
      { kind: 'perso', label: 'Personal' },
      { kind: 'school', label: 'Epitech' },
    ],
    marks: {
      school: { glyph: '{}', label: 'Epitech project' },
      perso: { glyph: '>', label: 'Personal project' },
    },
    links: {
      labels: {
        github: 'Code',
        docs: 'Docs',
        demo: 'Demo',
        store: 'Store',
      },
      fallback: 'Link',
      private: 'private repo',
    },
  },

  contact: {
    lead: 'Feel free to reach out to me via email or connect with me on GitHub and LinkedIn.',
    github: 'github.com/lucaspujol',
    linkedin: 'Lucas Pujol',
  },

  footer: {
    builtWith: 'Built with React · Vite',
  },

  accentPicker: {
    ariaLabel: 'Change accent color',
    default: 'default',
    reset: 'Reset',
  },

  themeToggle: {
    ariaLabel: (isDark) => `Switch to ${isDark ? 'light' : 'dark'} theme`,
  },
};
