import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="container">
                    <h1>About ZeyFresh</h1>
                    <p>Excellence in Seafood Processing & Export</p>
                </div>
            </div>

            <div className="section container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            ZeyFresh is a premier seafood processing and export company based in the coastal heart of India.
                            With decades of experience in the industry, we have established ourselves as a trusted name
                            for high-quality fresh and frozen seafood.
                        </p>
                        <p>
                            Our state-of-the-art processing facility is located in Veraval, Gujarat, giving us direct access
                            to the freshest catch from the Arabian Sea. We specialize in a wide range of shrimp products,
                            catering to international markets including USA, Europe, and Asia.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1534951009808-766178b47a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Seafood Processing" />
                    </div>
                </div>
            </div>

            <div className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-lg">Our Process</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h3>Fresh Catch</h3>
                            <p>Sourced directly from trusted fishermen and sustainable farms.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h3>Processing</h3>
                            <p>Cleaned, peeled, and graded in our hygienic facility.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h3>Freezing</h3>
                            <p>Quick freezing (IQF/Block) to lock in freshness and nutrients.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h3>Export</h3>
                            <p>Packaged and shipped globally with cold-chain integrity.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section container text-center">
                <h2>Our Facility & Standards</h2>
                <p className="facility-desc">
                    Our facility is FDA-approved and follows strict HACCP guidelines. We maintain the highest standards
                    of hygiene and safety to ensure that every product that leaves our factory is safe, fresh, and premium.
                </p>
                <div className="certifications">
                    <span className="cert-badge">HACCP</span>
                    <span className="cert-badge">FDA Approved</span>
                    <span className="cert-badge">Brcgs</span>
                    <span className="cert-badge">BAP</span>
                </div>
            </div>
        </div>
    );
};

export default About;
