import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "I work primarily with React, JavaScript, Tailwind CSS, Node.js, Express, MySQL, and REST APIs. I also use tools such as Git, GitHub, VS Code, and Postman.",
  },
  {
    question: "Are you currently building a project?",
    answer:
      "Yes. One of my main projects is JobBoard, a full-stack recruitment platform connecting job seekers, recruiters, and administrators. It includes authentication, job posting, applications, saved jobs, dashboards, messaging, and interview workflows.",
  },
  {
    question: "Do you work on both frontend and backend?",
    answer:
      "Yes. I work across the frontend and backend, building React interfaces and connecting them to Node.js, Express, MySQL, and REST APIs.",
  },
  {
    question: "Are you available for development opportunities?",
    answer:
      "I'm open to development opportunities, collaborations, freelance projects, and roles where I can continue contributing and growing as a developer.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact me through the form in the Connect section or reach me directly by email at ptgatluakb@gmail.com | +211923482721.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
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
          className="mx-auto max-w-2xl text-center"
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
            FAQ
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
            Frequently asked questions
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-gray-500
              dark:text-gray-400
              sm:text-base
            "
          >
            A few quick answers about my skills, projects, and how to get in
            touch.
          </p>
        </motion.div>

        {/* QUESTIONS */}
        <div
          className="
            mt-12
            divide-y
            divide-gray-200
            border-y
            border-gray-200
            dark:divide-gray-800
            dark:border-gray-800
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-6
                    text-left
                    transition-colors
                    duration-200
                  "
                >
                  <span
                    className={`
                      text-base
                      font-medium
                      transition-colors
                      duration-200
                      sm:text-lg
                      ${
                        isOpen
                          ? "text-[#B8952E]"
                          : "text-gray-900 group-hover:text-[#B8952E] dark:text-gray-100"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* ICON */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`
                      flex
                      h-8
                      w-8
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-colors
                      duration-200
                      ${
                        isOpen
                          ? "border-[#D4AF37] bg-[#D4AF37] text-white"
                          : "border-gray-200 bg-white text-gray-500 group-hover:border-[#D4AF37] group-hover:text-[#B8952E] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }
                    `}
                  >
                    <ChevronDown
                      size={17}
                      strokeWidth={1.7}
                    />
                  </motion.span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="relative pb-6 pr-10">

                        {/* GOLD ACCENT */}
                        <div
                          className="
                            absolute
                            left-0
                            top-0
                            h-full
                            w-0.5
                            rounded-full
                            bg-[#D4AF37]
                          "
                        />

                        <p
                          className="
                            max-w-3xl
                            pl-4
                            text-sm
                            leading-6
                            text-gray-500
                            dark:text-gray-400
                            sm:text-base
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CONTACT CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#D4AF37]
              px-6
              py-3
              text-sm
              font-medium
              text-[#9F7F20]
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-white
              dark:text-[#D4AF37]
            "
          >
            Have another question?
          </a>
        </motion.div>

      </div>
    </section>
  );
}