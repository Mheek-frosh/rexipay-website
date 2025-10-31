import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Add image URLs (make sure they exist in /public/images/)
  const testimonials = [
    {
      name: "Lama Nie",
      role: "Entrepreneur",
      text: "I have been using Rexipay for over a year now, and it has completely changed how I manage my finances. The service is fast, reliable, and user-friendly. I highly recommend it to anyone looking for a trustworthy financial solution.",
      image: "/images/testimonialperson.png",
    },
    {
      name: "Sarah Johnson",
      role: "Freelancer",
      text: "Rexipay has transformed how I handle money for my clients. The interface is intuitive, transactions are instant, and customer support is top-notch. I can’t imagine going back to traditional banking.",
      image: "/images/testimonialperson2.jpg", // ✅ Replace with your 2nd image
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      text: "As a business owner, I rely on Rexipay for secure and efficient payments. The platform’s speed, transparency, and advanced security features give me complete peace of mind.",
      image: "/images/testimonialperson3.jpg", // ✅ Replace with your 3rd image
    },
  ];

  // ✅ Auto-loop every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-6 md:px-24 bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0F1430] border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ✅ Left Image Area (auto-changes) */}
            <div className="relative flex justify-center items-center transition-all duration-700">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-full max-w-[420px] md:max-w-[480px] lg:max-w-[520px] rounded-2xl object-cover shadow-2xl transition-all duration-700"
              />

              {/* Optional glow background */}
              <div className="absolute top-10 -right-10 w-32 h-32 bg-[#F7931A]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#6A6DD2]/20 rounded-full blur-3xl"></div>
            </div>

            {/* ✅ Right Content Area */}
            <div className="space-y-6 transition-all duration-700">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {testimonials[currentSlide].name}
                </h3>
                <p className="text-[#F7931A] font-medium">
                  {testimonials[currentSlide].role}
                </p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {testimonials[currentSlide].text}
              </p>

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
                  }
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2 pt-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#F7931A] scale-110"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
