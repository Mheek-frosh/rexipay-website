import React from "react";
import { motion } from "framer-motion";

const Company = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1D3C] to-[#1C1440] text-white px-6 md:px-16 py-24">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-[#7450A9]">RexiPay</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          RexiPay is a next-generation fintech platform redefining how
          money moves across Africa. We empower individuals and
          businesses with{" "}
          <span className="text-[#A88CFF] font-semibold">
            secure, fast, and inclusive digital payment solutions
          </span>{" "}
          designed to work seamlessly — online, offline, and across borders.
        </p>
      </motion.div>

      {/* Company Overview */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
        <motion.img
          src="/images/rexipay-office.jpg"
          alt="RexiPay Team"
          className="rounded-3xl border border-[#7450A9]/40 shadow-2xl w-full h-[350px] object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#A88CFF]">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            RexiPay is built for Africa’s realities — unreliable internet,
            fragmented banking systems, and underserved populations.
            Our platform bridges the gap between modern financial
            innovation and everyday accessibility.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From{" "}
            <span className="text-[#A88CFF] font-medium">
              offline-first payments
            </span>{" "}
            and{" "}
            <span className="text-[#A88CFF] font-medium">
              POS-less merchant transactions
            </span>{" "}
            to crypto-enabled transfers, RexiPay removes friction and
            unlocks financial inclusion at scale.
          </p>
        </motion.div>
      </div>

      {/* Why RexiPay */}
      <motion.div
        className="mb-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#A88CFF]">
          Why RexiPay
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Africa’s payment ecosystem is fragmented, expensive, and
          unreliable. RexiPay was created to solve these challenges by
          offering a unified financial platform that prioritizes
          accessibility, security, and real-world usability — even in
          low-connectivity environments.
        </p>
      </motion.div>

      {/* Value Propositions */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "Offline Payments",
            text: "Enable transactions without internet access, ensuring reliability in every environment."
          },
          {
            title: "Instant Transfers",
            text: "Send and receive money in real-time with minimal fees and maximum transparency."
          },
          {
            title: "Merchant-Friendly",
            text: "No POS hardware required — merchants accept payments directly from their devices."
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-3xl border border-[#7450A9]/30 p-8 shadow-xl hover:scale-[1.03] transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-[#A88CFF]">
              {item.title}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Traction / Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-24 text-center">
        {[
          { value: "100K+", label: "Active Users" },
          { value: "₦5B+", label: "Transaction Volume" },
          { value: "10+", label: "African Markets" },
          { value: "99.9%", label: "Uptime Reliability" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-2xl p-6 border border-[#7450A9]/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
          >
            <h4 className="text-3xl font-bold text-[#A88CFF]">
              {stat.value}
            </h4>
            <p className="text-gray-300 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-[#7450A9]/30 p-8 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-[#A88CFF]">
            Our Mission
          </h3>
          <p className="text-gray-200 leading-relaxed">
            To democratize access to financial services by delivering
            secure, scalable, and inclusive payment technology that
            empowers individuals and businesses — anywhere, anytime.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl border border-[#7450A9]/30 p-8 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-[#A88CFF]">
            Our Vision
          </h3>
          <p className="text-gray-200 leading-relaxed">
            To become Africa’s most trusted fintech ecosystem — powering
            everyday payments, digital assets, and the next generation
            of borderless banking experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Company;
