import { MovieCard } from "./MovieCard";
import Loading from "./Loading";

export function MovieList({ dataMovies, loading }) {
  return loading ? (
    <Loading />
  ) : (
    <div
      className="card-container d-flex flex-wrap justify-content-evenly px-3 gap-5"
      style={{ minHeight: "650px", marginBottom: "3rem" }}
    >
      {dataMovies.map((movie, index) => (
        <MovieCard movie={movie} key={index} cardnumber={index} />
      ))}
    </div>
  );
}
