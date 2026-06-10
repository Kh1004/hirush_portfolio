'use client';
import React from 'react';

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const serviceDetails: ServiceDetail[] = [
  {
    title: 'Power & Control Distribution Boards',
    description:
      'We design comprehensive power and control distribution panels integrated with drives and PLC components. Our designs meet international standards and are tailored to your specific industrial requirements.',
    features: [
      'MCC & PCC Panel Design',
      'VFD & Soft Starter Integration',
      'PLC & SCADA Integration',
      'Safety Relay Systems',
      'Bus Bar Sizing & Layout',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Electrical & Control Drawings',
    description:
      'Professional electrical and control drawings including Panel layout, Single Line Diagrams, Schematic diagrams, and wiring diagrams using industry-standard tools.',
    features: [
      'Single Line Diagrams (SLD)',
      'Schematic & Wiring Diagrams',
      'Panel Layout Drawings',
      'Cable Schedule & Routing',
      'As-Built Documentation',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'PLC Programming & HMI/SCADA',
    description:
      'Expert development of PLC programming and HMI/SCADA design based on your specific process requirements. We support all major PLC brands and SCADA platforms.',
    features: [
      'Siemens TIA Portal / Step 7',
      'Allen Bradley Studio 5000',
      'Mitsubishi GX Works',
      'HMI Screen Development',
      'SCADA System Integration',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-12">
      <div className="max-w-[1180px] mx-auto px-6 md:px-[50px]">
        <h2
          className="font-coda text-[30px] font-normal text-center uppercase mb-2 leading-[1.25]"
          style={{ color: '#111111' }}
        >
          Our Services
        </h2>
        <p className="text-center text-[#AAAAAA] text-[14px] mb-8">
          Comprehensive automation engineering solutions for your industrial needs
        </p>

        <div className="space-y-8">
          {serviceDetails.map((service, idx) => (
            <div
              key={service.title}
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
                  {service.icon}
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
      </div>
    </section>
  );
}
