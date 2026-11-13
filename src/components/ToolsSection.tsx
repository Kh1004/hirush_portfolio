import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { tools } from '@/data/site';
import { toolIcons } from '@/components/icons/toolIcons';

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="py-12 md:py-16 lg:py-24 scroll-mt-32"
      style={{ background: '#F5F5F5' }}
    >
      <AnimateOnScroll>
        <div className="w-[92%] max-w-[1720px] mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase leading-[1.25] text-[#111111]">
              Tools
            </h2>
            <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
          </div>
          <p className="text-center text-[#777777] text-[14px] mb-12 -mt-4">
            Industry-leading software and platforms we work with
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white p-5 border border-gray-100 hover:border-[#B81005] transition-all duration-300 group"
                style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[#B81005] group-hover:bg-[#B81005] group-hover:text-white transition-all duration-300 flex-shrink-0"
                    style={{ background: 'rgba(184,16,5,0.08)' }}
                  >
                    <div className="w-8 h-8">{toolIcons[tool.icon]}</div>
                  </div>
                  <div>
                    <h3
                      className="font-coda text-[17px] font-normal leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                      style={{ color: '#111111' }}
                    >
                      {tool.name}
                    </h3>
                    <span
                      className="text-[11px] uppercase tracking-wide"
                      style={{ color: '#B81005' }}
                    >
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] text-[#555555] leading-[1.6]">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
