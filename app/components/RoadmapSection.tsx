const RoadmapSection = () => {
    const milestones = [
      { quarter: "Q3 2024", milestone: "Launch of ElectricAI Platform 1.0" },
      { quarter: "Q4 2024", milestone: "Integration with major cloud providers" },
      { quarter: "Q1 2025", milestone: "Release of industry-specific AI models" },
      { quarter: "Q2 2025", milestone: "Global expansion and localization" }
    ];
  
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Product Roadmap</h2>
          <div className="space-y-8">
            {milestones.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold">{item.quarter}</h3>
                  <p>{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default RoadmapSection;
  