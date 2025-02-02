"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

// Individual wrapper to ensure hooks are used correctly
const BlurInWrapper = ({ child }: { child: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
    >
      {child}
    </motion.div>
  );
};

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <BlurInWrapper key={index} child={child} />
      ))}
    </>
  );
};
