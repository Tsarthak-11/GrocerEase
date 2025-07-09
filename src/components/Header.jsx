import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, logout } = useAuth();
  return (
    <header style={{ background: 'linear-gradient(90deg, #14532d 0%, #43e97b 100%)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <Navbar expand="lg" collapseOnSelect variant="dark" style={{ background: 'transparent', padding: '0.7rem 0' }}>
        <Container>
          <Navbar.Brand as={Link} to='/' style={{ display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: '2rem', letterSpacing: '1px', color: '#fff' }}>
            <img src={process.env.PUBLIC_URL + '/grocerEase.png'} alt="GrocerEase Logo" style={{ marginRight: 0, height: '3rem', width: '5rem', objectFit: 'contain', borderRadius: '0.1rem' }} />
            GrocerEase
            <span style={{ background: '#00e676', color: '#14532d', borderRadius: '1rem', fontSize: '0.9rem', fontWeight: 600, padding: '0.2rem 0.8rem', marginLeft: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>Super Value</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' style={{ color: '#fff' }}>Home</Nav.Link>
              <Nav.Link as={Link} to='/products' style={{ color: '#fff' }}>Products</Nav.Link>
            </Nav>
            <Form className="d-flex me-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ borderRadius: '1rem' }}
              />
              <Button variant="link" style={{ borderRadius: '50%', width: 40, height: 40, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', boxShadow: 'none' }}>
                <FaSearch style={{ fontSize: '1.2rem', color: '#43e97b' }} />
              </Button>
            </Form>
            <Nav>
                <Nav.Link as={Link} to='/cart' style={{ color: '#fff' }}>
                  <i className='fas fa-shopping-cart'></i> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
                <Nav.Link as={Link} to='/wishlist' style={{ color: '#fff' }}>
                  <i className='fas fa-heart'></i> Wishlist
                  {wishlistItems.length > 0 && (
                    <Badge pill bg='danger' style={{ marginLeft: '5px' }}>
                      {wishlistItems.length}
                    </Badge>
                  )}
                </Nav.Link>
                {user ? (
                  <NavDropdown title={user.displayName || user.email} id="user-nav-dropdown" align="end">
                    <NavDropdown.Item as={Link} to="/account/profile">Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link as={Link} to='/login' style={{ color: '#fff' }}><i className='fas fa-user'></i> Sign In</Nav.Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header; 