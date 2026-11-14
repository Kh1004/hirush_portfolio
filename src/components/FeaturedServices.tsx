import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { services } from '@/data/site';
import { serviceIcons } from '@/components/icons/serviceIcons';

export default function FeaturedServices() {
  return (
    <section id="services" className="bg-white w-full py-12 md:py-16 lg:py-24 scroll-mt-32">
      {/* Heading */}
      <AnimateOnScroll>
        <div className="w-[92%] max-w-[1720px] mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2
              id="heading"
              className="font-coda text-[26px] md:text-[32px] font-normal text-center uppercase leading-[1.25] text-[#111111] max-w-4xl"
            >
              Comprehensive electrical, control, and automation solutions for industrial excellence
            </h2>
            <div className="w-[80px] h-[3px] bg-[#B81005] mt-4" />
          </div>

          {/* Featured boxes */}
          <div className="flex flex-wrap justify-center gap-8 mb-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.6rem)]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-2 text-[#B81005] group-hover:text-[#940D05] transition-colors duration-200">
                  <div className="w-10 h-10">{serviceIcons[service.icon]}</div>
                </div>
                <a href="#services" className="block no-underline">
                  <h2
                    className="font-coda text-[23px] font-normal text-center py-[10px] pb-[5px] leading-[1.25] group-hover:text-[#B81005] transition-colors duration-200"
                    style={{
                      color: '#111111',
                      textShadow: '-1px -1px 3px #ffffff',
                    }}
                  >
                    {service.title}
                  </h2>
                </a>
                <p className="text-[14px] text-justify leading-[1.6] text-[#333333] mb-[10px]">
                  {service.shortDescription}
                </p>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div
            className="w-full"
            style={{
              height: '1px',
              background: '#CCCCCC',
              borderBottom: '1px solid #FFFFFF',
              margin: '0 0 20px',
            }}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
