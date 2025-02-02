"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AboutIcon from "@/assets/icons/info.svg";
import ExperienceIcon from "@/assets/icons/briefcase.svg";
import ProjectIcon from "@/assets/icons/project.svg";

export default function AnimatedTabs() {
  const SECTION = [
    {
      label: "about",
      icon: <AboutIcon className="h-5 w-5" />,
    },
    {
      label: "experience",
      icon: <ExperienceIcon className="h-5 w-5" />,
    },
    {
      label: "project",
      icon: <ProjectIcon className="h-5 w-6" />,
    },
  ];

  const [activeTab, setActiveTab] = useState(SECTION[0].label);

  // Utility function to capitalize the first letter
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Handles tab selection and scrolling
  const handleTabClick = (id: string) => {
    setActiveTab(id); // Update active tab
    scrollToSection(id); // Scroll to the corresponding section
  };

  // Scrolls to the specific section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 550; // Height of your sticky navigation
      const elementPosition = element.offsetTop; // Get element's position
      const offsetPosition = elementPosition - topOffset; // Adjust for sticky nav

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex w-full justify-center">
      {/* Container for the tabs */}
      <div className="relative flex w-full justify-around gap-1 rounded-2xl border border-zinc-200 bg-[#191C1B] p-2">
        {SECTION.map((section) => (
          <div key={section.label} className="relative flex-grow">
            {/* Animated background for the active tab */}
            {activeTab === section.label && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 rounded-lg bg-[#f9f9f9]"
                transition={{ type: "spring", stiffness: 450, damping: 34 }}
              />
            )}

            <button
              onClick={() => handleTabClick(section.label)}
              className={`relative inline-flex h-8 w-full flex-grow items-center justify-center rounded p-1 hover:cursor-[url('/cursor/Undeadselect.cur'),pointer] ${
                activeTab === section.label ? "text-zinc-950" : "text-[#f9f9f9]"
              }`}
            >
              {section.icon}
              <div className="ml-1 text-sm">
                {capitalizeFirstLetter(section.label)}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
