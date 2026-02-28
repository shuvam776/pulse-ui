import { motion } from "framer-motion";

function Loader3() {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        animate={{ height: ["2.5rem", "1rem", "2.5rem"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="bg-neutral-700 w-[5px] h-10 rounded-t-lg rounded-b-lg"
      ></motion.div>
      <motion.div
        animate={{ height: ["2.5rem", "1rem", "2.5rem"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="bg-neutral-700 w-[5px] h-10 rounded-t-lg rounded-b-lg"
      ></motion.div>
      <motion.div
        animate={{ height: ["2.5rem", "1rem", "2.5rem"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="bg-neutral-700 w-[5px] h-10 rounded-t-lg rounded-b-lg"
      ></motion.div>
      <motion.div
        animate={{ height: ["2.5rem", "1rem", "2.5rem"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="bg-neutral-700 w-[5px] h-10 rounded-t-lg rounded-b-lg"
      ></motion.div>
    </div>
  );
}

export default Loader3;
