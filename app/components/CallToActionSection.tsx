const CallToActionSection = () => {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Electrify Your AI Journey?
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of businesses already leveraging the power of ElectricAI. Sign up for our newsletter to stay updated on the latest AI advancements.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <button type="submit">Subscribe</button>
              </form>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default CallToActionSection;
  