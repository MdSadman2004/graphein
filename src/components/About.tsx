import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraphMark } from './GraphMark';
import { P } from '../palette';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" style={{ padding: '120px 60px', position: 'relative', zIndex: 1 }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        {/* Left: graphic */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 0.68, 0, 1.1] }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            width: '320px', height: '320px', borderRadius: '4px',
            border: `1px solid ${P.navy}`,
            background: `linear-gradient(135deg, ${P.navy}44 0%, ${P.void} 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Subtle animated bg pattern */}
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.06,
              background: `radial-gradient(circle at 30% 30%, ${P.sand} 0%, transparent 50%), radial-gradient(circle at 70% 70%, ${P.terracotta} 0%, transparent 50%)`,
              animation: 'pulseGlow 6s ease-in-out infinite',
            }} />
            <GraphMark size={160} animated={false} />
          </div>
          {/* Floating label */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              position: 'absolute', bottom: '-16px', right: '10%',
              background: P.terracotta, padding: '16px 24px', borderRadius: '4px',
              boxShadow: `0 8px 32px ${P.terracotta}40`,
            }}
          >
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '3px', color: P.sand, margin: 0 }}>
              FOUNDED 2026
            </p>
          </motion.div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.68, 0, 1.1] }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>About Graphient</p>
          <div className="divider" style={{ marginBottom: '24px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(32px,4vw,52px)', marginBottom: '28px' }}>
            Built by engineers<br />who think in<br /><em style={{ color: P.clay }}>systems.</em>
          </h2>
          <p className="body-text" style={{ marginBottom: '20px' }}>
            Graphient was founded by Md Sadman Bin Masud — an AI researcher and
            systems architect whose work spans TinyML, agentic pipeline design,
            and applied graph intelligence. We built Graphient because most
            businesses need real AI infrastructure, not chatbot wrappers.
          </p>
          <p className="body-text" style={{ marginBottom: '36px' }}>
            We are a small, specialist team. We take on fewer projects so we can
            go deeper. Every engagement gets senior-level attention from discovery
            through deployment.
          </p>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '3px', color: P.terracotta, marginBottom: '6px' }}>
                LEAD ARCHITECT
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 300, color: P.sand }}>
                Md Sadman Bin Masud
              </p>
              <p className="mono-sm" style={{ marginTop: '4px' }}>masudsadman0@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
