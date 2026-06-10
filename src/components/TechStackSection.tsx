import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface PLCBrand {
  name: string;
  partner: string;
}

const plcBrands: PLCBrand[] = [
  { name: 'Siemens', partner: 'Mitsubishi' },
  { name: 'Schneider', partner: 'Allen Bradley' },
  { name: 'Omron', partner: 'Keyence' },
  { name: 'Panasonic', partner: 'Nais' },
  { name: 'Direct Logic', partner: 'GE' },
];

const designTools = ['AutoCAD', 'ePlan Electric', 'PanelDraw', 'PSCAD'];

export default function TechStackSection() {
  return (
    <section className="py-12" style={{ background: '#F5F5F5' }}>
      <AnimateOnScroll>
      <div className="max-w-[1180px] mx-auto px-6 md:px-[50px]">
        <h2
          className="font-coda text-[30px] font-normal text-center uppercase mb-2 leading-[1.25]"
          style={{ color: '#111111' }}
        >
          Technology Stack
        </h2>
        <p className="text-center text-[#777777] text-[14px] mb-8">
          Expertise across leading automation platforms and design tools
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Design Tools */}
          <div className="flex-1">
            <div
              className="p-6 border border-gray-100 bg-white"
              style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
            >
              <h3
                className="font-coda text-[20px] font-normal uppercase mb-4 pb-2 leading-[1.25]"
                style={{
                  color: '#111111',
                  borderBottom: '2px solid #B81005',
                }}
              >
                Design Tools
              </h3>
              <ul className="space-y-2">
                {designTools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center gap-3 text-[14px] text-[#333333] py-2"
                    style={{ borderBottom: '1px dotted #CCCCCC' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: '#B81005' }}
                    />
                    <span className="font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PLC Brands */}
          <div className="flex-1">
            <div
              className="p-6 border border-gray-100 bg-white"
              style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
            >
              <h3
                className="font-coda text-[20px] font-normal uppercase mb-4 pb-2 leading-[1.25]"
                style={{
                  color: '#111111',
                  borderBottom: '2px solid #B81005',
                }}
              >
                PLC Platforms
              </h3>
              <ul className="space-y-2">
                {plcBrands.map((brand) => (
                  <li
                    key={brand.name}
                    className="flex items-center gap-3 text-[14px] text-[#333333] py-2"
                    style={{ borderBottom: '1px dotted #CCCCCC' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: '#B81005' }}
                    />
                    <span>
                      <span className="font-medium">{brand.name}</span>
                      <span className="text-[#777777]"> | </span>
                      <span className="font-medium">{brand.partner}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="flex-1">
            <div
              className="p-6 border border-gray-100 bg-white"
              style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}
            >
              <h3
                className="font-coda text-[20px] font-normal uppercase mb-4 pb-2 leading-[1.25]"
                style={{
                  color: '#111111',
                  borderBottom: '2px solid #B81005',
                }}
              >
                Why Choose Us
              </h3>
              <ul className="space-y-2">
                {[
                  'Certified Engineers',
                  'On-Time Delivery',
                  'Cost-Effective Solutions',
                  'Global Experience',
                  '24/7 Support',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[14px] text-[#333333] py-2"
                    style={{ borderBottom: '1px dotted #CCCCCC' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: '#B81005' }}
                    />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
