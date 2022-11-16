import classes from './SearchBar.modules.scss'

function SearchBar() {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
                        <input placeholder="Search for characters" type="text" />
                        <button className="btn btn-primary fs-5">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;