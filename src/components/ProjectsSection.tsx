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
    id: '01',
    title: 'AI INVOICE, BUSINESS ANALYTICS & SALES FORECASTING',
    category: 'ANALYTICS & FORECASTING',
    icon: '📋',
    desc: 'Comprehensive business analytics system to process raw invoice data, aggregate multi-channel sales patterns, generate actionable financial insights, and forecast forward sales trends using AI/ML models.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'PostgreSQL', 'APIs', 'AI'],
    github: 'https://github.com/nishanimbalkar9623-creator/-AI-Invoice-Business-Analytics-Sales-Forecasting-.',
    stat: 'Multi-dimensional Invoice Processing & ML Forecasting',
  },
  {
    id: '02',
    title: 'BUSINESS ANALYTICS DASHBOARD',
    category: 'BUSINESS INTELLIGENCE & BI',
    icon: '📊',
    desc: 'Executive analytics Power BI dashboard pulling, organizing, and displaying key organizational data points — financial metrics, revenue trends, customer segmentation, and profit analysis in a unified command center.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Power BI'],
    stat: 'Real-time KPI Aggregation & Sales Data Analysis',
    image: '/dashboard-preview.png',
    imageLink: '/dashboard-preview.png',
  },
  {
    id: '03',
    title: 'HEART DISEASE PREDICTION API',
    category: 'MACHINE LEARNING API',
    icon: '🫀',
    desc: 'Robust machine-learning classification pipeline exposed through a high-performance REST API. Sanitizes clinical biometric inputs, applies feature scaling, and returns probabilistic risk assessment payloads.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'REST API'],
    github: 'https://github.com/nishanimbalkar9623-creator/heart_disease_project_ml',
    stat: 'End-to-End Classification REST Endpoint',
  },
  {
    id: '04',
    title: 'TUMOR DETECTION ML MODEL',
    category: 'COMPUTER VISION & DEEP LEARNING',
    icon: '🧬',
    desc: 'Advanced tumor detection ML system utilizing deep learning and computer vision techniques for high-accuracy medical image classification, bounding-box localization, and pattern recognition in diagnostic scans.',
    tech: ['Python', 'OpenCV', 'YOLO', 'Ultralytics', 'Deep Learning'],
    github: 'https://github.com/nishanimbalkar9623-creator/tumor-detection-ml-model',
    stat: 'High-Accuracy Medical Image Classification',
  },
];

