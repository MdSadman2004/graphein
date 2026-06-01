import { useMemo } from 'react';
import { useScrollObserver, useSectionObserver } from './hooks/useScrollObserver';
import { ParticleGraph } from './components/ParticleGraph';
import { ScrollProgress } from './components/ScrollProgress';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyAI } from './components/WhyAI';
import { UseCases } from './components/UseCases';
import { ROICalculator } from './components/ROICalculator';
import { Stack } from './components/Stack';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { TrustStrip } from './components/TrustStrip';
import { Footer } from './components/Footer';
import { P } from './palette';

const SECTION_IDS = [
  'hero', 'stats', 'services', 'process', 'why-ai',
  'use-cases', 'roi', 'stack', 'about', 'testimonials',
  'faq', 'contact',
];

export default function App() {
  const sectionIds = useMemo(() => SECTION_IDS, []);
  useScrollObserver();
  useSectionObserver(sectionIds);

  return (
    <div style={{ background: P.void, minHeight: '100vh', color: P.sand, position: 'relative' }}>
      <ParticleGraph />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <WhyAI />
      <UseCases />
      <ROICalculator />
      <Stack />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <TrustStrip />
      <Footer />
    </div>
  );
}
