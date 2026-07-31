import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      ></motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
      >
        Loading Meals...
      </motion.h2>
    </div>
  );
}

export default Loader;