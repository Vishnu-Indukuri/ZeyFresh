import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Button from '../components/Button';
import { FaCheckCircle, FaBox, FaGlobeAmericas, FaSnowflake } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="section container text-center">
                <h2>Product not found</h2>
                <Button to="/products" variant="primary">Back to Products</Button>
            </div>
        );
    }

    return (
        <div className="product-detail-page section container">
            <div className="breadcrumb">
                <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
            </div>

            <div className="product-detail-layout">
                <div className="product-gallery">
                    <img src={product.image} alt={product.name} className="main-image" />
                </div>

                <div className="product-info-section">
                    <span className="product-category-badge">{product.category.replace('-', ' ')}</span>
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-description">{product.description}</p>

                    <div className="product-specs">
                        <div className="spec-item">
                            <span className="spec-label">Species:</span>
                            <span className="spec-value">{product.species}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Size/Grade:</span>
                            <span className="spec-value">{product.size}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Origin:</span>
                            <span className="spec-value">{product.origin}</span>
                        </div>
                    </div>

                    <div className="product-features">
                        <div className="feature-item">
                            <FaSnowflake className="feature-icon" />
                            <div>
                                <h4>Processing</h4>
                                <p>{product.processing}</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <FaBox className="feature-icon" />
                            <div>
                                <h4>Packaging</h4>
                                <p>{product.packaging}</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <FaCheckCircle className="feature-icon" />
                            <div>
                                <h4>Quality Assurance</h4>
                                <p>100% Quality Checked</p>
                            </div>
                        </div>
                    </div>

                    <div className="product-actions">
                        <Button to="/contact" variant="primary" className="action-btn">
                            Request Quote
                        </Button>
                        <p className="bulk-note">Bulk orders available for export.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
