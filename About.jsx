
import React from "react";
import { motion } from "framer-motion";
import ambreen1 from "../assets/ambreen1.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-16"
    >
      {/* Image Section */}
      <motion.div
        className="relative w-64 h-64 md:w-[350px] md:h-[350px] flex-shrink-0"
        whileInView={{ opacity: 1, x: 0 }}  // Trigger animation on scroll into view
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        {/* Blurred glow behind */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse"></div>

        {/* Profile image with glow border */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-[3px] shadow-lg shadow-cyan-500/30">
          <div className="w-full h-full rounded-full bg-[#0f172a] p-[3px]">
            <img
              src={ambreen1}
              alt="Ambreen Fatima"
              className="w-full h-full object-cover rounded-full border-4 border-[#0f172a]"
            />
          </div>
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="max-w-xl"
        whileInView={{ opacity: 1, x: 0 }}  // Trigger animation on scroll into view
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 mb-6 text-lg">
          I'm a{" "}
          <span className="text-cyan-400 font-medium">MERN stack developer</span>{" "}
          skilled in building full-stack web applications with clean, scalable
          code and beautiful user experiences.
        </p>

        <ul className="text-gray-300 space-y-2 mb-6">
          <li>
            <span className="font-semibold text-white">Name:</span> Ambreen Fatima
          </li>
          <li>
            <span className="font-semibold text-white">Date of Birth:</span> November 20, 2003
          </li>
          <li>
            <span className="font-semibold text-white">Address:</span> ABC Street, City, Country
          </li>
          <li>
            <span className="font-semibold text-white">Email:</span> ambreen@gmail.com
          </li>
          <li>
            <span className="font-semibold text-white">Phone:</span> +1-2234-5678-90
          </li>
        </ul>

        <p className="text-lg text-white font-semibold mb-4">
          <span className="text-blue-400 text-2xl font-bold">6+</span> Projects Completed
        </p>

        {/* CTA Button */}
        <motion.a
          href="#project"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 via-gray-400 to-pink-500 hover:from-gray-500 hover:to-pink-600 text-blue px-6 py-3 rounded-full font-bold shadow-md transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See My Projects
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
