import { useState, useEffect } from 'react';
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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <>
            <div 
                className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="logo" onClick={closeMenu}>
                        KUBER CHAYA
                    </NavLink>

                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
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
        </>
    );
}

export default Navbar;
