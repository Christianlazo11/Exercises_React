export async function getAllMovies(filter, page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${filter}?api_key=f0804310b2aa799c42575717c6a0eae1&language=en&page=${page}`,
    { method: "GET" }
  );
  return await res.json();
}

export async function getMovieByName(name, page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f0804310b2aa799c42575717c6a0eae1&query=${name}&page=${page}`,
    { method: "GET" }
  );
  return res.json();
}

export function setDataFavorite(data) {}
