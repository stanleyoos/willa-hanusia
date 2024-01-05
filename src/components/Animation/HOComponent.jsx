"use client";

import { motion } from "framer-motion";

const HOComponent = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HOComponent;
