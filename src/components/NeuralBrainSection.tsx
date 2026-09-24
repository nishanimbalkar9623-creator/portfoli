import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

/* ── Three.js Neural Brain Canvas ──────────────────────── */
function NeuralBrainCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    // ── Icosphere Nodes via golden spiral ──
    const NODE_COUNT = 180;
    const RADIUS = 1.55;
    const nodePositions: THREE.Vector3[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      nodePositions.push(
        new THREE.Vector3(
          RADIUS * Math.sin(theta) * Math.cos(phi),
          RADIUS * Math.sin(theta) * Math.sin(phi),
          RADIUS * Math.cos(theta)
        )
      );
    }

    // ── Node Points ──
    const nodeGeo = new THREE.BufferGeometry();
    const nodePosArr = new Float32Array(NODE_COUNT * 3);
    nodePositions.forEach((v, i) => {
      nodePosArr[i * 3] = v.x;
      nodePosArr[i * 3 + 1] = v.y;
      nodePosArr[i * 3 + 2] = v.z;
    });
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePosArr, 3));

    const nodeSizes = new Float32Array(NODE_COUNT);
    for (let i = 0; i < NODE_COUNT; i++) {
      nodeSizes[i] = Math.random() > 0.85 ? 0.045 : 0.022;
    }
    nodeGeo.setAttribute('size', new THREE.BufferAttribute(nodeSizes, 1));

    const nodeShaderMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0xffffff) },
        uGlow: { value: new THREE.Color(0x7840c8) },
      },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        varying float vPulse;
        void main() {
          vPulse = 0.5 + 0.5 * sin(uTime * 2.0 + position.x * 3.0 + position.y * 2.5);
          gl_PointSize = size * (250.0 + 60.0 * vPulse) / (gl_Position.w + 0.001);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform vec3 uGlow;
        varying float vPulse;
        void main() {
          vec2 uv = gl_PointCoord * 2.0 - 1.0;
          float d = length(uv);
          if (d > 1.0) discard;
          float alpha = smoothstep(1.0, 0.0, d);
          vec3 col = mix(uGlow, uColor, vPulse);
          gl_FragColor = vec4(col, alpha * (0.5 + 0.5 * vPulse));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const nodePoints = new THREE.Points(nodeGeo, nodeShaderMat);
    scene.add(nodePoints);

    // ── Synaptic Connections (edges) ──
    const MAX_EDGE_DIST = 0.78;
    const edgeVertices: number[] = [];
    const edgeAlphas: number[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < MAX_EDGE_DIST) {
          edgeVertices.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
          const alpha = 1.0 - dist / MAX_EDGE_DIST;
          edgeAlphas.push(alpha, alpha);
        }
      }
    }

    const edgeCount = edgeVertices.length / 3;
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(edgeVertices), 3));
    edgeGeo.setAttribute('alpha', new THREE.BufferAttribute(new Float32Array(edgeAlphas), 1));

    const edgeShaderMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float alpha;
        uniform float uTime;
        varying float vAlpha;
        varying float vY;
        void main() {
          vAlpha = alpha;
          vY = position.y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying float vAlpha;
        varying float vY;
        void main() {
          float pulse = 0.5 + 0.5 * sin(uTime * 1.5 + vY * 5.0);
          float a = vAlpha * (0.12 + 0.18 * pulse);
          gl_FragColor = vec4(0.72, 0.55, 1.0, a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const edgeLines = new THREE.LineSegments(edgeGeo, edgeShaderMat);
    scene.add(edgeLines);

    // ── Outer Wireframe Shell ──
    const shellGeo = new THREE.IcosahedronGeometry(RADIUS * 1.08, 3);
    const shellEdges = new THREE.EdgesGeometry(shellGeo);
    const shellMat = new THREE.LineBasicMaterial({
      color: 0x7840c8,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    const shellMesh = new THREE.LineSegments(shellEdges, shellMat);
    scene.add(shellMesh);

    // ── Travelling signal particles along edges ──
    const SIGNAL_COUNT = 30;
    const signalGeo = new THREE.BufferGeometry();
    const signalPos = new Float32Array(SIGNAL_COUNT * 3);
    signalGeo.setAttribute('position', new THREE.BufferAttribute(signalPos, 3));

    const totalEdges = edgeCount / 2;
    type Signal = { edgeIdx: number; t: number; speed: number };
    const signals: Signal[] = Array.from({ length: SIGNAL_COUNT }, () => ({
      edgeIdx: Math.floor(Math.random() * totalEdges),
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.006,
    }));

    const edgePosArr = edgeGeo.attributes.position.array as Float32Array;

    const signalMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        void main() {
          gl_PointSize = 5.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        void main() {
          vec2 uv = gl_PointCoord * 2.0 - 1.0;
          float d = length(uv);
          if (d > 1.0) discard;
          gl_FragColor = vec4(1.0, 0.85, 1.0, smoothstep(1.0, 0.0, d));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const signalPoints = new THREE.Points(signalGeo, signalMat);
    scene.add(signalPoints);

    // ── Mouse rotation ──
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = nx * 0.6;
      targetRotX = -ny * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animId: number;
    let t = 0;
    let autoAngle = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.01;
      autoAngle += 0.003;

      currentRotX += (targetRotX - currentRotX) * 0.04;
      currentRotY += (targetRotY - currentRotY) * 0.04;

      const ry = autoAngle + currentRotY;
      nodePoints.rotation.set(currentRotX, ry, 0);
      edgeLines.rotation.set(currentRotX, ry, 0);
      shellMesh.rotation.set(currentRotX * 0.5, autoAngle * 0.7 + currentRotY, 0);
      signalPoints.rotation.set(currentRotX, ry, 0);

      nodeShaderMat.uniforms.uTime.value = t;
      edgeShaderMat.uniforms.uTime.value = t;

      // Update signal particle positions
      const posAttr = signalGeo.attributes.position as THREE.BufferAttribute;
      signals.forEach((sig, i) => {
        sig.t += sig.speed;
        if (sig.t > 1) {
          sig.t = 0;
          sig.edgeIdx = Math.floor(Math.random() * totalEdges);
        }
        const baseIdx = sig.edgeIdx * 6;
        if (baseIdx + 5 < edgePosArr.length) {
          const ax = edgePosArr[baseIdx];
          const ay = edgePosArr[baseIdx + 1];
          const az = edgePosArr[baseIdx + 2];
          const bx = edgePosArr[baseIdx + 3];
          const by = edgePosArr[baseIdx + 4];
          const bz = edgePosArr[baseIdx + 5];
          posAttr.setXYZ(i, ax + (bx - ax) * sig.t, ay + (by - ay) * sig.t, az + (bz - az) * sig.t);
        }
      });
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

/* ── Stat Cards ──────────────────────────────────────────── */
const stats = [
  { label: 'Models Trained', value: '40+', icon: '◈' },
  { label: 'Data Points', value: '10M+', icon: '◉' },
  { label: 'Accuracy Avg.', value: '94%', icon: '◆' },
  { label: 'Live Dashboards', value: '15+', icon: '◇' },
];

const floatingChips = [
  { label: 'DEEP LEARNING', style: { top: '10%', left: '-5%' } },
  { label: 'NEURAL NET', style: { top: '25%', right: '-8%' } },
  { label: 'BACKPROP', style: { bottom: '30%', left: '-8%' } },
  { label: 'GRADIENT', style: { bottom: '12%', right: '-2%' } },
];

/* ── Main Section ────────────────────────────────────────── */
export default function NeuralBrainSection() {
  return (
    <section
      id="neural-brain"
      style={{ background: '#000', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background grid */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(120,80,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(120,80,255,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="neural-section-grid">
        {/* ── Left: Text Content ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#a89bff',
              letterSpacing: '3px', border: '1px solid rgba(120,80,255,0.3)',
              display: 'inline-block', padding: '6px 14px',
              background: 'rgba(80,40,200,0.07)', width: 'fit-content', borderRadius: '4px',
            }}
          >
            ◆ NEURAL ARCHITECTURE ◆
          </span>


          <p
            style={{ fontFamily: 'var(--font-vt)', fontSize: '20px', color: '#888', lineHeight: 1.8, margin: 0 }}
          >
            Every node you see is a neuron. Every glowing edge is a weighted connection.
            I design, train, and deploy neural networks that transform raw data into
            intelligent predictions — at scale.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  border: '1px solid rgba(120,80,255,0.25)',
                  background: 'rgba(80,40,200,0.06)',
                  borderRadius: '12px', padding: '16px',
                  display: 'flex', flexDirection: 'column', gap: '6px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px', color: '#a89bff' }}>
                  {stat.icon}
                </span>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(14px, 1.8vw, 22px)', color: '#fff' }}>
                  {stat.value}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#555', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: 3D Brain ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ position: 'relative', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Glow ring */}
          <div style={{
            position: 'absolute', width: '380px', height: '380px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(120,80,255,0.12) 0%, transparent 70%)',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {/* Decorative spinning rings */}
          <div className="neural-ring-1" />
          <div className="neural-ring-2" />

          {/* Canvas */}
          <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
            <NeuralBrainCanvas />
          </div>

          {/* Floating label chips */}
          {floatingChips.map((chip, i) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', ...chip.style,
                fontFamily: 'var(--font-pixel)', fontSize: '6px', color: '#a89bff',
                border: '1px solid rgba(120,80,255,0.3)', background: 'rgba(0,0,0,0.85)',
                padding: '5px 10px', borderRadius: '4px', letterSpacing: '1px',
                backdropFilter: 'blur(4px)', zIndex: 2, whiteSpace: 'nowrap',
              }}
            >
              ◆ {chip.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .neural-section-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .neural-section-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .neural-ring-1 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          border: 1px solid rgba(120,80,255,0.15);
          pointer-events: none; z-index: 0;
          animation: spinSlow 20s linear infinite;
        }
        .neural-ring-2 {
          position: absolute;
          width: 450px; height: 450px;
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.05);
          pointer-events: none; z-index: 0;
          animation: spinSlow 35s linear infinite reverse;
        }
      `}</style>
    </section>
  );
}
