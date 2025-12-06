import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySection.css';

const categories = [
    {
        id: 1,
        title: 'Wild Caught',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '/products?category=wild-caught'
    },
    {
        id: 2,
        title: 'Farm Raised',
        image: 'https://images.unsplash.com/photo-1623341214823-4d61303328f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '/products?category=farm-raised'
    },
    {
        id: 3,
        title: 'Specialty & Value-Added',
        image: 'https://images.unsplash.com/photo-1559742811-822873691df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        link: '/products?category=specialty'
    }
];

const CategorySection = () => {
    return (
        <section className="section category-section">
            <div className="container">
                <h2 className="section-title text-center">Our Product Categories</h2>
                <p className="section-subtitle text-center">Explore our wide range of premium seafood</p>

                <div className="category-grid">
                    {categories.map((cat) => (
                        <Link to={cat.link} key={cat.id} className="category-card">
                            <div className="category-image-wrapper">
                                <img src={cat.image} alt={cat.title} className="category-image" />
                                <div className="category-overlay">
                                    <h3 className="category-title">{cat.title}</h3>
                                    <span className="category-btn">View Products</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
