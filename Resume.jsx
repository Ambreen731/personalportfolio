
import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const resumeData = [
    {
      year: "2019 – 2021",
      title: "Intermediate in ICS",
      subtitle: "University of Gujrat",
      desc: "Completed with strong focus on Mathematics and Computer Science.",
    },
    {
      year: "2024–2025",
      title: "Front-end Developer",
      subtitle: "Adan IT Center",
      desc: "Skilled in React, Tailwind CSS, and building responsive, user-centric applications.",
    },
    {
      year: "2022–2025",
      title: "Bachelor’s Degree of CS",
      subtitle: "University of Sargodha",
      desc: "Strong foundation in programming, web development, and software engineering.",
    },
    {
      year: "2022–2023",
      title: "WordPress Developer",
      subtitle: "Adan IT Center",
      desc: "Experienced in custom themes, performance optimization, and responsive design.",
    },
    {
      year: "2024–2025",
      title: "Diploma in Computer",
      subtitle: "University of Gujrat",
      desc: "Hands-on training in software, hardware, and IT fundamentals.",
    },
    {
      year: "2023–2034",
      title: "Backend Developer",
      subtitle: "Adan IT Center",
      desc: "Specialized in building scalable server-side applications and APIs.",
    },
  ];

  return (
    <section
      id="resume"
      className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-16"
    >
      {/* Header with slide-down effect */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-4">Resume</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          A quick glance at my academic and professional journey so far.
        </p>
      </motion.div>

      {/* Resume Cards with staggered fade-up */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {resumeData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-cyan-400/40 hover:scale-[1.03] transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-cyan-400 font-semibold text-sm">{item.year}</p>
            <h3 className="text-xl font-bold pt-2">{item.title}</h3>
            <h4 className="text-gray-400 uppercase text-sm pt-1">
              {item.subtitle}
            </h4>
            <p className="text-gray-300 text-sm pt-3">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Resume;

