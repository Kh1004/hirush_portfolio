import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface Training {
  title: string;
  level: string;
  duration: string;
  description: string;
  topics: string[];
}

const trainings: Training[] = [
  {
    title: 'Electrical Design Fundamentals',
    level: 'Beginner',
    duration: '4 Weeks',
    description:
      'Comprehensive training in electrical design covering component selection, protection calculations, operating methods, and core electrical concepts for beginners.',
    topics: [
      'Component Selection (Switches, Relays, Breakers)',
      'Protection Calculation Methods',
      'Operating Methods & Principles',
      'Conceptual Understanding of Circuits',
      'Basic to Complex Control Systems',
    ],
  },
  {
    title: 'PLC Programming Training',
    level: 'Intermediate',
    duration: '6 Weeks',
    description:
      'From basic PLC concepts to advanced programming techniques including ladder logic, function block diagrams, structured text, and hands-on projects.',
    topics: [
      'PLC Architecture & Basic Concepts',
      'Ladder Logic & Function Block Diagrams',
      'Structured Text Programming',
      'PID Control & Motion Control',
      'Hands-On Project Work',
    ],
  },
  {
    title: 'HMI/SCADA Development',
    level: 'Intermediate',
    duration: '6 Weeks',
    description:
      'Master HMI screen design and SCADA system development including configuration, data acquisition, trending, alarm handling, and real-world applications.',
    topics: [
      'Introduction to HMI/SCADA Systems',
      'User-Friendly HMI Screen Design',
      'SCADA Configuration & Data Acquisition',
      'Trending & Alarm Handling',
      'Real-World Case Studies & Projects',
    ],
  },
];

const levelColors: Record<string, string> = {
  Beginner: '#27ae60',
  Intermediate: '#e67e22',
};

export default function TrainingsSection() {
  return (
    <section id="trainings" className="bg-white py-12">
      <AnimateOnScroll>
      <div className="max-w-[1180px] mx-auto px-6 md:px-[50px]">
        <h2
          className="font-coda text-[30px] font-normal text-center uppercase mb-2 leading-[1.25]"
          style={{ color: '#111111' }}
        >
          Training Programs
        </h2>
        <p className="text-center text-[#777777] text-[14px] mb-8">
          Online and in-person classes to advance your automation engineering skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainings.map((training) => (
            <div
              key={training.title}
              className="border border-gray-100 overflow-hidden hover:border-[#B81005] transition-all duration-300 group"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              {/* Card header */}
              <div
                className="p-4 border-b border-gray-100"
                style={{ background: 'rgba(184,16,5,0.04)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[11px] uppercase tracking-wide font-bold px-2 py-0.5 rounded-sm text-white"
                    style={{ background: levelColors[training.level] }}
                  >
                    {training.level}
                  </span>
                  <span className="text-[12px] text-[#777777]">{training.duration}</span>
                </div>
                <h3
                  className="font-coda text-[17px] font-normal leading-[1.25] group-hover:text-[#B81005] transition-colors duration-300"
                  style={{ color: '#111111' }}
                >
                  {training.title}
                </h3>
              </div>

              {/* Card body */}
              <div className="p-4">
                <p className="text-[13px] text-[#555555] leading-[1.6] mb-4">
                  {training.description}
                </p>
                <ul className="space-y-1">
                  {training.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-[12px] text-[#555555]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#B81005' }}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card footer */}
              <div className="px-4 pb-4">
                <a
                  href="#contact"
                  className="block text-center text-[13px] uppercase py-2 px-4 text-white transition-colors duration-200 hover:bg-[#940D05]"
                  style={{ background: '#B81005' }}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