/* ── 3D Tilt Project Card ─────────────────────────── */
function ProjectCard({ proj, idx }: { proj: Project; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({
      x: ((e.clientY - cy) / (rect.height / 2)) * -6,
      y: ((e.clientX - cx) / (rect.width / 2)) * 6,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      style={{ perspective: '1000px' }}
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? '10px' : '0px'})`,
          transition: hovered ? 'transform 0.1s' : 'transform 0.5s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          style={{
            background: '#000',
            border: '2px solid #fff',
            boxShadow: hovered
              ? '10px 10px 0 #fff, inset 0 0 60px rgba(255,255,255,0.02)'
              : '6px 6px 0 #fff',
            transition: 'box-shadow 0.3s',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner accent — top-left */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '20px', height: '20px',
            borderTop: '3px solid #fff',
            borderLeft: '3px solid #fff',
            zIndex: 2,
          }} />
          {/* Corner accent — bottom-right */}
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: '20px', height: '20px',
            borderBottom: '3px solid #fff',
            borderRight: '3px solid #fff',
            zIndex: 2,
          }} />

          {/* Title Bar */}
          <div
            style={{
              background: hovered ? '#fff' : '#0a0a0a',
              color: hovered ? '#000' : '#fff',
              borderBottom: '2px solid #fff',
              padding: '8px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.25s',
              userSelect: 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '16px' }}>{proj.icon}</span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '7px',
                  letterSpacing: '1px',
                  color: hovered ? '#000' : '#888',
                }}>
                  [{proj.category}]
                </div>
                <div style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '8px',
                  letterSpacing: '1px',
                  color: hovered ? '#000' : '#fff',
                }}>
                  PROJ_{proj.id}.PY
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '3px' }}>
              {['_', '□', '✕'].map(c => (
                <span key={c} style={{
                  width: '16px', height: '16px',
                  border: `1px solid ${hovered ? '#000' : '#444'}`,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '9px',
                  fontFamily: 'var(--font-mono)',
                }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Project Image (if available) */}
          {proj.image && (
            <div style={{
              borderBottom: '1px solid #222',
              overflow: 'hidden',
              position: 'relative',
              height: '160px',
            }}>
              <img
                src={proj.image}
                alt={proj.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(30%) contrast(1.1)',
                  transition: 'transform 0.4s ease',
                  transform: hovered ? 'scale(1.04)' : 'scale(1)',
                }}
              />
              {/* Scanline overlay on image */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.3) 3px, rgba(0,0,0,0.3) 4px)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                background: 'rgba(0,0,0,0.85)',
                border: '1px solid #444',
                padding: '3px 8px',
                fontFamily: 'var(--font-pixel)',
                fontSize: '6px',
                color: '#fff',
                letterSpacing: '1px',
              }}>
                SALES DATA ANALYSIS — POWER BI
              </div>
            </div>
          )}

          {/* No-image stat bar */}
          {!proj.image && (
            <div style={{
              background: '#060606',
              borderBottom: '1px solid #1a1a1a',
              padding: '12px 16px',
              fontFamily: 'var(--font-vt)',
              fontSize: '17px',
              color: '#bbb',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{ color: '#fff' }}>&gt;</span> {proj.stat}
            </div>
          )}

          {/* Body */}
          <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(8px, 1vw, 11px)',
              color: '#fff',
              letterSpacing: '1px',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {proj.title}
            </h3>

            {/* Description */}
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#777',
              lineHeight: 1.75,
              margin: 0,
              flex: 1,
            }}>
              {proj.desc}
            </p>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {proj.tech.map(t => (
                <span key={t} style={{
                  border: '1px solid #2a2a2a',
                  padding: '3px 9px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  color: '#666',
                  background: '#040404',
                  transition: 'border-color 0.2s, color 0.2s',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Bottom actions */}
            <div style={{
              borderTop: '1px solid #111',
              paddingTop: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              {proj.github ? (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: '2px solid #fff',
                    padding: '7px 14px',
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '7px',
                    color: '#fff',
                    textDecoration: 'none',
                    letterSpacing: '1px',
                    boxShadow: '3px 3px 0 #fff',
                    background: '#000',
                    transition: 'transform 0.1s, box-shadow 0.1s, background 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#fff';
                    el.style.color = '#000';
                    el.style.transform = 'translate(-2px, -2px)';
                    el.style.boxShadow = '5px 5px 0 #fff';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#000';
                    el.style.color = '#fff';
                    el.style.transform = 'none';
                    el.style.boxShadow = '3px 3px 0 #fff';
                  }}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  VIEW ON GITHUB
                </a>
              ) : (
                <span style={{
                  border: '1px dashed #333',
                  padding: '7px 14px',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '7px',
                  color: '#444',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <ExternalLink size={10} /> PRIVATE REPO
                </span>
              )}

              {/* View Image button for projects with imageLink */}
              {proj.imageLink && (
                <a
                  href={proj.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid #444',
                    padding: '7px 12px',
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '7px',
                    color: '#888',
                    textDecoration: 'none',
                    letterSpacing: '1px',
                    background: '#050505',
                    transition: 'border-color 0.15s, color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#fff';
                    el.style.color = '#fff';
                    el.style.background = '#111';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = '#444';
                    el.style.color = '#888';
                    el.style.background = '#050505';
                  }}
                >
                  <ExternalLink size={9} />
                  VIEW DASHBOARD
                </a>
              )}

              <div style={{
                marginLeft: 'auto',
                fontFamily: 'var(--font-pixel)',
                fontSize: '7px',
                color: '#333',
                letterSpacing: '1px',
              }}>
                ID: {proj.id}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section ─────────────────────────────────── */
export default function ProjectsSection() {
  return (
    <section id="projects" style={{ background: '#000', padding: '80px 0', position: 'relative' }}>
      <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            border: '2px solid #fff',
            padding: '6px 20px',
            fontFamily: 'var(--font-pixel)',
            fontSize: '8px',
            color: '#fff',
            letterSpacing: '3px',
            marginBottom: '24px',
            boxShadow: '4px 4px 0 #fff',
          }}>
            PROJECTS.DIR
          </div>
          <h2 style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(12px, 2vw, 24px)',
            color: '#fff',
            letterSpacing: '3px',
            display: 'block',
            marginBottom: '16px',
          }}>
            FEATURED PROJECTS
          </h2>
          <p style={{
            fontFamily: 'var(--font-vt)',
            fontSize: '20px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Real implementations — data pipelines, ML models, BI dashboards, and AI medical systems.
          </p>
        </div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: '32px',
        }}>
          {projects.map((proj, idx) => (
            <ProjectCard key={proj.id} proj={proj} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
