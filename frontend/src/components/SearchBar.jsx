function SearchBar() {
    return (
        <section>
            <h2>Search Company</h2>

            <input
                type="text"
                placeholder="Search by company name or ticker..."
            />

            <br />
            <br />

            <button>Analyze Company →</button>
        </section>
    );
}

export default SearchBar;