import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, LifeBuoy, Sparkles } from "lucide-react";

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
    alert(
      "Thanks for reaching out! Our support team has received your request and will get back to you shortly."
    );
    setFormData({ name: "", email: "", issueType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1D3C] via-[#151F4A] to-[#1C1440] text-white px-6 md:px-16 py-28 relative overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#A88CFF]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-52 h-52 bg-[#7450A9]/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="flex justify-center mb-4">
          <Sparkles className="text-[#A88CFF]" size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          We’re Here to <span className="text-[#A88CFF]">Help You</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
          At RexiPay, your experience matters. Whether it’s a transaction concern,
          account issue, or feedback — our support team is ready to assist you.
        </p>
      </motion.div>

      {/* Support Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-[#7450A9]/40 p-8 md:p-10 shadow-2xl relative z-10"
      >
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#A88CFF] outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@rexipay.com"
              required
              className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#A88CFF] outline-none transition"
            />
          </div>
        </div>

        {/* Issue Type */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-300">
            Type of Issue
          </label>
          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            required
            className="w-full bg-[#1A1F3C] text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#A88CFF] outline-none appearance-none"
          >
            <option value="">Select an issue</option>
            <option value="transaction">Transaction Issue</option>
            <option value="login">Login Problem</option>
            <option value="app">App Bug or Crash</option>
            <option value="feedback">General Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block text-sm mb-2 text-gray-300">
            Describe Your Issue
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us what happened. The more details, the better we can help."
            required
            className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#A88CFF] outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="w-full bg-gradient-to-r from-[#A88CFF] to-[#7450A9] text-[#0F1430] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#7450A9]/40 transition"
        >
          <Send size={18} /> Send Message
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-20 text-gray-400 relative z-10"
      >
        <LifeBuoy className="mx-auto text-[#A88CFF] mb-3" size={30} />
        <p className="text-lg">
          Need urgent help? Email us at{" "}
          <span className="text-[#CCFF00] font-medium">
            support@rexipay.com
          </span>
        </p>
      </motion.div>

      {/* Logo at Bottom */}
      <div className="flex justify-center mt-16 relative z-10">
        <img
          src="/images/logo.png"
          alt="RexiPay Logo"
          className="w-12 opacity-80 hover:opacity-100 transition"
        />
      </div>
    </div>
  );
};

export default Support;
