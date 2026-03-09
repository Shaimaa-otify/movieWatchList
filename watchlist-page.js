import { getWatchlist } from './storage.js';

const watchlistContainer = document.querySelector('.watchlist-container');

function renderWatchList() {
  const toWatchMovies = getWatchlist();
  if (toWatchMovies && toWatchMovies.length > 0) {
    const resultsHtml = toWatchMovies
      .map((movie) => {
        return ` <div class= "movie-card"> 
              <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" 
              alt="${movie.Title} poster" class="movie-poster"
              onerror="src='placeholder.jpg'"/>
              <div class="movie-info">
                <p class="movie-title">${movie.Title} <span class="movie-rating">${movie.imdbRating}</span></p>
                <div class="movie-data">
                  <p class="movie-year">${movie.Runtime}</p>
                  <p class="movie-genre">${movie.Genre}</p>
                    <button id="remove-btn" data-id="${movie.imdbID}"class="remove-from-watchlist-btn">Watchlist</button>
                </div>
                <p class="movie-description">${movie.Plot}</p>
              </div>
            </div>
        
          <hr class="movie-separator"></hr>`;
      })
      .join('');
    watchlistContainer.innerHTML = resultsHtml;
  } else {
    watchlistContainer.innerHTML = 'Your watchlist is looking a little empty...';
  }
}


document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('remove-from-watchlist-btn')) return;
  const toWatchMovies = getWatchlist();

  const movie = toWatchMovies.find(
    movie => movie.imdbID === e.target.dataset.id
  );

  if (movie) {
    const updatedtoWatchMovies = toWatchMovies.filter(movieItem => movieItem.imdbID !== movie.imdbID);

    localStorage.setItem('movieList', JSON.stringify(updatedtoWatchMovies))
    renderWatchList();
  }
});




renderWatchList();
