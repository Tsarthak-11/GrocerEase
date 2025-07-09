import React, { useRef, useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FeaturedCategories.css';
import attaRiceDalImg from '../images/category-atta-rice-dal.jpg';
import babyCareImg from '../images/category-baby-care.jpg';
import bakeryBiscuitsImg from '../images/category-bakery-biscuits.jpg';
import chickenMeatFishImg from '../images/category-chicken-meat-fish.jpg';
import cleaningEssentialsImg from '../images/category-cleaning-essentials.jpg';
import dairyBreadEggsImg from '../images/category-dairy-bread-eggs.jpg';
import instantFoodImg from '../images/category-instant-food.jpg';
import petCareImg from '../images/category-pet-care.jpg';
import snackMunchiesImg from '../images/category-snack-munchies.jpg';
import teaCoffeeDrinksImg from '../images/category-tea-coffee-drinks.jpg';

const categories = [
  { name: 'Atta, Rice & Dal', img: attaRiceDalImg },
  { name: 'Baby Care', img: babyCareImg },
  { name: 'Bakery & Biscuits', img: bakeryBiscuitsImg },
  { name: 'Chicken, Meat & Fish', img: chickenMeatFishImg },
  { name: 'Cleaning Essentials', img: cleaningEssentialsImg },
  { name: 'Dairy, Bread & Eggs', img: dairyBreadEggsImg },
  { name: 'Breakfast & Instant Food', img: instantFoodImg },
  { name: 'Pet Care', img: petCareImg },
  { name: 'Snacks & Munchies', img: snackMunchiesImg },
  { name: 'Tea, Coffee & Drinks', img: teaCoffeeDrinksImg },
];

const VISIBLE_COUNT = 6;

const FeaturedCategories = () => {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => {
        const next = prev + 1;
        if (next > categories.length - VISIBLE_COUNT) {
          scrollToIndex(0);
          return 0;
        } else {
          scrollToIndex(next);
          return next;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  // Scroll to a specific index
  const scrollToIndex = (idx) => {
    const { current } = scrollRef;
    if (current) {
      const card = current.querySelector('.category-card');
      if (card) {
        const cardWidth = card.offsetWidth + 24; // 24px gap
        current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
      }
    }
  };

  // Manual scroll
  const scroll = (direction) => {
    let nextIndex = scrollIndex;
    if (direction === 'left') {
      nextIndex = Math.max(0, scrollIndex - 1);
    } else {
      nextIndex = Math.min(categories.length - VISIBLE_COUNT, scrollIndex + 1);
    }
    setScrollIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const categoryLinks = {
    'Atta, Rice & Dal': '/category/atta-rice-dal',
    'Baby Care': '/category/baby-care',
    'Bakery & Biscuits': '/category/bakery-biscuits',
    'Chicken, Meat & Fish': '/category/chicken-meat-fish',
    'Cleaning Essentials': '/category/cleaning-essentials',
    'Dairy, Bread & Eggs': '/category/dairy-bread-eggs',
    'Breakfast & Instant Food': '/category/breakfast-instant-food',
    'Pet Care': '/category/pet-care',
    'Snacks & Munchies': '/category/snacks-munchies',
    'Tea, Coffee & Drinks': '/category/tea-coffee-drinks',
  };

  return (
    <section className="featured-categories py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Categories</h2>
          <p className="text-muted">Get Your Desired Product from Featured Category!</p>
        </div>
        <div style={{ position: 'relative' }}>
          <button className="scroll-arrow left" onClick={() => scroll('left')} aria-label="Scroll left" disabled={scrollIndex === 0}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="categories-scroll" ref={scrollRef} style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
            {categories.map((category, index) => (
              <div key={index} style={{ flex: '0 0 auto' }}>
                <Link to={categoryLinks[category.name] || "/products"} className="text-decoration-none text-dark">
                  <Card className="category-card h-100">
                    <div className="category-card-img">
                      <img src={category.img} alt={category.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <Card.Body className="text-center">
                      <Card.Title className="category-card-title">{category.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={() => scroll('right')} aria-label="Scroll right" disabled={scrollIndex >= categories.length - VISIBLE_COUNT}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories; 