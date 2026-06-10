import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const serviceDetails: ServiceDetail[] = [
  {
    title: 'PLC Programming',
    description:
      'Our expertise lies in proposing suitable PLC hardware configurations and delivering programming services aligned precisely with your control system requirements and control philosophy. We specialize in PLC programming across all major brands.',
    features: [
      'Siemens PLC Programming',
      'Schneider PLC Programming',
      'Allen-Bradley PLC Programming',
      'Mitsubishi PLC Programming',
      'Hardware Configuration & Philosophy',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'HMI/SCADA Design',
    description:
      'We offer SCADA software and communication configuration solutions tailored to meet contractual requirements. Our engineering services include development of robust, visually appealing, and user-friendly HMI graphics across multiple platforms.',
    features: [
      'SCADA Software Configuration',
      'HMI Graphics Development',
      'Alarm Management Systems',
      'Trending & Reporting',
      'OPC Communication Setup',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'Electrical & Control Panel',
    description:
      'Control panel design and fabrication are integral components of our offerings. We specialize in crafting high-quality electrical panels expertly integrated with drives, starters, PLC systems, and control components for precise control and monitoring.',
    features: [
      'Control Panel Design & Fabrication',
      'Drive & Starter Integration',
      'PLC System Integration',
      'Electrical Control Components',
      'Drawing & Documentation Support',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-12">
      <AnimateOnScroll>
      <div className="max-w-[1180px] mx-auto px-6 md:px-[50px]">
        <h2
          className="font-coda text-[30px] font-normal text-center uppercase mb-2 leading-[1.25]"
          style={{ color: '#111111' }}
        >
          Our Services
        </h2>
        <p className="text-center text-[#777777] text-[14px] mb-8">
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
      </AnimateOnScroll>
    </section>
  );
}
