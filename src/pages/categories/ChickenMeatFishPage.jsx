import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';
import defaultImg from '../../images/category-chicken-meat-fish.jpg';

const chickenMeatFishProducts = [
  { id: 1, name: 'Fresh Chicken Breast', price: 250, oldPrice: 280, category: 'Chicken, Meat & Fish', image: defaultImg },
  { id: 2, name: 'Mutton Curry Cut', price: 500, oldPrice: 550, category: 'Chicken, Meat & Fish', image: defaultImg },
  { id: 3, name: 'Rohu Fish', price: 180, oldPrice: 200, category: 'Chicken, Meat & Fish', image: defaultImg },
  { id: 4, name: 'Eggs (12 Pack)', price: 70, oldPrice: 80, category: 'Chicken, Meat & Fish', image: defaultImg },
  { id: 5, name: 'Chicken Drumsticks', price: 220, oldPrice: 250, category: 'Chicken, Meat & Fish', image: defaultImg },
  { id: 6, name: 'Prawns Medium', price: 350, oldPrice: 400, category: 'Chicken, Meat & Fish', image: defaultImg },
  { id: 7, name: 'Fish Fillet', price: 300, oldPrice: 350, category: 'Chicken, Meat & Fish', image: defaultImg },
  { id: 8, name: 'Chicken Mince', price: 200, oldPrice: 230, category: 'Chicken, Meat & Fish', image: defaultImg },
];

const ChickenMeatFishPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Chicken, Meat & Fish</h1>
      <p>Fresh and quality chicken, meat, and fish products!</p>
    </div>
    <Row>
      {chickenMeatFishProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default ChickenMeatFishPage; 