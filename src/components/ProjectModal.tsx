import React, { useEffect } from 'react';
import { X, CheckCircle, Award, ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectArt } from './ProjectArt';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onDiscuss: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscuss
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-auto rounded-none md:rounded-2xl shadow-2xl overflow-hidden border bg-[#12141A] border-white/10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header inside Modal */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12141A]/95 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-xs font-mono-code text-stone-400">
            <span>{project.displayBadge}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-10 space-y-10">
          {/* Main Visual Display */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-sm border border-white/10">
            <ProjectArt theme={project.artTheme} className="w-full h-full" />
          </div>

          {/* Title & Core Overview */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base text-stone-400 font-sans mt-1 font-medium">
                  {project.originalTitle}
                </p>
              </div>
              {project.inventionAward && (
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#E5A84B] bg-[#E5A84B]/10 border border-[#E5A84B]/20 px-3 py-1.5 rounded-md">
                  <Award size={14} />
                  <span>{project.inventionAward}</span>
                </div>
              )}
            </div>

            <p className="text-base md:text-lg text-stone-300 leading-relaxed font-normal pt-1 font-sans">
              {project.leadParagraph}
            </p>
          </div>

          {/* Role & Tech Specs Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5 border-y border-white/10 text-xs font-mono-code">
            <div>
              <div className="text-stone-400 mb-1">MY RESPONSIBILITY (我的角色)</div>
              <div className="font-sans font-medium text-stone-200">
                {project.role}
              </div>
            </div>
            <div>
              <div className="text-stone-400 mb-1">TECH & TOOLS (核心工具)</div>
              <div className="font-sans font-medium text-stone-200">
                {project.tools.join(', ')}
              </div>
            </div>
            <div>
              <div className="text-stone-400 mb-1">TIMEFRAME</div>
              <div className="font-sans font-medium text-stone-200">
                {project.year} 屆
              </div>
            </div>
          </div>

          {/* 3 Core Highlights */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
              CORE CONTRIBUTIONS (專案核心貢獻)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-2"
                >
                  <div className="flex items-start gap-2 text-stone-200 font-medium text-sm font-sans">
                    <CheckCircle size={15} className="text-[#E5A84B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Architectural Context */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
              ARCHITECTURAL DETAILS & IMPLEMENTATION (架構設計與實作亮點)
            </h3>
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.01] space-y-4 text-sm text-stone-300 font-sans leading-relaxed">
              <div>
                <span className="text-[#E5A84B] font-mono-code text-xs block mb-1">面臨挑戰 / 問題背景：</span>
                <p>{project.problem}</p>
              </div>
              <div className="p-4 rounded-lg bg-black/40 border border-white/5 font-mono-code text-xs text-stone-300">
                <span className="text-[#E5A84B] block mb-1">解決方案與實作流程：</span>
                {project.solutionAndMethods}
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
                PROJECT METRICS (量化指標)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
                    <span className="text-[11px] font-mono-code text-stone-500 block mb-0.5">{m.label}</span>
                    <span className="text-base font-bold text-white font-mono-code">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Actions Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-code text-stone-500">
                {project.year} · {project.filterCategory}
              </span>
              {project.videoLink && (
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code border border-white/15 text-stone-300 hover:text-[#E5A84B] hover:border-[#E5A84B]/40 transition-colors"
                >
                  <span>觀看實測影片</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>

            <button
              onClick={() => onDiscuss(project.title)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-[#E5A84B] text-stone-950 hover:bg-[#d9993e] hover:shadow-lg hover:shadow-[#E5A84B]/20 transition-all cursor-pointer"
            >
              <span>針對此專案與我交流</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
