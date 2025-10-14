import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('emtdark');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ? stored === '1' : prefersDark;
    setDark(initial);
    document.documentElement.setAttribute('data-theme', initial ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    try { localStorage.setItem('emtdark', next ? '1' : '0'); } catch (e) {}
  }

  return (
    <button aria-label="Toggle theme" className="theme-toggle" onClick={toggle} title={dark ? 'Switch to light' : 'Switch to dark'}>
      {dark ? '☀' : '🌙'}
    </button>
  );
}
