import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';
import defaultImg from '../../images/category-instant-food.jpg';

const breakfastInstantFoodProducts = [
  { id: 1, name: "Kellogg's Corn Flakes", price: 120, oldPrice: 135, category: 'Breakfast & Instant Food', image: defaultImg },
  { id: 2, name: 'Maggi Noodles', price: 12, oldPrice: 15, category: 'Breakfast & Instant Food', image: defaultImg },
  { id: 3, name: 'Oats', price: 60, oldPrice: 70, category: 'Breakfast & Instant Food', image: defaultImg },
  { id: 4, name: 'Poha', price: 40, oldPrice: 50, category: 'Breakfast & Instant Food', image: defaultImg },
  { id: 5, name: 'Upma Mix', price: 35, oldPrice: 45, category: 'Breakfast & Instant Food', image: defaultImg },
  { id: 6, name: 'Idli Dosa Batter', price: 55, oldPrice: 65, category: 'Breakfast & Instant Food', image: defaultImg },
  { id: 7, name: 'Pasta', price: 80, oldPrice: 90, category: 'Breakfast & Instant Food', image: defaultImg },
  { id: 8, name: 'Choco Fills', price: 90, oldPrice: 100, category: 'Breakfast & Instant Food', image: defaultImg },
];

const BreakfastInstantFoodPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Breakfast & Instant Food</h1>
      <p>Quick and tasty breakfast and instant food options!</p>
    </div>
    <Row>
      {breakfastInstantFoodProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default BreakfastInstantFoodPage; 