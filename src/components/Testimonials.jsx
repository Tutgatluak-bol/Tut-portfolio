import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Johnson Achuk",
    role: "CEO, Pixelpulse",
    message:
      "Working with PT Gatluak was a game-changer. He delivered a clean, modern web app ahead of schedule and exceeded expectations.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Biar Thon",
    role: "Co-founder, Pixelpulse",
    message:
      "His attention to detail and ability to translate ideas into a functional interface is unmatched.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sarah Lee",
    role: "Founder, CreativeLabs",
    message:
      "The portfolio site he built perfectly reflects our brand. Highly recommended for anyone looking for a professional developer.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
   {
    name: "Sarah Lee",
    role: "Founder, CreativeLabs",
    message:
      "The portfolio site he built perfectly reflects our brand. Highly recommended for anyone looking for a professional developer.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
   {
    name: "Sarah Lee",
    role: "Founder, CreativeLabs",
    message:
      "The portfolio site he built perfectly reflects our brand. Highly recommended for anyone looking for a professional developer.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What People <span className="text-amber-400">Say</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Here’s what clients and colleagues have said about working with me.
        </p>

        <div className="relative">
          {/* Testimonials */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center space-y-4"
            >
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-amber-400"
              />
              <p className="text-gray-200 italic">"{testimonials[index].message}"</p>
              <h3 className="text-white font-semibold text-lg">
                {testimonials[index].name}
              </h3>
              <span className="text-gray-400 text-sm">
                {testimonials[index].role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-400 text-black p-3 rounded-full hover:scale-110 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-400 text-black p-3 rounded-full hover:scale-110 transition"
          >
            &#8594;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-amber-400 scale-125" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
