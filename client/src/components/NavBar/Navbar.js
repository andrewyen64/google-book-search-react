import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container">
                <Link className="navbar-brand text-light" to="/">
                    Google Books Search
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/search" className={window.location.pathname === "/search" ? 
                        "nav-link active text-light" 
                        : 
                        "nav-link text-light"
                        }
                        >Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className={window.location.pathname === "/saved" ? 
                        "nav-link active text-light" 
                        : 
                        "nav-link text-light"
                        }
                        >Saved
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;