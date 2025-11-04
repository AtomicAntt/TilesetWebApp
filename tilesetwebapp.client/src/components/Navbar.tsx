import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark nav-underline">
                <div className="container">
                    // Navbar Brand
                    <a href="/" className="navbar-brand">
                        <div className="fs-3 fw bold">Tileset Web App</div>
                    </a>

                    // Hamburger Menu
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    // Nav Menu
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto d-flex fclex-row align-items-center gap-3">
                            <li>
                                <a href="/About" target="_blank" className="nav-link" title="View About">About</a>
                            </li>
                            <li>
                                <a href="/Comments" target="_blank" className="nav-link" title="View Comments">Comments</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Navbar;