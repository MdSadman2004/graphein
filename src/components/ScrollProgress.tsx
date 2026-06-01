import { useAppStore } from '../store/useAppStore';
import { P } from '../palette';

export const ScrollProgress = () => {
  const progress = useAppStore((s) => s.scrollProgress);
  
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress * 100}%`,
        height: '2px',
        background: `linear-gradient(90deg, ${P.terracotta}, ${P.clay}, ${P.sand})`,
        zIndex: 200,
        transition: 'width 0.05s linear',
        boxShadow: `0 0 12px ${P.terracotta}88`,
      }}
    />
  );
};
