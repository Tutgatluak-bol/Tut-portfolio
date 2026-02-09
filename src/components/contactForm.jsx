import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.form onSubmit={handleSubmit} className="space-y-6 relative">
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 bg-amber-400 text-black px-6 py-2 rounded-2xl font-semibold"
              >
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="w-full px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-black font-semibold px-6 py-3 rounded-2xl hover:scale-105 transition-transform"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
