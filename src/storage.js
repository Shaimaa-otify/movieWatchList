// storage.js - utility functions for watchlist management

export function addToLocalStorage(movie) {
  const toWatchMovies = JSON.parse(localStorage.getItem('movieList')) || [];
  const alreadyExists = toWatchMovies.some(
    m => m.imdbID === movie.imdbID
  );
  if (alreadyExists) {
    addToWatchlistBtns.forEach(btn => {
      if (btn.dataset.id === movie.imdbID) {
        btn.textContent = 'Added';
        btn.disabled = true;
      }
    });
  } else {
    toWatchMovies.push(movie);
    localStorage.setItem('movieList', JSON.stringify(toWatchMovies))
    addToWatchlistBtns.forEach(btn => {
      if (btn.dataset.id === movie.imdbID) {
        btn.textContent = 'Added';
        btn.disabled = true;
      }
    });
  }
}

export function getWatchlist() {
  return JSON.parse(localStorage.getItem('movieList')) || [];
}
