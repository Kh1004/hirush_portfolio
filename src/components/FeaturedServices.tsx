import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface ServiceBox {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceBox[] = [
  {
    title: 'PLC Programming',
    description:
      'Expert PLC hardware configuration and programming across Siemens, Schneider, Allen-Bradley, and Mitsubishi platforms tailored to your control system requirements.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'HMI/SCADA Design',
    description:
      'SCADA software and communication configuration with robust, visually appealing HMI graphics for effective process monitoring and control.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'Electrical & Control Panel',
    description:
      'Design and fabrication of high-quality electrical panels integrated with drives, starters, PLC systems, and control components.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-white w-full py-12 md:py-16 lg:py-24">
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

        {/* Featured boxes - grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group w-full"
            >
              {/* Icon */}
              <div className="flex justify-center mb-2 text-[#B81005] group-hover:text-[#940D05] transition-colors duration-200">
                {service.icon}
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
                {service.description}
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
