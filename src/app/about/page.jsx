"use client"

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="relative bg-cover overflow-hidden bg-center min-h-screen"
      style={{ backgroundImage: "url('/img/imgbg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto mt-[100px] relative z-10 py-8 text-white flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-600">
            เกี่ยวกับผม
          </h1>
          <p className="mt-5 text-base md:text-2xl w-full md:w-[650px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            inventore tempore voluptates magni tenetur ipsum eligendi eius vero
            necessitatibus possimus alias placeat totam, voluptatem nemo.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end px-4 mt-8 md:mt-0">
          <img
            src="/img/eiei.jpg"
            alt="Your Image"
            className="w-3/4 md:w-1/2 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;