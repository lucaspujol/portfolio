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
      'Looking for a 6 month work-study. Want to work with a team on a real product to learn in a professional environment.',
    items: [
      { label: 'Window', value: '17 September -> 26 February' },
      { label: 'Based in', value: 'Montpellier, France' },
    ],
  },
  about: [
    "Software engineering student at Epitech Montpellier. My favorite language (and the one im most comfortable with) is C++.",
    "More than functional code, I love building robust and maintainable architectures. I like to ship: tests, CI, docs, having a real product at the end of a project, not just a half-finished demo.",
    "I build a lot on my own: a CPU raytracer, a double-pendulum simulator, a QR encoder from scratch. I like getting the architecture right and actually shipping — tests, CI and docs, not a half-finished demo.",
    "I'm looking for a work-study from mid-September to mid-January, around C++/OOP systems, backend or graphics. I want a real product to work on and a team whose code makes me better.",
  ],
  experience: [
    {
      title: 'Programme Grande École',
      org: 'Epitech Montpellier',
      period: '2023 — Present',
      description:
        'Software engineering. 25+ projects in C and C++, including a full OOP module (design, interfaces, plugin architectures). Focus on problem solving, systems and clean code.',
    },
    {
      title: 'Baccalauréat Technologique (STI2D)',
      org: 'Lycée Victor Hugo, Lunel',
      period: '2021 — 2023',
      description:
        'Technological baccalaureate oriented toward computer science and digital systems.',
    },
  ],
  stack: {
    Languages: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Bash'],
    Graphics: ['SFML', 'SDL2', 'Raylib'],
    Tools: ['Git', 'CMake', 'Make', 'Linux', 'GitHub Actions', 'Doxygen'],
  },
  links: {
    github: 'https://github.com/lucaspujol',
    linkedin: 'https://www.linkedin.com/in/lucas-pujol-epitech/',
    email: 'lucas.pujol.60240@gmail.com',
  },
};
