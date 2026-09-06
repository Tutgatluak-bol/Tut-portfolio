import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  Server,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive websites and web applications built with clean structure, usability, and reliable functionality.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Modern interfaces crafted with React, JavaScript, Tailwind CSS, and reusable components.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable backend services and REST APIs using Node.js, Express, and MySQL.",
  },
  {
    icon: Layers,
    title: "Full-Stack Applications",
    description:
      "Complete web products connecting frontend interfaces, backend services, databases, authentication, and application workflows.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        bg-white
        px-6
        py-24
        text-gray-950
        transition-colors
        duration-300
        dark:bg-gray-950
        dark:text-white
        sm:py-28
        lg:py-32
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            HEADER
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Section Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08A18]">
              What I offer
            </p>
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.04em]
              text-gray-950
              dark:text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Services built around
            <span className="block text-[#B08A18]">
              real digital solutions.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-gray-500
              dark:text-gray-400
              sm:text-lg
            "
          >
            I build modern web experiences focused on simplicity, performance, and great user experiences.
          </p>
        </motion.div>

        {/* =========================
            SERVICES
        ========================= */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  group
                  border-b
                  border-gray-200
                  py-10
                  transition-colors
                  duration-300
                  dark:border-gray-800
                  sm:py-12
                "
              >
                <div
                  className="
                    grid
                    items-center
                    gap-7
                    md:grid-cols-[auto_1fr_1.2fr_auto]
                    md:gap-10
                  "
                >

                  {/* =========================
                      ICON
                  ========================= */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-200
                      text-gray-700
                      transition-all
                      duration-300
                      group-hover:border-[#C9A227]
                      group-hover:bg-[#C9A227]
                      group-hover:text-white
                      dark:border-gray-700
                      dark:text-gray-300
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* =========================
                      TITLE
                  ========================= */}
                  <div>
                    <h3
                      className="
                        text-xl
                        font-semibold
                        tracking-[-0.02em]
                        text-gray-950
                        transition-colors
                        duration-300
                        group-hover:text-[#B08A18]
                        dark:text-white
                        sm:text-2xl
                      "
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* =========================
                      DESCRIPTION
                  ========================= */}
                  <p
                    className="
                      max-w-xl
                      text-sm
                      leading-7
                      text-gray-500
                      dark:text-gray-400
                      sm:text-base
                    "
                  >
                    {service.description}
                  </p>

                  {/* =========================
                      ARROW
                  ========================= */}
                  <a
                    href="#contact"
                    aria-label={`Learn more about ${service.title}`}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-200
                      text-gray-600
                      transition-all
                      duration-300
                      group-hover:border-[#C9A227]
                      group-hover:bg-[#C9A227]
                      group-hover:text-white
                      dark:border-gray-700
                      dark:text-gray-300
                    "
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.7}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Statement */}
          <p
            className="
              max-w-xl
              text-sm
              leading-7
              text-gray-500
              dark:text-gray-400
              sm:text-base
            "
          >
            From a simple landing page to a complete full-stack platform,
            I focus on building solutions that are clean, functional, and
            ready to grow.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              text-sm
              font-semibold
              text-gray-950
              transition-colors
              duration-300
              hover:text-[#B08A18]
              dark:text-white
            "
          >
            Let&apos;s work together

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
              className="
                text-[#C9A227]
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}