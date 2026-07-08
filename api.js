// api.js - shared fetch helpers for OMDB

export async function fetchDataFromApi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

export async function fetchMovieDetails(movieList) {
  try {
    const ids = movieList.map(movie => movie.imdbID).join(',');
    const response = await fetch(`/.netlify/functions/details?ids=${ids}`);
    if (!response.ok) {
      throw new Error(`error status ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
