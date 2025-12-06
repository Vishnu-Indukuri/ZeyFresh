import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isHome ? 'home-nav' : ''}`}>
            <div className="container navbar-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Overlay */}
                <div className={`nav-menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>

                {/* Centered Navigation Links */}
                <ul className={`nav-links-centered ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/products" onClick={closeMenu}>Wild Caught</Link></li>
                    <li><Link to="/products" onClick={closeMenu}>Farm Raised</Link></li>
                    <li><Link to="/sustainability" onClick={closeMenu}>Sustainability</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
