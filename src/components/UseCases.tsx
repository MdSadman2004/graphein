import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { P } from '../palette';

const CASES = [
  {
    industry: 'E-Commerce',
    problem: 'Manual order processing, inventory tracking, and customer support taking 40+ hrs/week.',
    solution: 'Multi-agent pipeline that auto-processes orders, syncs inventory across platforms, and handles 80% of support tickets.',
    outcome: '65% reduction in operational overhead, 4.8★ customer satisfaction maintained.',
    color: P.sand,
  },
  {
    industry: 'Legal & Compliance',
    problem: 'Paralegals spending days reviewing contracts and regulatory documents for risks.',
    solution: 'RAG-powered document analysis system that scans contracts, flags risks, and generates compliance summaries in minutes.',
    outcome: 'Contract review time reduced from 3 days to 2 hours per document.',
    color: P.clay,
  },
  {
    industry: 'Healthcare',
    problem: 'Clinic drowning in patient intake forms, insurance verification, and appointment scheduling.',
    solution: 'AI intake agent that pre-processes patient data, verifies insurance eligibility, and optimizes appointment scheduling.',
    outcome: '50% reduction in front-desk workload, 30% fewer no-shows from smart reminders.',
    color: P.terracotta,
  },
  {
    industry: 'Logistics',
    problem: 'Route planning, shipment tracking, and exception handling done manually across spreadsheets.',
    solution: 'Agentic system that optimizes routes, monitors shipments in real-time, and auto-resolves common exceptions.',
    outcome: '22% fuel cost savings, 40% faster exception resolution, full audit trail.',
    color: P.sand,
  },
];

const UseCaseCard = ({ c, i }: { c: typeof CASES[0]; i: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      style={{
        padding: '36px 32px',
        border: `1px solid ${P.navy}`,
        borderRadius: '8px',
        background: `linear-gradient(135deg, ${P.void}EE 0%, ${P.navy}22 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${c.color}66, transparent)`,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '22px',
          fontWeight: 400, color: c.color,
        }}>
          {c.industry}
        </span>
        <span className="mono-sm" style={{ color: c.color, opacity: 0.6 }}>
          CASE {String(i + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Problem */}
      <div style={{ marginBottom: '16px' }}>
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          letterSpacing: '2px', color: P.terracotta, marginBottom: '6px',
        }}>THE PROBLEM</p>
        <p className="body-text" style={{ fontSize: '12px' }}>{c.problem}</p>
      </div>

      {/* Solution */}
      <div style={{ marginBottom: '16px' }}>
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          letterSpacing: '2px', color: P.clay, marginBottom: '6px',
        }}>OUR SOLUTION</p>
        <p className="body-text" style={{ fontSize: '12px' }}>{c.solution}</p>
      </div>

      {/* Outcome */}
      <div style={{
        padding: '14px 18px',
        background: `${P.navy}33`,
        borderRadius: '4px',
        borderLeft: `2px solid ${c.color}`,
      }}>
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          letterSpacing: '2px', color: P.sand, marginBottom: '4px', opacity: 0.7,
        }}>RESULT</p>
        <p className="body-text" style={{ fontSize: '12px', color: P.sand }}>{c.outcome}</p>
      </div>
    </motion.div>
  );
};

export const UseCases = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      id="use-cases"
      style={{ padding: '120px 60px', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ y: 40, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '72px' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>Real-World Impact</p>
          <div className="divider" style={{ marginBottom: '20px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(36px,5vw,60px)', maxWidth: '600px' }}>
            What AI looks like<br />in <em style={{ color: P.clay }}>your industry.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {CASES.map((c, i) => (
            <UseCaseCard key={i} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
