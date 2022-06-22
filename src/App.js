import { useEffect } from "react";

// API_KEY = 6185425d
const API_KEY = "6185425d";
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);
  return <div>App</div>;
};

export default App;
