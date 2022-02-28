import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/Bookclubs">Bookclubs</NavLink></li>
                <li><NavLink to="/Books">Books</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;