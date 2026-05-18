import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
  Star,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Import local images
import ogooTom from "../assets/icons/ogoo-tom.jpg"
import johnsonAchuk from "../assets/icons/johnson-achuk.jpg"
import biarThon from "../assets/icons/biar-thon.jpg"

// Testimonials data
const testimonials = [
  {
    name: "Johnson Achuk",
    role: "CEO, Pixelpulse",
    rating: 5,
    email: "johnson@example.com",
    phone: "+211927660520",
    message:
      "Working with PT Gatluak was a game-changer. He delivered a clean, modern web app ahead of schedule and exceeded expectations.",
    avatar: johnsonAchuk,
  },

  {
    name: "Biar Thon",
    role: "Co-founder, Pixelpulse",
    rating: 4,
    email: "biar@example.com",
    phone: "+211921217005",
    message:
      "His attention to detail and ability to translate ideas into a functional interface is unmatched.",
    avatar: biarThon,
  },

  {
    name: "Ogoo Tom",
    role: "ICT Teacher, Darling Wisdom Academy Secondary School",
    rating: 5,
    email: "ogootom@example.com",
    phone: "+211925688669",
    message:
      "I have witnessed his dedication and growth over time. His ability to build a professional portfolio shows strong technical skill.",
    avatar: ogooTom,
  },
]

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
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const prevTestimonial = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const nextTestimonial = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section
      id="testimonials"
      className="relative bg-zinc-950 py-24 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People{" "}
            <span className="text-amber-400">
              Say
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Feedback from clients, collaborators, mentors,
            and professionals I have worked with during
            software development projects and technical growth.
          </p>

        </motion.div>

        {/* Testimonial card */}
        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md
                         rounded-3xl p-8 md:p-12 text-center shadow-2xl"
            >

              {/* Avatar */}
              <div className="flex justify-center mb-6">

                <div className="relative">

                  <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl scale-125" />

                  <img
                    src={testimonials[index].avatar}
                    alt={testimonials[index].name}
                    className="relative w-24 h-24 rounded-full object-cover
                               border-2 border-amber-400 shadow-lg"
                  />

                </div>

              </div>

              {/* Stars */}
              <div className="mb-5">
                <Stars rating={testimonials[index].rating} />
              </div>

              {/* Message */}
              <p className="text-gray-200 italic leading-relaxed text-lg max-w-2xl mx-auto">
                "{testimonials[index].message}"
              </p>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-amber-400 mx-auto my-8 rounded-full" />

              {/* Name */}
              <h3 className="text-white font-semibold text-2xl">
                {testimonials[index].name}
              </h3>

              {/* Role */}
              <p className="text-gray-400 text-sm mt-2">
                {testimonials[index].role}
              </p>

              {/* Contact info */}
              <div className="space-y-3 pt-6">

                {/* Email */}
                <div className="flex items-center justify-center gap-2 text-sm text-amber-400">

                  <Mail size={16} />

                  <a
                    href={`mailto:${testimonials[index].email}`}
                    className="hover:underline"
                  >
                    {testimonials[index].email}
                  </a>

                </div>

                {/* Phone */}
                <div className="flex items-center justify-center gap-2 text-sm text-white/70">

                  <Phone size={16} />

                  <a
                    href={`tel:${testimonials[index].phone}`}
                    className="hover:text-amber-400 transition"
                  >
                    {testimonials[index].phone}
                  </a>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* Left button */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-60px]
                       bg-amber-400 text-black p-3 rounded-full
                       hover:scale-110 transition shadow-lg"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right button */}
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-60px]
                       bg-amber-400 text-black p-3 rounded-full
                       hover:scale-110 transition shadow-lg"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">

          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all rounded-full ${
                i === index
                  ? "w-8 h-3 bg-amber-400"
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  )
}