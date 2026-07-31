import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";

function Navbar() {
  return (
    <motion.div
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>
        <FaUtensils />
        Meals Recipe App
      </h1>
    </motion.div>
    
  );
}

export default Navbar;