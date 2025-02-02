"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  // Apply useInView on individual child elements instead of a single wrapper ref
  return (
    <>
      {React.Children.map(children, (child, index) => {
        const ref = React.useRef(null);
        const isInView = useInView(ref, { once: true });

        // If the child is a valid React element, clone it with a ref and styles
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ref,
            style: {
              ...child.props.style,
              filter: isInView ? "blur(0px)" : "blur(20px)",
              opacity: isInView ? 1 : 0,
              transition: "filter 1.2s, opacity 1.2s",
            },
          });
        }

        // If the child is a string or non-React element, wrap it in a motion.span
        return (
          <motion.span
            key={index}
            ref={ref}
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            {child}
          </motion.span>
        );
      })}
    </>
  );
};
