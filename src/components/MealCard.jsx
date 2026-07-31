import { motion } from "framer-motion";
import { FaYoutube, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { useState } from "react";

function MealCard({ meal, index }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      className="meal-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
    >
      <div className="image-container">
        <img src={meal.strMealThumb} alt={meal.strMeal} />

        <button
          className={`favorite-btn ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <FaHeart />
        </button>
      </div>

      <div className="meal-content">
        <h2>{meal.strMeal}</h2>

        <div className="badges">
          <span>{meal.strCategory}</span>
          <span>
            <FaMapMarkerAlt /> {meal.strArea}
          </span>
        </div>

        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noreferrer"
        >
          <button className="watch-btn">
            <FaYoutube />
            Watch Recipe
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default MealCard;