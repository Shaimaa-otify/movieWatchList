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
    const detailedMovies = await Promise.all(
      movieList.map(async (movie) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=d9e7264&i=${movie.imdbID}`);
        if (!response.ok) {
          throw new Error(`error status ${response.status}`);
        }
        return response.json();
      })
    );

    return detailedMovies;
  } catch (error) {
    console.error(error);
  }
}
