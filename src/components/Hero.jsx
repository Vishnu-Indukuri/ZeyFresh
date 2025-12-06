import React from 'react';
import logo from '../assets/logo.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            {/* Background Image Layer (Hidden via CSS but kept for structure) */}
            <div className="hero-bg"></div>

            <div className="hero-content text-center">
                <div className="hero-animation-wrapper">
                    {/* Generative Bubbles */}
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className={`hero-bubble hero-bubble-${i + 1}`}></div>
                    ))}
                    <img src={logo} alt="ZeyFresh Logo" className="hero-only-logo" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
