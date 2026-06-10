'use client';
import React from 'react';


interface FooterColumn {
  title: string;
  items: string[];
}

const footerColumns: FooterColumn[] = [
  {
    title: 'SERVICES',
    items: [
      'PLC Programming',
      'HMI/SCADA Design',
      'Electrical & Control Panel',
      'Controller Design',
      'Online Training',
    ],
  },
  {
    title: 'DESIGN TOOLS',
    items: ['AutoCAD', 'ePlan Electric', 'PanelDraw', 'PSCAD'],
  },
  {
    title: 'PLC PLATFORMS',
    items: [
      'Siemens | Mitsubishi',
      'Schneider | Allen Bradley',
      'Omron | Keyence',
      'Panasonic | Nais',
      'Direct Logic | GE',
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full clear-both"
      style={{
        background: '#333333',
        borderTop: '7px solid #B81005',
        fontSize: '12px',
      }}
    >
      <div
        className="w-full max-w-[1180px] mx-auto px-6 md:px-[50px]"
      >
        {/* Company Description */}
        <div className="py-6 border-b border-gray-700">
          <p className="text-[#CCCCCC] text-[13px] leading-[1.6] max-w-2xl">
            Hirush Automation Pte Ltd provides expert electrical, control, and automation engineering solutions. We specialize in PLC/HMI/SCADA systems, control panel design and fabrication, customized controller development, and professional training. With offices in Singapore and Sri Lanka, we serve industries including water treatment, data centers, ACMV, and manufacturing.
          </p>
        </div>

        {/* Footer widgets - flexbox instead of float */}
        <div className="flex flex-wrap gap-6 py-6 justify-between">
          {footerColumns.map((col) => (
            <div
              key={col.title}
              className="w-full sm:w-[calc(50%-12px)] lg:w-auto flex-1 min-w-[200px]"
            >
              <h3
                className="font-coda text-[20px] font-normal pb-[5px] uppercase"
                style={{
                  color: '#DDDDDD',
                  textShadow: '1px 1px 1px #000000',
                }}
              >
                {col.title}
              </h3>
              <ul
                style={{
                  borderBottom: '1px dotted #555555',
                  borderTop: '1px dotted #111111',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-[#B0B0B0] text-[12px] leading-[1.6]"
                    style={{
                      padding: '3px 0 3px 17px',
                      borderBottom: '1px dotted #111111',
                      borderTop: '1px dotted #555555',
                      listStyle: 'none',
                      backgroundImage: 'url("data:image/gif;base64,R0lGODlhBgAGAIABAIgQBf///yH5BAEAAAEALAAAAAAGAAYAAAIJhI+py+0PYysAOw==")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '0px 7px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Credit line */}
        <div
          className="w-full text-center text-[13px]"
          style={{
            background: '#B81005',
            color: '#CCCCCC',
            padding: '5px 0 10px',
            margin: '0',
          }}
        >
          Copyright&copy;&nbsp;&nbsp;Hirush Automation Pte Ltd&nbsp;| All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
