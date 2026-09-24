"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
}

/* ── 3D Pixel Particle Grid Canvas ──────────────────────────── */
function PixelParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouse = { x: -1000, y: -1000 };
    let animId: number;

    const GRID = 28;
    type Particle = {
      x: number; y: number;
      baseX: number; baseY: number;
      z: number; size: number;
      brightness: number; targetBrightness: number;
    };
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildGrid();
    };

    const buildGrid = () => {
      particles = [];
      const cols = Math.ceil(canvas.width / GRID) + 1;
      const rows = Math.ceil(canvas.height / GRID) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GRID;
          const y = r * GRID;
          particles.push({
            x, y,
            baseX: x, baseY: y,
            z: 0,
            size: Math.random() > 0.7 ? 2 : 1,
            brightness: Math.random() * 0.08,
            targetBrightness: Math.random() * 0.08,
          });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    resize();

    let t = 0;
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle radial glow in center
      const grd = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.4, 0,
        canvas.width / 2, canvas.height * 0.4, canvas.width * 0.55
      );
      grd.addColorStop(0, 'rgba(255,255,255,0.05)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // Wave displacement
        const wave = Math.sin(t + p.baseX * 0.02) * Math.cos(t * 0.7 + p.baseY * 0.015) * 4;
        p.x = p.baseX + wave;
        p.y = p.baseY + Math.sin(t * 0.5 + p.baseX * 0.01) * 2;

        // Mouse proximity
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 120);

        // Z-depth (3D push-back)
        const targetZ = influence * 80;
        p.z += (targetZ - p.z) * 0.08;

        // Perspective scale
        const perspective = 500;
        const scale = perspective / (perspective + p.z);
        const px = canvas.width / 2 + (p.x - canvas.width / 2) * scale;
        const py = canvas.height / 2 + (p.y - canvas.height / 2) * scale;

        // Brightness flicker + mouse boost
        if (Math.random() < 0.01) {
          p.targetBrightness = Math.random() * 0.12 + influence * 0.8;
        }
        p.brightness += (p.targetBrightness - p.brightness) * 0.05;
        const br = Math.min(1, p.brightness + influence * 0.9);

        const size = p.size * scale;

        ctx.fillStyle = `rgba(255,255,255,${br})`;
        ctx.fillRect(Math.round(px), Math.round(py), Math.ceil(size), Math.ceil(size));
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

/* ── PixelWindow component (Win95 style) ──────────────────── */
function PixelWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pixel-window w-full max-w-lg mx-auto">
      <div className="pixel-window-title">
        <span>{title}</span>
        <div className="pixel-window-controls">
          <span className="pixel-window-btn">_</span>
          <span className="pixel-window-btn">□</span>
          <span className="pixel-window-btn">✕</span>
        </div>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
}: LiquidMetalHeroProps) {


  const itemVar: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.12 },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 pixel-grid"
      style={{ background: '#000' }}
    >
      {/* 3D Pixel Canvas */}
      <PixelParticleCanvas />

      {/* Center content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-center gap-10">


        {/* Badge */}
        {badge && (
          <motion.div custom={0} variants={itemVar} initial="hidden" animate="visible" className="text-center">
            <span className="pixel-badge" style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', letterSpacing: '1px' }}>
              ◆ {badge} ◆
            </span>
          </motion.div>
        )}

        {/* Main Heading — Glitch Style */}
        <motion.div custom={1} variants={itemVar} initial="hidden" animate="visible" className="text-center w-full">
          <h1
            className="glitch-text"
            data-text="TURN YOUR DATA INTO"
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(18px, 3.5vw, 42px)',
              color: '#fff',
              letterSpacing: '2px',
              lineHeight: 1.4,
              textTransform: 'uppercase',
            }}
          >
            TURN YOUR DATA INTO
          </h1>
          <div
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 'clamp(14px, 2.5vw, 32px)',
              color: '#fff',
              letterSpacing: '2px',
              lineHeight: 1.6,
              textTransform: 'uppercase',
              marginTop: '12px',
              borderLeft: '4px solid #fff',
              paddingLeft: '16px',
              textAlign: 'left',
              maxWidth: '700px',
              margin: '12px auto 0',
            }}
          >
            INSIGHTS,<br />
            PREDICTIONS &amp;<br />
            AI SOLUTIONS
          </div>

          {/* Taglines */}
          <div style={{ display: 'flex', gap: '0', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
            {['Connecting Data.', 'Creating Intelligence.'].map((line, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-vt)',
                  fontSize: 'clamp(16px, 2vw, 26px)',
                  color: i === 0 ? '#fff' : '#aaa',
                  letterSpacing: '3px',
                  padding: '6px 20px',
                  borderLeft: i === 1 ? '2px solid #444' : 'none',
                  lineHeight: 1.2,
                }}
              >
                {line}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle in pixel window */}
        <motion.div custom={2} variants={itemVar} initial="hidden" animate="visible" className="w-full max-w-2xl mx-auto">
          <PixelWindow title="ABOUT.TXT">
            <p style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#e0e0e0', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          </PixelWindow>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div custom={3} variants={itemVar} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <button className="btn-pixel btn-pixel-inv" onClick={onPrimaryCtaClick}>
            &gt; {primaryCtaLabel}
          </button>
          {secondaryCtaLabel && onSecondaryCtaClick && (
            <button className="btn-pixel" onClick={onSecondaryCtaClick}>
              &gt; {secondaryCtaLabel}
            </button>
          )}
        </motion.div>

        {/* Feature tags pixel marquee bar */}
        {features.length > 0 && (
          <motion.div custom={4} variants={itemVar} initial="hidden" animate="visible"
            className="w-full border-t border-b border-white/30 py-3 overflow-hidden"
          >
            <div className="marquee-inner">
              {[...features, ...features, ...features].map((f, i) => (
                <span
                  key={i}
                  style={{ fontFamily: 'var(--font-pixel)', fontSize: '9px', color: '#fff', marginRight: '40px', letterSpacing: '2px' }}
                >
                  ◆ {f.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center"
        style={{ fontFamily: 'var(--font-vt)', fontSize: '18px', color: '#555', letterSpacing: '3px' }}
      >
        ↓ SCROLL DOWN ↓
      </motion.div>
    </section>
  );
}
