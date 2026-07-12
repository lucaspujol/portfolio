import { useState, useEffect, useRef } from 'react';
import ColorWheel from './ColorWheel.jsx';
import { ui } from '../data/ui.js';
import { updateFavicon } from '../utils/favicon.js';

const applyAccent = (value) => {
  const root = document.documentElement;
  if (value) root.style.setProperty('--accent', value);
  else root.style.removeProperty('--accent');
  updateFavicon();
};

export default function AccentPicker() {
  const [accent, setAccent] = useState(
    () => localStorage.getItem('accent') || ''
  );
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    applyAccent(accent);
    if (accent) localStorage.setItem('accent', accent);
    else localStorage.removeItem('accent');
  }, [accent]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="accent-picker" ref={ref}>
      <button
        type="button"
        className="icon-btn accent-swatch-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label={ui.accentPicker.ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="accent-current" />
      </button>

      {open && (
        <div className="accent-popover">
          <ColorWheel value={accent} onChange={setAccent} />
          <div className="accent-foot">
            <span className="accent-hex">{accent || ui.accentPicker.default}</span>
            <button
              type="button"
              className="accent-reset"
              onClick={() => setAccent('')}
            >
              {ui.accentPicker.reset}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
