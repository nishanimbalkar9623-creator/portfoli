import React, { useState, useCallback } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import LiquidMetalHero from '@/components/ui/liquid-metal-hero';
import WorkflowSection from '@/components/WorkflowSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import ContactCtaSection from '@/components/ContactCtaSection';
import Footer from '@/components/Footer';

function PixelDivider() {
  return (
    <div style={{ background: '#000', padding: '0 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px', height: '40px' }}>
        <div style={{ flex: 1, height: '1px', background: '#1a1a1a' }} />
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '7px', color: '#2a2a2a', letterSpacing: '2px' }}>◆</span>
        <div style={{ flex: 1, height: '1px', background: '#1a1a1a' }} />
      </div>
    </div>
  );
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashDone = useCallback(() => {
    setSplashDone(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Splash Screen */}
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}

      {/* Main Website */}
      <Navbar />

      <LiquidMetalHero
        badge="AI/ML • DATA ANALYTICS • AI SOLUTIONS"
        title="Turn Your Data Into Insights, Predictions & AI Solutions"
        subtitle="I help businesses clean and analyze their data, create interactive dashboards, build machine-learning solutions, and develop AI-powered chatbots."
        primaryCtaLabel="VIEW SERVICES"
        secondaryCtaLabel="VIEW PROJECTS"
        onPrimaryCtaClick={() => scrollToSection('services')}
        onSecondaryCtaClick={() => scrollToSection('projects')}
        features={['DATA CLEANING', 'ANALYTICS', 'DASHBOARDS', 'AI / ML', 'AI CHATBOTS']}
      />

      <PixelDivider />
      <WorkflowSection />
      <PixelDivider />
      <ServicesSection />
      <PixelDivider />
      <ProjectsSection />
      <PixelDivider />
      <SkillsSection />
      <PixelDivider />
      <ProcessSection />
      <PixelDivider />
      <AboutSection />
      <PixelDivider />
      <ContactCtaSection />

      <Footer />
    </div>
  );
}
