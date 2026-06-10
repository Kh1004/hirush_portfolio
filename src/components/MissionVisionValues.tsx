import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface MvvItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const items: MvvItem[] = [
  {
    title: 'Our Mission',
    description:
      'To deliver superior quality control and automation systems, paired with exceptional customer service, by relentlessly pursuing innovation and leveraging advanced technology.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: 'Our Vision',
    description:
      'To establish ourselves as one of the leading system integrators and process control automation companies in Singapore and Sri Lanka, committed to delivering exceptional quality services that consistently exceed customer expectations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Core Values',
    description:
      'Customer-Centric Excellence, Innovation-Driven Growth, and Ethical Integrity are the principles that guide every aspect of our business and relationships.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const coreValueDetails = [
  'Customer-Centric Excellence: We hold our customers in the highest regard, treating them with immense respect and trust. Their satisfaction and success are at the forefront of our efforts.',
  'Innovation-Driven Growth: Our company thrives on creativity, invention, and innovation. We continuously seek new ways to improve and excel in the solutions we provide.',
  'Ethical Integrity: Honesty, integrity, and the highest ethical standards are ingrained in every aspect of our business.',
];

export default function MissionVisionValues() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <AnimateOnScroll>
      <div className="w-[92%] max-w-[1720px] mx-auto">
        {/* Mission / Vision / Core Values cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-gray-200 border-t-[3px] border-t-gray-200 hover:border-gray-200 hover:border-t-[#B81005] text-center group rounded-md transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-start h-full bg-white"
              style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-[#B81005] group-hover:bg-[#B81005] group-hover:text-white transition-all duration-300"
                style={{ background: 'rgba(184,16,5,0.08)' }}
              >
                {item.icon}
              </div>
              <h3
                className="font-coda text-[20px] font-normal mb-3 leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                style={{ color: '#111111' }}
              >
                {item.title}
              </h3>
              <p className="text-[13px] text-[#555555] leading-[1.6] text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values Details */}
        <div className="border border-gray-200 p-8 rounded-md bg-white" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <h3
            className="font-coda text-[18px] font-normal uppercase mb-4 pb-2 leading-[1.25]"
            style={{
              color: '#111111',
              borderBottom: '2px solid #B81005',
            }}
          >
            Our Core Values in Practice
          </h3>
          <ul className="space-y-3 p-0 m-0">
            {coreValueDetails.map((val) => (
              <li key={val} className="flex items-start gap-3 text-[13px] text-[#555555] leading-[1.6] list-none p-0 m-0">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: '#B81005' }}
                />
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
