import React from 'react';
import './Brands.css';

// Placeholder logos - in a real app these would be imports
const brands = [
    { name: 'Zalo Fresh', id: 1 }, // Using text or placeholder circles if no images
    { name: 'Laguna Seafood', id: 2 },
    { name: 'Gulf Reserve', id: 3 },
    { name: 'Blue Horizon', id: 4 }
];

const Brands = () => {
    return (
        <section className="brands-section section">
            <div className="container">
                <h2 className="brands-title text-center">Our Brands</h2>
                <div className="brands-divider"></div>
                <div className="brands-grid">
                    {brands.map((brand) => (
                        <div key={brand.id} className="brand-item">
                            {/* Placeholder for actual logo images */}
                            <div className="brand-logo-placeholder">
                                <span>{brand.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
