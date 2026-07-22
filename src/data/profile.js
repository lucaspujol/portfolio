export const profile = {
  name: 'Lucas Pujol',
  role: 'Systems & OOP developer',
  tagline: 'C++, graphics, simulation and clean architecture.',
  location: 'Epitech Montpellier',
  intro: 'Student at Epitech Montpellier',
  status: {
    available: true,
    label: 'Open to work',
    statement:
      'Looking for a 6 month work-study, as part of my Epitech curriculum.',
    items: [
      { label: 'Window', value: '17 September → 26 February' },
      { label: 'Based in', value: 'Montpellier, France' },
    ],
  },
  about: [
    "Software engineering student at Epitech Montpellier. My favorite language (and the one I'm most comfortable with) is currently C++.",
    "What I enjoy the most is not just writing code, but designing full architectures. I like to think about the interfaces, the abstractions, the patterns, the relationships between components...",
    "I also love building complete projects: this means not just functional code, but also tests, CI/CD, documentation, and so on.",
    "For my second year at Epitech, I focused on team-based development, and learned how to work with teams up to 5 people, using GitHub in its (almost) full extent, GitHub Actions, GitHub Projects, and more.",
    "Below, in `selected work` section, you can find a bunch of my projects, and the tech stack used. You will find a mix of personal and school projects.",
  ],
  experience: [
    {
      title: 'Web Developer Internship',
      org: 'Scale Theme',
      period: 'July — November 2025',
      description:
        'Full-stack web development internship. Worked with React, Next.js, TailwindCSS, PHP, MySQL and more. Mostly frontend work, but also some backend and database work.'
    },
    {
      title: 'Programme Grande École',
      org: 'Epitech Montpellier',
      period: '2023 — Present',
      description:
        'Software engineering. 25+ projects in C and C++, including a full OOP module (design, interfaces, plugin architectures). Focus on problem solving, systems and clean code.',
    },
    {
      title: 'Bac Technologique (STI2D)',
      org: 'Lycée Victor Hugo, Lunel',
      period: '2021 — 2023',
      description:
        'Technological baccalaureate oriented toward computer science and digital systems.',
    },
  ],
  stack: {
    Languages: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Bash'],
    Graphics: ['SFML', 'SDL2', 'HTML', 'CSS', 'React'],
    Tools: ['Git', 'CMake', 'Make', 'Linux', 'GitHub Actions', 'Doxygen'],
  },
  links: {
    github: 'https://github.com/lucaspujol',
    linkedin: 'https://www.linkedin.com/in/lucas-pujol-epitech/',
    email: 'lucas.pujol.60240@gmail.com',
  },
};
