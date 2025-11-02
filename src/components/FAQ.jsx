import React, { useState } from "react";
import { ChevronDown, Send } from "lucide-react";

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
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#F7931A] to-[#FFD580] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#0F1430]/60 backdrop-blur-md transition-all hover:shadow-lg hover:shadow-[#F7931A]/20"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
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

              {/* Answer */}
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

        {/* Contact Section */}
        <div className="mt-10 text-center bg-gradient-to-b from-[#0F1430] to-[#14193D] rounded-2xl p-8 shadow-xl border border-white/10 backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Send us a message and our support team will respond as soon as possible.
          </p>

          <form
            onSubmit={handleSendMessage}
            className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-white/10 text-white placeholder-gray-400 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F7931A]"
            />
            <button
              type="submit"
              className="bg-[#F7931A] text-black font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#ff9d1a] transition-all"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F7931A]/10 blur-3xl rounded-full" />
    </section>
  );
};

export default FAQ;
