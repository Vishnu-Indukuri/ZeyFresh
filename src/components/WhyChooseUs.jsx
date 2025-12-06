import React from 'react';
import { FaShippingFast, FaCheckCircle, FaLeaf, FaGlobeAmericas } from 'react-icons/fa';
import './WhyChooseUs.css';

const features = [
    {
        id: 1,
        icon: <FaCheckCircle />,
        title: 'Premium Quality',
        description: 'Sourced from the best waters, processed with strict quality controls.'
    },
    {
        id: 2,
        icon: <FaLeaf />,
        title: 'Sustainably Sourced',
        description: 'Committed to responsible fishing and farming practices.'
    },
    {
        id: 3,
        icon: <FaShippingFast />,
        title: 'Fast & Reliable',
        description: 'Efficient logistics ensuring freshness from sea to destination.'
    },
    {
        id: 4,
        icon: <FaGlobeAmericas />,
        title: 'Global Export',
        description: 'Trusted by partners worldwide for consistent supply.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section why-us-section">
            <div className="container">
                <h2 className="section-title text-center">Why Choose ZeyFresh?</h2>
                <p className="section-subtitle text-center">We deliver excellence in every shipment</p>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
