
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';  // Import framer motion
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Run animation only once
    });
  }, []);

  const allProjects = [
    {
      title: 'Stone Paper Scissors',
      description: 'A web-based implementation of the classic Stone Paper Scissors game.',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D22AQEs0NjicRPr2A/feedshare-shrink_800/feedshare-shrink_800/0/1726078195637?e=2147483647&v=beta&t=qyJ6SLvM_oZE9hHK7O_Opq0QS--G03dVauHwLg_jLiU',
      link: '#',
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio website built with React and Tailwind CSS.',
      imageUrl:
        'https://cdn.dribbble.com/userupload/15684858/file/original-48f64cddaaf713a60e1c0195506611b9.jpg?resize=400x0',
      link: '#',
    },
    {
      title: 'React Websites',
      description: 'Developed dynamic and reusable components using React.js.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HGYUqPSg_eEgS44tMB3LAnoIhlUfmMSfbg&s',
      link: '#',
    },
    {
      title: 'MongoDB Full-Stack App',
      description: 'A full-stack app using MongoDB for backend storage.',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/0*BmLKgrU_qFtakYsB.png',
      link: '#',
    },
    {
      title: 'CRUD operations',
      description: 'Built a full-stack CRUD application using the MERN stack.',
      imageUrl:
        'https://www.shutterstock.com/image-illustration/crud-acronym-create-read-update-600nw-2491959959.jpg',
      link: '#',
    },
    {
      title: 'Tic Tac Toe',
      description: 'Created a React-based Tic Tac Toe game with win logic.',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:1200/1*3Rv4KFuTU5IJxCvhY_-tsA.png',
      link: '#',
    },
    {
      title: 'Tailwind Project',
      description: 'Designed a fully responsive UI with Tailwind CSS.',
      imageUrl:
        'https://i.ytimg.com/vi/CQZxeoQeo5c/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA-gBpRs2pyLp1EWwASO-BLU1yd3w',
      link: '#',
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-16"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          A collection of projects I've worked on.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            data-aos="fade-up" // Scroll animation (AOS)
            data-aos-delay={index * 200} // Stagger animation based on index
            whileInView={{ opacity: 1, y: 0 }}  // Trigger on scroll
            initial={{ opacity: 0, y: 100 }} // Initial hidden state
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative overflow-hidden bg-[#1e293b] p-4 rounded-xl border border-gray-700 shadow-lg transform hover:scale-105 transition-all duration-500 max-w-xs mx-auto"
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg transition-all duration-300 transform hover:scale-110"
                whileHover={{ scale: 1.05 }}  // Hover animation
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-cyan-400 opacity-10"></div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
              <p className="text-lg mt-2 text-gray-300">{project.description}</p>
              <motion.a
                href={project.link}
                className="mt-4 inline-block py-3 px-6 bg-cyan-400 text-white font-semibold rounded-xl shadow-md hover:bg-cyan-500 hover:scale-105 transition-all duration-300"
                whileTap={{ scale: 0.95 }} // Click animation
                transition={{ duration: 0.3 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
