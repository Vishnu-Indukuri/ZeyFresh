import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { products as allProducts } from '../data/products';
import './Products.css';

const Products = () => {
    const location = useLocation();
    const [products, setProducts] = useState(allProducts);
    const [filters, setFilters] = useState({
        category: 'all',
        species: 'all',
        size: 'all'
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryParam = params.get('category');
        if (categoryParam) {
            setFilters(prev => ({ ...prev, category: categoryParam }));
        }
    }, [location]);

    useEffect(() => {
        let result = allProducts;
        if (filters.category !== 'all') {
            result = result.filter(p => p.category === filters.category);
        }
        if (filters.species !== 'all') {
            result = result.filter(p => p.species === filters.species);
        }
        if (filters.size !== 'all') {
            result = result.filter(p => p.size === filters.size);
        }
        setProducts(result);
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="products-page section container">
            <div className="products-header">
                <h1 className="page-title">Our Products</h1>
                <p className="page-subtitle">Premium quality seafood for every need</p>
            </div>

            <div className="products-layout">
                {/* Sidebar Filters */}
                <aside className="products-sidebar">
                    <div className="filter-group">
                        <h3>Category</h3>
                        <select name="category" value={filters.category} onChange={handleFilterChange}>
                            <option value="all">All Categories</option>
                            <option value="wild-caught">Wild Caught</option>
                            <option value="farm-raised">Farm Raised</option>
                            <option value="value-added">Value Added</option>
                            <option value="specialty">Specialty</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Species</h3>
                        <select name="species" value={filters.species} onChange={handleFilterChange}>
                            <option value="all">All Species</option>
                            <option value="vannamei">Vannamei (White)</option>
                            <option value="black-tiger">Black Tiger</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Size / Grade</h3>
                        <select name="size" value={filters.size} onChange={handleFilterChange}>
                            <option value="all">All Sizes</option>
                            <option value="U/15">U/15</option>
                            <option value="16/20">16/20</option>
                            <option value="21/25">21/25</option>
                            <option value="26/30">26/30</option>
                            <option value="31/40">31/40</option>
                            <option value="41/50">41/50</option>
                        </select>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="products-content">
                    <div className="products-grid-list">
                        {products.length > 0 ? (
                            products.map(product => (
                                <div key={product.id} className="product-listing-card">
                                    <div className="listing-image-container">
                                        <img src={product.image} alt={product.name} />
                                        <span className="listing-badge">{product.category.replace('-', ' ')}</span>
                                    </div>
                                    <div className="listing-info">
                                        <h3>{product.name}</h3>
                                        <p className="listing-meta">{product.species} • {product.size}</p>
                                        <Button to={`/products/${product.id}`} variant="primary" className="listing-btn">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-products">No products found matching your filters.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
