import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { FluidContourCanvas } from './FluidContourCanvas';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 bg-[#0A0C0F] text-[#ECEFF4] overflow-hidden">
      {/* Dynamic Background: Organic Fluid Contour Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <FluidContourCanvas className="w-full h-full opacity-90" />
        {/* Soft vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F] via-transparent to-[#0A0C0F]/80 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full my-auto">
        {/* Eyebrow / Tagline */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#E5A84B]/30 bg-[#E5A84B]/10 text-xs font-mono-code text-[#E5A84B] mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A84B]" />
          <span>{PROFILE_INFO.tagline}</span>
        </div>

        {/* Headline (Exact 4 lines matching user design specifications) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-sans font-bold tracking-tight text-white leading-[1.2] mb-7 max-w-4xl">
          <span className="block whitespace-nowrap">嗨，我是 吳雨柔</span>
          <span className="block whitespace-nowrap">我在設計與科技之間，</span>
          <span className="block whitespace-nowrap">
            打造真正可用的 <span className="text-[#E5A84B]">跨域數</span>
          </span>
          <span className="block whitespace-nowrap text-[#E5A84B]">
            位體驗
          </span>
        </h1>

        {/* Subtitle / Bio Paragraph */}
        <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-sans-clean mb-9">
          {PROFILE_INFO.bioScreenshot}
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onExploreClick}
            className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 bg-[#E5A84B] text-stone-950 hover:bg-[#d9993e] hover:shadow-lg hover:shadow-[#E5A84B]/25 active:scale-95 cursor-pointer shrink-0 flex items-center gap-2"
          >
            <span>瀏覽作品集</span>
            <span className="text-sm">↓</span>
          </button>

          {/* Secondary Action Button */}
          <button
            type="button"
            onClick={onContactClick}
            className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border border-white/20 hover:border-[#E5A84B]/60 text-stone-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] active:scale-95 shrink-0 cursor-pointer"
          >
            聯絡我
          </button>
        </div>
      </div>
    </section>
  );
};
