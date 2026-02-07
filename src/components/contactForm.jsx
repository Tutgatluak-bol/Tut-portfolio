import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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

    // Construct mailto link
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:ptgatluakb@gmail.com?subject=${subject}&body=${body}`;

    // Open user's default email client
    window.location.href = mailtoLink;

    // Show success message
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Drop me a message and I’ll get back to you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 relative"
        >
          {/* Success message */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-6 py-2 rounded-2xl font-semibold"
              >
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full px-5 py-3 rounded-xl bg-zinc-900 border ${
                errors.name ? "border-red-500" : "border-zinc-800"
              } text-white focus:border-amber-400 focus:outline-none transition`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 absolute left-5 bottom-[-1.2rem]">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full px-5 py-3 rounded-xl bg-zinc-900 border ${
                errors.email ? "border-red-500" : "border-zinc-800"
              } text-white focus:border-amber-400 focus:outline-none transition`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 absolute left-5 bottom-[-1.2rem]">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className={`w-full px-5 py-3 rounded-xl bg-zinc-900 border ${
                errors.message ? "border-red-500" : "border-zinc-800"
              } text-white focus:border-amber-400 focus:outline-none transition resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 absolute left-5 bottom-[-1.2rem]">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 text-black font-semibold px-6 py-3 rounded-2xl hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
