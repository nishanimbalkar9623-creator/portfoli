import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowUpRight, Clock } from 'lucide-react';
import { LinkedinIcon } from '@/components/icons';

export default function ContactCtaSection() {
  return (
    <section id="contact" style={{ background: '#000', padding: '80px 0', position: 'relative' }}>
      <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Pixel window CTA */}
          <div style={{
            border: '3px solid #fff',
            background: '#000',
            boxShadow: '8px 8px 0 #fff',
          }}>
            {/* Title bar */}
            <div style={{
              background: '#fff', color: '#000',
              padding: '8px 12px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderBottom: '2px solid #000',
              fontFamily: 'var(--font-pixel)', fontSize: '9px', letterSpacing: '1px',
            }}>
              <span>CONTACT.EXE — &nbsp;[DIRECT MESSAGE PREFERRED]</span>
              <div style={{ display: 'flex', gap: '3px' }}>
                {['_','□','✕'].map(c => (
                  <span key={c} style={{ width: '16px', height: '16px', border: '1px solid #000', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px' }}>{c}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '40px', textAlign: 'center' }}>
              {/* Status indicator */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1px solid #333', padding: '6px 14px',
                fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#888',
                letterSpacing: '1px', marginBottom: '28px',
              }}>
                <span style={{ width: '8px', height: '8px', background: '#fff', display: 'inline-block', animation: 'blink 1s step-end infinite' }} />
                ACCEPTING NEW PROJECTS
              </div>

              <h2 style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: 'clamp(14px, 2.5vw, 28px)',
                color: '#fff',
                letterSpacing: '2px',
                lineHeight: 1.5,
                marginBottom: '16px',
              }}>
                HAVE A DATA OR AI PROBLEM?
              </h2>

              <p style={{
                fontFamily: 'var(--font-vt)', fontSize: '20px',
                color: '#888', lineHeight: 1.7,
                maxWidth: '600px', margin: '0 auto 32px',
              }}>
                Whether you need data cleaning, an executive dashboard, a predictive ML solution, or an AI chatbot — let's discuss your requirements directly.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '32px' }}>
                <a
                  href="https://wa.me/919420561307"
                  target="_blank" rel="noopener noreferrer"
                >
                  <button
                    className="btn-pixel btn-pixel-inv"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}
                  >
                    <MessageSquare size={14} />
                    CHAT ON WHATSAPP
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/in/nisha-nimbalkar-07a18a374/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <button
                    className="btn-pixel"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    CONNECT ON LINKEDIN
                  </button>
                </a>
              </div>

              {/* Info bar */}
              <div style={{
                borderTop: '1px solid #222',
                paddingTop: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                textAlign: 'left',
              }}>
                <div style={{ border: '1px solid #222', padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MessageSquare size={14} color="#fff" />
                  <div>
                    <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#555', letterSpacing: '1px', marginBottom: '4px' }}>WHATSAPP</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#ddd' }}>+91 94205 61307</div>
                  </div>
                </div>
                <div style={{ border: '1px solid #222', padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={14} color="#fff" />
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
