import { motion } from "framer-motion";
import * as React from "react";

export function ShiveringText({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ transform: "translate(0, 0)" }}
      animate={{
        transform: [
          "translate(0, 0)",
          "translate(-2px, -2px)",
          "translate(2px, 2px)",
          "translate(-1px, 1px)",
          "translate(0, 0)",
        ],
      }}
      transition={{ repeat: Infinity, duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
}
