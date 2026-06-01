import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { P } from '../palette';

const STATS = [
  { target: 12, suffix: '+', label: 'AI Systems Deployed' },
  { target: 98, suffix: '%', label: 'Client Retention' },
  { target: 3, suffix: '×', label: 'Avg. Ops Speedup' },
  { target: 30, prefix: '<', suffix: 'd', label: 'Avg. Delivery Time' },
];

const AnimatedNumber = ({ target, prefix, suffix, animate }: {
  target: number; prefix?: string; suffix: string; animate: boolean;
}) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let start: number | null = null;
    const duration = 1800;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [animate, target]);

  return (
    <span className="stat-num">
      {prefix || ''}{animate ? val : 0}{suffix}
    </span>
  );
};

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const statsAnimated = useAppStore((s) => s.statsAnimated);
  const triggerStats = useAppStore((s) => s.triggerStats);

  useEffect(() => {
    if (isInView && !statsAnimated) triggerStats();
  }, [isInView, statsAnimated, triggerStats]);

  return (
    <section
      ref={ref}
      id="stats"
      style={{
        borderTop: `1px solid ${P.navy}`,
        borderBottom: `1px solid ${P.navy}`,
        padding: '52px 60px',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(90deg, ${P.navy}22, transparent 50%, ${P.navy}22)`,
        pointerEvents: 'none',
      }} />
      {STATS.map((s, i) => (
        <motion.div
          key={i}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          style={{ textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 1 }}
        >
          <div style={{ marginBottom: '8px' }}>
            <AnimatedNumber
              target={s.target}
              prefix={s.prefix}
              suffix={s.suffix}
              animate={statsAnimated}
            />
          </div>
          <div className="divider" style={{ margin: '0 auto 12px' }} />
          <p className="mono-sm" style={{ opacity: 0.8 }}>{s.label}</p>
        </motion.div>
      ))}
    </section>
  );
};
