import React from 'react';
import { motion } from 'framer-motion';

const focusAreas = [
  'Data Cleaning', 'Data Analysis', 'Dashboard Creation',
  'Machine Learning', 'Predictive Analytics', 'AI Chatbots',
  'Document Q&A', 'Data Visualization', 'AI/ML APIs',
];

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#000', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(60,30,120,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ maxWidth: '740px', margin: '0 auto', width: '100%' }}>

          {/* Main card */}
          <div style={{ borderRadius: '24px', border: '1px solid rgba(120,80,255,0.25)', background: 'rgba(10,6,20,0.96)', boxShadow: '0 8px 48px rgba(80,40,200,0.12)', overflow: 'hidden' }}>
            {/* Title bar */}
            <div style={{ background: 'rgba(120,80,255,0.12)', borderBottom: '1px solid rgba(120,80,255,0.2)', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-pixel)', fontSize: '8px', letterSpacing: '1px', color: '#a89bff' }}>
              <span>ABOUT_ME.TXT — NOTEPAD</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['_','□','✕'].map(c => (
                  <span key={c} style={{ width: '16px', height: '16px', borderRadius: '4px', border: '1px solid rgba(120,80,255,0.3)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#888' }}>{c}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '28px' }}>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#555', letterSpacing: '1px', marginBottom: '16px' }}>ABOUT_DEVELOPER</div>

              <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2.5vw, 26px)', color: '#fff', letterSpacing: '2px', marginBottom: '20px' }}>
                HI, I'M NISHA.
              </h2>

              <div style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#ccc', lineHeight: 1.8, marginBottom: '20px' }}>
                <p style={{ marginBottom: '12px' }}>
                  I'm an <span style={{ color: '#c9b8ff', fontWeight: 'bold' }}>AI/ML and Data Analytics developer</span> focused on building practical solutions using data, machine learning, dashboards, and AI.
                </p>
                <p>
                  I enjoy working on real-world problems where data can be transformed into useful insights, predictions, and AI-powered applications.
                </p>
              </div>

              {/* Pipeline strip */}
              <div style={{ borderRadius: '14px', border: '1px solid rgba(255,255,255,0.07)', padding: '14px 16px', background: 'rgba(255,255,255,0.03)', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', letterSpacing: '1px', marginBottom: '10px' }}>
                  &gt; CORE ENGINEERING FOCUS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                  {['Data Cleaning', 'Data Analysis', 'Dashboards', 'Machine Learning', 'AI Chatbots'].map((f, i, arr) => (
                    <React.Fragment key={f}>
                      <span style={{ padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(120,80,255,0.3)', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#c9b8ff', background: 'rgba(120,80,255,0.07)' }}>
                        {f}
                      </span>
                      {i < arr.length - 1 && <span style={{ color: '#555', fontSize: '12px' }}>→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Focus areas grid */}
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', letterSpacing: '1px', marginBottom: '12px' }}>
                PRIMARY FOCUS AREAS:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    style={{ borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)', padding: '8px 10px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s', cursor: 'default', background: 'rgba(255,255,255,0.02)' }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(120,80,255,0.5)'; el.style.color = '#c9b8ff'; el.style.background = 'rgba(120,80,255,0.08)'; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.color = '#aaa'; el.style.background = 'rgba(255,255,255,0.02)'; }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(120,80,255,0.7)', flexShrink: 0, display: 'inline-block' }} />
                    {area}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#444', fontStyle: 'italic' }}>
                // Dedicated to writing clean, maintainable Python code and delivering dependable systems for startups and business teams.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}