import { Brain, Cpu, BarChart } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#000000] to-[#242424] flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-xl font-semibold text-gray-400 text-center mb-2">How We're Different</h2>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-white">Our Innovative Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg border border-gray-700 bg-gradient-to-r from-[#1A1A1A] to-[#242424] h-56 flex items-center">
            <div className="flex items-start space-x-4">
              <Brain className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced Machine Learning</h3>
                <p className="text-gray-400">Leverage state-of-the-art algorithms to solve complex problems.</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg border border-gray-700 bg-gradient-to-r from-[#1A1A1A] to-[#242424] h-56 flex items-center">
            <div className="flex items-start space-x-4">
              <Cpu className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Processing</h3>
                <p className="text-gray-400">Process and analyze data at lightning-fast speeds for instant insights.</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg border border-gray-700 bg-gradient-to-r from-[#1A1A1A] to-[#242424] h-56 flex items-center md:col-span-2">
            <div className="flex items-start space-x-4">
              <BarChart className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics</h3>
                <p className="text-gray-400">Forecast trends and make data-driven decisions with our AI models.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
