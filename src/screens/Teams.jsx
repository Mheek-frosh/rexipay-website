// src/screens/Team.jsx
import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    {
      name: "Alexander Kunle",
      role: "Head of Product Strategy",
      image: "/images/kunle.jpg",
    },
    {
      name: "Efe Oluwa",
      role: "Lead Operations, Lagos",
      image: "/images/efe.jpg",
    },
    {
      name: "Michael Usidamen",
      role: "Flutter Developer",
      image: "/images/michael.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1D3C] to-[#1C1440] text-white px-6 md:px-16 py-24">
      {/* 🧭 Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Meet the <span className="text-[#A88CFF]">RexiPay Team</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A passionate group of innovators, engineers, and creators powering Africa’s
          most advanced{" "}
          <span className="text-[#A88CFF] font-semibold">
            offline-first fintech platform
          </span>.
        </p>
      </motion.div>

      {/* 👥 Team Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-[#7450A9]/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#A88CFF]/30 transition-all duration-300"
          >
            {/* 🖼️ Image */}
            <div className="w-full h-64 overflow-hidden border-b border-[#7450A9]/20">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* 👤 Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#EDE9FF]">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🌟 Closing Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-20 max-w-2xl mx-auto"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          Together, we’re shaping the future of digital payments — 
          making transactions{" "}
          <span className="text-[#A88CFF] font-medium">
            faster, safer, and borderless
          </span>.
        </p>
      </motion.div>
    </div>
  );
};

export default Team;
