import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { n: '01', title: 'UNDERSTAND', emoji: '🔍', color: 'rgba(100,180,255,0.8)', desc: 'Examine the business problem, stakeholder goals, input data constraints, and targeted success criteria before writing code.' },
  { n: '02', title: 'CLEAN',      emoji: '🔧', color: 'rgba(120,255,180,0.8)', desc: 'Extract, sanitize, filter duplicates, impute missing values, and prepare structured tables ready for reliable modeling.' },
  { n: '03', title: 'ANALYZE',    emoji: '📈', color: 'rgba(200,130,255,0.8)', desc: 'Perform statistical and exploratory analysis to discover meaningful trends, key performance metrics, and hidden patterns.' },
  { n: '04', title: 'BUILD',      emoji: '🏗', color: 'rgba(255,160,80,0.8)',  desc: 'Construct the tailored Power BI dashboard, train the predictive machine-learning model, or integrate the AI chatbot assistant.' },
  { n: '05', title: 'TEST',       emoji: '🛡', color: 'rgba(255,100,140,0.8)', desc: 'Rigorously validate model predictions, stress-test API endpoints, verify dashboard calculations, and evaluate assistant fidelity.' },
  { n: '06', title: 'DELIVER',    emoji: '🚀', color: 'rgba(255,220,80,0.8)',  desc: 'Hand over the production-ready solution with thorough documentation, walk through results, and ensure seamless handoff.' },
];

export default function ProcessSection() {
  return (
    <section style={{ background: '#000', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(80,40,180,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 20px', borderRadius: '30px', border: '1px solid rgba(120,80,255,0.35)', background: 'rgba(80,40,200,0.08)', fontFamily: 'var(--font-pixel)', fontSize: '8px', color: '#a89bff', letterSpacing: '3px', marginBottom: '20px' }}>
            METHOD.DOC
          </div>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2.5vw, 28px)', color: '#fff', letterSpacing: '3px', display: 'block', marginBottom: '14px' }}>
            HOW I WORK
          </h2>
          <p style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#555', maxWidth: '500px', margin: '0 auto' }}>
            A structured, transparent process — from discovery to delivery.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {steps.map((step, idx) => (
            <StepCard key={step.n} step={step} idx={idx} />
          ))}
        </div>

        {/* Bottom summary bar */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ marginTop: '48px', padding: '20px 28px', borderRadius: '16px', border: '1px solid rgba(120,80,255,0.2)', background: 'rgba(80,40,200,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(120,80,255,0.7)', display: 'inline-block', flexShrink: 0, boxShadow: '0 0 8px rgba(120,80,255,0.6)' }} />
          <span style={{ fontFamily: 'var(--font-vt)', fontSize: '18px', color: '#777', letterSpacing: '1px' }}>
            Whether you need one stage or all six, every solution integrates cleanly.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, idx }: { step: typeof steps[0]; idx: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        border: hovered ? `1px solid ${step.color.replace('0.8', '0.5')}` : '1px solid rgba(255,255,255,0.07)',
        background: hovered ? `linear-gradient(145deg, rgba(20,10,40,0.98), rgba(8,4,16,0.99))` : 'rgba(10,6,18,0.95)',
        boxShadow: hovered ? `0 6px 32px ${step.color.replace('0.8', '0.12')}, 0 0 0 1px ${step.color.replace('0.8', '0.08')}` : '0 2px 12px rgba(0,0,0,0.4)',
        transition: 'all 0.35s ease',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
      }}
    >
      {/* Top accent */}
      <div style={{ height: '2px', background: hovered ? `linear-gradient(90deg, ${step.color}, transparent)` : `linear-gradient(90deg, ${step.color.replace('0.8', '0.25')}, transparent)`, transition: 'all 0.4s' }} />

      {/* Header */}
      <div style={{ padding: '18px 18px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
            background: hovered ? `${step.color.replace('0.8', '0.12')}` : 'rgba(255,255,255,0.04)',
            border: `1px solid ${hovered ? step.color.replace('0.8', '0.4') : 'rgba(255,255,255,0.08)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', transition: 'all 0.3s',
            boxShadow: hovered ? `0 0 14px ${step.color.replace('0.8', '0.3')}` : 'none',
          }}>
            {step.emoji}
          </div>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px', color: hovered ? '#fff' : '#bbb', letterSpacing: '2px', transition: 'color 0.3s' }}>
            {step.title}
          </div>
        </div>
        <div style={{
          width: '32px', height: '32px', borderRadius: '50%',
          border: `1px solid ${hovered ? step.color.replace('0.8', '0.6') : 'rgba(255,255,255,0.1)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-pixel)', fontSize: '9px',
          color: hovered ? step.color : '#555',
          transition: 'all 0.3s',
          boxShadow: hovered ? `0 0 10px ${step.color.replace('0.8', '0.3')}` : 'none',
        }}>
          {step.n}
        </div>
      </div>

      {/* Separator */}
      <div style={{ height: '1px', background: hovered ? `linear-gradient(90deg, ${step.color.replace('0.8', '0.2')}, transparent)` : 'rgba(255,255,255,0.04)', margin: '0 18px', transition: 'all 0.4s' }} />

      {/* Body */}
      <div style={{ padding: '14px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#666', lineHeight: 1.7, margin: 0, flex: 1 }}>
          {step.desc}
        </p>
        <div style={{ paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.04)', fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ color: hovered ? step.color : '#333', transition: 'color 0.3s' }}>✓</span> STRUCTURED MILESTONE
        </div>
      </div>
    </motion.div>
  );
}