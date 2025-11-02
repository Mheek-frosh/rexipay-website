import React from "react";
import { motion } from "framer-motion";
import { Globe, Shield, CreditCard } from "lucide-react";

const Features = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="crypto" className="py-20 px-6 md:px-24 text-white bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Transfer & Withdraw Section */}
        <div className="relative border border-white/10 rounded-3xl p-10 md:p-16 mb-32 overflow-hidden bg-[#0F1430]/40 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center items-center">
              <img
                src="/images/handphone.png"
                alt="RexiPay app in hand"
                className="w-full max-w-[520px] h-auto object-contain transform transition-all duration-700 ease-out hover:scale-105"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight opacity-0 translate-y-5 animate-[fadeUp_1s_ease-out_forwards]">
                Transfer & Withdraw <br /> Without Limit
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md opacity-0 translate-y-5 animate-[fadeUp_1.2s_ease-out_forwards]">
                Our mission is to make finance more accessible, transparent, and
                secure for everyone — with cutting-edge innovation that removes
                limits on how you move your money.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Crypto + Transaction Insights */}
        <div className="grid md:grid-cols-2 gap-0 mb-16">
          {/* Left: Orange Section */}
          <motion.div
            variants={sectionVariants}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative flex flex-col md:flex-row items-center bg-[#FF8C00] text-white p-4 md:p-6 rounded-tl-[40px] rounded-bl-[40px] overflow-hidden shadow-lg"
          >
            <div className="md:w-1/2 space-y-2">
              <h2 className="text-lg md:text-xl font-semibold leading-snug">
                Buy sell crypto <br /> & any other 30+ currency
              </h2>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                We Offer A Comprehensive Range Of Innovative Financial Services
                Tailored To Meet Your Needs. Our Services Include High-Yield
                Savings Accounts.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex justify-center mt-3 md:mt-0"
            >
              <img
                src="/images/sellcrypto.png"
                alt="Sell crypto mockup"
                className="w-full max-w-[260px] md:max-w-[300px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right: Blue Section */}
          <motion.div
            variants={sectionVariants}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative bg-[#0F1430] text-white p-4 md:p-6 rounded-tr-[40px] rounded-br-[40px] flex flex-col justify-between items-center text-center overflow-hidden shadow-lg"
          >
            <div className="z-10 max-w-lg space-y-2">
              <div className="flex justify-center mb-1">
                <div className="bg-[#5B5BFF] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-lg md:text-xl font-semibold leading-snug">
                Personalized Insights <br /> And Track Transactions
              </h2>

              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
                Savings Accounts That Offer Competitive Interest Rates And
                Flexible Deposit Options. Invest Wisely With Our Personalized
                Services That Include High-Yield Savings.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full flex justify-center mt-4"
            >
              <img
                src="/images/phonetransfer.png"
                alt="Transaction tracking mockup"
                className="w-full max-w-[300px] md:max-w-[340px] object-contain drop-shadow-2xl self-end"
                style={{ marginBottom: "-2px" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ✅ Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-32"
        >
          {/* 🟩 Green Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-[#CCFF00] text-black rounded-2xl p-6 space-y-3 flex flex-col justify-between relative overflow-visible min-h-[200px] shadow-lg"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">100% Secured</h3>
              <p className="text-gray-800 leading-snug text-sm">
                We Offer A Comprehensive Range Of Innovative Financial Services
                Tailored To Meet Your Needs.
              </p>
            </div>
            <img
              src="/images/padlock.png"
              alt="Security"
              className="w-24 h-auto object-contain absolute -bottom-4 left-1/2 transform -translate-x-1/2 drop-shadow-md"
            />
          </motion.div>

          {/* ⚪ White Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-white text-black rounded-2xl p-6 space-y-3 flex flex-col justify-between relative overflow-visible min-h-[200px] shadow-lg"
          >
            <div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-lg font-bold">$</span>
              </div>
              <h3 className="text-lg font-bold mb-2">
                Hold Money In Any Currency Swap With Ease
              </h3>
            </div>
            <img
              src="/images/btc.png"
              alt="Bitcoin"
              className="w-32 h-auto object-contain absolute -bottom-6 left-1/2 transform -translate-x-1/2 drop-shadow-md"
            />
          </motion.div>

          {/* 💗 Purple Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-[#D946EF] text-white rounded-2xl p-4 flex flex-col justify-center items-center relative min-h-[100px] group transition-all duration-300 shadow-lg"
          >
            <div className="absolute top-3 right-3 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7H7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center leading-tight">
              Visit Our<br />Support Page
            </h3>
          </motion.div>
        </motion.div>

        {/* ✅ Credit Card Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#F7931A]/10 border border-[#F7931A]/20 rounded-full text-[#F7931A] text-sm font-medium">
              💳 CREDIT CARD
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Elevate Your Bill Payments With Our Amazing Card Options
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Rexipay offers innovative and transparent payment card solutions
              that make transactions simple, flexible, and accessible —
              wherever you are.
            </p>
          </div>

          <div className="relative w-full flex justify-center items-center min-h-[400px]">
            <img
              src="/images/rexiatmcards.png"
              alt="Credit Cards Stack"
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>

        {/* ✅ App Download Section */}
        <div className="relative bg-gradient-to-r from-[#F7931A] to-[#FFA94D] rounded-3xl overflow-hidden mt-32">
          <div className="grid md:grid-cols-2 gap-6 items-center p-10 md:p-14 relative min-h-[380px] md:min-h-[420px]">
            <div className="relative flex justify-center md:justify-start">
              <img
                src="/images/threephone.png"
                alt="Rexipay mobile app mockup"
                className="relative w-full max-w-[430px] object-contain drop-shadow-2xl z-20 -mt-10"
              />
            </div>

            <div className="space-y-6 text-black md:pl-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Download the Rexipay App
              </h2>
              <p className="text-black/80 text-base md:text-lg leading-relaxed">
                Take control of your finances anywhere, anytime with our secure
                and user-friendly mobile app.
              </p>

              <div className="flex gap-4">
                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-colors duration-300">
                  <img
                    src="/images/applestore.png"
                    alt="App Store"
                    className="w-6 h-6 object-contain"
                  />
                  <span>App Store</span>
                </button>

                <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-colors duration-300">
                  <img
                    src="/images/playstore.png"
                    alt="Google Play"
                    className="w-6 h-6 object-contain"
                  />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Security Section */}
        <div id="security" className="grid md:grid-cols-3 gap-8 mt-32">
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

      {/* ✅ Fade Up Keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Features;
