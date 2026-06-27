import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { GraphMark } from './GraphMark';
import { P } from '../palette';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const formData = useAppStore((s) => s.formData);
  const updateField = useAppStore((s) => s.updateField);
  const formStatus = useAppStore((s) => s.formStatus);
  const setFormStatus = useAppStore((s) => s.setFormStatus);

  const handleSubmit = () => {
    // 🛡️ Security: Validate input lengths to prevent DoS attacks via oversized payloads
    if (formData.name.length > 100 || formData.company.length > 100 || formData.message.length > 2000) {
      setFormStatus('error');
      return;
    }

    // 🛡️ Security: Validate email format using a standard regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email) || formData.email.length > 254) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1200);
  };

  return (
    <section id="contact" style={{ padding: '120px 60px', position: 'relative', zIndex: 1 }}>
      <div ref={ref} style={{ maxWidth: '760px', margin: '0 auto' }}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>Start a Conversation</p>
          <div className="divider" style={{ margin: '0 auto 24px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(36px,5vw,64px)', marginBottom: '20px' }}>
            Let's build something<br /><em style={{ color: P.clay }}>that matters.</em>
          </h2>
          <p className="body-text" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Tell us about your project. We respond within 24 hours and will
            schedule a free architecture consultation for qualified inquiries.
          </p>
        </motion.div>

        {formStatus === 'sent' ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', padding: '60px', border: `1px solid ${P.navy}`, borderRadius: '8px' }}
          >
            <GraphMark size={64} />
            <p className="section-label" style={{ marginTop: '24px' }}>Message Received</p>
            <p className="body-text" style={{ marginTop: '12px' }}>We'll be in touch within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              border: `1px solid ${P.navy}`, borderRadius: '8px',
              padding: '52px', background: `${P.navy}11`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }}>
              {[
                { k: 'name' as const, ph: 'Your Name', maxLength: 100 },
                { k: 'company' as const, ph: 'Company', maxLength: 100 },
              ].map((f) => (
                <div key={f.k} style={{ marginBottom: '32px' }}>
                  <label className="mono-sm" style={{ display: 'block', marginBottom: '8px', opacity: 1, color: P.clay }}>
                    {f.ph.toUpperCase()}
                  </label>
                  <input
                    placeholder={f.ph}
                    value={formData[f.k]}
                    maxLength={f.maxLength}
                    onChange={(e) => updateField(f.k, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '32px' }}>
              <label className="mono-sm" style={{ display: 'block', marginBottom: '8px', opacity: 1, color: P.clay }}>EMAIL</label>
              <input
                type="email"
                placeholder="your@company.com"
                value={formData.email}
                maxLength={254}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <label className="mono-sm" style={{ display: 'block', marginBottom: '8px', opacity: 1, color: P.clay }}>PROJECT BRIEF</label>
              <textarea
                placeholder="Tell us what you're building or what problem you're trying to solve..."
                value={formData.message}
                maxLength={2000}
                onChange={(e) => updateField('message', e.target.value)}
              />
            </div>

            {formStatus === 'error' && (
              <div style={{ marginBottom: '24px', color: '#ff4d4f', fontSize: '14px' }}>
                Please provide valid input in all fields.
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p className="mono-sm">masudsadman0@gmail.com</p>
              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={formStatus === 'sending'}
                style={{ opacity: formStatus === 'sending' ? 0.6 : 1 }}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
