import React from 'react';
import { FaLeaf, FaWater, FaHandHoldingHeart } from 'react-icons/fa';
import './Sustainability.css';

const Sustainability = () => {
    return (
        <div className="sustainability-page">
            <div className="sust-hero">
                <div className="container">
                    <h1>Our Commitment to Sustainability</h1>
                    <p>Preserving our oceans for future generations</p>
                </div>
            </div>

            <div className="section container">
                <div className="sust-grid">
                    <div className="sust-card">
                        <FaWater className="sust-icon" />
                        <h2>Responsible Sourcing</h2>
                        <p>
                            We strictly adhere to sustainable fishing practices. Our wild-caught shrimp comes from
                            regulated zones to prevent overfishing, ensuring the marine ecosystem remains balanced.
                        </p>
                    </div>
                    <div className="sust-card">
                        <FaLeaf className="sust-icon" />
                        <h2>Eco-Friendly Farming</h2>
                        <p>
                            Our farm-raised partners follow Best Aquaculture Practices (BAP). We ensure minimal
                            environmental impact, no antibiotic misuse, and responsible waste management.
                        </p>
                    </div>
                    <div className="sust-card">
                        <FaHandHoldingHeart className="sust-icon" />
                        <h2>Community Support</h2>
                        <p>
                            We support local fishing communities by ensuring fair trade practices and providing
                            steady livelihoods. We believe in growing together with our partners.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section bg-light">
                <div className="container text-center">
                    <h2 className="mb-lg">Traceability & Safety</h2>
                    <p className="trace-desc">
                        From the moment the catch is landed to the time it reaches your plate, every step is documented.
                        Our robust traceability system allows us to track every batch back to its source, ensuring
                        complete transparency and food safety.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sustainability;
