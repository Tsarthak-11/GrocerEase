import React from 'react';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Image, Button, Alert, Breadcrumb, ListGroup, Card } from 'react-bootstrap';

const categories = [
  'Vegetables & Fruits',
  'Breakfast & Instant Food',
  'Bakery & Biscuits',
  'Atta, Rice & Dal',
  'Sauces & Spreads',
  'Organic & Gourmet',
  'Baby Care',
  'Cleaning Essentials',
  'Personal Care',
  'Dairy, Bread & Eggs',
  'Cold Drinks & Juices',
  'Tea, Coffee & Drinks',
  'Masala, Oil & More',
  'Chicken, Meat & Fish',
  'Paan Corner',
  'Pharma & Wellness',
  'Home & Office',
  'Pet Care',
];

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
    navigate('/cart');
  };

  return (
    <Container className="py-4">
      {/* Breadcrumbs */}
      <Row>
        <Col>
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/products' }}>Shop</Breadcrumb.Item>
            <Breadcrumb.Item active>My Wishlist</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        {/* Sidebar Categories */}
        <Col md={3} className="mb-4">
          <Card className="mb-4">
            <Card.Header className="bg-white fw-bold">Categories</Card.Header>
            <ListGroup variant="flush">
              {categories.map((cat, idx) => (
                <ListGroup.Item key={idx} className="py-2 px-3">
                  <span style={{ fontSize: '0.97rem' }}>{cat}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        {/* Wishlist Table */}
        <Col md={9}>
          <h2 className="mb-4">My Wishlist <span className="text-muted" style={{ fontSize: '1.1rem' }}>({wishlistItems.length} {wishlistItems.length === 1 ? 'product' : 'products'})</span></h2>
          {wishlistItems.length === 0 ? (
            <Alert variant='info'>
              Your wishlist is empty. <Link to='/products'>Go Shopping</Link>
            </Alert>
          ) : (
            <div className="table-responsive">
              <Table hover className="align-middle bg-white rounded shadow-sm">
                <thead className="table-light">
                  <tr>
                    <th style={{ minWidth: 180 }}>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <Image src={item.image} alt={item.name} width={60} height={60} style={{ objectFit: 'cover', borderRadius: 8 }} />
                          <div>
                            <Link to={`/product/${item.id}`} className="fw-bold text-dark">{item.name}</Link>
                            <div className="text-muted" style={{ fontSize: '0.95rem' }}>{item.category || ''}</div>
                          </div>
                        </div>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        {item.inStock !== false ? (
                          <span className="badge bg-success">In Stock</span>
                        ) : (
                          <span className="badge bg-danger">Out of Stock</span>
                        )}
                      </td>
                      <td>
                        {item.inStock !== false ? (
                          <Button variant='primary' size='sm' onClick={() => handleAddToCart(item)}>
                            <i className="fas fa-shopping-cart"></i> Add to Cart
                          </Button>
                        ) : (
                          <Button variant='outline-secondary' size='sm' disabled>Contact Us</Button>
                        )}
                      </td>
                      <td>
                        <Button
                          type='button'
                          variant='light'
                          size='sm'
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <i className='fas fa-trash text-danger'></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default WishlistPage; 