import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support Available' },
];

export default function StatsSection() {
  return (
    <section className="bg-[#B81005] py-10">
      <AnimateOnScroll>
      <div className="max-w-[1180px] mx-auto px-6 md:px-[50px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-coda text-white text-4xl font-normal mb-1"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
              >
                {stat.value}
              </div>
              <div className="text-[#EEEEEE] text-[13px] uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
