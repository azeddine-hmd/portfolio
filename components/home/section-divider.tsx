"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div className="roudned-full my-24 hidden h-16 w-1 bg-gray-200 sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1
      }}
    ></motion.div>
  );
}
