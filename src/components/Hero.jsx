import React from "react";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-6 md:px-24 relative overflow-hidden bg-[#0A0A0A] text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Finance With Security <br className="hidden md:block" /> And
            Flexibility
          </h1>

          <p className="text-gray-400 text-lg max-w-lg">
            Rexipay is a powerful banking and money transfer solution that helps
            you experience fast transactions, time-saving banking, and the best
            credit management — everything you need in one platform.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
              <Play size={20} fill="currentColor" />
              <span className="font-medium">Get Started</span>
            </button>

            <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors">
              See How It Works
            </button>
          </div>
        </div>

        {/* Right Card Section */}
        <div className="relative flex justify-center">
          <img
            src="/images/doublephone.png"
            alt="Rexipay mobile preview"
            className="w-[400px] md:w-[450px] lg:w-[500px] object-contain z-10"
          />

          {/* Optional glow or gradient background for design depth */}
          <div className="absolute top-10 -right-10 w-32 h-32 bg-[#F7931A]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#6A6DD2]/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
