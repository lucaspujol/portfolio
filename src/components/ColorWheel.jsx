import { useRef, useEffect, useState, useCallback } from 'react';

const SIZE = 168;
const R = SIZE / 2;

function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ];
}

const toHex = (r, g, b) =>
  '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');

// hex -> wheel {x, y} (inverse of pick): hue = angle, saturation = radius.
function thumbFromHex(hex) {
  if (!/^#[0-9a-f]{6}$/i.test(hex || '')) return null;
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
  }
  const s = max === 0 ? 0 : d / max;
  const rad = (h * Math.PI) / 180;
  const dist = s * R;
  return { x: R + dist * Math.sin(rad), y: R - dist * Math.cos(rad) };
}

export default function ColorWheel({ value, onChange }) {
  const canvasRef = useRef(null);
  const [thumb, setThumb] = useState(() => thumbFromHex(value));

  // paint the HSV wheel once (hue = angle, saturation = radius, value = 1)
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const img = ctx.createImageData(SIZE, SIZE);
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        const dx = x - R;
        const dy = y - R;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const i = (y * SIZE + x) * 4;
        if (dist <= R) {
          const deg = (Math.atan2(dx, -dy) * 180) / Math.PI;
          const hue = (deg + 360) % 360;
          const [r, g, b] = hsvToRgb(hue, dist / R, 1);
          img.data[i] = r;
          img.data[i + 1] = g;
          img.data[i + 2] = b;
          img.data[i + 3] = dist > R - 1 ? Math.round(255 * (R - dist + 1)) : 255;
        } else {
          img.data[i + 3] = 0;
        }
      }
    }
    ctx.putImageData(img, 0, 0);
  }, []);

  const pick = useCallback(
    (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let dx = x - R;
      let dy = y - R;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > R) {
        const k = R / dist;
        dx *= k;
        dy *= k;
        dist = R;
        x = R + dx;
        y = R + dy;
      }
      const hue = ((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360;
      const [r, g, b] = hsvToRgb(hue, dist / R, 1);
      onChange(toHex(r, g, b));
      setThumb({ x, y });
    },
    [onChange]
  );

  const onPointerDown = (e) => {
    pick(e);
    const move = (ev) => pick(ev);
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };

  return (
    <div className="wheel-wrap">
      <canvas
        ref={canvasRef}
        width={SIZE}
        height={SIZE}
        className="wheel"
        onPointerDown={onPointerDown}
      />
      {thumb && (
        <span
          className="wheel-thumb"
          style={{ left: thumb.x, top: thumb.y, background: value || '#fff' }}
        />
      )}
    </div>
  );
}
