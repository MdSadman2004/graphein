import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { P } from '../palette';

export const ROICalculator = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const roiInputs = useAppStore((s) => s.roiInputs);
  const setRoiInput = useAppStore((s) => s.setRoiInput);

  const results = useMemo(() => {
    const { teamSize, hoursPerWeek, hourlyCost } = roiInputs;
    const annualManualCost = teamSize * hoursPerWeek * hourlyCost * 52;
    const aiReduction = 0.55; // 55% automation
    const annualSavings = annualManualCost * aiReduction;
    const monthlyROI = annualSavings / 12;
    const breakEvenMonths = Math.ceil(45000 / monthlyROI); // Assume ~$45K implementation cost
    return { annualManualCost, annualSavings, monthlyROI, breakEvenMonths };
  }, [roiInputs]);

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <section
      id="roi"
      style={{
        padding: '120px 60px',
        background: `linear-gradient(180deg, ${P.void} 0%, ${P.navy}15 50%, ${P.void} 100%)`,
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ y: 40, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>ROI Calculator</p>
          <div className="divider" style={{ margin: '0 auto 24px' }} />
          <h2 className="section-title" style={{ fontSize: 'clamp(32px,4vw,52px)', marginBottom: '16px' }}>
            See what AI could <em style={{ color: P.clay }}>save</em> you.
          </h2>
          <p className="body-text" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Adjust the sliders to match your business. Watch the numbers change.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Inputs */}
          <div style={{
            padding: '40px',
            border: `1px solid ${P.navy}`,
            borderRadius: '8px',
            background: `${P.navy}11`,
          }}>
            {[
              { key: 'teamSize', label: 'Team Members on Manual Tasks', min: 1, max: 100, step: 1, unit: 'people' },
              { key: 'hoursPerWeek', label: 'Hours/Week on Repetitive Work', min: 5, max: 60, step: 5, unit: 'hrs' },
              { key: 'hourlyCost', label: 'Average Hourly Cost per Person', min: 15, max: 200, step: 5, unit: '/hr' },
            ].map((input) => (
              <div key={input.key} style={{ marginBottom: '36px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                  <label className="mono-sm" style={{ color: P.clay, opacity: 1 }}>
                    {input.label.toUpperCase()}
                  </label>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: '28px',
                    fontWeight: 300, color: P.sand,
                  }}>
                    {input.key === 'hourlyCost' ? '$' : ''}
                    {roiInputs[input.key as keyof typeof roiInputs]}
                    <span style={{ fontSize: '14px', color: P.clay, marginLeft: '4px' }}>{input.unit}</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  value={roiInputs[input.key as keyof typeof roiInputs]}
                  onChange={(e) => setRoiInput(input.key, parseInt(e.target.value))}
                  style={{
                    width: '100%', height: '4px', cursor: 'pointer',
                    appearance: 'none', WebkitAppearance: 'none',
                    background: `linear-gradient(90deg, ${P.terracotta} ${((roiInputs[input.key as keyof typeof roiInputs] - input.min) / (input.max - input.min)) * 100}%, ${P.navy} ${((roiInputs[input.key as keyof typeof roiInputs] - input.min) / (input.max - input.min)) * 100}%)`,
                    borderRadius: '2px', border: 'none', padding: 0,
                    outline: 'none',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Current Annual Cost', value: fmt(results.annualManualCost), color: P.clay },
              { label: 'Estimated Annual Savings', value: fmt(results.annualSavings), color: P.terracotta },
              { label: 'Monthly ROI', value: fmt(results.monthlyROI), color: P.sand },
              { label: 'Break-Even Point', value: `~${results.breakEvenMonths} months`, color: P.clay },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ x: 30, opacity: 0 }}
                animate={headerInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                style={{
                  padding: '28px 24px',
                  border: `1px solid ${P.navy}`,
                  borderRadius: '6px',
                  background: `${P.void}CC`,
                  borderLeft: `3px solid ${r.color}`,
                }}
              >
                <p className="mono-sm" style={{ marginBottom: '8px', color: P.clay, opacity: 0.8 }}>
                  {r.label.toUpperCase()}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '36px',
                  fontWeight: 300, color: r.color, lineHeight: 1,
                }}>
                  {r.value}
                </p>
              </motion.div>
            ))}

            <p className="mono-sm" style={{ fontSize: '9px', opacity: 0.4, marginTop: '8px' }}>
              * Estimates based on 55% task automation rate. Actual results vary by use case.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
