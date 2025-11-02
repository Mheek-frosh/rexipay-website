import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [message, setMessage] = useState("");

  const faqs = [
    {
      question: "What Are The Benefits Of Using BITcash Money Transfer Service?",
      answer:
        "Rexipay offers fast, secure, and reliable money transfers with low fees, instant processing, and support for multiple currencies worldwide.",
    },
    {
      question: "What Are The Transaction Limits For BITcash Money Transfer Service?",
      answer:
        "Transaction limits vary based on your account verification level. Standard accounts can transfer up to $10,000 per transaction, while verified accounts have higher limits.",
    },
    {
      question: "What Kind Of Fees Are Incurred With BITcash Money Transfer Service?",
      answer:
        "We charge a small percentage-based fee depending on the transfer amount and destination. Domestic transfers start at 1%, while international transfers may vary.",
    },
    {
      question: "Can I Track My BITcash Money Transfer Transactions, And How Do I Do That?",
      answer:
        "Yes! You can track all your transactions in real-time through our mobile app or web dashboard. You'll receive notifications at every step of the transfer process.",
    },
    {
      question: "How Long Does It Take To Transfer Money Using BITcash Money Transfer Service?",
      answer:
        "Most transfers are completed instantly or within minutes. International transfers may take 1–3 business days depending on the destination country and banking regulations.",
    },
    {
      question: "What Are The Fees Associated With Using BITcash Money Transfer Service?",
      answer:
        "Our fee structure is transparent and competitive. Fees range from 1–3% depending on the transfer type, amount, and destination. No hidden charges.",
    },
    {
      question: "Is Rexipay Available For Business Transfers?",
      answer:
        "Yes, Rexipay supports business and bulk transfers with dedicated support and API integrations for companies of all sizes.",
    },
    {
      question: "Can I Schedule A Future Money Transfer?",
      answer:
        "Absolutely! You can schedule transfers ahead of time directly from your dashboard or mobile app.",
    },
    {
      question: "What Security Measures Does Rexipay Use?",
      answer:
        "We use advanced encryption, 2FA, and compliance monitoring to ensure every transaction is safe and fully protected.",
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      console.log("User Message:", message);
      setMessage("");
      alert("Your message has been sent. Our team will get back to you soon!");
    }
  };

  return (
    <section className="py-20 px-6 md:px-24 bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#F7931A] to-[#FFD580] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#0F1430]/60 backdrop-blur-md transition-all hover:shadow-lg hover:shadow-[#F7931A]/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
              >
                <span className="font-medium text-lg text-white/90 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-[#F7931A] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Contact Section */}
        <div className="mt-10 text-center bg-gradient-to-b from-[#0F1430] to-[#14193D] rounded-2xl p-10 shadow-xl border border-white/10 backdrop-blur-md relative h-[300px] md:h-[350px] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Send us a message and our support team will respond as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSendMessage}
            className="relative flex flex-col w-full h-full max-w-2xl mx-auto"
          >
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-base text-white placeholder-gray-400 resize-none focus:outline-none focus:border-[#F7931A]/50 transition-all duration-300 min-h-[180px]"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="absolute bottom-4 right-4 px-6 py-3 bg-[#F7931A] text-white rounded-full text-sm md:text-base font-semibold hover:bg-[#ff9d1a] transition-colors"
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F7931A]/10 blur-3xl rounded-full" />
    </section>
  );
};

export default FAQ;
