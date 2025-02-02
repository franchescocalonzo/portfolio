"use client"; // If using Next.js App Router

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const [showPreviousRoles, setShowPreviousRoles] = useState(false);

  return (
    <section id="experience">
      <span className="mb-3 block text-[0.8rem] text-slate-500">CURRENTLY</span>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="text-md font-semibold tracking-tight text-[#111827]">
            Software Engineer
          </span>
          <div className="ml-auto flex items-center">
            <img
              src="/icons/bayad.svg"
              alt="Bayad Logo"
              className="h-6 w-6 object-contain p-0.5"
            />
            <a href="https://www.bayad.com" target="_blank" rel="noreferrer">
              <span className="ml-1 text-sm font-medium tracking-tight text-slate-800">
                CIS Bayad Center Inc.
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-row">
          <span className="text-sm leading-tight text-slate-500">
            2023 - Present
          </span>
          <span className="ml-auto text-sm tracking-tight text-slate-500">
            Philippines
          </span>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowPreviousRoles(!showPreviousRoles)}
        className="flex items-center gap-2 py-2 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className={`h-5 w-5 p-1 text-slate-400 transition-transform duration-300 ${
            showPreviousRoles ? "rotate-180" : "rotate-0"
          }`}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
        <span className="text-[0.8rem] text-slate-400">Previous roles</span>
      </button>

      {/* Previous Roles (Animated) */}
      <motion.div
        initial={false}
        animate={{
          height: showPreviousRoles ? "auto" : 0,
          opacity: showPreviousRoles ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="ml-2 flex flex-col gap-2.5 border-l border-gray-200 pl-4">
          {/* Role 1 */}
          <div className="flex flex-col">
            <div className="flex flex-row">
              <span className="font-base text-[0.8rem] tracking-tight text-[#111827]">
                Front-end Developer / Database Admin
              </span>
              <div className="ml-auto flex items-center">
                <img
                  src="/icons/moneygment.png"
                  alt="Moneygment Logo"
                  className="h-6 w-6 object-contain"
                />
                <a
                  href="https://moneygment.ph/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="ml-1 text-[0.8rem] tracking-tight text-slate-800">
                    Moneygment
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-[0.8rem] leading-tight text-slate-400">
                2019 - 2023
              </span>
              <span className="ml-auto text-[0.8rem] tracking-tight text-slate-500">
                Makati PH
              </span>
            </div>
          </div>

          {/* Role 2 */}
          <div className="flex flex-col">
            <div className="-gap-10 flex flex-row">
              <span className="font-base text-[0.8rem] tracking-tight text-[#111827]">
                Quality Assurance Associate
              </span>
              <div className="ml-auto flex items-center">
                <img
                  src="/icons/cormant.jpg"
                  alt="Cormant Logo"
                  className="h-6 w-6 p-1"
                  width={6}
                  height={6}
                />
                <a href="https://cormant.io/" target="_blank" rel="noreferrer">
                  <span className="ml-1 text-[0.8rem] tracking-tight text-slate-800">
                    Cormant Technologies
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-[0.8rem] leading-tight text-slate-400">
                2018
              </span>
              <span className="ml-auto text-[0.8rem] tracking-tight text-slate-500">
                Philippines
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
