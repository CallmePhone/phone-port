"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Monitor, GitBranch } from "lucide-react";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { RiEnglishInput } from "react-icons/ri";
import { SiPhp } from "react-icons/si";

const MySkill = () => {
  const skills = [
    { name: "English language", icon: <RiEnglishInput className="w-8 h-8 text-cyan-500" />, level: 45 },
    { name: "Database", icon: <Database className="w-8 h-8 text-cyan-500" />, level: 80 },
    { name: "Php", icon: <SiPhp className="w-8 h-8 text-cyan-500" />, level: 75 },
    { name: "NextJS", icon: <RiNextjsLine className="w-8 h-8 text-cyan-500" />, level: 70 },
    { name: "Codeigniter", icon: <DiCodeigniter className="w-8 h-8 text-cyan-500" />, level: 85 },
    { name: "Git", icon: <GitBranch className="w-8 h-8 text-cyan-500" />, level: 75 },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-8 h-8 text-cyan-500" />, level: 80 },
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
        <div className="w-full">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-2">
                {skill.icon}
                <span className="text-sm font-medium text-white ml-2">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-cyan-500 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-white ml-2">{skill.level}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MySkill;