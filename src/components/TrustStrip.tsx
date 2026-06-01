import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { P } from '../palette';

const TRUST_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28">
        <circle cx="16" cy="16" r="12" fill="none" stroke={P.clay} strokeWidth="1.2" />
        <path d="M12 16.5 L15 19.5 L21 13.5" fill="none" stroke={P.sand} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Enterprise-Grade Security',
    sub: 'Encryption, access controls, SOC 2 aligned',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28">
        <circle cx="16" cy="16" r="12" fill="none" stroke={P.clay} strokeWidth="1.2" />
        <circle cx="16" cy="16" r="3" fill={P.terracotta} fillOpacity="0.8" />
        <circle cx="16" cy="16" r="7" fill="none" stroke={P.terracotta} strokeWidth="0.8" strokeOpacity="0.5" />
      </svg>
    ),
    label: '24/7 Monitoring',
    sub: 'Real-time alerts, auto-recovery, full observability',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28">
        <circle cx="16" cy="16" r="12" fill="none" stroke={P.clay} strokeWidth="1.2" />
        <rect x="11" y="12" width="10" height="8" rx="1" fill="none" stroke={P.sand} strokeWidth="1.2" />
        <line x1="14" y1="12" x2="14" y2="20" stroke={P.sand} strokeWidth="0.8" strokeOpacity="0.5" />
      </svg>
    ),
    label: '100% Transparent Process',
    sub: 'Weekly demos, shared repos, no black boxes',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28">
        <circle cx="16" cy="16" r="12" fill="none" stroke={P.clay} strokeWidth="1.2" />
        <path d="M11 17 L16 12 L21 17" fill="none" stroke={P.sand} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="12" x2="16" y2="22" stroke={P.sand} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Continuous Improvement',
    sub: 'Post-launch optimization, A/B testing, fine-tuning',
  },
];

export const TrustStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section
      ref={ref}
      style={{
        padding: '60px',
        borderTop: `1px solid ${P.navy}`,
        borderBottom: `1px solid ${P.navy}`,
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px',
      }}>
        {TRUST_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center', gap: '12px',
            }}
          >
            {item.icon}
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: '10px',
              letterSpacing: '2px', color: P.sand, textTransform: 'uppercase',
            }}>
              {item.label}
            </p>
            <p className="mono-sm" style={{ fontSize: '9px', opacity: 0.5 }}>{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
