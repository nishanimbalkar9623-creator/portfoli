import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'show' | 'fade'>('show');

  useEffect(() => {
    // Hold for 2.8 seconds then start fade
    const timer1 = setTimeout(() => setPhase('fade'), 2800);
    // After fade (0.7s), tell parent we're done
    const timer2 = setTimeout(() => onDone(), 3500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== 'fade' || true ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'fade' ? 0 : 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            if (phase === 'fade') onDone();
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#000000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Scanlines overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)',
            pointerEvents: 'none',
            zIndex: 2,
          }} />

          {/* The pixel hands image — full bleed, centered */}
          <motion.div
            initial={{ scale: 1.04, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/splash-hands.jpg"
              alt="PROJECT.EXE"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                imageRendering: 'pixelated',
                filter: 'contrast(1.1) brightness(0.92)',
              }}
            />
          </motion.div>

          {/* Bottom status bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 3,
              borderTop: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.85)',
              padding: '10px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <BootText />
            <span style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: '7px',
              color: '#444',
              letterSpacing: '1px',
            }}>
              NISHA_AI_ML v1.0.0
            </span>
          </motion.div>

          {/* Skip hint */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            onClick={onDone}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 4,
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'var(--font-pixel)',
              fontSize: '7px',
              padding: '6px 12px',
              cursor: 'pointer',
              letterSpacing: '1px',
            }}
            onMouseEnter={e => {
              (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)');
              (e.currentTarget.style.color = '#fff');
            }}
            onMouseLeave={e => {
              (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)');
              (e.currentTarget.style.color = 'rgba(255,255,255,0.4)');
            }}
          >
            SKIP ›
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* Animated boot text */
function BootText() {
  const lines = [
    'LOADING SYSTEM...',
    'INITIALIZING AI MODULES...',
    'MOUNTING DATA PIPELINES...',
    'BOOT COMPLETE.',
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent(prev => {
        if (prev >= lines.length - 1) {
          clearInterval(iv);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(iv);
  }, []);

  return (
    <span style={{
      fontFamily: 'var(--font-vt)',
      fontSize: '16px',
      color: '#888',
      letterSpacing: '2px',
    }}>
      &gt; {lines[current]}
      <span className="cursor-blink" style={{ width: '8px', height: '14px', marginLeft: '4px', background: '#fff', display: 'inline-block', verticalAlign: 'text-bottom' }} />
    </span>
  );
}
