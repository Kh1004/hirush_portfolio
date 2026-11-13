import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { hero } from '@/data/site';

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden h-[500px] lg:h-[600px]">

      <Image
        src="/assets/images/bg.jpg"
        alt="Hirush Automation - Industrial Automation Solutions"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center">
        <div className="w-[92%] max-w-[1720px] mx-auto flex justify-center md:justify-end">
          <AnimateOnScroll className="w-full max-w-[550px] px-4 md:px-0">
            <div
              className="bg-black/75 text-left p-6 md:p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10"
              style={{ width: '100%' }}>

              <h1 className="font-coda text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-[#FC542B] mb-2">
                {hero.heading}
              </h1>
              <p className="font-coda text-[10px] md:text-xs lg:text-sm tracking-wider text-[#EEEEEE] uppercase mb-4 font-semibold opacity-90">
                {hero.subheading}
              </p>
              
              <p className="text-[#DDDDDD] text-[13px] md:text-[14px] leading-relaxed mb-6">
                {hero.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={hero.primaryCta.href}
                  className="inline-block bg-[#B81005] hover:bg-[#940D05] text-white text-[11px] md:text-[12px] font-bold uppercase tracking-wider px-5 py-3 rounded transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-block bg-transparent hover:bg-white/10 text-white text-[11px] md:text-[12px] font-bold uppercase tracking-wider px-5 py-3 rounded border border-white transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[45px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(170,170,170,0.5))'
        }} />

    </section>);

}