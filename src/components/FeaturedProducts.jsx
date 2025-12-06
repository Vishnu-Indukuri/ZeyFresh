import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const products = [];

const FeaturedProducts = () => {
    return (
        <section className="featured-section section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Latest Products</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="products-grid">
                    {/* Products will be added here */}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
