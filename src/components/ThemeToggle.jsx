import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { ui } from '../data/ui.js';
import { SunIcon, MoonIcon } from './icons/index.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={toggleTheme}
      aria-label={ui.themeToggle.ariaLabel(isDark)}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
