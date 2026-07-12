import ThemeToggle from './ThemeToggle.jsx';
import AccentPicker from './AccentPicker.jsx';
import { ui } from '../data/ui.js';

export default function Header() {
  const { logo, nav } = ui.header;

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="logo">{logo}</a>
        <nav className="nav">
          {nav.map((l) => (
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
