import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { P } from '../palette';

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44">
        <circle cx="24" cy="24" r="18" fill="none" stroke={P.clay} strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M16 28 L22 20 L28 24 L34 16" fill="none" stroke={P.sand} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="16" r="2.5" fill={P.terracotta} />
      </svg>
    ),
    title: 'Cut Operating Costs',
    stat: '40-60%',
    statLabel: 'reduction in manual processing costs',
    body: 'AI agents handle repetitive data entry, document sorting, customer queries, and reporting — tasks that currently consume your team\'s most expensive hours.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44">
        <circle cx="24" cy="24" r="18" fill="none" stroke={P.clay} strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M24 14 L24 26 L32 30" fill="none" stroke={P.sand} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="26" r="2" fill={P.terracotta} />
      </svg>
    ),
    title: 'Move 3× Faster',
    stat: '3×',
    statLabel: 'faster turnaround on operational tasks',
    body: 'What takes your team a week — research, drafting proposals, analyzing data, onboarding clients — an AI pipeline can do in hours, around the clock.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44">
        <circle cx="24" cy="24" r="18" fill="none" stroke={P.clay} strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="18" cy="20" r="3" fill={P.sand} fillOpacity="0.8" />
        <circle cx="30" cy="20" r="3" fill={P.clay} fillOpacity="0.8" />
        <circle cx="24" cy="32" r="3" fill={P.terracotta} fillOpacity="0.8" />
        <line x1="18" y1="20" x2="30" y2="20" stroke={P.sand} strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="18" y1="20" x2="24" y2="32" stroke={P.clay} strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="30" y1="20" x2="24" y2="32" stroke={P.terracotta} strokeWidth="0.8" strokeOpacity="0.5" />
      </svg>
    ),
    title: 'Scale Without Hiring',
    stat: '10×',
    statLabel: 'output increase per person with AI assistance',
    body: 'Instead of hiring 5 more people, equip your existing team with AI that does the heavy lifting. Scale your output without scaling your payroll.',
  },
];

export const WhyAI = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      id="why-ai"
      style={{
        padding: '120px 60px',
        position: 'relative', zIndex: 1,
        background: `linear-gradient(180deg, ${P.void} 0%, ${P.navy}12 50%, ${P.void} 100%)`,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ y: 40, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>Why AI Matters for Your Business</p>
          <div className="divider" style={{ margin: '0 auto 24px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(36px,5vw,60px)', marginBottom: '20px' }}>
            AI isn't about replacing people.<br />
            It's about <em style={{ color: P.clay }}>multiplying</em> them.
          </h2>
          <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
            You don't need a technical background to benefit from AI. You just need
            the right infrastructure — systems that understand your business, learn
            from your data, and handle the work you shouldn't be doing manually.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {BENEFITS.map((b, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: '-40px' });

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                style={{
                  padding: '40px 32px',
                  border: `1px solid ${P.navy}`,
                  borderRadius: '8px',
                  background: `linear-gradient(135deg, ${P.void}F0 0%, ${P.navy}18 100%)`,
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Glow accent */}
                <div style={{
                  position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${P.terracotta}12 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>{b.icon}</div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '24px',
                  fontWeight: 300, color: P.sand, marginBottom: '16px',
                }}>
                  {b.title}
                </h3>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: '42px',
                    fontWeight: 300, color: P.terracotta, lineHeight: 1,
                  }}>
                    {b.stat}
                  </span>
                  <p className="mono-sm" style={{ marginTop: '6px', opacity: 0.7 }}>{b.statLabel}</p>
                </div>
                <p className="body-text" style={{ fontSize: '12px' }}>{b.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
