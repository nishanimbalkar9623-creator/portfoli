import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from '@/components/icons';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  icon: string;
  desc: string;
  tech: string[];
  github?: string;
  stat: string;
  image?: string;
  imageLink?: string;
}

const projects: Project[] = [
  {
    id: '01', title: 'AI INVOICE, BUSINESS ANALYTICS & SALES FORECASTING', category: 'ANALYTICS & FORECASTING', icon: '📋',
    desc: 'Comprehensive business analytics system to process raw invoice data, aggregate multi-channel sales patterns, generate actionable financial insights, and forecast forward sales trends using AI/ML models.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'PostgreSQL', 'APIs', 'AI'],
    github: 'https://github.com/nishanimbalkar9623-creator/-AI-Invoice-Business-Analytics-Sales-Forecasting-.',
    stat: 'Multi-dimensional Invoice Processing & ML Forecasting',
  },
  {
    id: '02', title: 'BUSINESS ANALYTICS DASHBOARD', category: 'BUSINESS INTELLIGENCE & BI', icon: '📊',
    desc: 'Executive analytics Power BI dashboard pulling, organizing, and displaying key organizational data points — financial metrics, revenue trends, customer segmentation, and profit analysis in a unified command center.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Power BI'],
    stat: 'Real-time KPI Aggregation & Sales Data Analysis',
    image: '/dashboard-preview.png', imageLink: '/dashboard-preview.png',
  },
  {
    id: '03', title: 'HEART DISEASE PREDICTION API', category: 'MACHINE LEARNING API', icon: '🫀',
    desc: 'Robust machine-learning classification pipeline exposed through a high-performance REST API. Sanitizes clinical biometric inputs, applies feature scaling, and returns probabilistic risk assessment payloads.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'REST API'],
    github: 'https://github.com/nishanimbalkar9623-creator/heart_disease_project_ml',
    stat: 'End-to-End Classification REST Endpoint',
  },
  {
    id: '04', title: 'TUMOR DETECTION ML MODEL', category: 'COMPUTER VISION & DEEP LEARNING', icon: '🧬',
    desc: 'Advanced tumor detection ML system utilizing deep learning and computer vision techniques for high-accuracy medical image classification, bounding-box localization, and pattern recognition in diagnostic scans.',
    tech: ['Python', 'OpenCV', 'YOLO', 'Ultralytics', 'Deep Learning'],
    github: 'https://github.com/nishanimbalkar9623-creator/tumor-detection-ml-model',
    stat: 'High-Accuracy Medical Image Classification',
  },
];

function ProjectCard({ proj, idx }: { proj: Project; idx: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: idx * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        border: hovered ? '1px solid rgba(120,80,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
        background: hovered
          ? 'linear-gradient(145deg, rgba(30,15,60,0.95), rgba(10,5,25,0.98))'
          : 'linear-gradient(145deg, rgba(12,8,20,0.95), rgba(6,4,12,0.98))',
        boxShadow: hovered
          ? '0 8px 40px rgba(100,50,255,0.18), 0 0 0 1px rgba(120,80,255,0.15)'
          : '0 4px 20px rgba(0,0,0,0.5)',
        transition: 'all 0.35s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
      }}
    >
      {/* Top accent line */}
      <div style={{
        height: '2px',
        background: hovered
          ? 'linear-gradient(90deg, rgba(120,80,255,0.8), rgba(60,180,255,0.5), transparent)'
          : 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)',
        transition: 'all 0.4s ease',
      }} />

      {/* Header area */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: hovered ? 'rgba(100,60,255,0.2)' : 'rgba(255,255,255,0.05)',
              border: hovered ? '1px solid rgba(120,80,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', transition: 'all 0.3s',
              flexShrink: 0,
            }}>
              {proj.icon}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', letterSpacing: '1px', marginBottom: '3px' }}>
                [{proj.category}]
              </div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: hovered ? '#c9b8ff' : '#777', letterSpacing: '1px', transition: 'color 0.3s' }}>
                PROJ_{proj.id}.PY
              </div>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '6px', color: '#2a2a2a', letterSpacing: '1px' }}>
            ID: {proj.id}
          </div>
        </div>

        {/* Project image */}
        {proj.image && (
          <div style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '14px', height: '140px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: hovered ? 'brightness(1.05)' : 'brightness(0.85) grayscale(20%)', transition: 'all 0.4s ease' }} />
          </div>
        )}

        {/* Stat bar (no image) */}
        {!proj.image && (
          <div style={{
            borderRadius: '8px', padding: '8px 12px', marginBottom: '14px',
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
            fontFamily: 'var(--font-vt)', fontSize: '14px', color: '#666',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ color: hovered ? '#c9b8ff' : '#555', transition: 'color 0.3s' }}>›</span>
            {proj.stat}
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '0 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(8px, 1vw, 10px)', color: '#fff', letterSpacing: '1px', lineHeight: 1.7, margin: 0 }}>
          {proj.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#666', lineHeight: 1.75, margin: 0, flex: 1 }}>
          {proj.desc}
        </p>

        {/* Tech tags - pill style with curved borders */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {proj.tech.map(t => (
            <span key={t} style={{
              padding: '3px 10px', borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              fontFamily: 'var(--font-mono)', fontSize: '9px',
              color: '#777', background: 'rgba(255,255,255,0.03)',
              transition: 'all 0.2s',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Bottom actions */}
        <div style={{ paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {proj.github ? (
            <a
              href={proj.github} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '7px 14px', borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.15)',
                fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#fff',
                textDecoration: 'none', letterSpacing: '1px',
                background: 'rgba(255,255,255,0.05)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#fff'; el.style.color = '#000'; el.style.borderColor = '#fff'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.05)'; el.style.color = '#fff'; el.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              VIEW ON GITHUB
            </a>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '10px', border: '1px dashed rgba(255,255,255,0.08)', fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#333', letterSpacing: '1px' }}>
              <ExternalLink size={10} /> PRIVATE REPO
            </span>
          )}
          {proj.imageLink && (
            <a
              href={proj.imageLink} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '7px 12px', borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#666',
                textDecoration: 'none', letterSpacing: '1px', background: 'transparent',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.3)'; el.style.color = '#fff'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.color = '#666'; }}
            >
              <ExternalLink size={9} /> VIEW DASHBOARD
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ background: '#000', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(80,40,200,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(40,100,200,0.1) 0%, transparent 50%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 20px', borderRadius: '30px',
            border: '1px solid rgba(120,80,255,0.3)',
            background: 'rgba(80,40,200,0.08)',
            fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#a89bff',
            letterSpacing: '3px', marginBottom: '22px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a89bff', display: 'inline-block', animation: 'blink 1.5s step-end infinite' }} />
            PROJECTS.DIR
          </div>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 2vw, 24px)', color: '#fff', letterSpacing: '3px', display: 'block', marginBottom: '14px' }}>
            FEATURED PROJECTS
          </h2>
          <p style={{ fontFamily: 'var(--font-vt)', fontSize: '19px', color: '#555', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            Real implementations — data pipelines, ML models, BI dashboards, and AI medical systems.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '24px' }}>
          {projects.map((proj, idx) => <ProjectCard key={proj.id} proj={proj} idx={idx} />)}
        </div>
      </div>
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }`}</style>
    </section>
  );
}