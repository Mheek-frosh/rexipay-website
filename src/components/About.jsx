import React, { useEffect, useState } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="banking"
      className="py-20 px-6 md:px-24 bg-gradient-to-b from-transparent to-[#0A0E1F] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            All Your Money Needs In One App
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience seamless financial management with our comprehensive platform.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* ✅ Left Card - Saving Month Chart */}
          <div className="bg-gradient-to-b from-[#6A6DD2] to-[#8359E3] rounded-3xl p-8 space-y-6 shadow-xl text-white relative overflow-hidden transition-all duration-700 ease-in-out hover:scale-[1.02]">
            <div className="transition-all duration-700">
              <h3 className="text-lg font-semibold text-white/90">Saving Month</h3>
              <h2 className="text-4xl font-bold mt-2">$ 1852,00</h2>
              <p className="text-white/70 mt-1 text-sm">
                Increase of <span className="text-white font-semibold">12%</span> from last month
              </p>
            </div>

            {/* Chart Section */}
            <div className="relative mt-10">
              {/* Horizontal grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[50, 20, 10, 0].map((val, i) => (
                  <div key={i} className="border-t border-dashed border-white/20 relative">
                    <span className="absolute -left-2 -top-3 text-white/50 text-xs">{val}k</span>
                  </div>
                ))}
              </div>

              {/* Bars */}
              <div className="relative flex items-end justify-around h-48 px-8 z-10">
                {[35, 50, 30, 85, 48].map((height, i) => (
                  <div
                    key={i}
                    className={`relative w-12 ${
                      i === 3 ? "bg-[#FF9F1C]" : "bg-white/40"
                    } rounded-t-2xl flex justify-center transition-all duration-700 ease-in-out`}
                    style={{ height: animate ? `${height}%` : "0%" }}
                  >
                    {i === 3 && (
                      <>
                        {/* Tooltip */}
                        <div
                          className={`absolute -top-12 bg-white text-black text-sm font-bold px-4 py-2 rounded-lg shadow-lg transition-all duration-500 whitespace-nowrap ${
                            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                          }`}
                        >
                          $20,000
                        </div>

                        {/* Circle Marker */}
                        <div
                          className={`absolute top-[45%] w-5 h-5 bg-white rounded-full flex items-center justify-center transition-all duration-700 ${
                            animate ? "opacity-100 scale-100" : "opacity-0 scale-50"
                          }`}
                        >
                          <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom labels */}
              <div className="flex justify-around mt-4 text-white/60 text-sm px-8">
                <span>April</span>
                <span>May</span>
                <span>June</span>
                <span>July</span>
              </div>
            </div>
          </div>

          {/* ✅ Right Cards - Feature List */}
          <div className="space-y-4">
            {[
              {
                title: "Crypto Transactions",
                desc: "Trade and manage cryptocurrency like you would in the stock market — buy, sell, and invest securely with live updates.",
              },
              {
                title: "International Transfer",
                desc: "Send money globally with instant delivery, multi-currency support, and low transaction fees — all within a secure ecosystem.",
              },
              {
                title: "Pay Bills",
                desc: "Manage your cash flow and bill payments easily and securely. Add funds, pay utilities, and stay in control — all from one dashboard.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0F1430] border border-white/10 rounded-2xl p-6 hover:border-[#F7931A]/50 transition-colors duration-300"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
