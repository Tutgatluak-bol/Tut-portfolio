import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  FolderKanban,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import Aboutpic from "../assets/icons/Aboutpic.jpg";

const aboutCards = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "ICT / Computer Science background",
      "Continuous self-learning",
      "Practical project-based development",
    ],
  },
  {
    icon: FolderKanban,
    title: "Projects",
    items: [
      "JobBoard",
      "Personal Portfolio",
    ],
  },
  {
    icon: Wrench,
    title: "Tools I use",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MySQL Workbench",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-24
        text-gray-900
        transition-colors
        duration-300

        dark:bg-gray-950
        dark:text-white

        sm:py-28
        lg:py-32
      "
    >
      {/* ==================================================
          DECORATIVE BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-[#D4AF37]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-20
          h-72
          w-72
          rounded-full
          bg-[#D4AF37]/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#D4AF37]
            "
          >
            About me
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              tracking-tight
              text-gray-900

              sm:text-5xl

              dark:text-white
            "
          >
            A little about me
          </h2>

          <div
            className="
              mx-auto
              mt-5
              h-1
              w-14
              rounded-full
              bg-[#D4AF37]
            "
          />

          <p
            className="
              mt-6
              text-base
              leading-7
              text-gray-600
              sm:text-lg

              dark:text-gray-400
            "
          >
            I enjoy building practical web applications and learning
            through real development projects.
          </p>
        </motion.div>

        {/* ==================================================
            MAIN ABOUT CONTENT
        ================================================== */}

        <div
          className="
            mt-20
            grid
            items-center
            gap-16

            lg:grid-cols-2
            lg:gap-20
          "
        >

          {/* ==================================================
              CENTERED IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              justify-center
            "
          >
            <div className="relative">

              {/* Outer decorative ring */}

              <div
                className="
                  absolute
                  -inset-4
                  rounded-full
                  border
                  border-[#D4AF37]/30
                "
              />

              {/* Second decorative ring */}

              <div
                className="
                  absolute
                  -inset-8
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
                  bg-[#D4AF37]/20
                  blur-2xl
                "
              />

              {/* Image */}

              <div
                className="
                  relative
                  h-[300px]
                  w-[300px]
                  overflow-hidden
                  rounded-full
                  border-4
                  border-[#D4AF37]
                  bg-white
                  shadow-2xl
                  shadow-[#D4AF37]/20

                  sm:h-[380px]
                  sm:w-[380px]

                  dark:bg-gray-900
                "
              >
                <img
                  src={Aboutpic}
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

              {/* Bottom focus badge */}

              <div
                className="
                  absolute
                  -bottom-6
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-[#D4AF37]/40
                  bg-white
                  px-6
                  py-3
                  shadow-xl
                  shadow-black/5

                  dark:bg-gray-900
                  dark:shadow-black/20
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#D4AF37]
                  "
                >
                  Focus
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    font-semibold
                    text-gray-900

                    dark:text-white
                  "
                >
                  Building for the web
                </p>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              ABOUT TEXT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-2xl"
          >

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#D4AF37]
              "
            >
              Who I am
            </p>

            <h3
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-gray-900

                sm:text-4xl

                dark:text-white
              "
            >
              Building software through real projects.
            </h3>

            <div
              className="
                mt-4
                h-1
                w-12
                rounded-full
                bg-[#D4AF37]
              "
            />

            <div className="mt-6 space-y-5">

              <p
                className="
                  leading-7
                  text-gray-600

                  dark:text-gray-400
                "
              >
                I'm a Full-Stack Developer focused on building
                responsive and practical web applications. I work
                across the frontend and backend using React,
                JavaScript, Node.js, Express, MySQL, and REST APIs.
              </p>

              <p
                className="
                  leading-7
                  text-gray-600

                  dark:text-gray-400
                "
              >
                My main full-stack project is JobBoard, a recruitment
                platform connecting job seekers, recruiters, and
                administrators. Building it has given me practical
                experience with authentication, APIs, databases,
                dashboards, applications, messaging, and real
                application workflows.
              </p>

              <p
                className="
                  leading-7
                  text-gray-600

                  dark:text-gray-400
                "
              >
                I enjoy learning by building, solving problems through
                code, and continuously improving the applications I
                work on.
              </p>

            </div>

            {/* ==================================================
                SKILL TAGS
            ================================================== */}

            <div className="mt-7 flex flex-wrap gap-2.5">

              {[
                "React",
                "JavaScript",
                "Node.js",
                "Express",
                "MySQL",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-[#D4AF37]/40
                    bg-[#D4AF37]/5
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-gray-800
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]
                    hover:text-white

                    dark:text-gray-200
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* ==================================================
                CTA
            ================================================== */}

            <a
              href="#contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
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
                hover:-translate-y-0.5
                hover:bg-[#B8941F]
                hover:shadow-xl
              "
            >
              Let's work together

              <ArrowUpRight
                size={17}
              />
            </a>

          </motion.div>
        </div>

        {/* ==================================================
            INFORMATION CARDS
        ================================================== */}

        <div
          className="
            mt-24
            grid
            gap-5

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/50
                  hover:shadow-xl
                  hover:shadow-[#D4AF37]/10

                  dark:border-gray-800
                  dark:bg-gray-900
                  dark:shadow-black/20
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#D4AF37]/10
                    text-[#D4AF37]
                    transition-all
                    duration-300
                    group-hover:bg-[#D4AF37]
                    group-hover:text-white
                  "
                >
                  <Icon
                    size={21}
                    strokeWidth={1.7}
                  />
                </div>

                {/* Title */}

                <h4
                  className="
                    mt-5
                    text-lg
                    font-semibold
                    text-gray-900

                    dark:text-white
                  "
                >
                  {card.title}
                </h4>

                {/* Gold divider */}

                <div
                  className="
                    mt-3
                    h-0.5
                    w-8
                    rounded-full
                    bg-[#D4AF37]
                  "
                />

                {/* Items */}

                <div className="mt-4 space-y-2">

                  {card.items.map((item) => (
                    <p
                      key={item}
                      className="
                        text-sm
                        leading-6
                        text-gray-500

                        dark:text-gray-400
                      "
                    >
                      {item}
                    </p>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}