import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ControllerDesign() {
  return (
    <section id="controllers" className="py-12 md:py-16 lg:py-24" style={{ background: '#F5F5F5' }}>
      <AnimateOnScroll>
      <div className="w-[92%] max-w-[1720px] mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2
            className="font-coda text-[28px] md:text-[34px] font-normal text-center uppercase leading-[1.25] text-[#111111]"
          >
            Controller Design
          </h2>
          <div className="w-[60px] h-[3px] bg-[#B81005] mt-3" />
        </div>
        <p className="text-center text-[#777777] text-[14px] mb-12 -mt-4">
          Customized electronics-based controllers tailored to your specific requirements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* IoT Controllers */}
          <div className="flex-1">
            <div
              className="p-6 border border-gray-100 bg-white h-full group hover:border-[#B81005] transition-all duration-300"
              style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[#B81005] group-hover:bg-[#B81005] group-hover:text-white transition-all duration-300 flex-shrink-0"
                  style={{ background: 'rgba(184,16,5,0.08)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                </div>
                <h3
                  className="font-coda text-[20px] font-normal leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                  style={{ color: '#111111' }}
                >
                  IoT Controllers
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Needs Assessment for IoT Control Systems',
                  'Hardware Design with Wi-Fi, Bluetooth, Cellular, LoRa',
                  'Custom Firmware Development with Security',
                  'Cloud Platform Integration for Real-Time Access',
                  'Rigorous Testing, Validation & Scalability',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[13px] text-[#555555] py-1.5"
                    style={{ borderBottom: '1px dotted #CCCCCC' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#B81005' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Monitoring Controllers */}
          <div className="flex-1">
            <div
              className="p-6 border border-gray-100 bg-white h-full group hover:border-[#B81005] transition-all duration-300"
              style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[#B81005] group-hover:bg-[#B81005] group-hover:text-white transition-all duration-300 flex-shrink-0"
                  style={{ background: 'rgba(184,16,5,0.08)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3
                  className="font-coda text-[20px] font-normal leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                  style={{ color: '#111111' }}
                >
                  Monitoring Controllers
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Requirement Analysis & Sensor Integration',
                  'Data Acquisition for Temperature, Pressure, Flow',
                  'User-Friendly Interface Design',
                  'Alerting & Reporting on Threshold Events',
                  'Remote Access & Full Customization',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[13px] text-[#555555] py-1.5"
                    style={{ borderBottom: '1px dotted #CCCCCC' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#B81005' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Centered CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#B81005] hover:bg-[#940D05] text-white text-[12px] md:text-[13px] font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
          >
            Request Custom Controller Design
          </a>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
