import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { P } from '../palette';

const techs = [
  'LangGraph', 'LangChain', 'Python', 'React', 'Next.js',
  'FastAPI', 'PostgreSQL', 'Pinecone', 'OpenAI', 'Anthropic Claude',
  'Android Studio', 'Docker', 'Cerebras', 'n8n', 'Git',
];

export const Stack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [offset, setOffset] = useState(0);
  const marqueeRef = useRef<number>(0);

  // Infinite marquee
  useEffect(() => {
    const tick = () => {
      setOffset((prev) => (prev - 0.4) % (techs.length * 160));
      marqueeRef.current = requestAnimationFrame(tick);
    };
    marqueeRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(marqueeRef.current);
  }, []);

  const doubled = [...techs, ...techs, ...techs];

  return (
    <section
      ref={ref}
      id="stack"
      style={{
        padding: '80px 0',
        borderTop: `1px solid ${P.navy}`,
        borderBottom: `1px solid ${P.navy}`,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <motion.p
        className="section-label"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '32px' }}
      >
        Our Stack
      </motion.p>

      {/* Marquee row */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px',
          background: `linear-gradient(90deg, ${P.void}, transparent)`,
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px',
          background: `linear-gradient(270deg, ${P.void}, transparent)`,
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex', gap: '12px',
          transform: `translateX(${offset}px)`,
          whiteSpace: 'nowrap',
        }}>
          {doubled.map((t, i) => (
            <span key={`${t}-${i}`} style={{
              fontFamily: "'DM Mono', monospace", fontSize: '10px',
              letterSpacing: '2px',
              color: i % 3 === 0 ? P.sand : i % 3 === 1 ? P.clay : P.terracotta,
              border: `1px solid ${i % 3 === 0 ? P.sand : i % 3 === 1 ? P.clay : P.terracotta}30`,
              padding: '10px 22px', borderRadius: '2px',
              background: `${P.navy}22`,
              flexShrink: 0,
              transition: 'border-color 0.3s, background 0.3s',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
