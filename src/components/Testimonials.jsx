import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

// Local images
import ogooTom from "../assets/icons/ogoo-tom.jpg";
import johnsonAchuk from "../assets/icons/johnson-achuk.jpg";
import biarThon from "../assets/icons/biar-thon.jpg";

const testimonials = [
  {
    name: "Johnson Achuk",
    role: "CEO, Pixelpulse",
    rating: 5,
    message:
      "I've known PT Gatluak since he started building JobBoard, and I've watched him grow into a strong developer. His dedication, problem-solving ability, and consistency really stand out.",
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

function Stars({ rating }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={15}
          strokeWidth={1.8}
          className={
            index < rating
              ? "fill-[#D4AF37] text-[#D4AF37]"
              : "text-gray-300 dark:text-gray-700"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const testimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      className="
        bg-white
        px-6
        py-20
        text-gray-900
        transition-colors
        duration-300
        dark:bg-gray-950
        dark:text-white
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#B8952E]
            "
          >
            Testimonials
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-semibold
              tracking-tight
              text-gray-900
              dark:text-white
              sm:text-4xl
            "
          >
            What people say
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-lg
              text-sm
              leading-6
              text-gray-500
              dark:text-gray-400
              sm:text-base
            "
          >
            A few words from people who have worked with me, supported my
            development journey, or seen my work firsthand.
          </p>
        </motion.div>

        {/* TESTIMONIAL */}

        <div className="relative mt-12 sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35 }}
              className="
                relative
                rounded-3xl
                border
                border-gray-200
                bg-gray-50
                px-6
                py-9
                text-center
                transition-colors
                duration-300
                dark:border-gray-800
                dark:bg-gray-900
                sm:px-12
                sm:py-12
              "
            >

              {/* GOLD ACCENT */}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-1
                  w-14
                  -translate-x-1/2
                  rounded-b-full
                  bg-[#D4AF37]
                "
              />

              {/* QUOTE */}

              <div
                className="
                  mx-auto
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E7D59A]
                  bg-white
                  text-[#B8952E]
                  transition-colors
                  duration-300
                  dark:border-[#D4AF37]/30
                  dark:bg-gray-950
                "
              >
                <Quote
                  size={19}
                  strokeWidth={1.8}
                />
              </div>

              {/* AVATAR */}

              <div className="mt-6 flex justify-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="
                    h-20
                    w-20
                    rounded-full
                    border-2
                    border-[#D4AF37]
                    object-cover
                    p-0.5
                  "
                />
              </div>

              {/* STARS */}

              <div className="mt-4">
                <Stars rating={testimonial.rating} />
              </div>

              {/* MESSAGE */}

              <blockquote
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-gray-600
                  dark:text-gray-300
                  sm:text-lg
                  sm:leading-8
                "
              >
                “{testimonial.message}”
              </blockquote>

              {/* PERSON */}

              <div className="mt-7">
                <h3
                  className="
                    text-base
                    font-semibold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {testimonial.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                    sm:text-sm
                  "
                >
                  {testimonial.role}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="
              absolute
              left-0
              top-1/2
              flex
              h-9
              w-9
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-gray-500
              shadow-sm
              transition-all
              duration-300
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-white
              dark:border-gray-700
              dark:bg-gray-950
              dark:text-gray-400
              sm:-translate-x-5
            "
          >
            <ChevronLeft size={17} />
          </button>

          {/* NEXT */}

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="
              absolute
              right-0
              top-1/2
              flex
              h-9
              w-9
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-gray-500
              shadow-sm
              transition-all
              duration-300
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-white
              dark:border-gray-700
              dark:bg-gray-950
              dark:text-gray-400
              sm:translate-x-5
            "
          >
            <ChevronRight size={17} />
          </button>
        </div>

        {/* DOTS */}

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, testimonialIndex) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(testimonialIndex)}
              aria-label={`Show testimonial from ${item.name}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  testimonialIndex === index
                    ? "w-6 bg-[#D4AF37]"
                    : "w-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}