import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Github } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['profile', 'works', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 簡約導覽選單（依頁面 01/02/03/04 順序對齊）
  const navLinks = [
    { id: 'profile', label: '專長與背景', href: '#profile' },
    { id: 'works', label: '作品集', href: '#works' },
    { id: 'experience', label: '實務經歷', href: '#experience' },
    { id: 'contact', label: '聯絡方式', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0C0F]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white hover:text-stone-200 transition-colors"
            aria-label="Yu-Jou Wu Home"
          >
            <span className="font-brand-logo text-base sm:text-lg font-bold tracking-[0.08em] text-white">
              YU-JOU WU
            </span>
          </a>

          {/* Navigation Links: 自然優雅的字體與簡約金色 Active 標示 */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-sans-clean">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`py-1.5 transition-colors relative font-normal ${
                    isActive
                      ? 'text-[#E5A84B] font-medium'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A84B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Functional Actions & CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Github size={17} strokeWidth={1.6} />
            </a>

            {/* Primary Action Button (簡約 12px 圓角與金色質感) */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap rounded-xl bg-[#E5A84B] text-stone-950 hover:bg-[#d9993e] cursor-pointer"
            >
              <span>聯絡我</span>
              <ArrowUpRight size={13} strokeWidth={1.75} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-xl transition-colors text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-6 py-6 border-b bg-[#0E1015] border-white/10 text-white animate-fadeIn">
            <div className="flex flex-col gap-3 text-sm font-sans-clean">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 border-b border-white/5 transition-colors ${
                    activeSection === link.id ? 'text-[#E5A84B] font-medium' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex justify-between items-center text-xs text-stone-400 font-mono-code">
                <span>YU-JOU WU · 2026</span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-[#E5A84B] text-stone-950 font-sans-clean font-semibold"
                >
                  聯絡我
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
