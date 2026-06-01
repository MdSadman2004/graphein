import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { P } from '../palette';

const serviceData = [
  {
    code: '01',
    title: 'Agentic AI Systems',
    sub: 'LangGraph · Multi-Agent Orchestration',
    body: 'We architect multi-agent pipelines that plan, reason, and act autonomously — from customer support agents to complex research workflows.',
    tags: ['LangGraph', 'StateGraph', 'Tool Use', 'Memory'],
    icon: (
      <svg viewBox="0 0 48 48" width="40" height="40">
        <circle cx="24" cy="10" r="5" fill="none" stroke={P.clay} strokeWidth="1.5" />
        <circle cx="10" cy="34" r="4" fill="none" stroke={P.terracotta} strokeWidth="1.5" />
        <circle cx="38" cy="34" r="4" fill="none" stroke={P.terracotta} strokeWidth="1.5" />
        <line x1="24" y1="15" x2="10" y2="30" stroke={P.clay} strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="24" y1="15" x2="38" y2="30" stroke={P.clay} strokeWidth="1.2" strokeOpacity="0.7" />
        <line x1="14" y1="34" x2="34" y2="34" stroke={P.terracotta} strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="24" cy="10" r="2.5" fill={P.sand} />
        <circle cx="10" cy="34" r="2" fill={P.clay} />
        <circle cx="38" cy="34" r="2" fill={P.clay} />
      </svg>
    ),
  },
  {
    code: '02',
    title: 'RAG Infrastructure',
    sub: 'LangChain · Vector Retrieval · Semantic Search',
    body: 'Production-grade retrieval-augmented generation systems that connect your documents, databases, and knowledge bases to LLM reasoning.',
    tags: ['LangChain', 'Embeddings', 'Vector DB', 'Chunking'],
    icon: (
      <svg viewBox="0 0 48 48" width="40" height="40">
        <rect x="6" y="8" width="36" height="8" rx="2" fill="none" stroke={P.clay} strokeWidth="1.5" />
        <rect x="6" y="20" width="36" height="8" rx="2" fill="none" stroke={P.clay} strokeWidth="1.2" strokeOpacity="0.6" />
        <rect x="6" y="32" width="36" height="8" rx="2" fill="none" stroke={P.clay} strokeWidth="0.9" strokeOpacity="0.4" />
        <circle cx="12" cy="12" r="2" fill={P.sand} />
        <circle cx="12" cy="24" r="2" fill={P.clay} />
        <circle cx="12" cy="36" r="2" fill={P.terracotta} />
        <line x1="34" y1="12" x2="40" y2="12" stroke={P.terracotta} strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    code: '03',
    title: 'Web Development',
    sub: 'React · Next.js · Full-Stack',
    body: 'Precision-engineered web applications with clean architecture, performant APIs, and interfaces that make complex AI capabilities feel natural.',
    tags: ['React', 'Next.js', 'Node', 'REST/GraphQL'],
    icon: (
      <svg viewBox="0 0 48 48" width="40" height="40">
        <rect x="4" y="8" width="40" height="28" rx="3" fill="none" stroke={P.clay} strokeWidth="1.5" />
        <line x1="4" y1="16" x2="44" y2="16" stroke={P.clay} strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="10" cy="12" r="1.5" fill={P.terracotta} fillOpacity="0.8" />
        <circle cx="16" cy="12" r="1.5" fill={P.clay} fillOpacity="0.6" />
        <circle cx="22" cy="12" r="1.5" fill={P.sand} fillOpacity="0.4" />
        <text x="10" y="28" fontFamily="monospace" fontSize="7" fill={P.clay} fillOpacity="0.8">{'</ >'}</text>
        <line x1="16" y1="40" x2="32" y2="40" stroke={P.clay} strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="24" y1="36" x2="24" y2="40" stroke={P.clay} strokeWidth="1.5" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    code: '04',
    title: 'App Development',
    sub: 'Android · Cross-Platform · AI-Native',
    body: 'Mobile applications built with AI at their core — not bolted on. From intelligent assistants to edge-inference apps on constrained hardware.',
    tags: ['Android', 'Flutter', 'AI Integration', 'On-Device'],
    icon: (
      <svg viewBox="0 0 48 48" width="40" height="40">
        <rect x="14" y="4" width="20" height="36" rx="4" fill="none" stroke={P.clay} strokeWidth="1.5" />
        <line x1="14" y1="10" x2="34" y2="10" stroke={P.clay} strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="14" y1="34" x2="34" y2="34" stroke={P.clay} strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="24" cy="38" r="1.5" fill={P.clay} fillOpacity="0.6" />
        <circle cx="24" cy="22" r="5" fill="none" stroke={P.sand} strokeWidth="1.2" strokeOpacity="0.7" />
        <circle cx="24" cy="22" r="2" fill={P.terracotta} fillOpacity="0.8" />
      </svg>
    ),
  },
];

const ServiceCard = ({ service, index }: { service: typeof serviceData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setTilt({ x: -y, y: x });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 0.68, 0, 1.1] }}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
        {service.icon}
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: P.terracotta, opacity: 0.7 }}>
          {service.code}
        </span>
      </div>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: '26px',
        fontWeight: 300, color: P.sand, marginBottom: '6px',
      }}>
        {service.title}
      </h3>
      <p className="mono-sm" style={{ marginBottom: '16px', opacity: 0.6 }}>{service.sub}</p>
      <p className="body-text" style={{ fontSize: '12px', marginBottom: '24px' }}>{service.body}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {service.tags.map((t) => (
          <span key={t} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '9px',
            letterSpacing: '1.5px', color: P.clay,
            border: `1px solid ${P.navy}`,
            padding: '4px 10px', borderRadius: '2px',
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" style={{ padding: '120px 60px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '72px' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>What We Build</p>
          <div className="divider" style={{ marginBottom: '20px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(36px,5vw,64px)', maxWidth: '520px' }}>
            Four disciplines.<br />One coherent stack.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {serviceData.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
