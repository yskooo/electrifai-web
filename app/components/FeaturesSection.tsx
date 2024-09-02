import { Brain, Cpu, BarChart } from "lucide-react";

const FeaturesSection = () =>{
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Innovative Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Advanced Machine Learning</h3>
            <p className="text-gray-600">Leverage state-of-the-art algorithms to solve complex problems.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Cpu className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
            <p className="text-gray-600">Process and analyze data at lightning-fast speeds for instant insights.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BarChart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
            <p className="text-gray-600">Forecast trends and make data-driven decisions with our AI models.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
