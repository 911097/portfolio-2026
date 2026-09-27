import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0A0C0F] border-t border-white/10 text-xs font-mono-code text-stone-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-sans-clean font-medium text-white">
            {PROFILE_INFO.nameEn} · {PROFILE_INFO.name}
          </span>
          <span aria-hidden="true" className="opacity-40">·</span>
          <span className="text-stone-300">{PROFILE_INFO.email}</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline font-sans-clean text-stone-400">
            「{PROFILE_INFO.coreMotto}」
          </span>
          <a
            href={PROFILE_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
