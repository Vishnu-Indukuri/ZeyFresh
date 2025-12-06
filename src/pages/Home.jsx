import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import FeatureSection from '../components/FeatureSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />


            <FeaturedProducts />

            <FeatureSection
                title="Quality"
                description="We sell the highest-quality, sustainable seafood. Our complete line of sustainable frozen seafood is available to all buyers—supermarkets, foodservice, distributors, and club stores."
                image="https://images.unsplash.com/photo-1544551763-46a8e3d67167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // High quality seafood/ice image
                imageAlt="Quality Seafood"
                centered={true}
            />

            <FeatureSection
                title="Wild Caught"
                subtitle="Sustainability First"
                description="Sustainable wild seafood, caught around the globe—with quality you can trust. We partner with fisheries that respect the ocean's balance."
                image="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Ocean/Turtle/Fish image
                imageAlt="Wild Caught"
                reverse={true}
                buttonText="View Wild Caught"
                buttonLink="/products"
            />

            <FeatureSection
                title="Farm Raised"
                subtitle="Environmentally Friendly"
                description="Environment friendly farm raised seafood raised around the globe by farms and plants we trust and available through out the year."
                image="https://images.unsplash.com/photo-1621857053358-0bb30423013e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Shrimp/Farm image
                imageAlt="Farm Raised"
                reverse={false}
                buttonText="View Farm Raised"
                buttonLink="/products"
            />
        </div >
    );
};

export default Home;
