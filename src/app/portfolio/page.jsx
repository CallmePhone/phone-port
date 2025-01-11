"use client";

import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Clone Web Line",
      imageUrl: "/img/clone_line.png",
      description:
        "A clone of the Line web application with similar features and UI.",
    },
    {
      id: 2,
      title: "เกมทายชื่อตารางธาตุ",
      imageUrl: "/img/quizgame.png",
      description: "A quiz game to test your knowledge of the periodic table.",
    },
    {
      id: 3,
      title: "Note App",
      imageUrl: "/img/noteapp.png",
      description:
        "A simple note-taking application to keep track of your tasks.",
    },
    {
      id: 4,
      title: "Random ROV Character",
      imageUrl: "/img/random-rov.png",
      description:
        "A random character generator for the mobile game Realm of Valor.",
    },
  ];

  return (
    <div
      className="relative bg-cover overflow-hidden bg-center min-h-screen"
      style={{ backgroundImage: "url('/img/imgbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto mt-[100px] relative z-10 py-8 text-white"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: project.id * 0.2 }}
              className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;