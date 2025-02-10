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
    description: 'Selected as a pioneering incubatee at REVV-EVODINE Venture Studio, accelerating ElectrifAI to be launched and tested in the market in Q3 2025.',
  },
];

const AwardItem = ({ title, description, isDarkMode }: { title: string; description: string; isDarkMode: boolean }) => (
  <div
    className={clsx(
      'p-5 rounded-lg shadow-md border transition-all hover:shadow-xl',
      isDarkMode ? 'bg-[#1B1B1D] border-[#00A5FF] text-white' : 'bg-white border-gray-300 text-black'
    )}
  >
    <h4 className="font-semibold">{title}</h4>
    <p className={clsx('text-sm mt-1', isDarkMode ? 'text-gray-400' : 'text-gray-600')}>{description}</p>
  </div>
);

const AwardImage = ({ src, alt, isDarkMode }: { src: string; alt: string; isDarkMode: boolean }) => (
  <div
    className={clsx(
      'w-full rounded-lg overflow-hidden shadow-lg border transition-transform duration-300 hover:scale-105',
      isDarkMode ? 'border-[#00A5FF]' : 'border-gray-200'
    )}
  >
    <img src={src} alt={alt} className="w-full h-auto object-cover" />
  </div>
);

const Awards = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      id="Awards"
      className={clsx(
        'w-full py-20 relative overflow-hidden',
        isDarkMode ? 'bg-[#000000] text-white' : 'bg-gradient-to-b from-[#eef2f3] to-[#ffffff] text-black'
      )}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-[200px] h-[200px] rounded-full blur-2xl bg-[#00A5FF] opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full blur-[100px] bg-[#00A5FF] opacity-20"></div>

      <div className="container px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#00A5FF] text-md uppercase tracking-wider">Continued Pursuit of Growth</h3>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Partnerships & Awards</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
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

        {/* Images Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AwardImage src="awards-1.png" alt="Award Image 1" isDarkMode={isDarkMode} />
          <AwardImage src="awards-2.png" alt="Award Image 2" isDarkMode={isDarkMode} />
          <AwardImage src="awards-3.png" alt="Award Image 3" isDarkMode={isDarkMode} />
        </div>
      </div>
    </section>
  );
};

export default Awards;
