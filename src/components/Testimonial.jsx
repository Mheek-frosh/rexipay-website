import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Lama Nie",
      role: "Entrepreneur",
      text: "I have been using Rexipay for over a year now, and it has completely changed how I manage my finances. The service is fast, reliable, and user-friendly.",
      image: "/images/testimonialperson.png",
    },
    {
      name: "Sarah Johnson",
      role: "Freelancer",
      text: "Rexipay has transformed how I handle money for my clients. Transactions are instant and the experience feels effortless.",
      image: "/images/testimonialperson2.jpg",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      text: "Secure, fast, and transparent. Rexipay gives me complete confidence managing business payments daily.",
      image: "/images/testimonialperson3.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 md:px-24 bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#F7931A]/40 via-[#6A6DD2]/40 to-[#F7931A]/40">
          <div className="bg-[#0F1430]/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-14 items-center">

              {/* Image */}
              <div className="relative flex justify-center">
                <div className="relative">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-[320px] md:w-[420px] rounded-2xl object-cover shadow-2xl"
                  />

                  {/* Avatar glow */}
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-[#F7931A]/20"></div>
                </div>

                {/* Ambient glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F7931A]/20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#6A6DD2]/20 blur-3xl rounded-full"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-[#F7931A]/70" />

                <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed">
                  “{testimonials[currentSlide].text}”
                </p>

                <div className="pt-4">
                  <h3 className="text-2xl font-semibold">
                    {testimonials[currentSlide].name}
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-[#F7931A]">
                    {testimonials[currentSlide].role}
                  </p>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-6">
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setCurrentSlide(
                          (prev) =>
                            (prev - 1 + testimonials.length) %
                            testimonials.length
                        )
                      }
                      className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={() =>
                        setCurrentSlide(
                          (prev) => (prev + 1) % testimonials.length
                        )
                      }
                      className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <span
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "w-8 bg-[#F7931A]"
                            : "w-2 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
