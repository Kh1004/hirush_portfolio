'use client';
import React from 'react';

export default function HeroSlider() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '399px',
        background: 'url(https://hirushautomation.com/cta.jpg) center center / cover no-repeat'
      }}>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Slide content - positioned like original */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div
          className="bg-black/70 text-left p-5 rounded-tl-[10px] rounded-bl-[10px]"
          style={{ width: '425px', marginTop: '70px', marginRight: '0' }}>

          <h2
            className="font-coda text-[23px] font-normal mb-[10px] leading-[1.25]"
            style={{ color: '#FC542B' }}>

            About Us
          </h2>
          <p className="text-[#EEEEEE] text-[14px] leading-[1.6]">
            Design solutions in the field of Electrical and Control engineering.
            Freelancing solutions for PLC Programming, HMI/SCADA Design.
            Classes for Electrical Control Engineering and PLC, SCADA Programming.
          </p>
        </div>
      </div>

      {/* Bottom shadow gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(170,170,170,0.5))'
        }} />

    </section>);

}