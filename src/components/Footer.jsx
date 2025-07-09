import React from 'react';
import { Container, Row, Col, Nav, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLeaf } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(90deg, #14532d 0%, #43e97b 100%)', color: '#fff', fontFamily: 'Poppins, Arial, sans-serif' }} className="pt-5 pb-4">
      <Container>
        <Row className="mb-5">
          <Col md={4} sm={12} className="mb-4 mb-md-0 d-flex flex-column align-items-start">
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <FaShoppingCart style={{ fontSize: 32, marginRight: 10, color: '#fff' }} />
              <span style={{ fontWeight: 700, fontSize: 24, letterSpacing: 1 }}>GrocerEase</span>
              <span style={{ background: '#00e676', color: '#14532d', borderRadius: '1rem', fontSize: '0.9rem', fontWeight: 600, padding: '0.2rem 0.8rem', marginLeft: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>100% Fresh <FaLeaf style={{ marginLeft: 4, color: '#14532d' }} /></span>
            </div>
            <p style={{ maxWidth: 320 }}>
              GrocerEase is your one-stop shop for fresh groceries, daily essentials, and more. Enjoy fast delivery and the best deals every day!
            </p>
            <div className="d-flex gap-2 mt-2">
              <a href="#" className="footer-link text-white fs-5" style={{ transition: 'color 0.2s' }}><FaFacebookF /></a>
              <a href="#" className="footer-link text-white fs-5" style={{ transition: 'color 0.2s' }}><FaTwitter /></a>
              <a href="#" className="footer-link text-white fs-5" style={{ transition: 'color 0.2s' }}><FaInstagram /></a>
              <a href="#" className="footer-link text-white fs-5" style={{ transition: 'color 0.2s' }}><FaYoutube /></a>
            </div>
          </Col>
          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <h5>Company</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="#" className="footer-link">About</Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">Blog</Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">Help Center</Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">Our Value</Nav.Link>
            </Nav>
          </Col>
          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <h5>For Consumers</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="#" className="footer-link">Payments</Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">Shipping</Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">Product Returns</Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">FAQ</Nav.Link>
              <Nav.Link as={Link} to="#" className="footer-link">Shop Checkout</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <h5>Newsletter</h5>
            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <Form className="d-flex mb-2">
              <InputGroup>
                <FormControl type="email" placeholder="Enter your email" aria-label="Email" />
                <Button variant="success">Subscribe</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col>
            <p className="text-center text-white mb-0">&copy; {new Date().getFullYear()} GrocerEase. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 