"use client";

import React from "react";
import { motion } from "framer-motion";

// import Lucide icons
import { School } from "lucide-react";

// import React icons
import { LiaSchoolSolid } from "react-icons/lia";

const About = () => {
  return (
    <div
      className="relative bg-cover overflow-hidden bg-center min-h-screen"
      style={{ backgroundImage: "url('/img/imgbg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto mt-[100px] relative z-10 py-8 px-4 md:px-8 text-white flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-600 text-center lg:text-left">
            เกี่ยวกับผม
          </h1>
          <p className="font-bold text-xl mt-3 text-cyan-600 underline underline-offset-3  flex"><LiaSchoolSolid className="me-2 text-3xl text-white"/>การศึกษา<LiaSchoolSolid className="ms-2 text-3xl text-white"/></p>
          <div className="mt-5 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg space-y-4">
            <div className="flex items-center">
              <LiaSchoolSolid className="text-cyan-600 hover:text-cyan-400 transition-colors duration-300 text-2xl" />
              <span className="ml-2">มัธยมปีที่ 3 จาก โรงเรียนนารีรัตน์ จังหวัดแพร่</span>
            </div>
            <div className="flex items-center">
              <LiaSchoolSolid className="text-cyan-600 hover:text-cyan-400 transition-colors duration-300 text-2xl" />
              <span className="ml-2">ปวช. จาก มหาวิทยาลัยเทคนิคแพร่ จังหวัดแพร่ สาขาเทคนิคคอมพิวเตอร์</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 px-4">
          <img
            src="/img/eiei.jpg"
            alt="Profile Picture"
            className="w-3/4 md:w-2/3 lg:w-1/2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;