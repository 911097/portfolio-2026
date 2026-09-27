import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectArt } from './ProjectArt';

interface SelectedWorksProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({
  projects,
  onSelectProject
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Category matcher tailored to the user's authentic works
  const matchCategory = (project: Project, filter: string) => {
    if (filter === 'all') return true;
    if (filter === 'systems') {
      return project.filterCategory === 'ai_systems' || project.filterCategory === 'system_dev';
    }
    if (filter === 'frontend') {
      return project.filterCategory === 'web_dev';
    }
    return project.filterCategory === filter;
  };

  // Dynamic filter tabs
  const filterTabs = [
    {
      key: 'all',
      label: '全部作品',
      count: String(projects.length).padStart(2, '0'),
    },
    {
      key: 'systems',
      label: '專題系統',
      count: String(projects.filter((p) => p.filterCategory === 'ai_systems' || p.filterCategory === 'system_dev').length).padStart(2, '0'),
    },
    {
      key: 'frontend',
      label: '前端網頁',
      count: String(projects.filter((p) => p.filterCategory === 'web_dev').length).padStart(2, '0'),
    },
  ];

  const currentFilteredProjects = projects.filter((p) => matchCategory(p, activeFilter));

  const handleCardKeyDown = (e: React.KeyboardEvent, project: Project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectProject(project);
    }
  };

  return (
    <section id="works" className="py-20 md:py-28 bg-[#0A0C0F] text-[#ECEFF4] transition-colors relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[1.5px] bg-[#E5A84B] inline-block shrink-0"></span>
              <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-[#E5A84B]">
                02 / SELECTED WORKS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              代表作品
            </h2>
            <p className="mt-2 text-stone-400 text-sm sm:text-base font-sans-clean max-w-xl">
              聚焦於電腦視覺、特徵演算法實作，以及兼具結構性與視覺節奏的前端網站切版。
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-sans-clean rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-950 font-semibold'
                      : 'border border-white/10 text-stone-400 hover:text-white hover:border-white/25 bg-white/[0.02]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`font-mono-code text-[11px] tabular-nums ${isActive ? 'text-stone-800' : 'text-stone-500'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid: Simplified hover (border transition to gold, no jumpy transforms or deep drop shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentFilteredProjects.map((project) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                aria-label={`檢視專案詳情：${project.title}`}
                onClick={() => onSelectProject(project)}
                onKeyDown={(e) => handleCardKeyDown(e, project)}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group cursor-pointer flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-[#12141A]/70 transition-colors duration-300 hover:border-[#E5A84B]/40 text-left overflow-hidden relative"
              >
                <div>
                  {/* Visual Art Container: Edge-to-edge inside card with clean rounding */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0A0C0F] mb-4">
                    <ProjectArt
                      theme={project.artTheme}
                      isHovered={isHovered}
                    />

                    {/* Invention Award Badge */}
                    {project.inventionAward && (
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-lg bg-[#0A0C0F]/85 text-stone-300 text-[11px] font-mono-code backdrop-blur-sm">
                        <span>{project.inventionAward}</span>
                      </div>
                    )}

                    {/* Subtle Hover Action Arrow (floats in top-right when not award, or top-left) */}
                    <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-[#0A0C0F]/80 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>

                  {/* Meta Row: Clean single-line Category/Year */}
                  <div className="text-xs font-mono-code text-stone-500 mb-2">
                    {project.displayBadge}
                  </div>

                  {/* Clean Title */}
                  <h3 className="text-lg font-bold font-sans-clean tracking-tight text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans-clean mb-4 line-clamp-3">
                    {project.leadParagraph}
                  </p>
                </div>

                {/* Tag Badges (No divider border, natural spacing, clean background tags) */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-xs font-mono-code text-stone-400 rounded-lg bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
