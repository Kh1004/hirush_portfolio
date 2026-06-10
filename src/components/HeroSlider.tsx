import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '399px' }}>

      <Image
        src="/assets/images/bg.jpg"
        alt="Hirush Automation - Industrial Automation Solutions"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 flex items-center justify-end">
        <AnimateOnScroll>
          <div
            className="bg-black/70 text-left p-5 rounded-tl-[10px] rounded-bl-[10px]"
            style={{ maxWidth: '425px', width: '90%', marginTop: '70px' }}>

            <h2
              className="font-coda text-[23px] font-normal mb-[10px] leading-[1.25]"
              style={{ color: '#FC542B' }}>

              About Us
            </h2>
            <p className="text-[#EEEEEE] text-[14px] leading-[1.6]">
              Hirush Automation Pte Ltd, established in Singapore under the visionary leadership of R. Amulyan, is a distinguished Electrical, Control, and Automation Company. With over a decade of experience and offices in Singapore and Sri Lanka, we specialize in PLC/HMI/SCADA systems, control panel design, and industrial automation solutions.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[45px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(170,170,170,0.5))'
        }} />

    </section>);

}