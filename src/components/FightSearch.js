const FightSearch = ({ searchQuery, setSearchQuery }) => (
    <form action="/fight-model/#/fights" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Fights</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="(e.g. 'charles' or 'ufc 262')"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default FightSearch;