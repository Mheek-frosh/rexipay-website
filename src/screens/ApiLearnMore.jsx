import React from "react";
import { motion } from "framer-motion";

const ApiLearnMore = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-8 md:px-20 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        RexiPay API Integration
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg leading-relaxed max-w-3xl mb-10"
      >
        Unlock powerful financial infrastructure with the RexiPay API. Seamlessly
        integrate money transfers, offline transactions, authentication,
        merchant tools, and POS-free payments into your applications. Built for
        developers, fast, secure, and scalable.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">Features:</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Instant fund transfers</li>
          <li>Offline transaction processing</li>
          <li>Merchant verification API</li>
          <li>Customer authentication (Face + Fingerprint)</li>
          <li>Withdraw without ATM / POS machine</li>
          <li>Developer-friendly documentation & SDK</li>
        </ul>
      </motion.div>

      <a
        href="/"
        className="inline-block mt-12 border border-gray-500 hover:border-white hover:text-white px-6 py-3 rounded-lg transition"
      >
        Back Home
      </a>
    </div>
  );
};

export default ApiLearnMore;
