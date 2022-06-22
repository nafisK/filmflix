import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

// API_KEY = 6185425d
const API_KEY = "6185425d";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

const App = () => {
  // use state to change values within document
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // gets all movies from the api
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  // gets values when website
  useEffect(() => {
    searchMovies("Movie");
  }, []);

  return (
    <div className="app">
      <h1>FilmFlix</h1>

      {/* search bar */}
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {/* movie cards if there are movies */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
