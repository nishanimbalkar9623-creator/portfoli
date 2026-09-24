import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const IconData = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '22px', height: '22px', color: '#7c6fff' }}>
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
  </svg>
);
const IconDash = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '22px', height: '22px', color: '#7c6fff' }}>
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
  </svg>
);
const IconML = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '22px', height: '22px', color: '#7c6fff' }}>
    <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" /><path d="M2 22c0-5.52 4.48-8 10-8s10 2.48 10 8" />
  </svg>
);
const IconBot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '22px', height: '22px', color: '#7c6fff' }}>
    <rect x="3" y="11" width="18" height="10" rx="2" /><path d="M12 11V7" /><circle cx="12" cy="5" r="2" /><path d="M8 16h0M16 16h0" />
  </svg>
);

const leftServices = [
  { id: '01', Icon: IconData,  title: 'Data Cleaning & Analysis',  desc: 'Audit, sanitize, and deeply understand your data to unlock high-confidence business intelligence.', tools: ['Python', 'Pandas', 'NumPy', 'SQL'] },
  { id: '02', Icon: IconDash,  title: 'Dashboard Creation',       desc: 'Interactive dashboards for stakeholders to track KPIs, revenue, and business health in real-time.',  tools: ['Power BI', 'Python', 'Plotly'] },
];
const rightServices = [
  { id: '03', Icon: IconML,  title: 'AI / ML Solutions',  desc: 'Custom machine-learning models built on your historical data to predict trends and automate decisions.', tools: ['Scikit-learn', 'Python', 'Flask'] },
  { id: '04', Icon: IconBot, title: 'AI Chatbots',        desc: 'Intelligent assistants tailored to your documentation, FAQs, and internal structured data.',          tools: ['LLM APIs', 'Embeddings', 'OCR'] },
];

/* ── 3D Tilt Interactive Image ────────────────────────── */
function Tilt3DImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * 28;
      const rotX = -(y - 0.5) * 22;
      setTilt({ x: rotX, y: rotY });
      setGlare({ x: x * 100, y: y * 100, opacity: 0.2 });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setTilt({ x: 0, y: 0 });
    setGlare(g => ({ ...g, opacity: 0 }));
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '900px', perspectiveOrigin: '50% 50%', cursor: 'grab', position: 'relative' }}
    >
      {/* Ambient glow ring */}
      <div style={{ position: 'absolute', inset: '-28px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,40,200,0.28) 0%, transparent 70%)', pointerEvents: 'none', animation: 'svcPulse 4s ease-in-out infinite', opacity: isHovered ? 1 : 0.6, transition: 'opacity 0.4s' }} />

      {/* Connector lines */}
      <div style={{ position: 'absolute', top: '50%', left: '-36px', width: '36px', height: '1px', background: 'linear-gradient(to left, rgba(120,80,255,0.7), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', right: '-36px', width: '36px', height: '1px', background: 'linear-gradient(to right, rgba(120,80,255,0.7), transparent)', pointerEvents: 'none' }} />

      {/* 3D card */}
      <div style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.04 : 1})`,
        transition: isHovered ? 'transform 0.08s linear' : 'transform 0.65s cubic-bezier(0.23,1,0.32,1)',
        transformStyle: 'preserve-3d',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(120,80,255,0.3)',
        boxShadow: isHovered
          ? '0 28px 70px rgba(80,40,200,0.4), 0 0 0 1px rgba(120,80,255,0.5)'
          : '0 8px 32px rgba(80,40,200,0.18)',
      }}>
        <img
          src="/cosmic-hands-bh.jpg"
          alt="Connecting Data — Creating Intelligence"
          style={{ width: '100%', display: 'block', borderRadius: '20px', filter: isHovered ? 'brightness(1.08) saturate(1.12)' : 'brightness(0.95)', transition: 'filter 0.3s', userSelect: 'none', pointerEvents: 'none' }}
          draggable={false}
        />
        {/* Glare overlay */}
        <div style={{ position: 'absolute', inset: 0, borderRadius: '20px', pointerEvents: 'none', background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 55%)`, transition: isHovered ? 'background 0.04s' : 'background 0.5s' }} />
        {/* Depth scanlines */}
        <div style={{ position: 'absolute', inset: 0, borderRadius: '20px', pointerEvents: 'none', background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)', opacity: 0.5 }} />
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center', marginTop: '10px', fontFamily: 'var(--font-pixel)', fontSize: '7px', color: 'rgba(160,130,255,0.5)', letterSpacing: '2px' }}>
        ↕ MOVE TO INTERACT
      </div>
    </div>
  );
}

