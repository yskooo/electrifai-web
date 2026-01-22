'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { X, ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext'; 

const defaultProfile = '/members/default-image.jpg';

const Team = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedMember, setSelectedMember] = useState<any>(null); 

  const teamMembers = [
    {
      name: 'Engr. Gerhard P. Tan',
      role: 'Chairman',
      description: 'Strategic leader guiding ElectrifAI\'s vision and ensuring operational excellence.',
      imgSrc: '/members/hard.png',
      contacts: {
        linkedIn: "gerhard-tan-1a5160104",
        facebook: "gerhardian19",
      },
      bio: {
        fullBio: 'Engr. Gerhard P. Tan leads ElectrifAI as Chairman while serving as Senior Director and Head of Technology Strategy & Innovations at Globe Telecom. A licensed electronics engineer and ASEAN Engineer designee, he brings over two decades of leadership in telecommunications and energy innovation. He graduated with a BS in Electronics Engineering from University of Saint Louis (Tuguegarao) and has been a faculty lecturer at PUP Manila. Gerhard Tan has spearheaded advanced network initiatives including Globe\'s fiber optics and 5G projects, and now guides ElectrifAI\'s vision for smart energy management. His industry contributions have earned him honors like the 2024 ASEAN Outstanding Engineering Achievement Award (Individual Category) and appointment to the PRC Board of Electronics Engineering.',
      },
    },
    {
      name: 'Daniel Caparro',
      role: 'Chief Executive Officer',
      description: 'Drives innovation and growth, scaling the platform while building strategic partnerships.',
      imgSrc: '/members/daniel.png',
      contacts: {
        linkedIn: "daniel-caparro-805682224",
        facebook: "nam.joo.7399",
      },
      bio: {
        fullBio: 'Daniel S. Caparro is the Chief Executive Officer and co-founder of ElectrifAI. He holds a BS in Electronics Engineering from the Polytechnic University of the Philippines (PUP) and has extensive experience in software and AI-driven solutions. Daniel directs ElectrifAI\'s innovation strategy and growth, translating cutting-edge research into practical energy intelligence products. He co-authored ElectrifAI\'s core AI algorithms in peer-reviewed venues and has built software teams focused on smart grid and anti-tapping solutions. His leadership has secured partnerships with government and industry, including DOST and utility companies, to pilot ElectrifAI deployments at scale.',
      },
    },
    {
  name: 'Harold Patacsil',
  role: 'Chief Technology Officer',
  description: 'Oversees the platform’s technical direction, leading engineering, architecture, and product development.',
  imgSrc: '/members/harold.png',
  contacts: {
    linkedIn: "haroldmartinpatacsil",
    facebook: "harold.martinpatacsil.3",
  },
  bio: {
    fullBio: `Harold Martin Patacsil is ElectrifAI's Chief Technology Officer.
      He leads the architecture and end-to-end development of the platform, ensuring performance, reliability, and security across web, mobile, and backend systems.

      He specializes in full-stack engineering, cloud architectures, API design, and mobile development. He has built government applications, quant dashboards, backtesting engines and consumer mobile apps—delivering production-grade software both independently and alongside international engineering teams.

      Harold is also a Devcon 7 SEA Delegate at the Ethereum Foundation and the Champion of the Startup Hackathon 2023 organized by the Development Academy of the Philippines, where his team received seed funding and was incubated by UPLB TTBDO.

      Harold ensures ElectrifAI’s technology foundation remains scalable, secure, and innovation-driven.`,
        },
      },
    {
      name: 'Engr. Raeselyn Macorol',
      role: 'Chief Research Officer',
      description: 'Leads R&D and data science initiatives, driving innovation in energy efficiency.',
      imgSrc: '/members/raeselyn.png',
      contacts: {
        linkedIn: "raeselynmacorol",
        facebook: "raeselynmacorol",
      },
      bio: {
        fullBio: 'Raeselyn Macorol serves as Chief Research Officer (CRO) at ElectrifAI. A PUP graduate with a BS in Electronics Engineering, she brings strong AI credentials and leads the company\'s R&D and data science initiatives. Raeselyn earned recognition as a DataCamp Artificial Intelligence Scholar (2024–present), reflecting her expertise in machine learning and analytics. In her role, she drives innovation by researching advanced algorithms for energy efficiency and training the research team in new technologies. She has designed novel machine learning models to detect power theft and improve load forecasting in utility grids, established ElectrifAI\'s research framework, and collaborated on academic studies while securing technical grants.',
      },
    },
    {
      name: 'Arjay Rosel',
      role: 'Chief Marketing Officer',
      description: 'Shapes brand narrative and market strategy to establish ElectrifAI as the energy intelligence leader.',
      imgSrc: '/members/arjay.png',
      contacts: {
        linkedIn: "arjay-rosel-5b4a0b252",
        facebook: "roselarjayyy",
      },
      bio: {
        fullBio: 'Arjay Rosel is the Chief Marketing Officer of ElectrifAI. He shapes the company\'s brand narrative and go-to-market strategy to establish ElectrifAI as a leader in energy intelligence. With a background in B2B technology marketing, Arjay drives the communication of ElectrifAI\'s solutions to industry stakeholders and the public. He is active in the startup and academic community, mentoring student innovators on cloud and digital marketing including the AWS Cloud Club at PUP. His leadership has boosted ElectrifAI\'s market presence across social media, press, and conferences, developed thought leadership content, and forged key partnerships with educational institutions and industry groups.',
      },
    },
    {
      name: 'Christian Joel Lazo',
      role: 'Chief Operations Officer',
      description: 'Optimizes operations and delivery, ensuring seamless execution of our mission.',
      imgSrc: '/members/christian.png',
      contacts: {
        linkedIn: "laxseuss",
        facebook: "",
      },
      bio: {
        fullBio: 'Christian Joel Lazo is the Chief Operations Officer of ElectrifAI. He oversees day-to-day operations, project delivery, and supply chain coordination to ensure seamless execution of the company\'s objectives. Christian\'s operational expertise lies in process optimization and logistics; he has led initiatives to implement enterprise systems (ERP/CRM) that scaled the company from a lean startup to a growing enterprise. A Six Sigma Black Belt certified professional, he applies data-driven methods to improve efficiency. At ElectrifAI, he ensures that technical deployments, customer support, and internal workflows run smoothly, having coordinated team scaling from 50 to 300+ staff while maintaining high service quality.',
      },
    },
  ];

  return (
    <section
      id="OurTeam"
      className={`w-full py-12 md:py-20 lg:py-24 ${
        isDarkMode ? 'bg-[#000000]' : 'bg-[#eef2f3]'
      } overflow-hidden`}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-screen-2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-3xl text-left">
            <span className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-4 block ${
              isDarkMode ? 'text-[#00A5FF]' : 'text-[#64748B]'
            }`}>
              EXECUTIVE TEAM
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
              isDarkMode ? 'text-white' : 'text-[#1e293b]'
            }`}>
              Meet Our Team
            </h2>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button className={`p-4 rounded-full border transition-all duration-300 ${
              isDarkMode 
                ? 'border-white/10 text-white hover:bg-white/10' 
                : 'border-black/10 text-[#1e293b] hover:bg-black/5'
            }`}>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className={`p-4 rounded-full border transition-all duration-300 ${
              isDarkMode 
                ? 'border-white/10 text-white hover:bg-white/10' 
                : 'border-black/10 text-[#1e293b] hover:bg-black/5'
            }`}>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Team Members List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer flex flex-col gap-4"
            >
              {/* Member Info (Top) */}
              <div className="text-left px-1 min-h-[50px] flex flex-col justify-end">
                <h3 className={`text-sm md:text-base font-bold mb-1 leading-tight whitespace-nowrap overflow-hidden text-ellipsis ${
                  isDarkMode ? 'text-white' : 'text-[#1e293b]'
                }`} title={member.name}>
                  {member.name}
                </h3>
                <h4 className={`text-xs font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-[#64748B]'
                }`}>
                  {member.role}
                </h4>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[3.5/4.5] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={member.imgSrc || defaultProfile}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay Share Button */}
                <div className={`absolute bottom-4 right-4 p-3 rounded-xl backdrop-blur-md transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-black/30 text-white hover:bg-black/50' 
                    : 'bg-white/30 text-white hover:bg-white/50'
                }`}>
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Dialog Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-3xl w-full rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl ${
                isDarkMode
                  ? 'bg-gradient-to-br from-[#1B1B1D] to-[#0A0A0B]'
                  : 'bg-gradient-to-br from-white to-gray-50'
              }`}
            >
              {/* Header with Background */}
              <div className={`relative h-32 ${isDarkMode ? 'bg-gradient-to-r from-[#00A5FF]/20 to-[#00A5FF]/10' : 'bg-gradient-to-r from-[#00A5FF]/15 to-[#00A5FF]/5'}`}>
                <button
                  onClick={() => setSelectedMember(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                    isDarkMode
                      ? 'hover:bg-white/10 text-gray-400 hover:text-white'
                      : 'hover:bg-black/10 text-gray-600 hover:text-black'
                  }`}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Main Content */}
              <div className="px-8 pb-8">
                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row gap-6 -mt-16 mb-8 relative z-10">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className={`w-32 h-32 rounded-2xl overflow-hidden border-4 ${isDarkMode ? 'border-[#1B1B1D]' : 'border-white'} shadow-lg`}>
                      <Image
                        src={selectedMember.imgSrc || defaultProfile}
                        alt={selectedMember.name}
                        width={128}
                        height={128}
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="flex flex-col justify-end pb-2">
                    <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
                      {selectedMember.name}
                    </h2>
                    <p className="text-[#00A5FF] font-semibold text-lg mb-1">{selectedMember.role}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {selectedMember.description}
                    </p>
                  </div>
                </div>

                {/* Professional Highlights */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-[#00A5FF] rounded-full mr-3"></div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
                      Biography
                    </h3>
                  </div>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedMember.bio.fullBio}
                  </p>
                </div>

                {/* Divider */}
                <div className={`my-8 h-px ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={`https://linkedin.com/in/${selectedMember.contacts.linkedIn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#00A5FF] text-white rounded-lg font-semibold hover:bg-[#00A5FF]/90 transition-all text-center shadow-lg"
                  >
                    Connect on LinkedIn
                  </a>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      isDarkMode
                        ? 'text-[#00A5FF] hover:bg-white/5 border border-[#00A5FF]/30'
                        : 'text-[#00A5FF] hover:bg-black/5 border border-[#00A5FF]/30'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
