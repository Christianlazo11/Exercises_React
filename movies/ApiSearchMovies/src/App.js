import "./App.css";
import FooterPage from "./components/Footer";
import { MovieList } from "./components/MovieList";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getAllMovies, getMovieByName } from "./service/movieService";
import SelectFilter from "./components/SelectFilter";
import ButtonsNextPrev from "./components/ButtonsNextPrev";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [queryFilter, setQueryFilter] = useState("popular");
  const [numberPage, setNumberPage] = useState(1);
  const [maxPage, setMaxPage] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (query === "") {
      getAllMovies(queryFilter, numberPage).then((resp) => {
        setMovies(resp.results);
        setMaxPage(resp.total_pages);
      });

      setIsLoading(false);
    } else {
      getMovieByName(query, numberPage).then((resp) => {
        setMovies(resp.results);
        setMaxPage(resp.total_pages);
      });
      setIsLoading(false);
    }
  }, [query, queryFilter, numberPage]);
  return (
    <div className="App">
      <Header handleSearch={setQuery} handlePage={setNumberPage} />
      <SelectFilter
        handleFilter={setQueryFilter}
        handleSearch={setQuery}
        handlePage={setNumberPage}
      />
      <ButtonsNextPrev
        numberPage={numberPage}
        setNumberPage={setNumberPage}
        maxPage={maxPage}
      />
      <MovieList dataMovies={movies} loading={isLoading} />
      <ButtonsNextPrev
        numberPage={numberPage}
        setNumberPage={setNumberPage}
        maxPage={maxPage}
      />

      <FooterPage />
    </div>
  );
}

export default App;
