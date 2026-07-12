import { profile } from '../data/profile.js';
import { ui } from '../data/ui.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="muted">{ui.footer.builtWith}</span>
    </footer>
  );
}
