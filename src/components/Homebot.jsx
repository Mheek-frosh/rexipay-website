import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const HomeBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi there! I'm Rexi, your payment assistant. How can I help you today?" },
  ]);
  const [message, setMessage] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMsg = { from: "user", text: message };
    setMessages((prev) => [...prev, newMsg]);
    generateBotReply(message);
    setMessage("");
  };

  const generateBotReply = (userText) => {
    const text = userText.toLowerCase();
    let reply = "";

    if (text.includes("about") || text.includes("rexi")) {
      reply =
        "💡 RexiPay is Africa’s first offline-first fintech solution — enabling transactions even without internet or POS terminals!";
    } else if (text.includes("transfer") || text.includes("send money")) {
      reply =
        "💸 You can transfer funds instantly using the RexiPay app or even offline through our RexiPay Business partners.";
    } else if (text.includes("card") || text.includes("atm")) {
      reply =
        "💳 Our custom RexiPay Offline Payment Card lets you complete transactions without internet or a physical POS. Just tap and confirm with biometrics.";
    } else if (text.includes("download") || text.includes("app")) {
      reply =
        "📱 You can download the RexiPay and RexiBusiness apps from the Google Play Store or Apple App Store.";
    } else if (text.includes("help") || text.includes("support")) {
      reply =
        "🧭 I’m here to help! You can also reach our support team at support@rexipay.com for technical or account-related issues.";
    } else {
      reply =
        "🤖 Hmm… I’m not sure about that yet, but I’ll learn soon! Try asking about ‘transfer’, ‘card’, or ‘download’.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-inter">
      {/* 🟣 Floating Bot Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-white transition-all duration-300 ${
          isOpen ? "bg-[#A88CFF]" : "bg-[#0F1430] hover:bg-[#1C1C4A]"
        }`}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* 💬 Expandable Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-80 bg-gradient-to-b from-[#0F1D3C] to-[#1C1440] border border-[#7450A9]/40 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md text-white"
          >
            {/* 🧭 Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="font-semibold text-lg text-[#EDE9FF]">Rexi Assistant 🤖</h3>
              <button onClick={handleToggle} className="text-gray-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* 💬 Chat Area */}
            <div
              ref={chatRef}
              className="h-60 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-[#A88CFF]/30"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm p-3 max-w-[80%] rounded-2xl ${
                    msg.from === "bot"
                      ? "bg-white/10 text-gray-100"
                      : "bg-[#A88CFF] text-[#0F1430] ml-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* ✍️ Input Section */}
            <form
              onSubmit={handleSend}
              className="flex items-center border-t border-white/10 bg-white/5 px-3 py-3"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm outline-none px-2"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                className="bg-[#A88CFF] hover:bg-[#C6B3FF] text-[#0F1430] rounded-full p-2 ml-2"
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
