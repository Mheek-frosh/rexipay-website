import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [message, setMessage] = useState("");

  const faqs = [
    {
      question: "What are the benefits of using RexiPay money transfer?",
      answer:
        "RexiPay delivers fast, secure, and seamless transfers with low fees, instant confirmations, and global reach across multiple currencies.",
    },
    {
      question: "What are the transaction limits on RexiPay?",
      answer:
        "Limits depend on your verification level. Standard users can transfer up to $10,000 per transaction, while verified users enjoy higher limits.",
    },
    {
      question: "What fees does RexiPay charge?",
      answer:
        "We maintain transparent pricing. Domestic transfers start from 1%, while international fees vary between 1–3% based on destination.",
    },
    {
      question: "Can I track my transactions in real time?",
      answer:
        "Yes. All transactions can be tracked live via the RexiPay app or dashboard, with instant notifications at every stage.",
    },
    {
      question: "How fast are money transfers?",
      answer:
        "Most transfers complete instantly or within minutes. International transfers may take 1–3 business days depending on regulations.",
    },
    {
      question: "Is RexiPay available for businesses?",
      answer:
        "Absolutely. We support business and bulk payments, including APIs and dedicated enterprise support.",
    },
    {
      question: "Can I schedule future transfers?",
      answer:
        "Yes, RexiPay allows you to schedule transfers ahead of time directly from your dashboard.",
    },
    {
      question: "How secure is RexiPay?",
      answer:
        "We use bank-grade encryption, 2FA, fraud monitoring, and compliance checks to keep your funds safe.",
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    alert("Message sent! Our support team will reach out shortly.");
    setMessage("");
  };

  return (
    <section className="relative py-28 px-6 md:px-24 overflow-hidden bg-gradient-to-b from-[#090D20] via-[#0F1430] to-[#0A0E25] text-white">
      
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#A88CFF]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7450A9]/10 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="text-[#A88CFF]" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about RexiPay — fast answers, no confusion.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-5 mb-28">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden transition hover:shadow-xl hover:shadow-[#A88CFF]/20"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition"
              >
                <span className="font-medium text-lg text-white/90 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-[#A88CFF] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 text-gray-400 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative glass rounded-3xl p-10 md:p-14 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Send us a message and our support team will respond shortly.
            </p>
          </div>

          <form onSubmit={handleSendMessage} className="relative max-w-3xl mx-auto">
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-[#A88CFF] transition"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="absolute bottom-4 right-4 px-7 py-3 rounded-full bg-gradient-to-r from-[#A88CFF] to-[#7450A9] text-[#0F1430] font-semibold shadow-lg shadow-[#7450A9]/40"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
