import './input-search.css'

function InputSearch() {
    return (
        <form className="nav-search">
            <input type="text" className="nav-search-input" name="search"
                   placeholder="Buscar productos, marcas y más…"
                   />
            <button type="submit" className="nav-search-btn" tabIndex="4">
                <div role="img" aria-label="Buscar" className="nav-icon-search"/>
            </button>
        </form>
    );
}

export default InputSearch;
