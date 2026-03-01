"use client";

import { motion } from "framer-motion";

function Loader7() {
  return (
    <div className="flex">
      <motion.div
        className="w-8 h-8 border-4 rounded-full border-black"
        initial={{ backgroundColor: "black" }}
        animate={{ backgroundColor: ["#000", "#fff", "#000"] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <motion.div
        className="w-8 h-8 border-4 rounded-full border-black -translate-x-2"
        initial={{ backgroundColor: "black" }}
        animate={{ backgroundColor: ["#fff", "#000", "#fff"] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <motion.div
        className="w-8 h-8 border-4 rounded-full border-black -translate-x-4"
        initial={{ backgroundColor: "black" }}
        animate={{ backgroundColor: ["#000", "#fff", "#000"] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
}

export default Loader7;
