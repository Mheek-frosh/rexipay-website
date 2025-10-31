import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0E1F] border-t border-white/10 pt-16 pb-8 px-6 md:px-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* ✅ Newsletter (Left Side - unchanged except logo image) */}
          <motion.div className="space-y-4 w-full md:w-1/3" variants={fadeUp}>
            <div className="flex items-center gap-2">
              {<img src="/images/logo.png" alt="Rexipay" className="w-6 h-8" />}
              <span className="text-xl md:text-2xl font-normal">Rexipay</span>
            </div>
            <p className="text-gray-400 text-sm">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#F7931A]/50 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-100 transition-colors font-medium"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

          {/* ✅ Text Sections (Right Side, evenly spaced) */}
          <motion.div
            className="grid grid-cols-3 gap-12 w-full md:w-2/3 justify-end text-right"
            variants={fadeUp}
          >
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-white/90">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Email Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campaigns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Offline</a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-semibold mb-4 text-white/90">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-semibold mb-4 text-white/90">Help</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10 my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Social Icons */}
          <motion.div className="flex gap-4" variants={fadeUp}>
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div className="flex gap-6 text-gray-400" variants={fadeUp}>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </motion.div>

          {/* Copyright */}
          <motion.p variants={fadeUp} className="text-gray-400">
            © 2025 Rexipay. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
