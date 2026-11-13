import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { about, offices } from '@/data/site';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-12 md:py-16 lg:py-24 scroll-mt-32">
      <AnimateOnScroll>
        <div className="w-[92%] max-w-[1720px] mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase leading-[1.25] text-[#111111]">
              About Us
            </h2>
            <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
          </div>
          <p className="text-center text-[#777777] text-[14px] mb-12 -mt-4">
            Electrical, control, and automation engineering across Singapore and Sri Lanka
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company story */}
            <div className="lg:col-span-2">
              <div
                className="p-6 md:p-8 border border-gray-100 h-full"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              >
                <p className="text-[14px] text-[#333333] leading-[1.7] mb-4 text-justify">
                  {about.intro[0]}
                </p>
                <p className="text-[14px] text-[#333333] leading-[1.7] text-justify">
                  {about.intro[1]}
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-6">
              <div className="p-6 text-white h-full" style={{ background: '#B81005' }}>
                <h3 className="font-coda text-[18px] font-normal uppercase mb-4 pb-2 border-b-2 border-white/40">
                  What We Do
                </h3>
                <ul className="space-y-2 p-0 m-0">
                  {about.capabilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-[#EEEEEE] list-none p-0 m-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[12px] text-[#F3C7C2] leading-[1.6] mt-4 mb-0">
                  PLC/HMI/SCADA systems and Electrical/Control panels, engineered end to end.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {offices.map((office) => (
                  <div
                    key={office.id}
                    className="p-4 border-l-[3px] border-[#B81005] bg-white"
                    style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
                  >
                    <div className="text-[11px] uppercase tracking-wide text-[#B81005] font-bold">
                      {office.country}
                    </div>
                    <div className="text-[13px] text-[#333333] leading-[1.5]">{office.company}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
