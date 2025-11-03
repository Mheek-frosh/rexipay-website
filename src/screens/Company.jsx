import React from "react";
import { motion } from "framer-motion";

const Company = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1D3C] to-[#1C1440] text-white px-6 md:px-16 py-24">
      {/* 🏦 Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-[#7450A9]">RexiPay</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          RexiPay is revolutionizing digital finance across Africa —
          empowering users and businesses with fast, reliable, and
          secure payment experiences that work{" "}
          <span className="text-[#A88CFF] font-semibold">online and offline</span>.
        </p>
      </motion.div>

      {/* 🧱 Company Overview Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.img
          src="/images/rexipay-office.jpg"
          alt="RexiPay Office"
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
          <p className="text-gray-300 leading-relaxed">
            RexiPay bridges the gap between modern fintech innovation and
            real-world accessibility. From{" "}
            <span className="text-[#A88CFF] font-medium">offline payments</span>{" "}
            to{" "}
            <span className="text-[#A88CFF] font-medium">POS-less transactions</span>,
            our mission is to make financial freedom seamless, inclusive,
            and borderless.
          </p>
        </motion.div>
      </div>

      {/* 💡 Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white/10 backdrop-blur-md text-white rounded-3xl border border-[#7450A9]/30 p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-[#A88CFF]">
            Our Mission
          </h3>
          <p className="text-gray-200">
            To redefine digital payments in Africa by providing smart,
            secure, and inclusive financial solutions that connect
            customers and merchants — anywhere, anytime.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-md text-white rounded-3xl border border-[#7450A9]/30 p-8 shadow-xl hover:scale-[1.02] transition-transform duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-[#A88CFF]">
            Our Vision
          </h3>
          <p className="text-gray-200">
            To become Africa’s most trusted fintech ecosystem,
            enabling instant payments, offline transactions, and
            next-generation banking for all.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Company;
