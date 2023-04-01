import { useContext } from "react";
import { Link } from 'react-router-dom';

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header>
            <h1><Link className="home" to="/home">MangaWorld</Link></h1>
            <nav>
                <Link to="/catalog">Catalog</Link>
                {isAuthenticated && (
                    <div id="user">                        
                        <Link to = "/profile">{userEmail}</Link>
                        <Link to="/add-manga">Add Manga</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
  );
};
