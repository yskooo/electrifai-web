const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#000000] to-[#001027]">
      <div className="text-center text-white px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Start your journey of a <br /> brighter future with ElectrifAI
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Start your journey of well-being with ElectrifAI
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-[#2F4BE5] text-white font-medium text-lg rounded-full hover:bg-blue-700">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-medium text-lg rounded-full hover:bg-white hover:text-[#0A0A0B]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
