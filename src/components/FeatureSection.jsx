import React from 'react';
import Button from './Button';
import './FeatureSection.css';

const FeatureSection = ({ title, subtitle, description, image, imageAlt, reverse, buttonText, buttonLink, centered }) => {

    if (centered) {
        return (
            <section className="feature-section centered section">
                <div className="container">
                    <h2 className="feature-title">{title}</h2>
                    <div className="feature-divider"></div>
                    <p className="feature-description max-w-md mx-auto">{description}</p>
                    {image && (
                        <div className="feature-image-container centered-image">
                            <img src={image} alt={imageAlt} className="feature-image" />
                        </div>
                    )}
                </div>
            </section>
        );
    }

    return (
        <section className={`feature-section section ${reverse ? 'bg-light' : ''}`}>
            <div className={`container feature-container ${reverse ? 'reverse' : ''}`}>
                <div className="feature-content">
                    {subtitle && <h4 className="feature-subtitle">{subtitle}</h4>}
                    <h2 className="feature-title">{title}</h2>
                    <div className="feature-divider left"></div>
                    <p className="feature-description">{description}</p>

                    {buttonText && (
                        <Button to={buttonLink} variant="outline" className="feature-btn">
                            {buttonText}
                        </Button>
                    )}
                </div>
                <div className="feature-image-wrapper">
                    <img src={image} alt={imageAlt} className="feature-image" />
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
