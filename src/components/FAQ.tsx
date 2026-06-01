import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { P } from '../palette';

const FAQ_DATA = [
  {
    q: 'Do I need technical staff to use your AI systems?',
    a: "No. We design our systems to be operated by non-technical teams. You'll get dashboards, simple controls, and clear documentation. We handle the complexity underneath so you don't have to.",
  },
  {
    q: 'How long until I see ROI?',
    a: "Most clients see measurable impact within the first 30 days of deployment. Full ROI on the engagement typically arrives within 2-4 months, depending on the scope and scale of automation.",
  },
  {
    q: 'What happens if something breaks?',
    a: "Every system we build includes automatic fallbacks, error monitoring, and human-in-the-loop guardrails. If an AI agent encounters something it can't handle, it escalates to your team — it never makes decisions it shouldn't. We also provide post-launch support.",
  },
  {
    q: 'Is my data secure?',
    a: "Absolutely. We follow industry best practices — data encryption at rest and in transit, role-based access controls, and we never train external models on your data. Your data stays yours. We can also deploy on-premise or in your private cloud.",
  },
  {
    q: "What does 'agentic AI' mean in plain English?",
    a: "Think of it like a smart employee that never sleeps. An AI agent can read documents, make decisions based on rules you set, use tools (like sending emails or updating spreadsheets), and chain tasks together — all without you lifting a finger. It's AI that *does* things, not just answers questions.",
  },
  {
    q: 'How much does a typical project cost?',
    a: "Projects range from $15K for focused automations (e.g., a support agent or document processor) to $80K+ for full enterprise AI infrastructure. We always provide a detailed scope and cost breakdown before any commitment. The first architecture consultation is free.",
  },
];

export const FAQ = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const openFaqIndex = useAppStore((s) => s.openFaqIndex);
  const toggleFaq = useAppStore((s) => s.toggleFaq);

  return (
    <section
      id="faq"
      style={{
        padding: '120px 60px',
        background: `linear-gradient(180deg, ${P.void} 0%, ${P.navy}10 50%, ${P.void} 100%)`,
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ y: 40, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>Questions & Answers</p>
          <div className="divider" style={{ margin: '0 auto 24px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
            Straight answers. <em style={{ color: P.clay }}>No jargon.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {FAQ_DATA.map((item, i) => {
            const isOpen = openFaqIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={headerInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  style={{
                    width: '100%',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '24px 28px',
                    background: isOpen ? `${P.navy}33` : `${P.navy}11`,
                    border: 'none', borderBottom: `1px solid ${P.navy}44`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    borderRadius: 0,
                  }}
                >
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: '18px',
                    fontWeight: 300, color: isOpen ? P.sand : P.clay,
                    textAlign: 'left', transition: 'color 0.3s',
                  }}>
                    {item.q}
                  </span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '18px',
                    color: P.terracotta, flexShrink: 0, marginLeft: '20px',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s',
                  }}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 0.68, 0, 1.1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '20px 28px 28px',
                        background: `${P.navy}22`,
                        borderBottom: `1px solid ${P.navy}44`,
                      }}>
                        <p className="body-text" style={{ fontSize: '13px' }}>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
