import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { industries, industriesClosing } from '@/data/site';
import { industryIcons } from '@/components/icons/industryIcons';

export default function IndustriesServed() {
  return (
    <section id="industries" className="bg-white py-12 md:py-16 lg:py-24">
      <AnimateOnScroll>
        <div className="w-[92%] max-w-[1720px] mx-auto">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase leading-[1.25] text-[#111111]">
              Industries We Serve
            </h2>
            <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
          </div>
          <p className="text-center text-[#777777] text-[14px] mb-12 -mt-4">
            Our extensive experience spans across a diverse range of industries, including
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white p-5 border border-gray-100 hover:border-[#B81005] transition-all duration-300 group"
                style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#B81005] group-hover:bg-[#B81005] group-hover:text-white transition-all duration-300 mb-3"
                  style={{ background: 'rgba(184,16,5,0.08)' }}
                >
                  <div className="w-8 h-8">{industryIcons[industry.icon]}</div>
                </div>
                <h3
                  className="font-coda text-[16px] font-normal mb-2 leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                  style={{ color: '#111111' }}
                >
                  {industry.name}
                </h3>
                <p className="text-[12px] text-[#555555] leading-[1.6]">{industry.description}</p>
              </div>
            ))}
          </div>

          <p className="max-w-[1100px] mx-auto text-center text-[13px] text-[#555555] leading-[1.7] mt-10">
            {industriesClosing}
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
