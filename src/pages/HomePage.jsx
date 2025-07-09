import React from 'react';
import Hero from '../components/Hero.jsx';
import FeaturedCategories from '../components/FeaturedCategories.jsx';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import adBanner2 from '../images/ad-banner-2.jpg';
import adBanner3 from '../images/ad-banner-3.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <div className="ad-banners-section" style={{ maxWidth: 1200, margin: '2rem auto', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="ad-banner" style={{ position: 'relative', flex: 1, minWidth: 280, maxWidth: 590, borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <img src={adBanner2} alt="Fruits & Vegetables" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem' }}>
            <h3 style={{ fontWeight: 700, fontSize: '2rem', color: '#1b5e20', marginBottom: '0.5rem' }}>Fruits & Vegetables</h3>
            <p style={{ color: '#333', fontSize: '1.1rem', marginBottom: '1rem' }}>Get Upto <span style={{ color: '#b71c1c', fontWeight: 700 }}>30% Off</span></p>
            <Button as={Link} to="/category/fruits-vegetables" variant="success">Shop Now</Button>
          </div>
        </div>
        <div className="ad-banner" style={{ position: 'relative', flex: 1, minWidth: 280, maxWidth: 590, borderRadius: '1.2rem', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <img src={adBanner3} alt="Ice Cream" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem' }}>
            <h3 style={{ fontWeight: 700, fontSize: '2rem', color: '#01579b', marginBottom: '0.5rem' }}>Ice Cream & Desserts</h3>
            <p style={{ color: '#333', fontSize: '1.1rem', marginBottom: '1rem' }}>Get Upto <span style={{ color: '#b71c1c', fontWeight: 700 }}>25% Off</span></p>
            <Button as={Link} to="/category/ice-cream-desserts" variant="success">Shop Now</Button>
          </div>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
};

export default HomePage; 