import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    const location = useLocation(); 
    // console.log(location);
    return (
        <nav className="navbar"> 
            <div className="logo"> 
                <img src="../assets/logo.png" alt="Logo" />
            </div>
            <div className="links"> 
                <Link to="/" className={location.pathname === '/' ? 'activeLink' : ''}>Accueil</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'activeLink' : ''}>A propos</Link>
            </div>
        </nav>
    );
};

export default Navbar;
