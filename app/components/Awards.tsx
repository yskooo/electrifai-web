/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import clsx from 'clsx';

const awards = [
  {
    title: '1st Runner Up & People’s Choice Award - Meralco Idol Hackathon 2023',
    description: 'Secured recognition for outstanding innovation and audience appeal.',
  },
  {
    title: 'Silver Awardee - StartupQC Student Competition',
    description: 'Earned distinction for exceptional startup ideas and execution.',
  },
  {
    title: '1st Runner Up - PUP Undergraduate Research Competition',
    description: 'Achievement for pioneering research and scholarly contribution.',
  },
  {
    title: 'Incubatee Cohort 1 - DOST PUP TBI',
    description: 'PYLON Hub fosters innovation and entrepreneurship by supporting technology-based startups and empowering students and faculty to optimize systems in business and logistics ecosystems.',
  },
  {
    title: 'Exhibitor - NCR TBI Summit 2024',
    description: 'ElectrfAI exhibited at the NCR TBI Summit 2024, connecting with industry leaders, investors, and innovators to drive sustainable and scalable impact in the energy sector.',
  },
  {
    title: '1st Runner Up - ExoAsia Innovation Challenge',
    description: 'Recognized for groundbreaking advancements in AI-powered energy solutions showcasing the potential of ElectrifAI to revolutionize the energy sector in emerging markets.',
  },
  {
    title: 'IEEE TENCON Singapore 2024',
    description: 'ElectrifAI showcased its AI-driven energy innovations at IEEE TENCON Singapore 2024, fostering global collaboration on sustainable technology.',
  },
  {
    title: 'Participant - SEC Roadshow on Capital Formation for MSME’s and Startups',
    description: 'Engaged in the SEC Roadshow on Capital Formation, exploring investment opportunities and funding strategies to scale ElectrifAI’s impact in the energy sector.',
  },
  {
    title: 'Incubatee - REVV-EVODINE Venture Studio',
    description: 'Selected as a pioneering incubatee at REVV-EVODINE Venture Studio powered by Fast Logistics Group.',
  },
  {
    title: 'Finalist – Tech Planter PH by Leave a Nest',
    description: 'Finalist in the Sustainable Smart Systems category. Presented at the demo day in UST.'
  },
  {
    title: 'Cohort 6 – NEXStep Incubation by New Energy Nexus',
    description: 'One of five startups selected for a 3-month clean energy and climate tech incubation.'
  },
  {
    title: 'Winner – Founders Arena Hackathon, Philippine Blockchain Week 2025',
    description: 'Secured 1st Runner up in early-stage startup pitching ElectrifAI for their supply chain solution at PBW 2025 Grand Finals.'
  }
];

const AwardItem = ({
  title,
  description,
  isDarkMode,
}: {
  title: string;
  description: string;
  isDarkMode: boolean;
}) => (
  <div
    className={clsx(
      'p-5 rounded-lg shadow-md border transition-all hover:shadow-xl backdrop-blur-md',
      isDarkMode
        ? 'bg-[#1B1B1D]/80 border-[#00A5FF] text-white'
        : 'bg-white/30 border-white/50 text-white backdrop-blur-sm shadow-sm'
    )}
  >
    <h4 className="font-semibold">{title}</h4>
    <p className={clsx('text-sm mt-1', isDarkMode ? 'text-gray-400' : 'text-white/90')}>
      {description}
    </p>
  </div>
);

const Awards = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      id="Awards"
      className={clsx(
        'w-full py-20 relative overflow-hidden',
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      )}
    >
      {/* Cinematic Background Image */}
      <div className="absolute inset-0">
        <img
          src="/theteam.png"
          alt="Team background"
          className="w-full h-full object-cover opacity-50 blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#00A5FF] text-md uppercase tracking-wider">Continued Pursuit of Growth</h3>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">Partnerships & Awards</h2>
          <p className={clsx('mt-4 text-lg max-w-3xl mx-auto', isDarkMode ? 'text-gray-300' : 'text-gray-200')}>
            Looking to partner with over <span className="text-[#00A5FF]">120 electric cooperatives</span> across the Philippines, 
            targeting rural and semi-urban areas to reach even more people.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AwardItem key={index} title={award.title} description={award.description} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
