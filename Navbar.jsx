

import React from "react";

const Navbar = () => {
  const navItems = ["home", "about", "resume", "skills", "project"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white shadow">
      <nav className="flex justify-center items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="mr-auto">
          <h1 className="text-xl font-bold">
            <span className="text-cyan-400">Port</span>folio.
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-14">
          {/* Grouped Nav Links in one rounded box */}
          <div className="flex space-x-8 px-6 py-1 bg-[#202e44] rounded-full">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="capitalize text-sm font-medium hover:text-cyan-400 hover:underline underline-offset-4 transition duration-300"
              >
                {section}
              </a>
            ))}
          </div>

          {/* "Hire Me" button */}
          <a
            href="#contact"
            className="ml-4 px-4 py-1 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition duration-300 text-sm font-semibold"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