function SideCard({ svc, align, idx }: {

  svc: { id: string; Icon: () => React.ReactElement; title: string; desc: string; tools: string[] };
  align: 'left' | 'right';
  idx: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: align === 'left' ? 'row' : 'row-reverse', alignItems: 'flex-start', gap: '14px', cursor: 'default' }}
    >
      <div style={{
        width: '50px', height: '50px', flexShrink: 0, borderRadius: '14px',
        background: hovered ? 'rgba(120,80,255,0.15)' : 'rgba(255,255,255,0.04)',
        border: hovered ? '1px solid rgba(120,80,255,0.6)' : '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 0 20px rgba(100,60,255,0.35)' : 'none',
      }}>
        <svc.Icon />
      </div>
      <div style={{ textAlign: align === 'left' ? 'left' : 'right', flex: 1 }}>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px', color: hovered ? '#c9b8ff' : '#e0e0e0', letterSpacing: '1px', marginBottom: '6px', lineHeight: 1.5, transition: 'color 0.3s' }}>
          {svc.title}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#666', lineHeight: 1.65, margin: '0 0 10px' }}>{svc.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}>
          {svc.tools.map((t) => (
            <span key={t} style={{ padding: '2px 9px', borderRadius: '20px', border: hovered ? '1px solid rgba(120,80,255,0.4)' : '1px solid rgba(255,255,255,0.12)', fontFamily: 'var(--font-mono)', fontSize: '9px', color: hovered ? '#c9b8ff' : '#777', background: hovered ? 'rgba(120,80,255,0.08)' : 'rgba(255,255,255,0.03)', transition: 'all 0.3s' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: '#000', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,40,200,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 18px', borderRadius: '30px', border: '1px solid rgba(120,80,255,0.35)', background: 'rgba(80,40,200,0.08)', fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#a89bff', letterSpacing: '3px', marginBottom: '20px' }}>
            SERVICES.EXE
          </div>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2.5vw, 28px)', color: '#fff', letterSpacing: '3px', display: 'block', marginBottom: '14px' }}>MY SERVICES</h2>
          <p style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#555', maxWidth: '540px', margin: '0 auto' }}>
            High-impact data engineering, visual business intelligence, predictive machine learning, and AI assistant development.
          </p>
        </motion.div>

        <div className="services-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 300px 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
            {leftServices.map((svc, i) => <SideCard key={svc.id} svc={svc} align="left" idx={i} />)}
          </div>

          {/* CENTER — 3D Interactive Image */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }}>
            <Tilt3DImage />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
            {rightServices.map((svc, i) => <SideCard key={svc.id} svc={svc} align="right" idx={i} />)}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ marginTop: '60px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, height: '1px', maxWidth: '200px', background: 'linear-gradient(to right, transparent, rgba(120,80,255,0.3))' }} />
          <a href="https://wa.me/919420561307?text=Hi%20Nisha,%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="btn-pixel btn-pixel-inv" style={{ padding: '12px 32px', fontSize: '9px', letterSpacing: '2px', borderRadius: '12px' }}>&gt; HIRE ME</button>
          </a>
          <div style={{ flex: 1, height: '1px', maxWidth: '200px', background: 'linear-gradient(to left, transparent, rgba(120,80,255,0.3))' }} />
        </motion.div>
      </div>

      <style>{`
        @keyframes svcPulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @media (max-width: 900px) { .services-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}