const Team = () => {
    const teamMembers = [
      { name: "Daniel Caparro", role: "Project Manager, AI Developer" },
      { name: "Justine Rey Daquis", role: "Lead UI/UX, Frontend Developer" },
      { name: "Clarence Jay Fetalino", role: "Researcher, IoT Device Developer" },
      { name: "Mcallen Fradejas", role: "Layout Artist, 3D Model Designer" },
      { name: "Raeselyn Macorol", role: "Researcher" }
    ];
  
    return (
      <section id="OurTeam" className="w-full py-12 flex items-center justify-center md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="container px-10 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">Meet Our Team</h2>
            <p className="mt-4 container lg:px-60 text-center text-base sm:text-lg md:text-xl lg:text-xl text-gray-300">
              The company is spearheaded by a team of students from the Polytechnic University of the Philippines Manila, under the team of PENTATRONICS.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="p-4 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-center text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default Team;
  