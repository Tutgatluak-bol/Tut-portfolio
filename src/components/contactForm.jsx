import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const services = [
    "Web Development",
    "Frontend Development",
    "Full-Stack Application",
    "Frontend UI Design",
    "Backend API Development",
    "Bug Fixing / Debugging",
    "Consultation",
    "Other",
  ];

  /*
  ================================================
  FORM CHANGE
  ================================================
  */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  /*
  ================================================
  FORM SUBMIT
  ================================================
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const now = new Date();

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          time: now.toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent:", response.status);

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error.text || error);

      setError(
        "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        bg-white
        px-6
        py-24
        text-gray-950
        transition-colors
        duration-300
        sm:py-28
        lg:py-32

        dark:bg-gray-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#B08A18]
              "
            >
              Get in touch
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
            Let's talk about
            <span className="block text-[#B08A18]">
              your next project.
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
            Have a project, idea, or opportunity in mind?
            Send me a message and let's discuss how I can
            help bring it to life.
          </p>
        </motion.div>

        {/* =========================================
            CONTACT AREA
        ========================================= */}

        <div
          className="
            mt-16
            grid
            gap-16
            border-t
            border-gray-200
            pt-12

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
            lg:pt-16

            dark:border-gray-800
          "
        >

          {/* =======================================
              LEFT INFORMATION
          ======================================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#B8952E]
                "
              >
                Start a conversation
              </p>

              <h3
                className="
                  mt-3
                  text-xl
                  font-semibold
                  tracking-tight
                  text-gray-950
                  dark:text-white
                  sm:text-2xl
                "
              >
                Tell me what you're building.
              </h3>

              <p
                className="
                  mt-3
                  max-w-md
                  text-sm
                  leading-6
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Website, frontend, backend, or full-stack — let's build it together.
              </p>
            </div>

            {/* CONTACT LINKS */}

            <div className="mt-12">

              {/* EMAIL */}

              <a
                href="mailto:ptgatluakb@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-gray-200
                  py-5
                  transition-colors
                  duration-300
                  hover:border-[#C9A227]

                  dark:border-gray-800
                "
              >
                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-gray-400
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      font-medium
                      text-gray-800
                      transition-colors
                      duration-300
                      group-hover:text-[#B08A18]

                      dark:text-gray-200
                      dark:group-hover:text-[#C9A227]
                    "
                  >
                    ptgatluakb@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                  className="
                    text-gray-400
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#C9A227]
                  "
                />
              </a>

              {/* LINKEDIN */}

              <a
                href="https://linkedin.com/in/pt-gatluak-bol"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-gray-200
                  py-5
                  transition-colors
                  duration-300
                  hover:border-[#C9A227]

                  dark:border-gray-800
                "
              >
                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-gray-400
                    "
                  >
                    LinkedIn
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      font-medium
                      text-gray-800
                      transition-colors
                      duration-300
                      group-hover:text-[#B08A18]

                      dark:text-gray-200
                      dark:group-hover:text-[#C9A227]
                    "
                  >
                    Connect with me
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                  className="
                    text-gray-400
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#C9A227]
                  "
                />
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/Tutgatluak-bol"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-gray-200
                  py-5
                  transition-colors
                  duration-300
                  hover:border-[#C9A227]

                  dark:border-gray-800
                "
              >
                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-gray-400
                    "
                  >
                    GitHub
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-sm
                      font-medium
                      text-gray-800
                      transition-colors
                      duration-300
                      group-hover:text-[#B08A18]

                      dark:text-gray-200
                      dark:group-hover:text-[#C9A227]
                    "
                  >
                    View my projects
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                  className="
                    text-gray-400
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#C9A227]
                  "
                />
              </a>

            </div>
          </motion.div>

          {/* =======================================
              FORM
          ======================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >

            {/* SUCCESS */}

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  className="
                    mb-6
                    flex
                    items-center
                    gap-3
                    border-b
                    border-[#C9A227]
                    pb-4
                    text-sm
                    text-gray-700

                    dark:text-gray-300
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#C9A227]"
                  />

                  <span>
                    Your message has been sent successfully.
                    Thank you!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ERROR */}

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  className="
                    mb-6
                    border-b
                    border-red-200
                    pb-4
                    text-sm
                    text-red-600
                    dark:border-red-900
                    dark:text-red-400
                  "
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* NAME + EMAIL */}

              <div className="grid gap-7 sm:grid-cols-2">

                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-gray-600

                      dark:text-gray-400
                    "
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                      w-full
                      border-0
                      border-b
                      border-gray-300
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-gray-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-[#C9A227]

                      dark:border-gray-700
                      dark:text-white
                      dark:focus:border-[#C9A227]
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-gray-600

                      dark:text-gray-400
                    "
                  >
                    Your email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="
                      w-full
                      border-0
                      border-b
                      border-gray-300
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-gray-900
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-[#C9A227]

                      dark:border-gray-700
                      dark:text-white
                      dark:focus:border-[#C9A227]
                    "
                  />
                </div>

              </div>

              {/* SERVICE */}

              <div>
                <label
                  htmlFor="service"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-gray-600

                    dark:text-gray-400
                  "
                >
                  What can I help with?
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="
                    w-full
                    border-0
                    border-b
                    border-gray-300
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    text-gray-700
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#C9A227]

                    dark:border-gray-700
                    dark:bg-gray-950
                    dark:text-gray-300
                    dark:focus:border-[#C9A227]
                  "
                >
                  <option value="">
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-gray-600

                    dark:text-gray-400
                  "
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="
                    w-full
                    resize-none
                    border-0
                    border-b
                    border-gray-300
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    leading-7
                    text-gray-900
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray-400
                    focus:border-[#C9A227]

                    dark:border-gray-700
                    dark:text-white
                    dark:focus:border-[#C9A227]
                  "
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#C9A227]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:bg-[#B08A18]
                  hover:shadow-md
                  hover:shadow-[#C9A227]/20

                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send message"}

                {!loading && (
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                  />
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}