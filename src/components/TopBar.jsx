import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-light py-1 border-bottom">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <span>Super Value Deals - Save more with coupons</span>
          </Col>
          <Col md={6}>
            <Nav className="justify-content-end">
              <Nav.Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark social-icon-link" style={{ fontSize: '1.3rem', marginLeft: 10 }}>
                <FaFacebook style={{ verticalAlign: 'middle' }} />
              </Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark social-icon-link" style={{ fontSize: '1.3rem', marginLeft: 10 }}>
                <FaTwitter style={{ verticalAlign: 'middle' }} />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark social-icon-link" style={{ fontSize: '1.3rem', marginLeft: 10 }}>
                <FaInstagram style={{ verticalAlign: 'middle' }} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar; 