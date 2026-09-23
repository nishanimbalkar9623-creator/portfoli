import React from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { LinkedinIcon } from '@/components/icons';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <footer style={{
      background: '#000',
      borderTop: '2px solid #fff',
      padding: '48px 0 24px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Top row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'flex-start',
          gap: '32px', marginBottom: '32px',
          paddingBottom: '32px', borderBottom: '1px solid #222',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{
                width: '32px', height: '32px',
                border: '2px solid #fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-pixel)', fontSize: '14px', color: '#fff',
                boxShadow: '2px 2px 0 #fff',
              }}>N</div>
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '9px', color: '#fff', letterSpacing: '1px' }}>
                NISHA ANIL NIMBALKAR
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#555' }}>
              AI/ML & Data Analytics Developer
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#444', marginTop: '4px' }}>
              Data Cleaning • Dashboards • AI/ML • Chatbots
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-pixel)', fontSize: '7px',
                  color: '#555', textDecoration: 'none', letterSpacing: '1px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = '#555')}
              >
                {l.name}
              </a>
            ))}
            <a
              href="https://wa.me/919420561307"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#888', textDecoration: 'none', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <MessageSquare size={10} /> WHATSAPP
            </a>
            <a
              href="https://www.linkedin.com/in/nisha-nimbalkar-07a18a374/"
              target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#888', textDecoration: 'none', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <LinkedinIcon className="w-2.5 h-2.5" /> LINKEDIN
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            style={{
              border: '2px solid #fff', background: '#000', color: '#fff',
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '2px 2px 0 #fff',
              transition: 'transform 0.1s, box-shadow 0.1s',
            }}
            onMouseEnter={e => {
              (e.currentTarget.style.transform = 'translate(-1px, -1px)');
              (e.currentTarget.style.boxShadow = '3px 3px 0 #fff');
            }}
            onMouseLeave={e => {
              (e.currentTarget.style.transform = 'none');
              (e.currentTarget.style.boxShadow = '2px 2px 0 #fff');
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#444' }}>
            © 2026 NISHA ANIL NIMBALKAR. ALL RIGHTS RESERVED.
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#333' }}>
            Professional AI/ML & Data Analytics Service Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
