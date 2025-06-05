
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0f172a] text-white py-16 px-8 md:px-20 min-h-screen"
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-gray-400">
          Skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Express, Node.js, and MongoDB to build modern, responsive web applications.
        </p>
      </motion.div>

      {/* Skill Bars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <SkillItem key={i} name={skill.name} percentage={skill.percentage} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "Express", percentage: 80 },
  { name: "Node.js", percentage: 80 },
  { name: "MongoDB", percentage: 80 },
];

const SkillItem = ({ name, percentage, delay }) => (
  <motion.div
    className="mb-4"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex justify-between mb-1">
      <span className="font-medium text-white">{name}</span>
      <span className="text-sm text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, delay }}
      />
    </div>
  </motion.div>
);

export default Skills;

