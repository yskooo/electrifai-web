import { Users, Briefcase, PieChart } from "lucide-react";

const BusinessPlanSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Business Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Users className="mr-2" /> Target Market
            </h3>
            <p>Enterprise businesses across finance, healthcare, and manufacturing sectors seeking to leverage AI for process optimization and decision-making.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-2" /> Revenue Model
            </h3>
            <p>Subscription-based SaaS model with tiered pricing based on usage and features. Additional revenue from consulting and custom AI model development.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              Growth Strategy
            </h3>
            <p>Focused on product-led growth, strategic partnerships with industry leaders, and aggressive marketing in key verticals.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <PieChart className="mr-2" /> Financial Projections
            </h3>
            <p>Targeting $10M ARR by end of year 2, with a projected 70% year-over-year growth rate for the following three years.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessPlanSection;
