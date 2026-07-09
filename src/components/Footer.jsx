import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="muted">Built with React · Vite</span>
    </footer>
  );
}
