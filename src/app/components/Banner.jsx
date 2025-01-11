"use client";

import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

//* Import lucide-react icons
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";

const Banner = () => {
  return (
    <div
      className="relative bg-cover overflow-hidden bg-center min-h-screen"
      style={{ backgroundImage: "url('/img/imgbg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto mt-[100px] relative z-10 py-8 text-white flex flex-col md:flex-row items-center"
      >
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-4xl font-bold text-center md:text-left text-cyan-600">
            <TypeAnimation
              sequence={[
                "โฟน พิชานันท์ ศรีรัตนะพัฒน์",
                1000,
                "กำลังศึกษาอยู่ที่วิทยาลัยเทคนิคแพร่",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="mt-5 text-lg md:text-2xl w-full md:w-[550px] text-center md:text-left">
            สวัสดีครับ ผมชื่อโฟน หรือ พิชานันท์ ศรีรัตนะพัฒน์
            กำลังศึกษาอยู่ที่วิทยาลัยเทคนิคแพร่ สาขาเทคโนโลยีคอมพิวเตอร์ ชั้นปีที่
            1
          </p>
          <div className="mt-5 flex justify-center md:justify-start items-center gap-3">
            <div className="border-2 bg-white rounded-full p-2 text-black w-[fit-content] hover:bg-transparent hover:text-white transition ease-in-out delay-250 hover:scale-110 duration-300">
              <Link href="https://github.com/CallmePhone" target="_blank">
                <Github />
              </Link>
            </div>
            <div className="border-2 bg-blue-600 border-blue-600 rounded-full p-2 text-white w-[fit-content] hover:bg-transparent hover:text-blue-600 transition ease-in-out delay-250 hover:scale-110 duration-300">
              <Link
                href="https://www.facebook.com/pphichanan.srirattanapat"
                target="_blank">
                <Facebook />
              </Link>
            </div>
            <div className="border-2 bg-red-700 border-red-700 rounded-full p-2 text-white w-[fit-content] hover:bg-transparent hover:text-red-700 transition ease-in-out delay-250 hover:scale-110 duration-300">
              <Link
                href="https://www.youtube.com/@phoneXza"
                target="_blank">
                <Youtube />
              </Link>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <img
            src="/img/me.jpg"
            alt="Your Image"
            className="w-1/2 md:w-1/3 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;