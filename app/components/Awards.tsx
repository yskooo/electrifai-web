const Awards = () => {
  return (
    <section id="Awards" className="w-full py-16 md:py-32 lg:py-40 bg-[#000B1B] text-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h3 className="text-center text-gray-400 text-md uppercase tracking-wider mb-6">Continued Pursuit of Growth</h3>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-6">Partnerships &amp; Awards</h2>
        <p className="text-center text-xl sm:text-2xl text-gray-300 mb-16">
          Looking to partner with over 120 electric cooperatives across the Philippines
          <br /> 
          <span className="text-gray-400 text-lg">to target rural and semi-urban areas, to reach even more people.</span>
        </p>
        <div className="flex justify-center items-center mb-16">
          <div className="w-20 h-20 bg-gray-500 rounded-full mx-4"></div>
          <div className="w-20 h-20 bg-gray-500 rounded-full mx-4"></div>
        </div>
        <div className="bg-[#0C1524] p-8 rounded-lg border border-gray-700 shadow-lg">
          <ul className="space-y-6">
            <li className="text-lg">
              <span className="font-semibold text-white">1st Runner Up &amp; People&apos;s Choice Award Meralco Idol Hackathon 2023</span><br />
              <span className="text-gray-400">Won over PHP 130,000 of cash prize</span>
            </li>
            <li className="text-lg">
              <span className="font-semibold text-white">Silver Awardee StartupQC Student Competition</span><br />
              <span className="text-gray-400">Won over PHP 25,000 of cash prize</span>
            </li>
            <li className="text-lg">
              <span className="font-semibold text-white">PUP Undergraduate Research Competition</span><br />
              <span className="text-gray-400">Won over PHP 30,000 of cash prize</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Awards;
