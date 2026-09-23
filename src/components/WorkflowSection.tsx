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

export default function WorkflowSection() {
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
            PIPELINE.SYS
          </div>
          <h2 style={{
            fontFamily: 'var(--font-pixel)', fontSize: 'clamp(12px, 2vw, 24px)',
            color: '#fff', letterSpacing: '3px', display: 'block', marginBottom: '16px',
          }}>
            WHAT I CAN DO FOR YOUR BUSINESS
          </h2>
          <p style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            From messy raw data to a fully deployed AI assistant — I handle the complete pipeline.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {workflowSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
                {/* Card top strip */}
                <div style={{
                  borderBottom: '1px solid #333',
                  padding: '8px 12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#060606',
                }}>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', letterSpacing: '1px' }}>
                    STAGE_{item.step}
                  </span>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                </div>

                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    fontFamily: 'var(--font-pixel)', fontSize: 'clamp(10px, 1.2vw, 13px)',
                    color: '#fff', letterSpacing: '1px', marginBottom: '6px',
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555',
                    letterSpacing: '1px', marginBottom: '12px',
                  }}>
                    {item.sub}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888',
                    lineHeight: 1.6, flex: 1,
                  }}>
                    {item.desc}
                  </p>

                  <div style={{
                    marginTop: '12px', paddingTop: '10px',
                    borderTop: '1px solid #1a1a1a',
                    display: 'flex', alignItems: 'center', gap: '6px',
                    fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#555',
                  }}>
                    <span style={{ color: '#fff' }}>✓</span> PRODUCTION READY
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom pipeline summary */}
        <div style={{
          marginTop: '48px',
          border: '1px dashed #333',
          padding: '20px',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-vt)', fontSize: '18px', color: '#888',
            letterSpacing: '2px',
          }}>
            💡 SEAMLESS PIPELINE: whether you need one stage or all six, every solution integrates cleanly.
          </div>
        </div>
      </div>
    </section>
  );
}
