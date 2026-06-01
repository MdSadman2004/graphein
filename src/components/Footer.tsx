import { GraphMark } from './GraphMark';
import { P } from '../palette';

export const Footer = () => (
  <footer style={{
    borderTop: `1px solid ${P.navy}`,
    padding: '40px 60px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    flexWrap: 'wrap', gap: '20px',
    position: 'relative', zIndex: 1,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <GraphMark size={28} />
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontWeight: 300, fontStyle: 'italic', color: P.clay }}>
        graphient
      </span>
    </div>
    <p className="mono-sm">© 2024 Graphient. All rights reserved.</p>
    <p className="mono-sm">Dhaka, Bangladesh</p>
  </footer>
);
