// storage.js - utility functions for watchlist management

export function addToLocalStorage(movie) {
  const toWatchMovies = JSON.parse(localStorage.getItem('movieList')) || [];
  const alreadyExists = toWatchMovies.some(
    m => m.imdbID === movie.imdbID
  );
  if (!alreadyExists) {
    toWatchMovies.push(movie);
    localStorage.setItem('movieList', JSON.stringify(toWatchMovies))
  }
}

export function getWatchlist() {
  return JSON.parse(localStorage.getItem('movieList')) || [];
}
