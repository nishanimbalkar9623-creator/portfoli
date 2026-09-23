import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

/* ═══════════════════════════════════════════════
   3D Pixel Service Card — Windows 95 style + CSS 3D tilt
   ═══════════════════════════════════════════════ */
function ServiceCard3D({
  id, icon, title, tagline, description, items, tools, workflow, disclaimer, interactive
}: {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  tools: string[];
  workflow: string[];
  disclaimer?: string;
  interactive?: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -8;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 8;
    setTilt({ x: rx, y: ry });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? '12px' : '0'})`,
          transition: hovered ? 'transform 0.1s' : 'transform 0.4s ease',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* The main window */}
        <div
          style={{
            background: '#000',
            border: '2px solid #fff',
            boxShadow: hovered
              ? '12px 12px 0 #fff, inset 0 0 50px rgba(255,255,255,0.03)'
              : '6px 6px 0 #fff',
            transition: 'box-shadow 0.3s',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Corner accents */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '18px', height: '18px', borderTop: '3px solid #fff', borderLeft: '3px solid #fff', zIndex: 3, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '18px', height: '18px', borderBottom: '3px solid #fff', borderRight: '3px solid #fff', zIndex: 3, pointerEvents: 'none' }} />
          {/* Title Bar */}
          <div
            style={{
              background: hovered ? '#fff' : '#111',
              color: hovered ? '#000' : '#fff',
              borderBottom: '2px solid #fff',
              padding: '6px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-pixel)',
              fontSize: '8px',
              letterSpacing: '1px',
              transition: 'all 0.3s',
              userSelect: 'none',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>{icon}</span>
              SERVICE_{id}.EXE
            </span>
            <div style={{ display: 'flex', gap: '3px' }}>
              {['_','□','✕'].map(c => (
                <span key={c} style={{
                  width: '16px', height: '16px',
                  border: '1px solid',
                  borderColor: hovered ? '#000' : '#fff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '9px',
                  cursor: 'pointer',
                }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '20px' }}>
            {/* Title + Tagline */}
            <div style={{ marginBottom: '16px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 'clamp(10px, 1.3vw, 14px)',
                  color: '#fff',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  lineHeight: 1.5,
                }}
              >
                {title}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-vt)',
                  fontSize: '18px',
                  color: '#bbb',
                  borderLeft: '3px solid #fff',
                  paddingLeft: '10px',
                }}
              >
                {tagline}
              </div>
            </div>

            {/* Description */}
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#888', lineHeight: 1.7, marginBottom: '16px' }}>
              {description}
            </p>

            {/* Interactive slot (chatbot demo etc.) */}
            {interactive && (
              <div style={{ marginBottom: '16px' }}>{interactive}</div>
            )}

            {/* Pipeline */}
            <div
              style={{
                border: '1px solid #333',
                padding: '10px',
                marginBottom: '16px',
                background: '#040404',
              }}
            >
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', marginBottom: '8px', letterSpacing: '1px' }}>
                ── PIPELINE ──
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                {workflow.map((step, i) => (
                  <React.Fragment key={step}>
                    <span style={{
                      border: '1px solid #444',
                      padding: '3px 8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: '#ccc',
                    }}>
                      {step}
                    </span>
                    {i < workflow.length - 1 && (
                      <span style={{ color: '#555', fontSize: '12px' }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Capabilities grid */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', marginBottom: '10px', letterSpacing: '1px' }}>
                ── CAPABILITIES ──
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {items.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                    <span style={{
                      color: '#fff', fontSize: '10px', marginTop: '1px',
                      fontFamily: 'var(--font-mono)', flexShrink: 0
                    }}>▸</span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px',
                      color: '#aaa', lineHeight: 1.4
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {disclaimer && (
              <div style={{
                border: '1px dashed #333',
                padding: '8px 10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#666',
                marginBottom: '16px',
              }}>
                ℹ {disclaimer}
              </div>
            )}

            {/* Footer strip — tools */}
            <div
              style={{
                borderTop: '1px solid #222',
                paddingTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'center' }}>
                {tools.map((t) => (
                  <span key={t} style={{
                    border: '1px solid #333',
                    padding: '2px 7px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: '#777',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://wa.me/919420561307?text=Hi%20Nisha,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '7px',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  letterSpacing: '1px',
                }}
              >
                HIRE →
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Interactive Chatbot Preview ─────────────────────── */
function ChatbotDemo() {
  const [tab, setTab] = useState<'sales' | 'policy'>('sales');
  return (
    <div style={{ border: '1px solid #333', background: '#050505' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid #333' }}>
        {(['sales', 'policy'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              padding: '6px',
              fontFamily: 'var(--font-pixel)',
              fontSize: '7px',
              letterSpacing: '1px',
              background: tab === t ? '#fff' : '#000',
              color: tab === t ? '#000' : '#555',
              border: 'none',
              borderRight: '1px solid #333',
              cursor: 'pointer',
            }}
          >
            {t === 'sales' ? 'SALES QUERY' : 'POLICY Q&A'}
          </button>
        ))}
      </div>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{
          padding: '6px 8px', border: '1px solid #333',
          fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#aaa'
        }}>
          <span style={{ color: '#fff' }}>USR:</span>{' '}
          {tab === 'sales' ? '"What were our total sales last month?"' : '"What is our refund policy?"'}
        </div>
        <div style={{
          padding: '6px 8px', border: '1px solid #555',
          background: '#0a0a0a',
          fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#ddd'
        }}>
          <span style={{ color: '#fff' }}>BOT:</span>{' '}
          {tab === 'sales'
            ? '"Revenue last month: $48,250 across 612 transactions (+14.2% MoM)."'
            : '"Per Section 4.2: refunds eligible within 14 business days of invoice."'}
        </div>
      </div>
    </div>
  );
}

/* ── Main Services Section ──────────────────────────── */
export default function ServicesSection() {
  const services = [
    {
      id: '01', icon: '🗄', title: 'DATA CLEANING & DATA ANALYSIS',
      tagline: 'Turn messy data into usable information.',
      description: 'I help businesses audit, sanitize, prepare, and deeply understand their underlying data to unlock high-confidence business intelligence.',
      workflow: ['Raw Dataset', 'Clean Dataset', 'Analysis', 'Insights'],
      items: [
        'Data cleaning & validation', 'Missing-value handling & imputation',
        'Duplicate removal', 'Data formatting & transformation',
        'Preprocessing pipelines', 'Exploratory data analysis (EDA)',
        'Statistical analysis', 'Trend & correlation discovery',
        'Data prep for ML',
      ],
      tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL'],
    },
    {
      id: '02', icon: '📊', title: 'DASHBOARD CREATION',
      tagline: 'Turn business data into clear visual insights.',
      description: 'I design and build intuitive interactive dashboards for stakeholders to track business health, KPIs, and revenue performance in real-time.',
      workflow: ['Data Source', 'Analysis', 'Visualization', 'Dashboard'],
      items: [
        'Sales & Revenue dashboards', 'Profit & Margin tracking',
        'Customer behavior dashboards', 'Product & Inventory dashboards',
        'Executive KPI dashboards', 'Business performance dashboards',
        'Interactive filtering & cross-drill',
      ],
      tools: ['Power BI', 'Python', 'Pandas', 'SQL', 'Plotly'],
    },
    {
      id: '03', icon: '🧠', title: 'AI / ML SOLUTIONS',
      tagline: 'Use machine learning to solve business problems.',
      description: 'I build custom, practical machine-learning models grounded in your historical data to anticipate trends and automate decision making.',
      workflow: ['Data Prep', 'Cleaning', 'Features', 'ML Model', 'Prediction API'],
      items: [
        'Sales prediction & trend estimation', 'Demand & inventory forecasting',
        'Customer classification & churn', 'Risk prediction & fraud indicators',
        'Business forecasting models', 'Pattern & anomaly detection',
        'Model training & evaluation',
      ],
      disclaimer: 'Tailored models built transparently; predictions are probabilistic and tuned for business utility.',
      tools: ['Scikit-learn', 'Python', 'Pandas', 'NumPy', 'Flask / FastAPI'],
    },
    {
      id: '04', icon: '🤖', title: 'AI CHATBOTS',
      tagline: 'Build AI-powered assistants for business information.',
      description: 'I create intelligent conversational assistants tailored to your company documentation, FAQs, product catalogs, and internal structured data.',
      workflow: ['Documents', 'Ingestion', 'Embeddings', 'Search', 'Assistant'],
      items: [
        'Company document chatbot', 'Interactive PDF Q&A systems',
        'Customer support assistants', 'Employee knowledge bots',
        'Business information search', 'Data-based query assistants',
        'Secure API & LLM integration',
      ],
      tools: ['Python', 'LLM APIs', 'Vector Embeddings', 'OCR', 'REST APIs'],
    },
  ];

  return (
    <section id="services" className="relative" style={{ background: '#000', padding: '80px 0' }}>
      {/* Subtle pixel grid bg */}
      <div className="absolute inset-0 pixel-grid-dense opacity-30 pointer-events-none" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            border: '1px solid #fff',
            padding: '4px 16px',
            fontFamily: 'var(--font-pixel)',
            fontSize: '8px',
            color: '#fff',
            letterSpacing: '2px',
            marginBottom: '24px',
            boxShadow: '3px 3px 0 #fff',
          }}>
            SERVICES.EXE
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(14px, 2.5vw, 28px)',
              color: '#fff',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            MY SERVICES
          </h2>
          <p style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            High-impact data engineering, visual business intelligence,<br />
            predictive machine learning, and AI assistant development.
          </p>

          {/* Pixel divider */}
          <div style={{ margin: '24px auto', maxWidth: '400px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ flex: 1, height: '1px', background: '#333' }} />
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#444' }}>◆◆◆</span>
            <div style={{ flex: 1, height: '1px', background: '#333' }} />
          </div>
        </div>

        {/* Grid of 4 service cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))', gap: '32px' }}>
          {services.map((s) => (
            <ServiceCard3D
              key={s.id}
              {...s}
              interactive={s.id === '04' ? <ChatbotDemo /> : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
