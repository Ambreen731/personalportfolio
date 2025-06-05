import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0f172a] text-gray-400 py-8 px-6 md:px-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-4 text-sm">
        © {new Date().getFullYear()} Syeda Shah. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
          aria-label="GitHub"
        >
          {/* GitHub SVG Icon */}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.893 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.029-2.691-.103-.253-.446-1.27.098-2.645 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.908-1.296 2.746-1.026 2.746-1.026.546 1.375.202 2.392.1 2.645.64.7 1.028 1.596 1.028 2.691 0 3.852-2.339 4.701-4.566 4.949.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.017 10.017 0 0022 12.017C22 6.484 17.523 2 12 2z"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          {/* LinkedIn SVG Icon */}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20.25h-3v-10.5h3v10.5zm-1.5-12c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12h-3v-5.25c0-1.257-.025-2.875-1.75-2.875-1.75 0-2.015 1.364-2.015 2.775v5.35h-3v-10.5h2.885v1.43h.04c.402-.761 1.382-1.562 2.845-1.562 3.043 0 3.605 2.002 3.605 4.602v5.03z" />
          </svg>
        </a>
        <a
          href="mailto:sambreen873@gmail.com"
          className="hover:text-cyan-400 transition-colors duration-300"
          aria-label="Email"
        >
          {/* Email SVG Icon */}
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V6c0-1.103-.896-2-2-2zm0 2v.511l-8 5.01-8-5.01V6h16zM4 18v-9.468l7.386 4.619c.232.146.518.219.798.219s.565-.073.798-.219L20 8.532V18H4z" />
          </svg>
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
