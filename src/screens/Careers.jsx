// src/screens/Careers.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      description:
        "Work with React and Tailwind to build smooth, modern interfaces for global users.",
    },
    {
      title: "Backend Engineer",
      type: "Full-time",
      location: "Lagos, Nigeria",
      description:
        "Help scale our backend systems using Node.js, Firebase, and REST APIs.",
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Hybrid",
      description:
        "Design sleek, human-centered interfaces for our apps and dashboards.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1D3C] to-[#1C1440] text-white px-6 md:px-16 py-24">
      {/* 🧭 Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our <span className="text-[#A88CFF]">Team</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Be part of a forward-thinking company building Africa’s
          next-generation financial solutions. Explore open roles below.
        </p>
      </motion.div>

      {/* 💼 Job Openings Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {jobOpenings.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-[#7450A9]/30 text-white rounded-3xl p-6 shadow-xl hover:shadow-[#7450A9]/30 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#7450A9]/20 rounded-xl">
                  <Briefcase className="text-[#A88CFF]" />
                </div>
                <h3 className="text-lg font-semibold text-white">{job.title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">{job.description}</p>
              <div className="flex justify-between text-sm text-gray-400 mb-6">
                <span>{job.type}</span>
                <span>{job.location}</span>
              </div>
            </div>

            <button className="w-full bg-[#7450A9] hover:bg-[#8C68D2] text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300">
              Apply Now <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* 🌟 Footer Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-20"
      >
        <p className="text-gray-400">
          Don’t see a role that fits?{" "}
          <span className="text-[#A88CFF] cursor-pointer hover:underline">
            Send us your CV
          </span>{" "}
          — we’re always looking for passionate talent.
        </p>
      </motion.div>
    </div>
  );
};

export default Careers;
