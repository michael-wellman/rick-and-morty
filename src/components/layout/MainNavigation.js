import { Link } from "react-router-dom";

function MainNavigation() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <a className="navbar-brand fs-3 ubuntu" href="/">Rick &amp; Morty <span className="text-primary">WiKi</span></a>
                
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars open text-dark"></span>
                    <span className="fas fa-times close text-dark"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav fs-5">
                        <ul>
                            <li className="nav-link"><Link to='/'>Characters</Link></li>
                            <li className="nav-link"><Link to='/episodes'>Episodes</Link></li>
                            <li className="nav-link"><Link to='/locations'>Location</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MainNavigation;