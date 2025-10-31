import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
        "Most transfers are completed instantly or within minutes. International transfers may take 1-3 business days depending on the destination country and banking regulations.",
    },
    {
      question: "What Are The Fees Associated With Using BITcash Money Transfer Service?",
      answer:
        "Our fee structure is transparent and competitive. Fees range from 1-3% depending on the transfer type, amount, and destination. No hidden charges.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-24 bg-[#0A0A0A] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#0F1430]/60 backdrop-blur-md transition-all"
            >
              {/* Question Button */}
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

              {/* Answer Section */}
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
      </div>
    </section>
  );
};

export default FAQ;
