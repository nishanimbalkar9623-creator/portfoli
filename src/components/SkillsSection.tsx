import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'DATA CLEANING & ANALYSIS', icon: '🗄', color: 'rgba(100,200,255,0.7)',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Preprocessing', 'Exploratory Data Analysis', 'Data Visualization'],
    desc: 'Transforming messy raw tables into normalized, statistically sound datasets.',
    step: '01',
  },
  {
    title: 'BUSINESS INTELLIGENCE', icon: '📊', color: 'rgba(160,100,255,0.7)',
    skills: ['Power BI', 'Dashboard Creation', 'KPI Analysis', 'Business Analytics', 'Sales Analytics'],
    desc: 'Designing interactive executive dashboards and KPI telemetry systems.',
    step: '02',
  },
  {
    title: 'MACHINE LEARNING', icon: '🧠', color: 'rgba(80,180,120,0.7)',
    skills: ['Scikit-learn', 'Regression', 'Classification', 'Forecasting', 'Feature Engineering', 'Model Preprocessing'],
    desc: 'Constructing robust regression, classification, and forecasting models.',
    step: '03',
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE', icon: '🤖', color: 'rgba(255,160,80,0.7)',
    skills: ['AI Chatbots', 'LLM Integration', 'Document Q&A', 'OCR', 'AI Applications'],
    desc: 'Developing conversational assistants, PDF Q&A, and LLM integrations.',
    step: '04',
  },
  {
    title: 'COMPUTER VISION', icon: '👁', color: 'rgba(255,100,150,0.7)',
    skills: ['OpenCV', 'YOLO', 'Ultralytics'],
    desc: 'Visual pattern recognition, object detection, and spatial bounding boxes.',
    step: '05',
  },
  {
    title: 'BACKEND & APIS', icon: '⚙', color: 'rgba(120,220,200,0.7)',
    skills: ['Flask', 'FastAPI', 'REST APIs', 'JSON'],
    desc: 'Exposing machine-learning and data services through clean REST endpoints.',
    step: '06',
  },
  {
    title: 'DATABASE & DEV', icon: '💾', color: 'rgba(200,180,100,0.7)',
    skills: ['SQL', 'PostgreSQL', 'Git', 'GitHub'],
    desc: 'Querying relational databases and adhering to version-controlled workflows.',
    step: '07',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ background: '#000', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(60,30,120,0.12) 0%, transparent 60%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 18px', borderRadius: '30px', border: '1px solid rgba(120,80,255,0.3)', background: 'rgba(80,40,200,0.08)', fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#a89bff', letterSpacing: '3px', marginBottom: '20px' }}>
            SKILLS.INF
          </div>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 2vw, 24px)', color: '#fff', letterSpacing: '3px', display: 'block', marginBottom: '14px' }}>
            SKILLS & TECHNOLOGIES
          </h2>
          <p style={{ fontFamily: 'var(--font-vt)', fontSize: '19px', color: '#555', maxWidth: '500px', margin: '0 auto' }}>
            Tools, frameworks, and domains I work with daily.
          </p>
        </motion.div>

        {/* Data flow route — horizontal line with nodes */}
        <div style={{ position: 'relative', marginBottom: '50px', overflowX: 'auto', paddingBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', minWidth: 'max-content', padding: '0 20px', margin: '0 auto', justifyContent: 'center' }}>
            {skillCategories.map((cat, i) => (
              <React.Fragment key={cat.step}>
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', flexShrink: 0 }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    border: `2px solid ${cat.color}`,
                    background: 'rgba(0,0,0,0.8)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', position: 'relative',
                    boxShadow: `0 0 12px ${cat.color}55`,
                  }}>
                    {cat.icon}
                    <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '18px', height: '18px', borderRadius: '50%', background: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#000', fontWeight: 'bold' }}>
                      {cat.step}
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '6px', color: '#555', letterSpacing: '0.5px', maxWidth: '60px', textAlign: 'center', lineHeight: 1.4 }}>
                    {cat.title.split(' ')[0]}
                  </span>
                </motion.div>
                {/* Connector line */}
                {i < skillCategories.length - 1 && (
                  <div style={{ width: '40px', height: '2px', background: `linear-gradient(to right, ${cat.color}55, ${skillCategories[i + 1].color}55)`, flexShrink: 0, position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Grid of skill cards with curved borders */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '18px' }}>
          {skillCategories.map((cat, idx) => (
            <SkillCard key={cat.title} cat={cat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ cat, idx }: { cat: typeof skillCategories[0]; idx: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: idx * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '18px',
        border: hovered ? `1px solid ${cat.color}88` : '1px solid rgba(255,255,255,0.08)',
        background: hovered
          ? `linear-gradient(145deg, rgba(${hexToRgb(cat.color)}, 0.06), rgba(0,0,0,0.95))`
          : 'rgba(10,6,20,0.9)',
        boxShadow: hovered ? `0 6px 30px ${cat.color}22` : '0 2px 12px rgba(0,0,0,0.4)',
        transition: 'all 0.35s ease',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Colored top accent */}
      <div style={{ height: '2px', background: hovered ? `linear-gradient(90deg, ${cat.color}, transparent)` : `linear-gradient(90deg, ${cat.color}44, transparent)`, transition: 'all 0.4s' }} />

      {/* Title bar */}
      <div style={{ padding: '14px 16px 12px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
          background: hovered ? `${cat.color}22` : 'rgba(255,255,255,0.04)',
          border: `1px solid ${hovered ? cat.color + '66' : 'rgba(255,255,255,0.08)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
          transition: 'all 0.3s', boxShadow: hovered ? `0 0 10px ${cat.color}44` : 'none',
        }}>
          {cat.icon}
        </div>
        <div>
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: hovered ? cat.color : '#666', letterSpacing: '1px', transition: 'color 0.3s' }}>
            MODULE_{cat.step}
          </span>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', color: hovered ? '#fff' : '#bbb', letterSpacing: '0.5px', lineHeight: 1.5, marginTop: '2px', transition: 'color 0.3s' }}>
            {cat.title}
          </div>
        </div>
      </div>

      <div style={{ padding: '12px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#555', lineHeight: 1.65, margin: 0 }}>
          {cat.desc}
        </p>

        {/* Skill pills with curved borders */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {cat.skills.map((s) => (
            <span key={s} style={{
              padding: '3px 10px', borderRadius: '20px',
              border: `1px solid ${hovered ? cat.color + '55' : 'rgba(255,255,255,0.1)'}`,
              fontFamily: 'var(--font-mono)', fontSize: '9px',
              color: hovered ? '#ddd' : '#999',
              background: hovered ? `${cat.color}0a` : 'rgba(255,255,255,0.03)',
              transition: 'all 0.25s ease',
              display: 'inline-flex', alignItems: 'center', gap: '5px',
            }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: hovered ? cat.color : '#444', display: 'inline-block', flexShrink: 0, transition: 'background 0.3s' }} />
              {s}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.04)', fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#3a3a3a', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ color: hovered ? cat.color : '#3a3a3a', transition: 'color 0.3s' }}>✓</span>
          VERIFIED IN PROJECT WORK
        </div>
      </div>
    </motion.div>
  );
}

function hexToRgb(color: string): string {
  // Extract rgb values from rgba string like 'rgba(100,200,255,0.7)'
  const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (m) return `${m[1]},${m[2]},${m[3]}`;
  return '255,255,255';
}