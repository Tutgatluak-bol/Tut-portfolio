import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// Import local images
import ogooTom from "../assets/icons/ogoo-tom.jpg";
import johnsonAchuk from "../assets/icons/johnson-achuk.jpg";
import biarThon from "../assets/icons/biar-thon.jpg";

// Testimonials data (added rating)
const testimonials = [
  {
    name: "Johnson Achuk",
    role: "CEO, Pixelpulse",
    rating: 5,
    message:
      "Working with PT Gatluak was a game-changer. He delivered a clean, modern web app ahead of schedule and exceeded expectations.",
    avatar: johnsonAchuk,
  },
  {
    name: "Biar Thon",
    role: "Co-founder, Pixelpulse",
    rating: 4,
    message:
      "His attention to detail and ability to translate ideas into a functional interface is unmatched.",
    avatar: biarThon,
  },
  {
    name: "Ogoo Tom",
    role: "ICT Teacher, Darling Wisdom Academy Secondary School",
    rating: 5,
    message:
      "I have witnessed his dedication and growth over time. His ability to build a professional portfolio shows strong technical skill.",
    avatar: ogooTom,
  },
];

// Star renderer
function Stars({ rating }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-white/20"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What People <span className="text-amber-400">Say</span>
        </h2>

        <p className="text-gray-400 mb-12">
          Feedback from clients, mentors, and collaborators.
        </p>

        <div className="relative">

          {/* CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center space-y-4"
            >
              {/* avatar */}
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full object-cover border-2 border-amber-400"
              />

              {/* stars */}
              <Stars rating={testimonials[index].rating} />

              {/* message */}
              <p className="text-gray-200 italic leading-relaxed">
                "{testimonials[index].message}"
              </p>

              {/* name */}
              <h3 className="text-white font-semibold text-lg">
                {testimonials[index].name}
              </h3>

              {/* role */}
              <span className="text-gray-400 text-sm">
                {testimonials[index].role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* NAV BUTTONS */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-amber-400 text-black p-3 rounded-full hover:scale-110 transition"
          >
            &#8592;
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-400 text-black p-3 rounded-full hover:scale-110 transition"
          >
            &#8594;
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index
                  ? "bg-amber-400 scale-125"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}