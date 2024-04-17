
import React from 'react';
import './navbar.scss'; // Import the SCSS file

const Navbar = () => {
    return (
        <nav className="navbar"> {/* Add the 'navbar' class */}
            <div className="logo"> {/* Add the 'logo' class */}
            <img src="../assets/logo.png" alt="Logo" />
            </div>
            <div className="links"> {/* Add the 'links' class */}
                <a href="/">Accueil</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Navbar;
