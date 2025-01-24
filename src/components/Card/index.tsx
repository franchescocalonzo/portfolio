"use client";

import React, { useState } from "react";
import Details from "./Details";
import { motion, AnimatePresence } from "framer-motion";
import { companies } from "@/data/companies";
import Summary from "./Summary";

export default function Card() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const handleOpen = (id: string) => setSelectedCompany(id);
  const handleClose = () => setSelectedCompany(null);

  return (
    <>
      <div className="grid gap-3 px-4 py-2">
        {companies.map((company) => (
          <motion.div
            key={company.id}
            layoutId={`dialog-card-${company.id}`}
            onClick={() => handleOpen(company.id)}
          >
            <Summary company={company} />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(5px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={handleClose}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <motion.div
              layoutId={`dialog-card-${selectedCompany}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Details
                company={
                  companies.find((company) => company.id === selectedCompany)!
                }
                onClose={handleClose}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
