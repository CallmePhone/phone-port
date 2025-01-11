"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Monitor, GitBranch } from "lucide-react";
import { RiTailwindCssFill } from "react-icons/ri";

const MySkill = () => {
  const skills = [
    { name: "Programming", icon: <Code className="w-12 h-12 text-cyan-500" /> },
    { name: "Database", icon: <Database className="w-12 h-12 text-cyan-500" /> },
    { name: "Server Management", icon: <Server className="w-12 h-12 text-cyan-500" /> },
    { name: "Web Development", icon: <Monitor className="w-12 h-12 text-cyan-500" /> },
    { name: "Git", icon: <GitBranch className="w-12 h-12 text-cyan-500" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-12 h-12 text-cyan-500" /> },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat bg-black"
      // style={{ backgroundImage: "url('/img/bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-8 rounded-lg w-full max-w-4xl overflow-hidden"
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-cyan-600">My Skills</h1>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {skills.concat(skills).map((skill, index) => (
              <div key={index} className="flex flex-col items-center mx-4 px-4">
                {skill.icon}
                <span className="text-sm font-medium text-white mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MySkill;