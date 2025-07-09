import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './ProductCard.css';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';

const ProductCard = ({ product }) => {
  const { addToWishlist, wishlistItems } = useWishlist();
  const { addToCart } = useCart();
  const isWishlisted = wishlistItems.some(item => item.id === product.id);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product, 1);
    navigate('/cart');
  };

  return (
    <Card className="h-100 product-card">
      <Button 
        variant={isWishlisted ? "danger" : "light"}
        className="wishlist-btn" 
        onClick={() => addToWishlist(product)}
      >
        <i className="fas fa-heart"></i>
      </Button>
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image} alt={product.name} className="product-card-img" style={{ maxHeight: 140, objectFit: 'contain' }} />
      </Link>
      <Card.Body>
        <div className="product-category mb-1">{product.category}</div>
        <Card.Title as="h5" className="product-title">
            <Link to={`/product/${product.id}`} className='text-dark text-decoration-none'>
                {product.name}
            </Link>
        </Card.Title>
        <div className="d-flex justify-content-between align-items-center">
            <div className="product-price">
                ${product.price} <span className="text-decoration-line-through text-muted">${product.oldPrice}</span>
            </div>
            {/* Rating can go here */}
        </div>
      </Card.Body>
      <Card.Footer className="bg-white border-0">
         <Button variant="primary" className="w-100" onClick={handleAddToCart}>
            <i className="fas fa-plus"></i> Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard; 