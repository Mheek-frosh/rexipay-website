// src/screens/Team.jsx
import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    {
      name: "Alexander Kunle",
      role: "Head of Product Strategy",
      image: "/images/thirdpic.png",
      bio: "Leads RexiPay’s product vision and strategy, driving innovation across offline payments, merchant tools, and scalable fintech solutions tailored for Africa."
    },
    {
      name: "Efe Oluwa",
      role: "Lead Operations, Lagos",
      image: "/images/ifepic.png",
      bio: "Oversees operational execution and merchant adoption across Lagos, ensuring reliability, compliance, and seamless user experiences on the RexiPay platform."
    },
    {
      name: "Michael Usidamen",
      role: "Flutter Engineer & Product Builder",
      image: "/images/mikepic.png",
      bio: "Builds and scales RexiPay’s mobile applications with a focus on performance, security, and offline-first financial experiences."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1D3C] to-[#1C1440] text-white px-6 md:px-16 py-24">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Meet the <span className="text-[#A88CFF]">RexiPay Team</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A team of forward-thinking builders, operators, and innovators
          committed to powering Africa’s most trusted{" "}
          <span className="text-[#A88CFF] font-semibold">
            offline-first financial ecosystem
          </span>.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group bg-white/10 backdrop-blur-md border border-[#7450A9]/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-[#A88CFF]/30 transition-all duration-300"
          >
            
            {/* Image Container */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />

              {/* Hover Bio Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D3C]/95 via-[#0F1D3C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 text-left"
                >
                  <h4 className="text-lg font-semibold text-[#A88CFF] mb-2">
                    Bio
                  </h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#EDE9FF]">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-24 max-w-2xl mx-auto"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          Together, we are building the future of payments —
          enabling transactions that are{" "}
          <span className="text-[#A88CFF] font-medium">
            faster, safer, inclusive, and truly borderless
          </span>.
        </p>
      </motion.div>
    </div>
  );
};

export default Team;
