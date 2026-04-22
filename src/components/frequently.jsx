import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, JavaScript, Node.js, Express, MySQL, and Tailwind CSS, focusing on scalable and high-performance web applications.",
  },
  {
    question: "Are you currently building something?",
    answer:
      "Yes. I am currently building a full-stack JobBoard platform where employers can post jobs and applicants can apply. I am actively developing it as the CEO and lead developer, focusing on real-world scalability, authentication, and job matching features.",
  },
  {
    question: "Are you available for freelance or full-time roles?",
    answer:
      "Yes. I am open to freelance projects, collaborations, and full-time opportunities where I can contribute to impactful and scalable digital products.",
  },
  {
    question: "Do you build both frontend and backend systems?",
    answer:
      "Absolutely. I work as a full-stack developer, building clean user interfaces while also designing secure and efficient backend APIs and databases.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by understanding business goals, then design scalable architecture, build modular systems, and focus on performance, usability, and maintainability.",
  },
  {
    question: "What makes your work different?",
    answer:
      "I combine engineering precision with user-focused design, ensuring applications are not only functional but also intuitive and visually refined.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked{" "}
            <span className="text-amber-400">Questions</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Clear answers about my skills, workflow, and current projects.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                           overflow-hidden transition-all"
              >

                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left
                             hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium leading-snug">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-amber-400 flex-shrink-0"
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}