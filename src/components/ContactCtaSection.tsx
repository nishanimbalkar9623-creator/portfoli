import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock } from 'lucide-react';
import { LinkedinIcon } from '@/components/icons';

export default function ContactCtaSection() {
  return (
    <section id="contact" style={{ background: '#000', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(80,40,200,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>

          {/* Main card */}
          <div style={{ borderRadius: '24px', border: '1px solid rgba(120,80,255,0.25)', background: 'rgba(10,6,20,0.97)', boxShadow: '0 8px 60px rgba(80,40,200,0.14)', overflow: 'hidden' }}>
            {/* Title bar */}
            <div style={{ background: 'rgba(120,80,255,0.12)', borderBottom: '1px solid rgba(120,80,255,0.2)', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-pixel)', fontSize: '8px', letterSpacing: '1px', color: '#a89bff' }}>
              <span>CONTACT.EXE — [DIRECT MESSAGE PREFERRED]</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['_','□','✕'].map(c => (
                  <span key={c} style={{ width: '16px', height: '16px', borderRadius: '4px', border: '1px solid rgba(120,80,255,0.3)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#888' }}>{c}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '44px', textAlign: 'center' }}>
              {/* Status indicator */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '30px', border: '1px solid rgba(120,80,255,0.3)', background: 'rgba(120,80,255,0.08)', padding: '6px 16px', fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#a89bff', letterSpacing: '1px', marginBottom: '28px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(120,255,150,0.9)', display: 'inline-block', animation: 'blink 1s step-end infinite', boxShadow: '0 0 8px rgba(120,255,150,0.7)' }} />
                ACCEPTING NEW PROJECTS
              </div>

              <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 2.5vw, 28px)', color: '#fff', letterSpacing: '2px', lineHeight: 1.5, marginBottom: '16px' }}>
                HAVE A DATA OR AI PROBLEM?
              </h2>

              <p style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#777', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px' }}>
                Whether you need data cleaning, an executive dashboard, a predictive ML solution, or an AI chatbot — let's discuss your requirements directly.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '36px' }}>
                <a href="https://wa.me/919420561307" target="_blank" rel="noopener noreferrer">
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', border: 'none', background: '#fff', color: '#000', fontFamily: 'var(--font-pixel)', fontSize: '10px', cursor: 'pointer', letterSpacing: '1px', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0e0e0'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; }}
                  >
                    <MessageSquare size={14} /> CHAT ON WHATSAPP
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/nisha-nimbalkar-07a18a374/" target="_blank" rel="noopener noreferrer">
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', border: '1px solid rgba(120,80,255,0.5)', background: 'rgba(120,80,255,0.1)', color: '#c9b8ff', fontFamily: 'var(--font-pixel)', fontSize: '10px', cursor: 'pointer', letterSpacing: '1px', transition: 'all 0.2s' }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(120,80,255,0.2)'; el.style.borderColor = 'rgba(120,80,255,0.8)'; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(120,80,255,0.1)'; el.style.borderColor = 'rgba(120,80,255,0.5)'; }}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" /> CONNECT ON LINKEDIN
                  </button>
                </a>
              </div>

              {/* Info grid */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', textAlign: 'left' }}>
                <div style={{ borderRadius: '14px', border: '1px solid rgba(255,255,255,0.07)', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(120,80,255,0.4)'; el.style.background = 'rgba(120,80,255,0.06)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <MessageSquare size={16} color="#a89bff" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', letterSpacing: '1px', marginBottom: '4px' }}>WHATSAPP</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#ddd' }}>+91 94205 61307</div>
                  </div>
                </div>
                <div style={{ borderRadius: '14px', border: '1px solid rgba(255,255,255,0.07)', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(120,80,255,0.4)'; el.style.background = 'rgba(120,80,255,0.06)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <Clock size={16} color="#a89bff" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', letterSpacing: '1px', marginBottom: '4px' }}>RESPONSE TIME</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#ddd' }}>Direct & Same Day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}