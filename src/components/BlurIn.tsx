"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

// Custom hook to handle useRef and useInView correctly
const useBlurIn = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return { ref, isInView };
};

// Component to wrap each child correctly
const BlurInWrapper = ({ children }: { children: React.ReactNode }) => {
  const { ref, isInView } = useBlurIn();

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
};

// Main component that applies the blur effect to each child
export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <BlurInWrapper key={index}>{child}</BlurInWrapper>
      ))}
    </>
  );
};
