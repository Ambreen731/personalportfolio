
// import React from "react";
// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";
// import ambreen from "../assets/ambreen1.png";

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-[#0f172a] flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-16 text-center md:text-left"
//       data-aos="fade-up"
//     >
//       {/* Text Section */}
//       <div className="text-white max-w-xl" data-aos="fade-right">
//         <h3 className="text-2xl mb-2">Hello, It's Me</h3>
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">Ambreen Fatima</h1>
//         <h2 className="text-2xl md:text-3xl mb-4">
//           And I'm a{" "}
//           <span className="text-cyan-400 font-semibold">
//             <Typewriter
//               words={["MERN-Stack Developer", "Nodejs Enthusiast", "React Developer"]}
//               loop={true}
//               cursor
//               cursorStyle="_"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </span>
//         </h2>
//         <p className="text-gray-300 mb-6">
//           I'm a MERN stack developer skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I create responsive, scalable, and efficient solutions with clean UI and robust backend integration.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
//           <a
//             href="#contact"
//             className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-5 rounded transition duration-300"
//           >
//             Contact Me
//           </a>
//           <a
//             href="/CV.pdf"
//             download
//             className="border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold py-2 px-5 rounded transition duration-300"
//           >
//             Download CV
//           </a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center md:justify-start space-x-6 text-2xl">
//           <a
//             href="https://instagram.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-cyan-400 hover:text-white transition-transform transform hover:scale-125"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://facebook.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-cyan-400 hover:text-white transition-transform transform hover:scale-125"
//           >
//             <FaFacebook />
//           </a>
//           <a
//             href="https://twitter.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-cyan-400 hover:text-white transition-transform transform hover:scale-125"
//           >
//             <FaTwitter />
//           </a>
//         </div>
//       </div>

//       {/* Profile Image Section */}
//       <div className="relative w-64 h-64" data-aos="fade-left">
//         {/* Blurred Gradient Glow */}
//         <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse"></div>

//         {/* Profile Image with Gradient Border */}
//         <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-[3px] shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-500">
//           <div className="w-full h-full rounded-full bg-[#0f172a] p-[3px]">
//             <img
//               src={ambreen}
//               alt="Ambreen Fatima"
//               className="w-full h-full object-cover rounded-full border-4 border-[#0f172a]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ambreen from "../assets/ambreen1.png";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen bg-[#0f172a] flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-16 text-center md:text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Text Section */}
      <motion.div
        className="text-white max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl mb-2">Hello, It's Me</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Ambreen Fatima</h1>
        <h2 className="text-2xl md:text-3xl mb-4">
          And I'm a{" "}
          <span className="text-cyan-400 font-semibold">
            <Typewriter
              words={["MERN-Stack Developer", "Nodejs Enthusiast", "React Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-gray-300 mb-6">
          I'm a MERN stack developer skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I create responsive, scalable, and efficient solutions with clean UI and robust backend integration.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
          <a
            href="#contact"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-5 rounded transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="/CV.pdf"
            download
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold py-2 px-5 rounded transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 text-2xl">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition-transform transform hover:scale-125"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition-transform transform hover:scale-125"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition-transform transform hover:scale-125"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>

      {/* Profile Image Section */}
      <motion.div
        className="relative w-64 h-64"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Blurred Gradient Glow */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse"></div>

        {/* Profile Image with Gradient Border */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-[3px] shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full rounded-full bg-[#0f172a] p-[3px]">
            <img
              src={ambreen}
              alt="Ambreen Fatima"
              className="w-full h-full object-cover rounded-full border-4 border-[#0f172a]"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
