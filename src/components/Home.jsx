import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Download,
} from "lucide-react";

import ProfilePic from "../assets/icons/profile-pic.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-white
        px-6
        pt-24
        pb-20
        text-gray-900
        transition-colors
        duration-300

        dark:bg-gray-950
        dark:text-white
      "
    >

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top-right gold glow */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-96
            w-96
            rounded-full
            bg-[#D4AF37]/10
            blur-3xl
          "
        />

        {/* Bottom-left gold glow */}

        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-96
            w-96
            rounded-full
            bg-[#D4AF37]/10
            blur-3xl
          "
        />

        {/* Small gold circle */}

        <div
          className="
            absolute
            left-[10%]
            top-[25%]
            h-3
            w-3
            rounded-full
            bg-[#D4AF37]
            opacity-60
          "
        />

        <div
          className="
            absolute
            right-[12%]
            bottom-[25%]
            h-2
            w-2
            rounded-full
            bg-[#D4AF37]
            opacity-50
          "
        />

      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          text-center
        "
      >

        {/* =========================================
            INTRODUCTION
        ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-8
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#D4AF37]
          "
        >
          Welcome to my portfolio
        </motion.p>

        {/* =========================================
            PROFILE IMAGE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="relative"
        >

          {/* Outer decorative ring */}

          <div
            className="
              absolute
              -inset-5
              rounded-full
              border
              border-[#D4AF37]/20
            "
          />

          {/* Second decorative ring */}

          <div
            className="
              absolute
              -inset-9
              rounded-full
              border
              border-[#D4AF37]/10
            "
          />

          {/* Gold glow */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-[#D4AF37]/25
              blur-2xl
            "
          />

          {/* Image */}

          <div
            className="
              relative
              h-56
              w-56
              overflow-hidden
              rounded-full
              border-4
              border-[#D4AF37]
              bg-white
              shadow-2xl
              shadow-[#D4AF37]/20

              sm:h-64
              sm:w-64

              lg:h-72
              lg:w-72

              dark:bg-gray-900
            "
          >
            <img
              src={ProfilePic}
              alt="Tut Gatluak"
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

        </motion.div>

        {/* =========================================
            NAME
        ========================================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="
            mt-12
            text-5xl
            font-bold
            leading-tight
            tracking-tight
            text-gray-900

            sm:text-6xl
            lg:text-7xl

            dark:text-white
          "
        >
          Hi, I'm{" "}
          <span className="text-[#D4AF37]">
            Tut Gatluak.
          </span>
        </motion.h1>

        {/* =========================================
            ROLE
        ========================================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            mt-3
            text-2xl
            font-semibold
            text-gray-700

            sm:text-3xl
            lg:text-4xl

            dark:text-gray-200
          "
        >
          Full-Stack{" "}
          <span className="text-[#D4AF37]">
            Developer.
          </span>
        </motion.h2>

        {/* =========================================
            DESCRIPTION
        ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-7
            text-gray-600

            sm:text-lg

            dark:text-gray-400
          "
        >
          I build responsive and practical web applications using
          React, JavaScript, Node.js, Express, MySQL, and REST APIs.
          I enjoy working across the frontend and backend to turn
          ideas into functional products.
        </motion.p>

        {/* =========================================
            BUTTONS
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="
            mt-9
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >

          {/* View projects */}

          <a
            href="#projects"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#D4AF37]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-[#D4AF37]/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#B8941F]
              hover:shadow-xl
            "
          >
            View my work
          </a>

          {/* Download CV */}

          <a
            href="/Tut_Gatluak_CV.pdf"
            download
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D4AF37]/50
              bg-white
              px-7
              py-3.5
              text-sm
              font-semibold
              text-gray-800
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-white

              dark:border-[#D4AF37]/50
              dark:bg-gray-950
              dark:text-gray-200
            "
          >
            <Download size={17} />

            Download CV
          </a>

        </motion.div>

        {/* =========================================
            SOCIAL LINKS
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 1,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-4
          "
        >

          {/* GitHub */}

          <a
            href="https://github.com/Tutgatluak-bol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-gray-600
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-white

              dark:border-gray-800
              dark:bg-gray-950
              dark:text-gray-400
            "
          >
            <Github size={18} />
          </a>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/pt-gatluak-bol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-gray-600
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-white

              dark:border-gray-800
              dark:bg-gray-950
              dark:text-gray-400
            "
          >
            <Linkedin size={18} />
          </a>

          {/* Email */}

          <a
            href="mailto:ptgatluakb@gmail.com"
            aria-label="Email"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-gray-600
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-white

              dark:border-gray-800
              dark:bg-gray-950
              dark:text-gray-400
            "
          >
            <Mail size={18} />
          </a>

        </motion.div>

        {/* =========================================
            SMALL GOLD DIVIDER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 1.1,
          }}
          className="
            mt-12
            h-px
            w-20
            bg-[#D4AF37]
          "
        />

      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================= */}

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[#D4AF37]
          transition-colors
          hover:text-[#B8941F]
        "
      >
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
          "
        >
          Scroll
        </span>

        <ArrowDown
          size={18}
          strokeWidth={1.5}
        />
      </motion.a>

    </section>
  );
}