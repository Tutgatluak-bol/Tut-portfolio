import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    "Web Development",
    "Full-Stack Application",
    "Frontend UI Design",
    "Backend API Development",
    "Bug Fixing / Debugging",
    "Consultation",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
          }), // ✅ added time
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

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error.text || error);
      alert("Message failed to send. Check console.");
    }

    setLoading(false);
  };

  // console.log(import.meta.env);

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-amber-400">Me</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Tell me about your idea — I’m building scalable web applications
            and would love to work with you.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* SUCCESS MESSAGE */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-amber-400 text-black text-center font-semibold py-2 rounded-xl"
              >
                Message sent successfully 🚀
              </motion.div>
            )}
          </AnimatePresence>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* LEFT COLUMN */}
            <div className="space-y-4">

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10
                           focus:border-amber-400 outline-none transition"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10
                           focus:border-amber-400 outline-none transition"
              />

              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-black border border-white/10
                           focus:border-amber-400 outline-none transition text-white"
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* RIGHT COLUMN */}
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project..."
              rows={9}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10
                         focus:border-amber-400 outline-none transition resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-black font-semibold py-3 rounded-xl
                       hover:scale-[1.02] active:scale-95 transition
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}