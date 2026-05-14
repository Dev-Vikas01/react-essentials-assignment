
function SearchBar({search,setSearch,resetSearch,}){
    return(
        <div className="search-wrapper">
            <div className="search-input-container">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder='Search Movies (e.g. "Intersteller","Star")'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                {
                    search && (
                        <button className="clear-btn" onClick={resetSearch}>
                            ✕
                        </button>
                    )
                }
            </div>
            <button className="reset-btn" onClick={resetSearch}>
                ↻ Reset
            </button>
        </div>
    );
}
export default SearchBar;