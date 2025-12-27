import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, LifeBuoy } from "lucide-react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your complaint has been submitted. Our team will get back to you soon!");
    setFormData({ name: "", email: "", issueType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1D3C] to-[#1C1440] text-white px-6 md:px-16 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Need <span className="text-[#A88CFF]">Help?</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We’re here to assist you. Whether it’s a transaction issue, login trouble,
          or feedback — fill out the form below and we’ll respond within 24 hours.
        </p>
      </motion.div>

      {/* Support Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl border border-[#7450A9]/40 p-8 shadow-lg"
      >
        {/*  Name & Email */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#A88CFF] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourname@email.com"
              required
              className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#A88CFF] outline-none"
            />
          </div>
        </div>

        {/*Issue Type*/}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-300">Type of Issue</label>
          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            required
            className="w-full bg-[#1A1F3C] text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#A88CFF] outline-none appearance-none"
            style={{
              backgroundColor: "#1A1F3C",
              color: "white",
            }}
          >
            <option value="" className="bg-[#1A1F3C] text-gray-300">
              Select an issue
            </option>
            <option value="transaction" className="bg-[#1A1F3C] text-white">
              Transaction Issue
            </option>
            <option value="login" className="bg-[#1A1F3C] text-white">
              Login Problem
            </option>
            <option value="app" className="bg-[#1A1F3C] text-white">
              App Bug or Crash
            </option>
            <option value="feedback" className="bg-[#1A1F3C] text-white">
              General Feedback
            </option>
            <option value="other" className="bg-[#1A1F3C] text-white">
              Other
            </option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block text-sm mb-2 text-gray-300">Describe Your Issue</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Please describe your issue or feedback in detail..."
            required
            className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#A88CFF] outline-none resize-none"
          ></textarea>
        </div>

        {/*Submit Button*/}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-[#A88CFF] hover:bg-[#C6B3FF] text-[#0F1430] font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <Send size={18} /> Submit Complaint
        </motion.button>
      </motion.form>

      {/*Contact Info*/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16 text-gray-400"
      >
        <LifeBuoy className="mx-auto text-[#A88CFF] mb-3" size={28} />
        <p>
          Need urgent support? Email us at{" "}
          <span className="text-[#CCFF00]">support@rexipay.com</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Support;
