const TeamSection = () => {
    const teamMembers = [
      { name: "Dr. Ava Chen", role: "Chief AI Scientist" },
      { name: "Michael Rodriguez", role: "CEO" },
      { name: "Sarah Johnson", role: "CTO" },
      { name: "David Kim", role: "Head of Product" }
    ];
  
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="p-4 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default TeamSection;
  