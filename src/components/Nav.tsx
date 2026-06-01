import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { GraphMark } from './GraphMark';
import { P } from '../palette';

const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Why AI', id: 'why-ai' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useAppStore((s) => s.activeSection);
  const navOpen = useAppStore((s) => s.navOpen);
  const toggleNav = useAppStore((s) => s.toggleNav);
  const closeNav = useAppStore((s) => s.closeNav);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.68, 0, 1.1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '20px 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? `${P.void}EE` : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.2)' : 'none',
        borderBottom: scrolled ? `1px solid ${P.navy}` : '1px solid transparent',
        transition: 'background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }} onClick={closeNav}>
        <GraphMark size={36} />
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '20px',
          fontWeight: 300, fontStyle: 'italic',
          background: `linear-gradient(90deg, ${P.sand}, ${P.clay})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>graphient</span>
      </a>

      {/* Desktop Links */}
      <div className="nav-links-desktop" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="nav-link"
            style={{
              color: activeSection === l.id ? P.sand : P.clay,
              position: 'relative',
            }}
          >
            {l.label}
            {activeSection === l.id && (
              <motion.div
                layoutId="navIndicator"
                style={{
                  position: 'absolute', bottom: '-6px', left: 0, right: 0,
                  height: '1px',
                  background: `linear-gradient(90deg, ${P.terracotta}, transparent)`,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="#contact" className="btn-primary nav-cta" style={{ padding: '10px 24px', fontSize: '9px', textDecoration: 'none' }}>
        Get in Touch
      </a>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={toggleNav}
        aria-label="Toggle menu"
        style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: '5px', padding: '8px',
        }}
      >
        <span style={{ width: '24px', height: '1.5px', background: P.sand, transition: 'all 0.3s', transform: navOpen ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
        <span style={{ width: '24px', height: '1.5px', background: P.sand, transition: 'all 0.3s', opacity: navOpen ? 0 : 1 }} />
        <span style={{ width: '24px', height: '1.5px', background: P.sand, transition: 'all 0.3s', transform: navOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
      </button>

      {/* Mobile menu overlay */}
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu"
          style={{
            position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0,
            background: `${P.void}F5`,
            backdropFilter: 'blur(24px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '32px', zIndex: 99,
          }}
        >
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="nav-link" onClick={closeNav}
              style={{ fontSize: '14px', letterSpacing: '4px' }}>
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};
