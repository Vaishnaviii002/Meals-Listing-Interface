import { FaSearch } from "react-icons/fa";

function SearchBar({ searchMeals }) {
  return (
    <div className="search-box">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search meals..."
        onChange={(e) => searchMeals(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;