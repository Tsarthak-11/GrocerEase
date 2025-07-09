import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';
import defaultImg from '../../images/category-snack-munchies.jpg';

const snacksMunchiesProducts = [
  { id: 1, name: 'Lays Classic Salted', price: 30, oldPrice: 35, category: 'Snacks & Munchies', image: defaultImg },
  { id: 2, name: 'Kurkure Masala Munch', price: 20, oldPrice: 25, category: 'Snacks & Munchies', image: defaultImg },
  { id: 3, name: 'Haldiram Bhujia', price: 40, oldPrice: 50, category: 'Snacks & Munchies', image: defaultImg },
  { id: 4, name: 'Bingo Mad Angles', price: 25, oldPrice: 30, category: 'Snacks & Munchies', image: defaultImg },
  { id: 5, name: 'Uncle Chips', price: 20, oldPrice: 25, category: 'Snacks & Munchies', image: defaultImg },
  { id: 6, name: 'Pringles', price: 80, oldPrice: 90, category: 'Snacks & Munchies', image: defaultImg },
  { id: 7, name: 'Doritos Nachos', price: 60, oldPrice: 70, category: 'Snacks & Munchies', image: defaultImg },
  { id: 8, name: 'Makhana', price: 90, oldPrice: 100, category: 'Snacks & Munchies', image: defaultImg },
];

const SnacksMunchiesPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Snacks & Munchies</h1>
      <p>Crunchy and tasty snacks for every mood!</p>
    </div>
    <Row>
      {snacksMunchiesProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default SnacksMunchiesPage; 