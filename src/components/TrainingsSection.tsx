'use client';
import React from 'react';

interface Training {
  title: string;
  level: string;
  duration: string;
  description: string;
  topics: string[];
}

const trainings: Training[] = [
  {
    title: 'PLC Programming Fundamentals',
    level: 'Beginner',
    duration: '4 Weeks',
    description:
      'Learn the basics of PLC programming including ladder logic, function blocks, and structured text programming.',
    topics: [
      'Introduction to PLCs',
      'Ladder Logic Programming',
      'Input/Output Configuration',
      'Timer & Counter Instructions',
      'Troubleshooting Basics',
    ],
  },
  {
    title: 'HMI & SCADA Design',
    level: 'Intermediate',
    duration: '6 Weeks',
    description:
      'Master HMI screen design and SCADA system development for industrial process monitoring and control.',
    topics: [
      'HMI Screen Design Principles',
      'Tag Configuration & Binding',
      'Alarm Management',
      'Trending & Reporting',
      'OPC Communication',
    ],
  },
  {
    title: 'Advanced Automation Engineering',
    level: 'Advanced',
    duration: '8 Weeks',
    description:
      'Advanced course covering complex automation systems, network integration, and industrial communication protocols.',
    topics: [
      'Industrial Networks (Profibus, Profinet)',
      'Motion Control Systems',
      'Safety PLC Programming',
      'System Integration',
      'Project Management',
    ],
  },
];

const levelColors: Record<string, string> = {
  Beginner: '#27ae60',
  Intermediate: '#e67e22',
  Advanced: '#B81005',
};

export default function TrainingsSection() {
  return (
    <section id="trainings" className="bg-white py-12">
      <div className="max-w-[1180px] mx-auto px-6 md:px-[50px]">
        <h2
          className="font-coda text-[30px] font-normal text-center uppercase mb-2 leading-[1.25]"
          style={{ color: '#111111' }}
        >
          Training Programs
        </h2>
        <p className="text-center text-[#AAAAAA] text-[14px] mb-8">
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
                  <span className="text-[12px] text-[#AAAAAA]">{training.duration}</span>
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
                  href="#portal"
                  className="block text-center text-[13px] uppercase py-2 px-4 text-white transition-colors duration-200"
                  style={{ background: '#B81005' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#940D05')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#B81005')}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
