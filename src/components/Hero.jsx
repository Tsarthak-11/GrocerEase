import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';
import slide1 from '../images/slide-1.jpg';
import slide2 from '../images/slider-2.jpg';

const slides = [slide1, slide2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className="hero-section">
      {slides.map((img, idx) => (
        <div
          key={idx}
          className={`hero-slide${current === idx ? ' active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay">
        <Container>
          <Row>
            <Col lg={7} md={10}>
              <div className="hero-content">
                <span className="hero-subtitle">Opening Sale Discount 50%</span>
                <h1 className="hero-title">SuperMarket For Fresh Grocery</h1>
                <p className="hero-text">
                  Introduced a new model for online grocery shopping and convenient home delivery.
                </p>
                <Button as={Link} to="/products" variant="dark" className="mt-3">
                  Shop Now <i className="fas fa-arrow-right"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`hero-dot${current === idx ? ' active' : ''}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero; 