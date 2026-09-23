import React from 'react';
import { motion } from 'framer-motion';

const focusAreas = [
  'Data Cleaning', 'Data Analysis', 'Dashboard Creation',
  'Machine Learning', 'Predictive Analytics', 'AI Chatbots',
  'Document Q&A', 'Data Visualization', 'AI/ML APIs',
];

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#000', padding: '80px 0', position: 'relative' }}>
      <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>

          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '720px', margin: '0 auto', width: '100%' }}
          >
            {/* Terminal window */}
            <div style={{
              border: '2px solid #fff',
              background: '#000',
              boxShadow: '6px 6px 0 #fff',
            }}>
              {/* Title bar */}
              <div style={{
                background: '#fff', color: '#000',
                padding: '6px 10px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderBottom: '1px solid #333',
                fontFamily: 'var(--font-pixel)', fontSize: '8px', letterSpacing: '1px',
              }}>
                <span>ABOUT_ME.TXT — NOTEPAD</span>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {['_','□','✕'].map(c => (
                    <span key={c} style={{ width: '14px', height: '14px', border: '1px solid #000', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px' }}>{c}</span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#555', letterSpacing: '1px', marginBottom: '16px' }}>
                  ABOUT_DEVELOPER
                </div>

                <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2.5vw, 26px)', color: '#fff', letterSpacing: '2px', marginBottom: '20px' }}>
                  HI, I'M NISHA.
                </h2>

                <div style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#ccc', lineHeight: 1.8, marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    I'm an <span style={{ color: '#fff', fontWeight: 'bold' }}>AI/ML and Data Analytics developer</span> focused on building practical solutions using data, machine learning, dashboards, and AI.
                  </p>
                  <p>
                    I enjoy working on real-world problems where data can be transformed into useful insights, predictions, and AI-powered applications.
                  </p>
                </div>

                {/* Pipeline strip */}
                <div style={{
                  border: '1px solid #333',
                  padding: '14px',
                  background: '#050505',
                  marginBottom: '24px',
                }}>
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', letterSpacing: '1px', marginBottom: '10px' }}>
                    &gt; CORE ENGINEERING FOCUS:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                    {['Data Cleaning', 'Data Analysis', 'Dashboards', 'Machine Learning', 'AI Chatbots'].map((f, i, arr) => (
                      <React.Fragment key={f}>
                        <span style={{
                          border: '1px solid #444', padding: '4px 10px',
                          fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#ddd',
                        }}>
                          {f}
                        </span>
                        {i < arr.length - 1 && (
                          <span style={{ color: '#555', fontSize: '12px' }}>→</span>
                        )}
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
                      style={{
                        border: '1px solid #222',
                        padding: '8px 10px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: '#aaa',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'border-color 0.2s, color 0.2s',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#fff';
                        (e.currentTarget as HTMLElement).style.color = '#fff';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = '#222';
                        (e.currentTarget as HTMLElement).style.color = '#aaa';
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', background: '#fff', flexShrink: 0, display: 'inline-block' }} />
                      {area}
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid #1a1a1a',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: '#555',
                  fontStyle: 'italic',
                }}>
                  // Dedicated to writing clean, maintainable Python code and delivering dependable systems for startups and business teams.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
