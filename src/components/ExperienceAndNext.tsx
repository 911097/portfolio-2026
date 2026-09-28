import React from 'react';
import { Globe2, Award, CheckCircle2 } from 'lucide-react';

interface ExperienceAndNextProps {}

export const ExperienceAndNext: React.FC<ExperienceAndNextProps> = () => {
  const experiences = [
    {
      period: '2020 — 至今',
      title: '萊爾富超商 ｜ 門市人員',
      duration: '5 年 8 個月',
      description: '長期第一線門市服務：收銀結帳、補貨上架、商品陳列整理、定期庫存盤點與即時顧客服務。培養高壓環境下穩定作業、細心點算與溝通協調力。',
      tag: '長期經歷',
    },
    {
      period: '2024 — 2026',
      title: '亞東科大 ｜ 教學助理 (TA) 與系辦行政工讀',
      duration: '11 個月',
      description: '擔任《計算機概論》教學助理協助上機解題；支援《多元跨域教師社群》行政與出缺勤統計；負責系所宣傳海報視覺設計。',
      tag: '教學與行政',
    },
    {
      period: '2023 寒假',
      title: '教育優先區寒假營隊 ｜ 教案企劃與輔導員',
      duration: '營隊專案',
      description: '全營 60 人，分組帶領 10 位學員體驗團隊協作；獨立開發並講授《翻書就好不翻臉》翻書動畫創意課程。',
      tag: '教案與引導',
    },
    {
      period: '2026',
      title: '旭軟電子科技 ｜ 生產線作業員',
      duration: '實務歷練',
      description: '依 PCB 軟板產線標準作業程序 (SOP) 完成現場作業，配合流水線排程、品質目檢與團隊工序協同分工。',
      tag: '製程管制作業',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0A0C0F] text-[#ECEFF4] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[1.5px] bg-[#E5A84B] inline-block shrink-0"></span>
            <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-[#E5A84B]">
              03 / EXPERIENCE &amp; ROADMAP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            實務經歷與研發探索
          </h2>
          <p className="mt-2 text-stone-400 text-sm sm:text-base font-sans-clean max-w-2xl">
            從第一線門市運作與軟板製程紀律，到前瞻電腦視覺與智慧感知平臺。
          </p>
        </div>

        {/* 1. Practical Experience & Next Research */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-9 py-1">
              {experiences.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Subtle Node */}
                  <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-white/30 border-2 border-[#0A0C0F]" />

                  {/* Header Row: Period + Tag */}
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono-code text-stone-400 font-semibold">
                      {item.period}
                    </span>
                    <span className="text-[11px] font-mono-code px-2.5 py-0.5 rounded-full bg-white/[0.05] text-stone-300">
                      {item.tag}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-base font-semibold text-white font-sans-clean">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs sm:text-sm text-stone-400 leading-relaxed font-sans-clean">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Next Research Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#12141A] text-white p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[440px] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E5A84B]/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono-code uppercase tracking-wider text-stone-400 font-semibold">
                    NEXT RESEARCH
                  </span>
                </div>

                {/* Big Bold Headline */}
                <h3 className="font-serif-display text-3xl sm:text-4xl font-bold leading-[1.22] text-white mb-8 tracking-tight">
                  讓辨識更穩，
                  <br />
                  也讓系統更完整。
                </h3>
              </div>

              {/* 4 Items with dividers */}
              <div className="divide-y divide-white/10 border-t border-white/10 text-xs sm:text-sm text-stone-300 font-sans-clean">
                <div className="py-3 flex items-center justify-between">
                  <span>匿名特徵擷取與多目標追蹤</span>
                  <span className="text-stone-500 font-mono-code text-xs">01</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span>特徵維度 28 → 34 維規格擴充</span>
                  <span className="text-stone-500 font-mono-code text-xs">02</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span>髮型特徵與 LINE Bot 通報串接</span>
                  <span className="text-stone-500 font-mono-code text-xs">03</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span>後端／資料庫系統高可用整合</span>
                  <span className="text-stone-500 font-mono-code text-xs">04</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. International Exhibitions & Certifications */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Box 1: Headline */}
            <div className="md:col-span-5 pr-0 md:pr-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code tracking-wider text-stone-400 uppercase">
                <Globe2 size={13} />
                <span>INTERNATIONAL EXHIBITIONS</span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif-display italic text-white leading-snug">
                3 個團隊專題
                <br />
                入選國際發明展
              </div>
              <p className="text-xs sm:text-sm text-stone-400 font-sans-clean leading-relaxed pt-1">
                以電腦視覺、特徵感知演算法與物聯網架構為核心，榮獲中華民國發明專利（I906167）並獲選代表參展。
              </p>
            </div>

            {/* Box 2: International Exhibitions List */}
            <div className="md:col-span-4 pt-6 md:pt-0 px-0 md:px-8 space-y-3">
              <div className="text-xs font-mono-code tracking-wider text-stone-500 uppercase">
                HONORS &amp; PATENTS
              </div>
              <div className="space-y-3 font-sans-clean">
                <div>
                  <div className="flex items-center gap-2 text-sm text-white font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    <span>高雄 KIDE · 2026/11</span>
                  </div>
                  <p className="text-xs text-stone-400 pl-3.5 mt-0.5">智慧醫院匿名特徵感知與事件預警平臺</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-white font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    <span>首爾 SIIF · 2026/12</span>
                  </div>
                  <p className="text-xs text-stone-400 pl-3.5 mt-0.5">智慧居家復健系統（發明專利 I906167）</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-white font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    <span>曼谷 IPITEX · 2027/02</span>
                  </div>
                  <p className="text-xs text-stone-400 pl-3.5 mt-0.5">環境安全監測系統及方法（物聯網通報）</p>
                </div>
              </div>
            </div>

            {/* Box 3: Certifications & Campus Honors */}
            <div className="md:col-span-3 pt-6 md:pt-0 pl-0 md:pl-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code tracking-wider text-stone-500 uppercase">
                <Award size={13} />
                <span>CERTIFICATIONS &amp; CAMPUS</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-stone-300 font-sans-clean">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-stone-400 shrink-0" />
                  <span>ERP 鼎新配銷模組應用師</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-stone-400 shrink-0" />
                  <span>EEC 企業電子化助理規劃師</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-stone-400 shrink-0" />
                  <span>ITS 網路安全核心能力認證</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-stone-400 shrink-0" />
                  <span>資管系證照達人競賽 第三名</span>
                </div>
                <div className="pt-1.5 border-t border-white/5 text-[11px] text-stone-400 font-mono-code">
                  曾任班級幹部（風紀、學藝、總務）｜TA 證書
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
