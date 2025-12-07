import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

// Product Images
import shrimpInHand from '../assets/products/shrimp in hand.png';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: "PD Tail-On Shrimp",
            description: "Our peeled and deveined (PD) tail-on shrimp offer the ultimate convenience without compromising on presentation. Perfectly cleaned and ready to cook, they add an elegant touch to shrimp cocktails, stir-frys, and pasta dishes.",
            image: shrimpInHand
        },
        {
            id: 2,
            title: "PD Tail Off Shrimp",
            description: "For pure convenience, our Peeled and Deveined (PD) Tail-Off shrimp are the perfect choice. With the shell and tail completely removed, they are ready to be tossed directly into curries, salads, risottos, or any dish where you want bite-sized perfection.",
            image: shrimpInHand
        }
    ];

    return (
        <section className="featured-section section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Latest Products</h2>
                    <div className="section-divider"></div>
                </div>

                {products.map((product, index) => (
                    <div key={product.id} className={`product-showcase ${index % 2 !== 0 ? 'row-reverse' : ''}`} style={{ marginBottom: '4rem' }}>
                        <div className="product-info-wrapper">
                            <div className="product-info-content">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-description">
                                    {product.description}
                                </p>
                                <Link to="/products" className="btn btn-primary product-btn">View Details</Link>
                            </div>
                        </div>

                        <div className="product-image-wrapper">
                            {/* Static Image */}
                            <img src={product.image} alt={`${product.title} - Zey Fresh`} className="product-seamless-img" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
