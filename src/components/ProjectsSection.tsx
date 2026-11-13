'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { projectFilters, projectReference, projects } from '@/data/site';
import type { Project, ProjectFilterKey } from '@/data/site';

const PAGE_SIZE = 6;

function ProjectMedia({ project, index }: { project: Project; index: number }) {
  if (!project.image) return null;

  return (
    <div className="relative aspect-[16/10] overflow-hidden" style={{ background: '#2A2A2A' }}>
      <Image
        src={project.image}
        alt={project.imageAlt ?? `${project.title} — ${project.client}`}
        fill
        sizes="(max-width: 767px) 92vw, (max-width: 1279px) 45vw, 30vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />

      <span
        className="absolute bottom-3 right-4 font-coda text-[15px] leading-none text-white/80 tabular-nums"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilterKey>('all');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.capability === filter)),
    [filter]
  );

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleFilter = (key: ProjectFilterKey) => {
    setFilter(key);
    setVisible(PAGE_SIZE);
  };

  return (
    <section
      id="projects"
      className="py-12 md:py-16 lg:py-24 scroll-mt-32"
      style={{ background: '#F5F5F5' }}
    >
      <AnimateOnScroll>
        <div className="w-[92%] max-w-[1720px] mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase leading-[1.25] text-[#111111]">
              {projectReference.title}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[#777777] text-[14px] mb-8 -mt-4">
            <p>{projectReference.subtitle}</p>
            <span
              className="hidden sm:inline-block w-1 h-1 rounded-full"
              style={{ background: '#CCCCCC' }}
            />
            <p className="text-[#B81005]">{projects.length} Projects</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
            {projectFilters.map((option) => {
              const count =
                option.key === 'all'
                  ? projects.length
                  : projects.filter((p) => p.capability === option.key).length;
              const isActive = filter === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleFilter(option.key)}
                  className={`text-[11px] md:text-[12px] uppercase tracking-wide px-3 md:px-4 py-2 border transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#B81005] border-[#B81005] text-white'
                      : 'bg-white border-gray-200 text-[#555555] hover:border-[#B81005] hover:text-[#B81005]'
                  }`}
                >
                  {option.label}
                  <span className={isActive ? 'ml-2 text-white/70' : 'ml-2 text-[#999999]'}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {shown.map((project, index) => (
              <article
                key={project.id}
                className="group flex flex-col bg-white border border-gray-100 hover:border-[#B81005] transition-all duration-300 hover:shadow-lg"
                style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
              >
                <ProjectMedia project={project} index={index} />

                <div className="flex flex-col flex-1 p-5">
                  {!project.image && (
                    <span
                      className="font-coda text-[20px] leading-none tabular-nums"
                      style={{ color: '#DDDDDD' }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  )}

                  <h3
                    className={`text-[14px] text-[#111111] leading-[1.45] ${
                      project.image ? '' : 'mt-2'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <div className="mt-3 flex items-start gap-2 text-[12.5px] text-[#666666] leading-[1.5]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mt-[1px] flex-shrink-0 text-[#B81005]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                      />
                    </svg>
                    <span>{project.client}</span>
                  </div>

                  <div className="mt-auto pt-4 text-[12px] leading-[1.5] text-[#777777]">
                    <div className="pt-3 border-t border-dashed border-gray-200 flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mt-[1px] flex-shrink-0 text-[#B81005]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span>{project.role}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="flex flex-col items-center gap-3 mt-10">
            <p className="text-[12px] text-[#888888]">
              Showing {shown.length} of {filtered.length} projects
            </p>
            {hasMore ? (
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-block bg-[#B81005] hover:bg-[#940D05] text-white text-[11px] md:text-[12px] uppercase tracking-wider px-6 py-3 transition-colors duration-200 shadow-md"
              >
                Show {Math.min(PAGE_SIZE, filtered.length - visible)} more projects
              </button>
            ) : (
              filtered.length > PAGE_SIZE && (
                <button
                  type="button"
                  onClick={() => setVisible(PAGE_SIZE)}
                  className="inline-block bg-transparent border border-[#B81005] text-[#B81005] hover:bg-[#B81005] hover:text-white text-[11px] md:text-[12px] uppercase tracking-wider px-6 py-3 transition-colors duration-200"
                >
                  Show fewer projects
                </button>
              )
            )}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
