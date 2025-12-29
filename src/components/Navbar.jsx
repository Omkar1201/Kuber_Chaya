import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    KUBER CHAYA
                </NavLink>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink to="/" onClick={closeMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" onClick={closeMenu}>
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" onClick={closeMenu}>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={closeMenu}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
