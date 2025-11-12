import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaMapMarkerAlt, FaClock, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [savedData, setSavedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields before submitting.');
      return;
    }
    setError('');
    // ✉️ EmailJS Integration
    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY      
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    })
    .catch((err) => {
      console.error("❌ EmailJS Error:", err);
      setError("Something went wrong. Please try again.");
    });
  };

  const iconWrapper = `flex items-center justify-center w-12 h-12 rounded-full border text-2xl
                      ${darkMode ? "bg-indigo-500/20 border-indigo-400 text-indigo-400"
                                 : "bg-indigo-1100/20 border-indigo-900 text-indigo-900"}`;
  const textWrapper = darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-400";

  return (
    <section id="contact" className="py-20">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Create Something <span className={`${darkMode?'text-indigo-400':'text-indigo-900'}`}>Amazing!</span>
        </motion.h2>
        <p className={`text-center ${darkMode?'text-gray-400':'text-gray-900'} mb-12 max-w-2xl mx-auto`}>
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

            <div className="flex items-center gap-4">
              <div className={iconWrapper}><FaEnvelope /></div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:bhagyashreeph12@gmail.com" className={`${darkMode?'text-gray-300 hover:text-indigo-400':'text-gray-700 hover:text-indigo-900'}`}>bhagyashreeph12@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className={iconWrapper}><FaPhoneAlt /></div>
              <div>
                <p className="font-medium">Phone</p>
                <p className={textWrapper}>+91 9483451311</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className={iconWrapper}><FaLinkedin /></div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <a href="https://www.linkedin.com/in/bhagyashree-ph-a935a121a" target="_blank" rel="noreferrer" className={textWrapper}>
                  linkedin.com/in/bhagyashree-ph
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className={iconWrapper}><FaGithub /></div>
              <div>
                <p className="font-medium">Github</p>
                <a href="https://github.com/Bhagyashree-ph" target="_blank" rel="noreferrer" className={textWrapper}>
                  github.com/in/bhagyashree-ph
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className={iconWrapper}><FaMapMarkerAlt /></div>
              <div>
                <p className="font-medium">Location</p>
                <p className={textWrapper}>Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className=""
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

            <motion.input
              name="name"
              value={formData.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: '#6366f1' }}
              className="w-full mb-4 p-3 rounded bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
            />

            <motion.input
              name="email"
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: '#6366f1' }}
              className="w-full mb-4 p-3 rounded bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Email"
            />

            <motion.input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: '#6366f1' }}
              className="w-full mb-4 p-3 rounded bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Reason for contact"
            />

            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: '#6366f1' }}
              className="w-full mb-4 p-3 rounded bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={4}
              placeholder="Message"
            />

            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-60 py-3 mx-auto block bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-500 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Snackbar Notification */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
            >
              ✅ Message sent successfully! Thank you for reaching out.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}