import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "JobBoard Platform",
    category: "Full-Stack Application",
    desc: "A full-stack recruitment platform connecting job seekers, recruiters, and administrators. It includes authentication, job posting, applications, saved jobs, recruiter dashboards, messaging, and interview workflows.",
    tech: ["React", "Node.js", "Express", "MySQL", "Socket.io"],
    github: "https://github.com/Tutgatluak-bol/jobboard",
    demo: "https://jobboard-45ke.vercel.app",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    highlight: true,
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    desc: "A responsive developer portfolio designed to showcase my projects, technical skills, services, and professional work through a clean, modern, and refined user experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Tutgatluak-bol/Tut-portfolio",
    demo: "https://tutgatluak-bol.github.io/Tut-portfolio/",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B08A18]">
              Selected work
            </p>
          </div>

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
            Projects that turn
            <span className="block text-[#B08A18]">
              ideas into products.
            </span>
          </h2>

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
            A selection of web projects I've built across frontend,
            backend, and full-stack development, combining thoughtful
            interfaces with practical functionality.
          </p>
        </motion.div>

        {/* =========================
            PROJECT SHOWCASE
        ========================= */}
        <div className="mt-20">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className={`
                group
                py-12
                sm:py-16
                lg:py-20
                ${
                  index !== 0
                    ? "border-t border-gray-200 dark:border-gray-800"
                    : ""
                }
              `}
            >
              <div
                className={`
                  grid items-center gap-10
                  lg:grid-cols-2
                  lg:gap-16
                  ${
                    index % 2 !== 0
                      ? "lg:[&>div:first-child]:order-2"
                      : ""
                  }
                `}
              >

                {/* =========================
                    IMAGE
                ========================= */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    bg-gray-100
                    dark:bg-gray-900
                  "
                >

                  <div className="aspect-[16/10]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.035]
                      "
                    />
                  </div>

                  {/* Subtle overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Featured */}
                  {project.highlight && (
                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white/95
                        px-4
                        py-2
                        text-xs
                        font-semibold
                        text-gray-900
                        shadow-sm
                        backdrop-blur
                        dark:bg-gray-900/95
                        dark:text-white
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                      Featured project
                    </div>
                  )}
                </div>

                {/* =========================
                    CONTENT
                ========================= */}
                <div>

                  {/* Category */}
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C9A227]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B08A18]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-6
                      text-3xl
                      font-semibold
                      tracking-[-0.035em]
                      text-gray-950
                      transition-colors
                      duration-300
                      group-hover:text-[#B08A18]
                      dark:text-white
                      sm:text-4xl
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-sm
                      leading-7
                      text-gray-500
                      dark:text-gray-400
                      sm:text-base
                    "
                  >
                    {project.desc}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          text-xs
                          font-medium
                          text-gray-500
                          dark:text-gray-400
                          before:mr-2
                          before:text-[#C9A227]
                          before:content-['•']
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-9 flex flex-wrap items-center gap-6">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-gray-900
                        transition-colors
                        duration-300
                        hover:text-[#B08A18]
                        dark:text-gray-200
                      "
                    >
                      <Github
                        size={17}
                        strokeWidth={1.8}
                      />
                      View code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-gray-900
                        transition-colors
                        duration-300
                        hover:text-[#B08A18]
                        dark:text-gray-200
                      "
                    >
                      Live project
                      <ExternalLink
                        size={16}
                        strokeWidth={1.8}
                      />
                    </a>

                    {/* Circular arrow */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="
                        ml-auto
                        flex
                        h-11
                        w-11
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
                        size={12}
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
                </div>

              </div>
            </motion.article>
          ))}

        </div>

        {/* =========================
            GITHUB CTA
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            border-t
            border-gray-200
            pt-12
            dark:border-gray-800
          "
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <a
              href="https://github.com/Tutgatluak-bol"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-gray-300
                px-6
                py-3
                text-sm
                font-semibold
                text-gray-900
                transition-all
                duration-300
                hover:border-[#C9A227]
                hover:bg-[#C9A227]
                hover:text-white
                dark:border-gray-700
                dark:text-gray-200
              "
            >
              View GitHub
              <ArrowUpRight size={17} />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}