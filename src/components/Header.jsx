import ThemeToggle from './ThemeToggle.jsx';
import AccentPicker from './AccentPicker.jsx';

const navLinks = [
  { href: '#status', label: 'Status' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="logo">lucaspujol</a>
        <nav className="nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="header-tools">
          <AccentPicker />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
