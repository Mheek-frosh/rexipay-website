import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const HomeBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hi! I’m Rexi — your smart payment assistant. How can I help today?",
    },
  ]);
  const [message, setMessage] = useState("");
  const chatRef = useRef(null);

  /** 🔽 Auto-scroll on new messages */
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = { from: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);
    generateBotReply(message);
    setMessage("");
  };

  /** 🤖 Simple rule-based response engine */
  const generateBotReply = (userText) => {
    const text = userText.toLowerCase();
    let reply = "";

    if (text.includes("about") || text.includes("rexi")) {
      reply =
        "💡 RexiPay is an offline-first fintech platform built for Africa — enabling payments even without internet or POS devices.";
    } else if (text.includes("transfer") || text.includes("send")) {
      reply =
        "💸 You can send and receive money instantly via the RexiPay app or offline through RexiPay Business partners.";
    } else if (text.includes("card") || text.includes("atm")) {
      reply =
        "💳 RexiPay Offline Cards allow secure tap-to-pay transactions without internet — powered by biometrics and secure chips.";
    } else if (text.includes("download") || text.includes("app")) {
      reply =
        "📱 RexiPay & RexiBusiness apps are available on Google Play Store and Apple App Store.";
    } else if (text.includes("help") || text.includes("support")) {
      reply =
        "🧭 I’ve got you covered! You can also reach our support team at support@rexipay.com.";
    } else {
      reply =
        "🤔 I’m still learning! Try asking about transfers, cards, offline payments, or downloading the app.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-inter">
      {/* 🟣 Floating Action Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300
        ${
          isOpen
            ? "bg-gradient-to-br from-[#A88CFF] to-[#7450A9]"
            : "bg-[#0F1430] hover:bg-[#1C1C4A]"
        }`}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* 💬 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 rounded-3xl overflow-hidden
            bg-gradient-to-b from-[#0F1D3C] to-[#1B1442]
            border border-white/10 shadow-2xl backdrop-blur-xl text-white"
          >
            {/* 🧭 Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <h3 className="font-semibold text-lg text-[#EDE9FF]">
                  Rexi Assistant
                </h3>
                <p className="text-xs text-gray-400">
                  Offline payments, simplified
                </p>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* 💬 Messages */}
            <div
              ref={chatRef}
              className="h-64 px-4 py-4 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-[#A88CFF]/30"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                  ${
                    msg.from === "bot"
                      ? "bg-white/10 text-gray-100"
                      : "bg-gradient-to-br from-[#A88CFF] to-[#C6B3FF] text-[#0F1430] ml-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* ✍️ Input */}
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 px-3 py-3 border-t border-white/10 bg-white/5"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask Rexi something..."
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none px-2"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-[#A88CFF] text-[#0F1430] hover:bg-[#C6B3FF] transition"
              >
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeBot;
