import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { n: '01', title: 'UNDERSTAND', icon: '🔍', desc: 'Examine the business problem, stakeholder goals, input data constraints, and targeted success criteria before writing code.' },
  { n: '02', title: 'CLEAN', icon: '🔧', desc: 'Extract, sanitize, filter duplicates, impute missing values, and prepare structured tables ready for reliable modeling.' },
  { n: '03', title: 'ANALYZE', icon: '📈', desc: 'Perform statistical and exploratory analysis to discover meaningful trends, key performance metrics, and hidden patterns.' },
  { n: '04', title: 'BUILD', icon: '🏗', desc: 'Construct the tailored Power BI dashboard, train the predictive machine-learning model, or integrate the AI chatbot assistant.' },
  { n: '05', title: 'TEST', icon: '🛡', desc: 'Rigorously validate model predictions, stress-test API endpoints, verify dashboard calculations, and evaluate assistant fidelity.' },
  { n: '06', title: 'DELIVER', icon: '📦', desc: 'Hand over the production-ready solution with thorough documentation, walk through results, and ensure seamless handoff.' },
];

export default function ProcessSection() {
  return (
    <section style={{ background: '#000', padding: '80px 0', position: 'relative' }}>
      <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block', border: '1px solid #fff', padding: '4px 16px',
            fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#fff',
            letterSpacing: '2px', marginBottom: '24px', boxShadow: '3px 3px 0 #fff',
          }}>
            METHOD.DOC
          </div>
          <h2 style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 2vw, 24px)',
            color: '#fff', letterSpacing: '3px', display: 'block',
          }}>
            HOW I WORK
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {steps.map((step, idx) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div
                style={{
                  border: '2px solid #fff',
                  background: '#000',
                  padding: '0',
                  boxShadow: '4px 4px 0 #fff',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget.style.boxShadow = '6px 6px 0 #fff');
                  (e.currentTarget.style.background = '#030303');
                }}
                onMouseLeave={e => {
                  (e.currentTarget.style.boxShadow = '4px 4px 0 #fff');
                  (e.currentTarget.style.background = '#000');
                }}
              >
                {/* Header */}
                <div style={{
                  borderBottom: '1px solid #222',
                  padding: '10px 14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#060606',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-pixel)', fontSize: '18px',
                    color: '#fff', letterSpacing: '2px',
                  }}>
                    {step.n}
                  </span>
                  <span style={{ fontSize: '18px' }}>{step.icon}</span>
                </div>

                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{
                    fontFamily: 'var(--font-pixel)', fontSize: '11px',
                    color: '#fff', letterSpacing: '2px',
                  }}>
                    {step.title}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: '#777', lineHeight: 1.6, flex: 1,
                  }}>
                    {step.desc}
                  </p>
                  <div style={{
                    paddingTop: '10px', borderTop: '1px solid #1a1a1a',
                    fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#444',
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>
                    <span style={{ color: '#fff' }}>✓</span> STRUCTURED MILESTONE
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
