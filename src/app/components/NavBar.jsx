"use client";

import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TypeAnimation } from "react-type-animation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-zinc-950 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <span className="text-xl font-bold">
            <TypeAnimation
                          sequence={[
                            "PHONE PORT",
                            1000,
                            "PHONE PHICHANAN",
                            1000,
                            
                          ]}
                          wrapper="span"
                          speed={{type: 'keyStrokeDelayInMs', value: 250}}
                          style={{ display: "inline-block" }}
                          repeat={Infinity}
                        />
            </span>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul className="hidden md:flex space-x-4 mx-auto">
            <li>
              <Link
                href="/"
                className={`hover:text-cyan-500 ${
                  isActive("/") ? "text-cyan-500" : ""
                }`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-cyan-500 ${
                  isActive("/about") ? "text-cyan-500" : ""
                }`}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={`hover:text-cyan-500 ${
                  isActive("/portfolio") ? "text-cyan-500" : ""
                }`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/myskill"
                className={`hover:text-cyan-500 ${
                  isActive("/contact") ? "text-cyan-500" : ""
                }`}>
                My Skill
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="space-y-4 p-4">
          <li>
            <Link
              href="/"
              className={`hover:text-cyan-500 block ${
                isActive("/") ? "text-cyan-500" : ""
              }`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-cyan-500 block ${
                isActive("/about") ? "text-cyan-500" : ""
              }`}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`hover:text-cyan-500 block ${
                isActive("/portfolio") ? "text-cyan-500" : ""
              }`}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/myskill"
              className={`hover:text-cyan-500 block ${
                isActive("/contact") ? "text-cyan-500" : ""
              }`}>
              My Skill
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
