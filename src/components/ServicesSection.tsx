import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { services } from '@/data/site';
import { serviceIcons } from '@/components/icons/serviceIcons';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-12 md:py-16 lg:py-24 scroll-mt-32">
      <AnimateOnScroll>
      <div className="w-[92%] max-w-[1720px] mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2
            className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase leading-[1.25] text-[#111111]"
          >
            Our Services
          </h2>
          <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
        </div>
        <p className="text-center text-[#777777] text-[14px] mb-12 -mt-4">
          Comprehensive automation engineering solutions for your industrial needs
        </p>

        <div className="space-y-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-sm hover:border-[#B81005] transition-colors duration-300 group ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-[#B81005] group-hover:bg-[#B81005] group-hover:text-white transition-all duration-300"
                  style={{ background: 'rgba(184,16,5,0.08)' }}
                >
                  <div className="w-12 h-12">{serviceIcons[service.icon]}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="font-coda text-[20px] font-normal mb-2 leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                  style={{ color: '#111111' }}
                >
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#333333] leading-[1.6] mb-4 text-justify">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[13px] text-[#555555]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#B81005' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#B81005] hover:bg-[#940D05] text-white text-[12px] md:text-[13px] font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
          >
            Discuss Your Automation Project
          </a>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
