import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in building modern web applications using React, JavaScript, Node.js, Express, MySQL, and Tailwind CSS, focusing on performance, scalability, and clean architecture.",
  },
  {
    question: "Are you available for freelance or full‑time roles?",
    answer:
      "Yes. I am open to freelance projects, collaborations, and full‑time opportunities where I can contribute to impactful digital products.",
  },
  {
    question: "Do you build both frontend and backend systems?",
    answer:
      "Absolutely. As a full-stack developer, I design intuitive user interfaces while also engineering secure, efficient backend services and APIs.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I begin by understanding business goals and user needs, then architect scalable solutions, prioritize performance, and deliver maintainable code with strong attention to detail.",
  },
  {
    question: "What makes your work different?",
    answer:
      "I combine technical precision with user-centered design, ensuring products are not only functional but also enjoyable and visually refined.",
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
      className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Quick answers to common questions about my skills, process, and
            availability.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ originY: 0.5 }}
                    className="text-amber-400"
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
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
