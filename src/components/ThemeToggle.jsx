import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { SunIcon, MoonIcon } from './icons/index.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
