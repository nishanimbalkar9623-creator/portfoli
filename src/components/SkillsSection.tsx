import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'DATA CLEANING & ANALYSIS', icon: '🗄',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Preprocessing', 'Exploratory Data Analysis', 'Data Visualization'],
    desc: 'Transforming messy raw tables into normalized, statistically sound datasets.',
  },
  {
    title: 'BUSINESS INTELLIGENCE', icon: '📊',
    skills: ['Power BI', 'Dashboard Creation', 'KPI Analysis', 'Business Analytics', 'Sales Analytics'],
    desc: 'Designing interactive executive dashboards and KPI telemetry systems.',
  },
  {
    title: 'MACHINE LEARNING', icon: '🧠',
    skills: ['Scikit-learn', 'Regression', 'Classification', 'Forecasting', 'Feature Engineering', 'Model Preprocessing'],
    desc: 'Constructing robust regression, classification, and forecasting models.',
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE', icon: '🤖',
    skills: ['AI Chatbots', 'LLM Integration', 'Document Q&A', 'OCR', 'AI Applications'],
    desc: 'Developing conversational assistants, PDF Q&A, and LLM integrations.',
  },
  {
    title: 'COMPUTER VISION', icon: '👁',
    skills: ['OpenCV', 'YOLO', 'Ultralytics'],
    desc: 'Visual pattern recognition, object detection, and spatial bounding boxes.',
  },
  {
    title: 'BACKEND & APIS', icon: '⚙',
    skills: ['Flask', 'FastAPI', 'REST APIs', 'JSON'],
    desc: 'Exposing machine-learning and data services through clean REST endpoints.',
  },
  {
    title: 'DATABASE & DEV', icon: '💾',
    skills: ['SQL', 'PostgreSQL', 'Git', 'GitHub'],
    desc: 'Querying relational databases and adhering to version-controlled workflows.',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ background: '#000', padding: '80px 0', position: 'relative' }}>
      <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block', border: '1px solid #fff', padding: '4px 16px',
            fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#fff',
            letterSpacing: '2px', marginBottom: '24px', boxShadow: '3px 3px 0 #fff',
          }}>
            SKILLS.INF
          </div>
          <h2 style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 2vw, 24px)',
            color: '#fff', letterSpacing: '3px', display: 'block', marginBottom: '16px',
          }}>
            SKILLS & TECHNOLOGIES
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div
                style={{
                  border: '2px solid #fff',
                  background: '#000',
                  padding: '0',
                  boxShadow: '4px 4px 0 #fff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '6px 6px 0 #fff')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0 #fff')}
              >
                {/* Title bar */}
                <div style={{
                  borderBottom: '1px solid #333',
                  padding: '8px 12px',
                  background: '#080808',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{ fontSize: '14px' }}>{cat.icon}</span>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#fff', letterSpacing: '1px' }}>
                    {cat.title}
                  </span>
                </div>

                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#666', lineHeight: 1.6 }}>
                    {cat.desc}
                  </p>

                  {/* Skill tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {cat.skills.map((s) => (
                      <span key={s} style={{
                        border: '1px solid #444',
                        padding: '3px 8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: '#bbb',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}>
                        <span style={{ width: '5px', height: '5px', background: '#fff', display: 'inline-block', flexShrink: 0 }} />
                        {s}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    marginTop: 'auto', paddingTop: '10px',
                    borderTop: '1px solid #1a1a1a',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: '#444',
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>
                    <span style={{ color: '#fff' }}>✓</span> VERIFIED IN PROJECT WORK
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
