import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { P } from '../palette';

const TESTIMONIALS = [
  {
    quote: "Graphient didn't just build us an AI tool — they rebuilt how we think about operations. Our customer support response time dropped from 4 hours to 12 minutes.",
    role: 'COO',
    company: 'Mid-size E-Commerce Brand',
    metric: '95% faster response',
  },
  {
    quote: "We were skeptical about AI. Sadman's team showed us the architecture before writing a single line of code. We knew exactly what we were getting. No surprises, no jargon.",
    role: 'Managing Partner',
    company: 'Boutique Law Firm',
    metric: '80% less review time',
  },
  {
    quote: "The RAG system Graphient built connects all our internal docs, SOPs, and client records. New hires get answers in seconds instead of bugging senior staff for days.",
    role: 'Head of Operations',
    company: 'Healthcare SaaS Startup',
    metric: '70% faster onboarding',
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      style={{
        padding: '120px 60px',
        position: 'relative', zIndex: 1,
      }}
    >
      <div ref={ref} style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>Client Voices</p>
          <div className="divider" style={{ margin: '0 auto 24px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
            Don't take our <em style={{ color: P.clay }}>word</em> for it.
          </h2>
        </motion.div>

        {/* Testimonial display */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'relative',
            padding: '52px 48px',
            border: `1px solid ${P.navy}`,
            borderRadius: '8px',
            background: `linear-gradient(135deg, ${P.void}F0 0%, ${P.navy}18 100%)`,
            minHeight: '260px',
          }}
        >
          {/* Quote mark */}
          <div style={{
            position: 'absolute', top: '24px', left: '32px',
            fontFamily: "'Cormorant Garamond', serif", fontSize: '72px',
            fontWeight: 300, color: P.terracotta, opacity: 0.2, lineHeight: 1,
          }}>
            "
          </div>

          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                opacity: activeIndex === i ? 1 : 0,
                transform: activeIndex === i ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.6s ease',
                position: activeIndex === i ? 'relative' : 'absolute',
                top: activeIndex === i ? undefined : '52px',
                left: activeIndex === i ? undefined : '48px',
                right: activeIndex === i ? undefined : '48px',
                pointerEvents: activeIndex === i ? 'auto' : 'none',
              }}
            >
              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: '22px',
                fontWeight: 300, fontStyle: 'italic', color: P.sand,
                lineHeight: 1.6, marginBottom: '32px',
              }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <p style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '11px',
                    letterSpacing: '2px', color: P.sand, marginBottom: '4px',
                  }}>
                    {t.role}
                  </p>
                  <p className="mono-sm" style={{ opacity: 0.6 }}>{t.company}</p>
                </div>
                <div style={{
                  padding: '8px 16px',
                  background: `${P.terracotta}22`,
                  borderRadius: '4px',
                  border: `1px solid ${P.terracotta}33`,
                }}>
                  <p style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '11px',
                    color: P.terracotta, letterSpacing: '1px',
                  }}>
                    {t.metric}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '28px' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: activeIndex === i ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                background: activeIndex === i ? P.terracotta : `${P.clay}44`,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
