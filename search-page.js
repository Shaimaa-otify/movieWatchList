import { fetchDataFromApi, fetchMovieDetails } from './api.js';
import { addToLocalStorage } from './storage.js';

const searchInput = document.querySelector('.search-form input');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.querySelector('.results-container');
const messageContainer = document.querySelector('.message-container');

let currentMovies = [];

function storeSearchResult(data) {
  currentMovies = data;
}

// delegate "add to watchlist" clicks
document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('add-to-watchlist-btn')) return;

  const movie = currentMovies.find(
    movie => movie.imdbID === e.target.dataset.id
  );

  if (movie) {
    addToLocalStorage(movie);
  }
});

searchBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  searchInput.value = '';
  if (query) {
    searchBtn.disabled = true;
    searchBtn.textContent = 'Searching...';
    try {
      const fetchedData = await fetchDataFromApi(
        `https://www.omdbapi.com/?apikey=d9e7264&s=${encodeURIComponent(query)}`
      );

      if (!fetchedData) return;
      if (!fetchedData.Search) renderNoresults();
      if (fetchedData.Search) {
        const detailedResults = await fetchMovieDetails(fetchedData.Search);
        showResults(detailedResults);
        storeSearchResult(detailedResults);
      }
    } catch (error) {
      console.error('detailed Fetch failed:', error);
    } finally {
      searchBtn.disabled = false;
      searchBtn.textContent = 'Search';
    }
  }
});

function showResults(data) {
  resultsContainer.innerHTML = ''
  resultsContainer.classList.remove('no-results')
  if (data && data.length > 0) {
    const resultsHtml = data
      .map((movie) => {
        return ` <div class= "movie-card"> 
              <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" 
                  alt="${movie.Title} poster" class="movie-poster" 
                  onerror="src='placeholder.jpg'" 
                  />
              <div class="movie-info">
                <p class="movie-title">${movie.Title} <span class="movie-rating">${movie.imdbRating}</span></p>
                <div class="movie-data">
                  <p class="movie-year">${movie.Runtime}</p>
                  <p class="movie-genre">${movie.Genre}</p>
                  <button id="add-btn" data-id="${movie.imdbID}"class="add-to-watchlist-btn">Watchlist</button>
                </div>
                <p class="movie-description">${movie.Plot}</p>
              </div>
            </div>
        
          <hr class="movie-separator"></hr>`;
      })
      .join('');
    resultsContainer.innerHTML = resultsHtml;
  }
}

function renderNoresults() {
  messageContainer.innerHTML =
    "Unable to find what you're looking for. Please try another search."
  messageContainer.classList.add('no-results')
}
