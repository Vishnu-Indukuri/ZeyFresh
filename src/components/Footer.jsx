import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Make sure this is a white version or handles dark bg well
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-logo-center">
                    <img src={logo} alt="ZeyFresh" className="footer-logo" />
                </div>

                <div className="footer-links">
                    <Link to="/products">Wild Caught</Link>
                    <span className="separator">|</span>
                    <Link to="/products">Farm Raised</Link>
                    <span className="separator">|</span>
                    <Link to="/products">Specialty Products</Link>
                    <span className="separator">|</span>
                    <Link to="/contact">Contact Us</Link>
                </div>

                <div className="footer-address">
                    <p>1849 Kings View Drive, Frisco, TX 75036 | Phone (469) 270-5400 | Fax (469) 270-5404</p>
                </div>

                <div className="footer-copyright">
                    <p>&copy; Copyright {currentYear} Zey Fresh Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
