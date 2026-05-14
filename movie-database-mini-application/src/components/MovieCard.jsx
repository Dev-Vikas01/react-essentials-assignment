function MovieCard({movie,toggleFavourite,isFavourite,}){
    return(
        <div className="movie-card">
            <div>
                {/* TOP */}
                <div className="movie-top">
                    <h3>{movie.title}</h3>
                    <span>
                        {movie.year} • {movie.genre}
                    </span>
                </div>
                {/* RATINGS + TAGS */}
                <div className="rating-row">
                    <div className="rating-badge">
                        ⭐ {movie.rating}
                    </div>
                    <div className="movie-tags">
                        {movie.tags.map((tag) => (
                            <span key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <button
            className={`fav-btn ${
                isFavourite ? "active" : ""
            }`}
            onClick={() => toggleFavourite(movie.id)}
            >

            {isFavourite
                ? "❤ Favorited"
                : "♡ Favorite"}

            </button>
        </div>
    );
}
export default MovieCard;