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
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('invalid_email');
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
                { k: 'name' as const, ph: 'Your Name' },
                { k: 'company' as const, ph: 'Company' },
              ].map((f) => (
                <div key={f.k} style={{ marginBottom: '32px' }}>
                  <label className="mono-sm" style={{ display: 'block', marginBottom: '8px', opacity: 1, color: P.clay }}>
                    {f.ph.toUpperCase()}
                  </label>
                  <input
                    placeholder={f.ph}
                    value={formData[f.k]}
                    onChange={(e) => updateField(f.k, e.target.value)}
                    maxLength={100}
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
                onChange={(e) => updateField('email', e.target.value)}
                maxLength={100}
              />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <label className="mono-sm" style={{ display: 'block', marginBottom: '8px', opacity: 1, color: P.clay }}>PROJECT BRIEF</label>
              <textarea
                placeholder="Tell us what you're building or what problem you're trying to solve..."
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                maxLength={2000}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p className="mono-sm">masudsadman0@gmail.com</p>
                {formStatus === 'error' && <span className="mono-sm" style={{ color: P.terracotta, marginTop: '8px', display: 'block' }}>Please fill in all required fields.</span>}
                {formStatus === 'invalid_email' && <span className="mono-sm" style={{ color: P.terracotta, marginTop: '8px', display: 'block' }}>Please enter a valid email address.</span>}
              </div>
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
