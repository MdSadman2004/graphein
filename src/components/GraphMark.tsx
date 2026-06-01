import { useState, useEffect } from 'react';
import { P } from '../palette';

interface GraphMarkProps {
  size?: number;
  animated?: boolean;
}

export const GraphMark = ({ size = 48, animated = false }: GraphMarkProps) => {
  const [p, setP] = useState(animated ? 0 : 1);
  
  useEffect(() => {
    if (!animated) return;
    let st: number | null = null;
    let id: number;
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const tick = (ts: number) => {
      if (!st) st = ts;
      const v = Math.min((ts - st) / 2000, 1);
      setP(ease(v));
      if (v < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [animated]);

  return (
    <svg viewBox="0 0 200 200" width={size} height={size}>
      <defs>
        <linearGradient id={`eg1m${size}`} x1="100" y1="38" x2="52" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={P.sand} stopOpacity={0.9 * p} />
          <stop offset="100%" stopColor={P.clay} stopOpacity={0.7 * p} />
        </linearGradient>
        <linearGradient id={`eg2m${size}`} x1="100" y1="38" x2="148" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={P.sand} stopOpacity={0.9 * p} />
          <stop offset="100%" stopColor={P.clay} stopOpacity={0.7 * p} />
        </linearGradient>
        <linearGradient id={`eg3m${size}`} x1="52" y1="90" x2="68" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={P.clay} stopOpacity={0.75 * p} />
          <stop offset="100%" stopColor={P.terracotta} stopOpacity={0.7 * p} />
        </linearGradient>
        <linearGradient id={`eg4m${size}`} x1="148" y1="90" x2="132" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={P.clay} stopOpacity={0.75 * p} />
          <stop offset="100%" stopColor={P.terracotta} stopOpacity={0.7 * p} />
        </linearGradient>
        <filter id={`gf${size}`}>
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id={`hn${size}`} cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="100%" stopColor={P.sand} />
        </radialGradient>
      </defs>

      {/* Glows */}
      <circle cx="100" cy="38" r="28" fill={P.sand} fillOpacity={0.12 * p} />
      <circle cx="52" cy="90" r="22" fill={P.clay} fillOpacity={0.10 * p} />
      <circle cx="148" cy="90" r="22" fill={P.clay} fillOpacity={0.10 * p} />
      <circle cx="68" cy="155" r="18" fill={P.terracotta} fillOpacity={0.12 * p} />
      <circle cx="132" cy="155" r="18" fill={P.terracotta} fillOpacity={0.12 * p} />

      {/* Edges */}
      <line x1="100" y1="38" x2="52" y2="90" stroke={`url(#eg1m${size})`} strokeWidth="2.8" strokeLinecap="round" opacity={p} />
      <line x1="100" y1="38" x2="148" y2="90" stroke={`url(#eg2m${size})`} strokeWidth="2.8" strokeLinecap="round" opacity={p} />
      <line x1="52" y1="90" x2="68" y2="155" stroke={`url(#eg3m${size})`} strokeWidth="2.2" strokeLinecap="round" opacity={p} />
      <line x1="148" y1="90" x2="132" y2="155" stroke={`url(#eg4m${size})`} strokeWidth="2.2" strokeLinecap="round" opacity={p} />
      <line x1="52" y1="90" x2="132" y2="155" stroke={P.terracotta} strokeWidth="1.4" strokeLinecap="round" strokeOpacity={0.38 * p} />
      <line x1="148" y1="90" x2="68" y2="155" stroke={P.terracotta} strokeWidth="1.4" strokeLinecap="round" strokeOpacity={0.38 * p} />

      {/* Nodes */}
      <circle cx="100" cy="38" r="13" fill={`url(#hn${size})`} filter={`url(#gf${size})`} opacity={p} />
      <circle cx="52" cy="90" r="9" fill={P.clay} filter={`url(#gf${size})`} opacity={p} />
      <circle cx="148" cy="90" r="9" fill={P.clay} filter={`url(#gf${size})`} opacity={p} />
      <circle cx="68" cy="155" r="7" fill={P.terracotta} filter={`url(#gf${size})`} opacity={p} />
      <circle cx="132" cy="155" r="7" fill={P.terracotta} filter={`url(#gf${size})`} opacity={p} />
      <circle cx="97" cy="34" r="4.5" fill="white" fillOpacity={0.5 * p} />
    </svg>
  );
};
