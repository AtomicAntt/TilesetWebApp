import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark nav-underline">
                <div className="container">
                    {/* Navbar Brand */}
                    <Link to="/" className="navbar-brand">
                        <div className="fs-3 fw bold">Tileset Web App</div>
                    </Link>

                    {/* Hamburger Menu */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Nav Menu */}
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto d-flex fclex-row align-items-center gap-3">
                            <li>
                                <Link to="/About" className="nav-link" title="View About">About</Link>
                            </li>
                            <li>
                                <Link to="/Comments" className="nav-link" title="View Comments">Comments</Link>
                            </li>
                            <li>
                                <Link to="/Editor" className="nav-link" title="View Editor">Editor</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Navbar;