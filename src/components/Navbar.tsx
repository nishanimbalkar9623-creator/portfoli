import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'ABOUT', href: '#about' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: isScrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e as any, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', textDecoration: 'none' }}
          >
            <div style={{
              width: '36px', height: '36px',
              border: '2px solid #fff',
              background: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-pixel)', fontSize: '14px', color: '#fff',
              boxShadow: '3px 3px 0 #fff',
            }}>
              N
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '9px', color: '#fff', letterSpacing: '1px' }}>
                ANVAYA
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#888', letterSpacing: '1px' }}>
                AI/ML DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0', border: '1px solid rgba(255,255,255,0.2)' }}
            className="hidden md:flex"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                style={{
                  padding: '8px 16px',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '8px',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRight: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                  letterSpacing: '1px',
                  transition: 'background 0.15s, color 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = '#fff'; (e.target as HTMLElement).style.color = '#000'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#fff'; }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e as any, '#contact')}
            >
              <button className="btn-pixel btn-pixel-inv" style={{ padding: '8px 16px', fontSize: '8px' }}>
                &gt; CONTACT
              </button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden"
            style={{
              background: 'transparent',
              border: '1px solid #fff',
              color: '#fff',
              padding: '6px',
              cursor: 'pointer',
            }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#000',
          borderBottom: '2px solid #fff',
          borderTop: '1px solid #333',
          padding: '16px 24px',
        }} className="md:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                style={{
                  padding: '12px 0',
                  borderBottom: '1px solid #222',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '9px',
                  color: '#fff',
                  textDecoration: 'none',
                  letterSpacing: '2px',
                }}
              >
                &gt; {link.name}
              </a>
            ))}
            <div style={{ paddingTop: '12px' }}>
              <a href="#contact" onClick={(e) => handleScrollTo(e as any, '#contact')}>
                <button className="btn-pixel btn-pixel-inv" style={{ width: '100%', padding: '12px', fontSize: '8px' }}>
                  &gt; CONTACT ME
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
