import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { P } from '../palette';

const STEPS = [
  { n: '01', t: 'Discovery', b: 'We map your operations, data flows, and bottlenecks. Every system is unique — we start by understanding yours before recommending anything.', side: 'left' as const },
  { n: '02', t: 'Architecture', b: "We design the agent graph, retrieval strategy, and integration points. You see the full blueprint before a line is written.", side: 'right' as const },
  { n: '03', t: 'Build', b: 'Iterative delivery in 1-week sprints. Transparent, testable, reviewable at every stage. No black-box handoffs.', side: 'left' as const },
  { n: '04', t: 'Deploy & Monitor', b: "Production deployment with observability, fallback logic, and human-in-the-loop guardrails. We don't disappear at launch.", side: 'right' as const },
];

export const Process = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      style={{
        padding: '120px 60px',
        background: `linear-gradient(180deg, ${P.void} 0%, ${P.navy}18 50%, ${P.void} 100%)`,
        position: 'relative', overflow: 'hidden', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <motion.div
          ref={headerRef}
          initial={{ y: 40, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>How We Work</p>
          <div className="divider" style={{ margin: '0 auto 20px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
            From brief to<br /><em style={{ color: P.clay }}>deployed.</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px',
            background: `linear-gradient(${P.navy}, ${P.clay}44, ${P.navy})`,
            transform: 'translateX(-50%)',
          }} />

          {STEPS.map((step, i) => (
            <ProcessStep key={i} step={step} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, i }: { step: typeof STEPS[0], i: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ x: step.side === 'left' ? -60 : 60, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.68, 0, 1.1] }}
      style={{
        display: 'flex',
        justifyContent: step.side === 'left' ? 'flex-start' : 'flex-end',
        marginBottom: '60px', position: 'relative',
      }}
    >
      {/* Center node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{
          position: 'absolute', left: '50%', top: '20px',
          transform: 'translateX(-50%)',
          width: '12px', height: '12px', borderRadius: '50%',
          background: i === 0 ? P.sand : i === 3 ? P.terracotta : P.clay,
          border: `2px solid ${P.void}`,
          boxShadow: `0 0 20px ${i === 0 ? P.sand : P.clay}55`,
          zIndex: 2,
        }}
      />

      <div style={{
        width: '42%',
        padding: '32px',
        background: `${P.void}CC`,
        border: `1px solid ${P.navy}`,
        borderRadius: '6px',
        backdropFilter: 'blur(8px)',
      }}>
        <span className="mono-sm" style={{ color: P.terracotta, opacity: 1, display: 'block', marginBottom: '10px' }}>
          {step.n}
        </span>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '28px',
          fontWeight: 300, color: P.sand, marginBottom: '12px',
        }}>
          {step.t}
        </h3>
        <p className="body-text" style={{ fontSize: '12px' }}>{step.b}</p>
      </div>
    </motion.div>
  );
};
