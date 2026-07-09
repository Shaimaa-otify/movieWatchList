# 🎬 Movie Watchlist

A browser-based movie search and watchlist app powered by the OMDB API.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Planned Improvements](#planned-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Movie Watchlist** is a vanilla JavaScript app that lets you search for movies using the [OMDB API](https://www.omdbapi.com/) and save your favourites to a personal watchlist stored in localStorage.

---

## Features

- **Movie search** — search for any film by title using the OMDB API
- **Detailed results** — each result shows the poster, title, IMDb rating, runtime, genre, and plot
- **Add to watchlist** — save movies to your watchlist with a single click
- **Persistent watchlist** — watchlist is saved in localStorage and survives page refreshes
- **Remove from watchlist** — remove movies from your watchlist on the watchlist page
- **Secure API calls** — OMDB requests are proxied through Netlify serverless functions, keeping the API key out of client-side code
- **Responsive design** — works on desktop and mobile browsers

---

## Demo

> Live on Netlify. For local development, run via the Netlify CLI (see [Getting Started](#getting-started)) — opening `index.html` directly won't work as the API calls require serverless functions.

---

## Screenshots

> _Add screenshots here_

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Node.js](https://nodejs.org/) (for running Netlify CLI locally)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) — install once globally:
  ```bash
  npm install -g netlify-cli
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movieWatchList.git
   cd movieWatchList
   ```
2. Create a `.env` file in the project root with your OMDB API key:
   ```
   OMDB_API_KEY=your_api_key_here
   ```
3. Log in to Netlify CLI (once):
   ```bash
   netlify login
   ```
4. Start the local dev server:
   ```bash
   netlify dev
   ```
   The app will be available at `http://localhost:8888`. The CLI reads `.env` and injects the API key into the serverless functions automatically.

---

## Usage

1. **Search for a movie** — type a title into the search bar and click **Search**.
2. **Browse results** — scroll through the returned movie cards with ratings, genre, and plot details.
3. **Add to watchlist** — click **+ Watchlist** on any movie card to save it.
4. **View your watchlist** — click **My Watchlist** in the header to open `watchlist.html`.
5. **Remove a movie** — click **Watchlist** on a saved movie to remove it from your list.

---

## Project Structure

```
movieWatchList/
├── assets/                  # Static images
│   ├── header.png
│   ├── Icon.png
│   ├── minus_2.png
│   ├── no-data-initial.png
│   ├── placeholder.jpg
│   ├── plus_2.png
│   └── search_2.png
├── netlify/
│   └── functions/
│       ├── details.js       # Serverless proxy — OMDB detail lookups
│       └── search.js        # Serverless proxy — OMDB search
├── src/
│   ├── api.js               # Shared fetch helpers
│   ├── search-page.js       # Search logic & result rendering
│   ├── storage.js           # localStorage helpers
│   └── watchlist-page.js    # Watchlist rendering & removal logic
├── styles/
│   └── index.css            # Styles & responsive layout
├── index.html               # Search page
├── watchlist.html           # Watchlist page
├── netlify.toml             # Netlify build & functions config
├── .env                     # Local environment variables (not committed)
├── .gitignore
└── README.md
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling & responsive layout |
| JavaScript (ES6+) | DOM manipulation, fetch, modules |
| [OMDB API](https://www.omdbapi.com/) | Movie data |
| [Netlify Functions](https://docs.netlify.com/functions/overview/) | Serverless API proxy (hides API key) |
| localStorage | Persistent watchlist storage |

---

## Planned Improvements

- [ ] Pagination for search results
- [ ] Filter watchlist by genre or rating
- [ ] Mark movies as watched
- [ ] Sort watchlist by title, rating, or date added
- [ ] Keyboard accessible search

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please keep changes focused and include a clear description in your PR.

---

## License

This project is open source and available under the [MIT License](LICENSE).
