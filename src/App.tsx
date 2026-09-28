import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { SelectedWorks } from './components/SelectedWorks';
import { ProfileSection } from './components/ProfileSection';
import { ExperienceAndNext } from './components/ExperienceAndNext';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types/portfolio';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledContactTopic, setPrefilledContactTopic] = useState<string>('');

  const handleOpenContact = (topic?: string) => {
    if (topic) {
      setPrefilledContactTopic(topic);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const profileEl = document.getElementById('profile');
    if (profileEl) {
      profileEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    handleOpenContact();
  };

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden bg-[#0A0C0F] text-[#ECEFF4] selection:bg-[#E5A84B] selection:text-black"
    >
      {/* Top Navigation Bar with Scroll Progress & Active Section Spy */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
      />

      <main className="w-full overflow-x-hidden">
        {/* Hero Section (Topography contour + Gold accents + 吳雨柔 headline) */}
        <Hero
          onExploreClick={handleExploreClick}
          onContactClick={handleContactClick}
        />

        {/* Marquee Ribbon (✦ Illustration ✦ Typography ✦ Next.js ✦ React...) */}
        <MarqueeRibbon />

        {/* 01. Profile & Philosophy (介於感性與理性之間。Somewhere between art & logic) */}
        <ProfileSection />

        {/* 02. Selected Works (代表作品：保持新版簡約克制卡片與 Hover 特效) */}
        <SelectedWorks
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 03. Experience & Roadmap (4 Timeline items + Next Research + 3 Exhibitions) */}
        <ExperienceAndNext />

        {/* 04. Contact & Collaboration (Interactive Direct Form + 1-Click Copy) */}
        <ContactSection
          prefilledTopic={prefilledContactTopic}
        />
      </main>

      {/* Global Studio Footer */}
      <Footer />

      {/* Detailed Project Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscuss={(title) => {
          setSelectedProject(null);
          handleOpenContact(title);
        }}
      />
    </div>
  );
};

export default App;
