import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { trainings } from '@/data/site';

export default function TrainingsSection() {
  return (
    <section id="trainings" className="bg-white py-12 md:py-16 lg:py-24 scroll-mt-32">
      <AnimateOnScroll>
      <div className="w-[92%] max-w-[1720px] mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2
            className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase leading-[1.25] text-[#111111]"
          >
            Training Programs
          </h2>
          <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
        </div>
        <p className="text-center text-[#777777] text-[14px] mb-12 -mt-4">
          Comprehensive training programs designed to equip professionals with the knowledge and
          skills required in the following areas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <div
              key={training.id}
              className="border border-gray-100 overflow-hidden hover:border-[#B81005] transition-all duration-300 group flex flex-col"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              {/* Card header */}
              <div
                className="p-4 border-b border-gray-100"
                style={{ background: 'rgba(184,16,5,0.04)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[11px] uppercase tracking-wide font-bold px-2 py-0.5 rounded-sm text-white"
                    style={{ background: '#B81005' }}
                  >
                    Training Area
                  </span>
                  <span className="font-coda text-[18px] text-[#B81005]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3
                  className="font-coda text-[17px] font-normal leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                  style={{ color: '#111111' }}
                >
                  {training.title}
                </h3>
              </div>

              {/* Card body */}
              <div className="p-4 flex-1">
                <p className="text-[13px] text-[#555555] leading-[1.6] mb-4">
                  {training.description}
                </p>
                <ul className="space-y-1">
                  {training.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-[12px] text-[#555555]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#B81005' }}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card footer */}
              <div className="px-4 pb-4">
                <a
                  href="#contact"
                  className="block text-center text-[13px] uppercase py-2 px-4 text-white transition-colors duration-200 hover:bg-[#940D05]"
                  style={{ background: '#B81005' }}
                >
                  Enquire About Training
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
