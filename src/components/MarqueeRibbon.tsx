import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export const MarqueeRibbon: React.FC = () => {
  return (
    <div className="relative w-full bg-[#08090C]/90 backdrop-blur-md border-y border-white/10 py-4.5 overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="animate-marquee">
        {[...Array(3)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center space-x-6 sm:space-x-8 px-4">
            {MARQUEE_ITEMS.map((item, idx) => (
              <React.Fragment key={`${loopIdx}-${idx}`}>
                <span className="text-[#E5A84B] text-xs sm:text-sm font-serif-display select-none opacity-80">
                  ✦
                </span>
                <span className="text-stone-300 text-sm sm:text-base font-serif-display tracking-wider whitespace-nowrap hover:text-[#E5A84B] transition-colors cursor-default">
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
