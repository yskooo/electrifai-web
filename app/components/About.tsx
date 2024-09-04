import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About ElectrifAI</h2>

        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            ElectrifAI was conceptualized and developed in response to the growing challenges of electricity theft, power loss, and inefficiencies within the Philippine energy sector. The founding team, comprised of students from the Polytechnic University of the Philippines (PUP) Manila under the banner of PENTATRONICS, identified a critical gap in the market: the need for a robust, technology-driven solution to combat the pervasive issues of unauthorized electricity tapping and system losses, which are prevalent in many developing localized regions in the Philippines.
          </p>

          <p className="text-lg text-gray-700">
            The project was initiated as part of an academic endeavor aimed at leveraging emerging technologies such as Artificial Intelligence (AI) and the Internet of Things (IoT) to create practical solutions for real-world problems. Through extensive research and development, the team developed the ElectrifAI Advanced Power Metering Solution, an innovative technological device that integrates advanced AI algorithms with IoT devices to provide real-time monitoring of electricity usage, detect anomalies, and significantly reduce non-technical losses in the electricity distribution network.
          </p>

          <p className="text-lg text-gray-700">
            ElectrifAI quickly gained recognition for its potential to revolutionize energy management in the Philippines. It won several prestigious awards, including 1st Place in the Meralco Idol Hackathon 2023 and a Silver Award at the StartUp QC Student Competition 2024. These accolades not only validated the technical innovation and effectiveness of ElectrifAI’s solution but also highlighted its relevance and timeliness in addressing one of the most pressing issues in the country’s energy sector.
          </p>

          <p className="text-lg text-gray-700">
            ElectrifAI aims to revolutionize the electricity distribution landscape in the Philippines by leveraging cutting-edge AI and IoT technologies. To achieve this ambitious goal, strategic collaborations with key institutions, companies, and government agencies are crucial. These partnerships are not just about technology integration but also about creating a robust ecosystem that supports the widespread adoption and scalability of ElectrifAI’s solutions.
          </p>

          <p className="text-lg text-gray-700">
            By collaborating with industry leaders, academic institutions, government bodies, and local cooperatives, ElectrifAI seeks to address the challenges of energy inefficiency, electricity theft, and system losses. The ultimate goal is to enhance the efficiency, reliability, and sustainability of the country’s power distribution system for both households and the localized electric power cooperatives.
          </p>

          <p className="text-lg text-gray-700">
            These collaborations will provide ElectrifAI with access to essential resources, including technical expertise, funding, regulatory support, and market access, all of which are vital for driving growth and achieving long-term success in the market. Additionally, through these partnerships, ElectrifAI aims to align its innovations with national and global sustainability goals, ensuring that its impact is not only technological but also socially and environmentally beneficial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
