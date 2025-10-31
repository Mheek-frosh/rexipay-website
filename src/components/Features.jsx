import React from "react";
import { Globe, Shield, CreditCard } from "lucide-react";

const Features = () => {
  return (
    <section
      id="crypto"
      className="py-20 px-6 md:px-24 text-white bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        {/* ✅ Credit Card Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#F7931A]/10 border border-[#F7931A]/20 rounded-full text-[#F7931A] text-sm font-medium">
              💳 CREDIT CARD
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Elevate Your Bill Payments With Our Amazing Card Options
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Rexipay offers innovative and transparent payment card solutions
              that make transactions simple, flexible, and accessible — wherever
              you are.
            </p>
          </div>

{/* ✅ Right: Cards Section */}
<div className="relative w-full flex justify-center items-center min-h-[400px]">
  <img
    src="/images/rexiatmcards.png"
    alt="Credit Cards Stack"
    className="w-full max-w-[600px] h-auto object-contain"
  />
</div>
        </div>

        {/* ✅ App Download Section */}
        <div className="relative bg-gradient-to-r from-[#F7931A] to-[#FFA94D] rounded-3xl overflow-visible mt-32">
          <div className="grid md:grid-cols-2 gap-6 items-center p-10 md:p-14 relative min-h-[380px] md:min-h-[420px]">
            {/* Left: App Mockup Image */}
            <div className="relative flex justify-start">
              <img
                src="/images/handphone.png"
                alt="Rexipay mobile app mockup"
                className="absolute -top-20 left-[-57px] w-full max-w-[340px] md:max-w-[400px] lg:max-w-[460px] object-contain drop-shadow-2xl z-20"
              />
              <div className="h-[260px] md:h-[320px] lg:h-[360px]" />
            </div>

            {/* Right: Text */}
            <div className="space-y-6 text-black md:pl-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Download the Rexipay App
              </h2>
              <p className="text-black/80 text-base md:text-lg leading-relaxed">
                Take control of your finances anywhere, anytime with our secure
                and user-friendly mobile app.
              </p>

              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-colors duration-300">
                  App Store
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-colors duration-300">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Security Section */}
        <div id="security" className="grid md:grid-cols-3 gap-8 mt-32">
          {/* International */}
          <div className="bg-[#0F1430] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#F7931A]/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#F7931A]/10 rounded-xl flex items-center justify-center">
              <Globe className="text-[#F7931A]" size={24} />
            </div>
            <h3 className="text-2xl font-bold">International</h3>
            <p className="text-gray-400 leading-relaxed">
              We’re present in multiple countries across Asia, Africa, and
              Europe — ensuring global accessibility for every user.
            </p>
          </div>

          {/* Safe & Secure */}
          <div className="bg-white text-black rounded-2xl p-8 space-y-4 shadow-md">
            <div className="w-12 h-12 bg-[#F7931A]/10 rounded-xl flex items-center justify-center">
              <Shield className="text-[#F7931A]" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Safe and Secure</h3>
            <p className="text-gray-700 leading-relaxed">
              Your transactions and data are protected by advanced encryption
              and insurance-backed guarantees for peace of mind.
            </p>
          </div>

          {/* Transparency */}
          <div className="bg-[#0F1430] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#F7931A]/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#F7931A]/10 rounded-xl flex items-center justify-center">
              <CreditCard className="text-[#F7931A]" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Transparency & Simplicity</h3>
            <p className="text-gray-400 leading-relaxed">
              We prioritize clarity and simplicity — no hidden fees, no complex
              terms, just a smooth and transparent financial experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
