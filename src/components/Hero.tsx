import { motion } from 'framer-motion';
import { GraphMark } from './GraphMark';
import { P } from '../palette';

export const Hero = () => (
  <section
    id="hero"
    style={{
      minHeight: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '120px 60px 80px', overflow: 'hidden', textAlign: 'center',
    }}
  >
    {/* Radial glows */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '700px', height: '700px', borderRadius: '50%',
      background: `radial-gradient(circle, ${P.navy}60 0%, transparent 70%)`,
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', top: '40%', left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '350px', height: '350px', borderRadius: '50%',
      background: `radial-gradient(circle, ${P.terracotta}18 0%, transparent 70%)`,
      pointerEvents: 'none',
      animation: 'pulseGlow 4s ease-in-out infinite',
    }} />

    {/* Mark */}
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 0.68, 0, 1.1] }}
      style={{ marginBottom: '32px' }}
    >
      <GraphMark size={110} animated={true} />
    </motion.div>

    <motion.p
      className="section-label"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.6 }}
      style={{ marginBottom: '24px' }}
    >
      B2B AI Infrastructure
    </motion.p>

    <motion.h1
      className="section-title"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.8 }}
      style={{ fontSize: 'clamp(44px,7vw,92px)', marginBottom: '28px', maxWidth: '800px' }}
    >
      Intelligence<br />
      <em style={{ color: P.clay }}>engineered</em> for<br />
      your business.
    </motion.h1>

    <motion.p
      className="body-text"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 1.0 }}
      style={{ maxWidth: '540px', marginBottom: '48px' }}
    >
      Graphient builds agentic AI infrastructure — LangGraph pipelines,
      RAG systems, and full-stack automation — so your business operates
      at machine speed without losing human intent.
    </motion.p>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 1.2 }}
      style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Start a Project</a>
      <a href="#services" className="btn-ghost" style={{ textDecoration: 'none' }}>View Services</a>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{
        position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}
    >
      <span className="mono-sm">scroll</span>
      <div style={{
        width: '1px', height: '40px',
        background: `linear-gradient(${P.clay}, transparent)`,
        animation: 'floatNode 2s ease-in-out infinite',
      }} />
    </motion.div>
  </section>
);
