import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MealCard from "./components/MealCard";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/meals"
      );

      const mealData = res.data.data.data;

      setMeals(mealData);
      setFilteredMeals(mealData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const searchMeals = (value) => {
    const search = value.toLowerCase();

    const filtered = meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(search)
    );

    setFilteredMeals(filtered);
  };

  return (
    <div className="app">

      <Navbar />

      <SearchBar searchMeals={searchMeals} />

      {loading ? (
        <Loader />
      ) : (
        <motion.div
          className="meal-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredMeals.map((meal, index) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              index={index}
            />
          ))}
        </motion.div>
      )}

    </div>
  );
}

export default App;