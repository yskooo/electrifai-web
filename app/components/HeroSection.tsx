const HeroSection = () => {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Powering the Future with Electric AI
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Revolutionizing industries with our cutting-edge AI solutions. Harness the power of artificial intelligence to electrify your business.
              </p>
            </div>
            <div className="space-x-4">
              <button className="bg-white text-primary hover:bg-gray-100">Get Started</button>
              <button className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default HeroSection;
  