import {
  useMemo,
  useState,
} from "react";

import "./styles/movieExplorer.css";

import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

import { moviesData } from "./data/movies";

function App() {

  // =========================
  // SEARCH STATE
  // =========================
  const [search, setSearch] = useState("");

  // =========================
  // FAVORITES STATE
  // =========================
  const [favourites, setFavourites] =
    useState([]);

  // =========================
  // THEME STATE
  // =========================
  const [isDark, setIsDark] =
    useState(false);

  // =========================
  // FILTER MOVIES
  // =========================
  const filteredMovies = useMemo(() => {

    const query =
      search.toLowerCase().trim();

    // no input
    if (!query) return [];

    return moviesData.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(query)
    );

  }, [search]);

  // =========================
  // TOGGLE FAVORITE
  // =========================
  const toggleFavourite = (id) => {

    setFavourites((prev) => {

      // remove favorite
      if (prev.includes(id)) {

        return prev.filter(
          (movieId) => movieId !== id
        );

      }

      // add favorite
      return [...prev, id];

    });

  };

  // =========================
  // FAVORITE MOVIES
  // =========================
  const favouriteMovies =
    moviesData.filter((movie) =>
      favourites.includes(movie.id)
    );

  // =========================
  // TOGGLE THEME
  // =========================
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (

    <div
      className={`app-container ${
        isDark ? "dark" : ""
      }`}
    >

      <div className="movie-wrapper">

        {/* =========================
            HEADER
        ========================= */}
        <div className="top-header">

          <div>

            <h1>Movie Explorer</h1>

            <p>
              Search, filter, and favorite movies.
              Designed for a single-page React component structure.
            </p>

          </div>

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >

            {isDark
              ? "☀ Light Mode"
              : "🌙 Dark Mode"}

          </button>

        </div>

        {/* =========================
            SEARCH BAR
        ========================= */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          resetSearch={() =>
            setSearch("")
          }
        />

        {/* =========================
            RESULTS COUNT
        ========================= */}
        {search.trim() && (

          <p className="results-count">

            {filteredMovies.length}
            {" "}result

            {filteredMovies.length !== 1
              ? "s"
              : ""}

            {" "}for "{search}"

          </p>

        )}

        {/* =========================
            MAIN GRID
        ========================= */}
        <div className="main-grid">

          {/* =========================
              LEFT SIDE
          ========================= */}
          <div>

            <div className="section-heading">

              <h2>Matching Movies</h2>

              <span>
                Filtered from local movie data
              </span>

            </div>

            {/* NO INPUT */}
            {!search.trim() && (

              <div className="empty-state">
                Start typing to search movies.
              </div>

            )}

            {/* NO RESULTS */}
            {search.trim() &&
              filteredMovies.length === 0 && (

              <div className="empty-state">
                No movies found.
              </div>

            )}

            {/* MOVIES */}
            {filteredMovies.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
                toggleFavourite={
                  toggleFavourite
                }
                isFavourite={
                  favourites.includes(
                    movie.id
                  )
                }
              />

            ))}

          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}
          <div>

            <div className="section-heading">

              <h2>Favorite Movies</h2>

              <span>
                Derived from favorite state
              </span>

            </div>

            {/* NO FAVORITES */}
            {favouriteMovies.length === 0 && (

              <div className="empty-state">
                No favorite movies yet.
              </div>

            )}

            {/* FAVORITE MOVIES */}
            {favouriteMovies.map((movie) => (

              <div
                key={movie.id}
                className="favourite-item"
              >

                ♡ {movie.title}
                {" "}({movie.year})

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;