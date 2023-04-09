import { useContext } from "react";
import { Link } from 'react-router-dom';

import { AuthContext } from "../../contexts/AuthContext";

import './Header.css';

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header>
            <h1><Link className="home" to="/home">MangaWorld</Link></h1>
            <nav className = "nav-bar">
                <Link className="nav-link" to="/catalog">Catalog</Link>
                {isAuthenticated && (
                    <div id="user">                        
                        <Link className="nav-link" to = "/profile">{userEmail}</Link>
                        <Link className="nav-link" to="/add-manga">Add Manga</Link>
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
  );
};
