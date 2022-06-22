import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

// API_KEY = 6185425d
const API_KEY = "6185425d";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

const movie1 = {
  Title: "The Avengers",
  Year: "2012",
  imdbID: "tt0848228",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    // searchMovies("Avengers");
  }, []);
  return (
    <div className="app">
      <h1>FilmFlix</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {}} />
      </div>

      <div className="container">
        <MovieCard movie={movie1} />
      </div>
    </div>
  );
};

export default App;
