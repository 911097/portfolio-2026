import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProfileSectionProps {}

export const ProfileSection: React.FC<ProfileSectionProps> = () => {
  const [showAcademicDetails, setShowAcademicDetails] = useState(false);

  return (
    <section id="profile" className="py-20 md:py-32 bg-[#0A0C0F] text-[#ECEFF4] relative transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Index Kicker */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[1.5px] bg-[#E5A84B] inline-block shrink-0"></span>
            <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-[#E5A84B]">
              01 / PROFILE &amp; PHILOSOPHY
            </span>
          </div>
        </div>

        {/* Main 2-Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + art & logic */}
          <div className="lg:col-span-5 space-y-6">
            {/* Minimalist Star Icon */}
            <div className="w-10 h-10 text-[#E5A84B] flex items-center justify-center rounded-lg bg-[#E5A84B]/10 border border-[#E5A84B]/20">
              <svg viewBox="0 0 36 36" fill="currentColor" className="w-5 h-5">
                <path d="M18,0 L20.5,12.5 L33,10 L22.5,18 L33,26 L20.5,23.5 L18,36 L15.5,23.5 L3,26 L13.5,18 L3,10 L15.5,12.5 Z" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.18]">
              介於感性
              <br />
              與理性之間。
            </h2>

            {/* Subtitle */}
            <div className="pt-1">
              <p className="text-stone-400 text-sm md:text-base font-normal font-sans-clean">
                Somewhere between
              </p>
              <p className="text-[#E5A84B] text-2xl md:text-3xl font-serif-display italic tracking-wide">
                art &amp; logic.
              </p>
            </div>
          </div>

          {/* Right Column: Statement, Bio & 3 Editorial Rows */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            {/* Mission Statement */}
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
              我相信好的數位體驗，
              <br />
              同時需要美感與邏輯。
            </h3>

            {/* Single Focused Paragraph without repeating background */}
            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed font-sans-clean">
              <p>
                視覺背景讓我在意細節與溝通；資管訓練讓我理解流程、結構與可行性。我習慣先讓系統跑得穩，再把畫面做到看得懂——設計負責發現問題，技術負責讓想法真的發生。
              </p>
            </div>

            {/* Hairline Divider */}
            <div className="border-t border-white/10 pt-2 my-6" />

            {/* 3 Numbered Meta Rows */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 font-sans-clean">
                <span className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
                  01 / BACKGROUND
                </span>
                <span className="text-stone-200">
                  亞東科技大學 資訊管理系（學士）
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/5 font-sans-clean">
                <span className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
                  02 / FOCUS
                </span>
                <span className="text-stone-200">
                  系統開發 · 電腦視覺 · 前端設計
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/5 font-sans-clean">
                <span className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
                  03 / INTERESTS
                </span>
                <span className="text-stone-200">
                  UI/UX 原型 · 影像辨識 · 空間幾何
                </span>
              </div>
            </div>

            {/* Academic Detail Toggle Card */}
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-[#12141A]/70 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono-code text-stone-300">
                    <span>修課表現與學術成績摘要</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAcademicDetails(!showAcademicDetails)}
                    className="text-xs font-mono-code text-[#E5A84B] hover:underline flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{showAcademicDetails ? '收合' : '展開檢視'}</span>
                    {showAcademicDetails ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>
                </div>

                {showAcademicDetails && (
                  <div className="pt-3 border-t border-white/10 space-y-4 text-xs font-mono-code text-stone-400">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-lg bg-white/[0.03]">
                        <span className="text-[10px] text-stone-400 block">歷年總平均</span>
                        <span className="text-base font-bold text-white">86.4 分</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03]">
                        <span className="text-[10px] text-stone-400 block">在校排名</span>
                        <span className="text-base font-bold text-[#E5A84B]">班排第 5 名（前 17.24%）</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03]">
                        <span className="text-[10px] text-stone-400 block">技術專長核心</span>
                        <span className="text-base font-bold text-white">Python / SQL</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
