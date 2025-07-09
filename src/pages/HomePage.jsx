import React from 'react';
import Hero from '../components/Hero.jsx';
import FeaturedCategories from '../components/FeaturedCategories.jsx';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import adBanner2 from '../images/ad-banner-2.jpg';
import adBanner3 from '../images/ad-banner-3.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <div className="ad-banners-section">
        <div className="ad-banner">
          <img src={adBanner2} alt="Fruits & Vegetables" />
          <div className="ad-banner-content">
            <h3>Fruits & Vegetables</h3>
            <p>Get Upto <span>30% Off</span></p>
            <Button as={Link} to="/category/fruits-vegetables" variant="success">Shop Now</Button>
          </div>
        </div>
        <div className="ad-banner">
          <img src={adBanner3} alt="Ice Cream" />
          <div className="ad-banner-content">
            <h3>Ice Cream & Desserts</h3>
            <p>Get Upto <span>25% Off</span></p>
            <Button as={Link} to="/category/ice-cream-desserts" variant="success">Shop Now</Button>
          </div>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
};

export default HomePage; 