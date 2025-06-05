import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-[#0f172a] text-white py-20 px-6 md:px-20"
      initial={{ opacity: 0, y: 40 }}  // Start hidden with offset
      whileInView={{ opacity: 1, y: 0 }}  // Animate to visible and move to normal position
      viewport={{ once: true }}  // Trigger once when in view
      transition={{ duration: 0.6 }}  // Smooth duration for transition
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        <p className="text-gray-400 pt-4 max-w-xl mx-auto">
          Let's connect! Fill out the form below or use my contact details to reach me directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}  // Start with hidden left
          whileInView={{ opacity: 1, x: 0 }}  // Fade and slide in
          viewport={{ once: true }}  // Trigger animation when in view
          transition={{ duration: 0.6 }}  // Smooth transition
          className="bg-gray-900 p-6 rounded-lg space-y-6 border border-gray-700 shadow-lg hover:shadow-cyan-500/30 transition duration-300"
        >
          <div>
            <p className="text-cyan-400 font-semibold">Name</p>
            <p className="text-gray-300">Ambreen Fatima</p>
          </div>
          <div>
            <p className="text-cyan-400 font-semibold">Location</p>
            <p className="text-gray-300">Gujrat, Pakistan</p>
          </div>
          <div>
            <p className="text-cyan-400 font-semibold">Phone</p>
            <p className="text-gray-300">+92 300 1234567</p>
          </div>
          <div>
            <p className="text-cyan-400 font-semibold">Email</p>
            <p className="text-gray-300">
              <a href="mailto:sambreen873@gmail.com" className="hover:underline">
                sambreen873@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}  // Start with hidden right
          whileInView={{ opacity: 1, x: 0 }}  // Fade and slide in
          viewport={{ once: true }}  // Trigger animation when in view
          transition={{ duration: 0.6 }}  // Smooth transition
          className="bg-gray-900 p-6 rounded-lg space-y-4 border border-gray-700 shadow-lg hover:shadow-cyan-500/30 transition duration-300"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject "
            required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-6 rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
