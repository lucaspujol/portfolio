// links: { type: 'github' | 'demo' | 'docs' | 'store', href }
// private: true  -> no repo link yet (Epitech org keeps some repos private;
//                   create a public mirror, then add the github link here)

export const featuredProjects = [
  {
    name: 'Raytracer',
    blurb:
      'CPU raytracer in C++20 with a plugin architecture. Physically-based materials, fractal shapes, antialiasing, BVH acceleration and a real-time live preview.',
    tech: ['C++20', 'SFML', 'CMake'],
    team: true,
    links: [
      { type: 'github', href: 'https://github.com/louisbgl/raytracer-mirror' },
    ],
  },
  {
    name: 'Zappy',
    blurb:
      'Multi-agent network game: a C++ game server, a 3D spectator client (Raylib) and an autonomous Python AI running state-machine and score-based strategies.',
    tech: ['C++', 'Python', 'Raylib'],
    team: true,
    links: [{ type: 'github', href: 'https://github.com/Nexlein/Zappy' }],
  },
  {
    name: 'Arcade',
    blurb:
      'Gaming platform that loads games and renderers as shared objects at runtime — fully interchangeable, with hot-reload. Built around abstract interfaces.',
    tech: ['C++', 'SDL2', 'ncurses'],
    team: true,
    links: [
      { type: 'github', href: 'https://github.com/lucaspujol/arcade-mirror' },
      { type: 'docs', href: 'https://lucaspujol.github.io/arcade-mirror' },
    ],
  },
  {
    name: 'NanoTekSpice',
    blurb:
      'Digital logic circuit simulator modeled as a component graph — gates, latches, flip-flops and sequential components. Built test-first with heavy edge-case coverage.',
    tech: ['C++', 'TDD'],
    team: true,
    private: true,
    links: [],
  },
  {
    name: 'Pendulums',
    blurb:
      'Double pendulum chaos simulator: RK4 integrator, synchronized grid view, and a fractal render mapping sensitivity to initial conditions.',
    tech: ['C++17', 'SFML'],
    links: [{ type: 'github', href: 'https://github.com/lucaspujol/pendulums' }],
  },
  {
    name: 'cpp-qr',
    blurb:
      'QR code encoder written from scratch: data encoding, Reed-Solomon error correction, masking and matrix generation. Tested step by step.',
    tech: ['C++'],
    links: [{ type: 'github', href: 'https://github.com/lucaspujol/cpp-qr' }],
  },
];

export const minorProjects = [
  {
    name: 'clap',
    blurb:
      'Header-only C++ command-line argument parser — typed API, flags, options, positionals, error handling.',
    tech: ['C++'],
    links: [{ type: 'github', href: 'https://github.com/lucaspujol/clap' }],
  },
  {
    name: 'Solvle',
    blurb:
      'Firefox extension that solves Wordle: reads the board and filters the word list in real time. Published on the Firefox Add-ons store.',
    tech: ['JavaScript'],
    links: [
      { type: 'github', href: 'https://github.com/lucaspujol/solvle' },
      {
        type: 'store',
        href: 'https://addons.mozilla.org/en-US/firefox/addon/solvle-wordle-helper/',
      },
    ],
  },
  {
    name: 'cpp-tetris',
    blurb:
      'Tetris with SDL2: seven tetrominoes, wall-kick rotation, scoring and level progression.',
    tech: ['C++17', 'SDL2'],
    links: [{ type: 'github', href: 'https://github.com/lucaspujol/cpp-tetris' }],
  },
];
