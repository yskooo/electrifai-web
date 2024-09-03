const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start bg-gradient-to-r from-[#0A0A0B] to-[#001F3F]">
      {/* Apply the custom gradient animation */}
      <div className="absolute inset-0 w-1/2 bg-gradient-custom p-6 opacity-20 blur-sm" />
      <div className="relative text-left text-white px-4 md:px-8 lg:px-12 xl:px-16 animate-fade-in">
        <h1 className="xl:w-2/3 w-full text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          The Smart Choice for Energy Optimization
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-300 max-w-3xl leading-relaxed">
          Discover the ultimate tool for energy management—track usage, optimize savings, and secure your resources against theft. 
          Our cutting-edge technology offers you control and efficiency like never before.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-10 py-4 bg-[#2F4BE5] text-white font-medium text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="px-10 py-4 border-2 border-white text-white font-medium text-lg shadow-lg hover:bg-white hover:text-[#0A0A0B] transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
