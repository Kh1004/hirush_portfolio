'use client';
import React from 'react';

interface ServiceBox {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceBox[] = [
  {
    title: 'Power and Control DB',
    description:
      'Design for the power and control distribution panels integrated with drives and PLC components',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Electrical Drawings',
    description:
      'Electrical and Control drawings such as Panel layout, Single Line Diagram and Schematic diagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'Programming',
    description:
      'Development of PLC programming and HMI/SCADA design based on the requirements',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0121 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-white w-full">
      {/* Heading */}
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-[50px]">
        <h1
          id="heading"
          className="font-coda text-[33px] text-center uppercase mb-5 mt-0 leading-[1.25]"
          style={{ color: '#AAAAAA' }}
        >
          We are providing design, freelance, online classes to optimise your engineering resources
        </h1>

        {/* Featured boxes - flexbox instead of float */}
        <div className="flex flex-wrap gap-6 mb-4 justify-center">
          {services.map((service) => (
            <div
              key={service.title}
              className="group w-full sm:w-[calc(50%-12px)] lg:w-[277px]"
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
    </section>
  );
}
