// storage.js - utility functions for watchlist management

export function addToLocalStorage(movie) {
  const toWatchMovies = JSON.parse(localStorage.getItem('movieList')) || [];
  const alreadyExists = toWatchMovies.some(
    m => m.imdbID === movie.imdbID
  );
  if (alreadyExists) {
    alert(`${movie.Title} is already in your watchlist!`);
  } else {
    toWatchMovies.push(movie);
    localStorage.setItem('movieList', JSON.stringify(toWatchMovies))
    alert(`${movie.Title} has been added to your watchlist!`);
  }
}

export function getWatchlist() {
  return JSON.parse(localStorage.getItem('movieList')) || [];
}
