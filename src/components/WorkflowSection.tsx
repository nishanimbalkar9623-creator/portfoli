import React from 'react';
import { motion } from 'framer-motion';

const workflowSteps = [
  {
    step: '01', title: 'RAW DATA', sub: 'INPUTS & SOURCES',
    desc: 'CSV, Excel, SQL databases, unstructured logs, external APIs, and business records.',
    icon: '🗄',
  },
  {
    step: '02', title: 'DATA CLEANING', sub: 'STANDARDIZATION',
    desc: 'Handling missing values, duplicate removal, formatting, validation, and feature restructuring.',
    icon: '🔧',
  },
  {
    step: '03', title: 'DATA ANALYSIS', sub: 'EXPLORATORY & STATS',
    desc: 'Deep statistical exploration, trend correlation, anomaly detection, and core KPI discovery.',
    icon: '📈',
  },
  {
    step: '04', title: 'DASHBOARDS', sub: 'VISUAL BI SYSTEMS',
    desc: 'Interactive Power BI and web dashboards for real-time sales, revenue, profit, and executive metrics.',
    icon: '📊',
  },
  {
    step: '05', title: 'MACHINE LEARNING', sub: 'PREDICTIVE INTELLIGENCE',
    desc: 'Trained Scikit-learn models for sales forecasting, classification, risk scoring, and regression.',
    icon: '🧠',
  },
  {
    step: '06', title: 'AI SOLUTIONS', sub: 'SMART ASSISTANTS & APIS',
    desc: 'Custom document Q&A, company FAQ chatbots, automated OCR, and REST API deployment.',
    icon: '🤖',
  },
];

const stepColors = [
  'rgba(100,200,255,0.8)', 'rgba(120,255,180,0.8)', 'rgba(200,130,255,0.8)',
  'rgba(255,160,80,0.8)',  'rgba(255,100,140,0.8)', 'rgba(255,220,80,0.8)',
];

function WorkflowCard({ item, idx }: { item: typeof workflowSteps[0]; idx: number }) {
  const [hovered, setHovered] = React.useState(false);
  const color = stepColors[idx % stepColors.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        border: hovered ? `1px solid ${color.replace('0.8','0.5')}` : '1px solid rgba(255,255,255,0.07)',
        background: hovered ? 'linear-gradient(145deg,rgba(20,10,40,0.98),rgba(8,4,16,0.99))' : 'rgba(10,6,18,0.95)',
        boxShadow: hovered ? `0 6px 32px ${color.replace('0.8','0.12')}` : '0 2px 12px rgba(0,0,0,0.4)',
        transition: 'all 0.35s ease', overflow: 'hidden', height: '100%',
        display: 'flex', flexDirection: 'column', cursor: 'default',
      }}
    >
      <div style={{ height: '2px', background: hovered ? `linear-gradient(90deg,${color},transparent)` : `linear-gradient(90deg,${color.replace('0.8','0.25')},transparent)`, transition: 'all 0.4s' }} />
      <div style={{ padding: '18px 18px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0, background: hovered ? color.replace('0.8','0.12') : 'rgba(255,255,255,0.04)', border: `1px solid ${hovered ? color.replace('0.8','0.4') : 'rgba(255,255,255,0.08)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', transition: 'all 0.3s', boxShadow: hovered ? `0 0 12px ${color.replace('0.8','0.3')}` : 'none' }}>
            {item.icon}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: hovered ? color : '#444', letterSpacing: '1px', marginBottom: '2px', transition: 'color 0.3s' }}>STAGE_{item.step}</div>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(9px,1.1vw,12px)', color: hovered ? '#fff' : '#bbb', letterSpacing: '1px', transition: 'color 0.3s' }}>{item.title}</div>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: hovered ? color : '#555', letterSpacing: '1px', transition: 'color 0.3s' }}>{item.sub}</div>
      </div>
      <div style={{ height: '1px', background: hovered ? `linear-gradient(90deg,${color.replace('0.8','0.2')},transparent)` : 'rgba(255,255,255,0.04)', margin: '0 18px', transition: 'all 0.4s' }} />
      <div style={{ padding: '14px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#666', lineHeight: 1.7, margin: 0, flex: 1 }}>{item.desc}</p>
        <div style={{ paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.04)', fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ color: hovered ? color : '#333', transition: 'color 0.3s' }}>✓</span> PRODUCTION READY
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkflowSection() {
  return (
    <section style={{ background: '#000', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(60,30,120,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 18px', borderRadius: '30px', border: '1px solid rgba(120,80,255,0.35)', background: 'rgba(80,40,200,0.08)', fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#a89bff', letterSpacing: '3px', marginBottom: '20px' }}>PIPELINE.SYS</div>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 2vw, 24px)', color: '#fff', letterSpacing: '3px', display: 'block', marginBottom: '14px' }}>WHAT I CAN DO FOR YOUR BUSINESS</h2>
          <p style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#555', maxWidth: '600px', margin: '0 auto' }}>From messy raw data to a fully deployed AI assistant — I handle the complete pipeline.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {workflowSteps.map((item, idx) => <WorkflowCard key={item.step} item={item} idx={idx} />)}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ marginTop: '48px', padding: '20px 28px', borderRadius: '16px', border: '1px solid rgba(120,80,255,0.2)', background: 'rgba(80,40,200,0.06)', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-vt)', fontSize: '18px', color: '#666', letterSpacing: '1px' }}>Seamless pipeline: whether you need one stage or all six, every solution integrates cleanly.</span>
        </motion.div>
      </div>
    </section>
  );
}
