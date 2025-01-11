"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
        className="container mx-auto mt-[100px] relative z-10 py-8 px-4 md:px-8 text-white flex flex-col lg:flex-row items-center"
      >
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-600 text-center lg:text-left">
            เกี่ยวกับผม
          </h1>
          <p className="mt-5 text-base md:text-xl lg:text-2xl w-full lg:w-[650px] text-center lg:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            inventore tempore voluptates magni tenetur ipsum eligendi eius vero
            necessitatibus possimus alias placeat totam, voluptatem nemo.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 px-4"
        >
          <img
            src="/img/eiei.jpg"
            alt="Your Image"
            className="w-3/4 md:w-2/3 lg:w-1/2 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;