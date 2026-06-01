import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';

/**
 * Attaches a global scroll listener that updates:
 * - scrollProgress (0–1 normalized)
 * - scrollY (raw pixel value)
 */
export function useScrollObserver() {
  const setScrollProgress = useAppStore((s) => s.setScrollProgress);
  const setScrollY = useAppStore((s) => s.setScrollY);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);
      setScrollY(scrollTop);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScrollProgress, setScrollY]);
}

/**
 * Uses IntersectionObserver to track which section is currently in view,
 * updating activeSection in the store.
 */
export function useSectionObserver(sectionIds: string[]) {
  const setActiveSection = useAppStore((s) => s.setActiveSection);
  const markVisible = useAppStore((s) => s.markVisible);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            markVisible(id);
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, setActiveSection, markVisible]);
}
