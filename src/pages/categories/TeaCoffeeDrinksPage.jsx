import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';
import defaultImg from '../../images/category-tea-coffee-drinks.jpg';

const teaCoffeeDrinksProducts = [
  { id: 1, name: 'Tata Tea Gold', price: 120, oldPrice: 140, category: 'Tea, Coffee & Drinks', image: defaultImg },
  { id: 2, name: 'Nescafe Classic', price: 150, oldPrice: 170, category: 'Tea, Coffee & Drinks', image: defaultImg },
  { id: 3, name: 'Bru Instant Coffee', price: 130, oldPrice: 150, category: 'Tea, Coffee & Drinks', image: defaultImg },
  { id: 4, name: 'Red Label Tea', price: 110, oldPrice: 130, category: 'Tea, Coffee & Drinks', image: defaultImg },
  { id: 5, name: 'Bournvita', price: 180, oldPrice: 200, category: 'Tea, Coffee & Drinks', image: defaultImg },
  { id: 6, name: 'Horlicks', price: 160, oldPrice: 180, category: 'Tea, Coffee & Drinks', image: defaultImg },
  { id: 7, name: 'Real Fruit Juice', price: 90, oldPrice: 110, category: 'Tea, Coffee & Drinks', image: defaultImg },
  { id: 8, name: 'Sprite', price: 60, oldPrice: 80, category: 'Tea, Coffee & Drinks', image: defaultImg },
];

const TeaCoffeeDrinksPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Tea, Coffee & Drinks</h1>
      <p>Refresh yourself with tea, coffee, and drinks!</p>
    </div>
    <Row>
      {teaCoffeeDrinksProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default TeaCoffeeDrinksPage; 