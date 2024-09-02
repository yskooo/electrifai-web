const PartnersSection = () => {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="flex justify-center">
                <div className="w-40 h-20 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400">Partner Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default PartnersSection;
  