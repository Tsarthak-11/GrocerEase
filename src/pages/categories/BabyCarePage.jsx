import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';

// Import 8 different images (update the paths as needed)
import img1 from '../../images/pampers.jpg';
import img2 from '../../images/johnsonsbaby.jpeg';
import img3 from '../../images/himalaya.jpg';
import img4 from '../../images/mamaearth.jpg';
import img5 from '../../images/sebamadebaby.jpg';
import img6 from '../../images/chiccobabysoap.jpg';
import img7 from '../../images/MeeMeebaby.jpg';
import img8 from '../../images/mothercare.jpg';

const babyCareProducts = [
  { id: 1, name: 'Pampers Diapers', price: 350, oldPrice: 400, category: 'Baby Care', image: img1 },
  { id: 2, name: 'Johnson Baby Oil', price: 120, oldPrice: 140, category: 'Baby Care', image: img2 },
  { id: 3, name: 'Himalaya Baby Powder', price: 90, oldPrice: 110, category: 'Baby Care', image: img3 },
  { id: 4, name: 'Mamaearth Baby Shampoo', price: 180, oldPrice: 200, category: 'Baby Care', image: img4 },
  { id: 5, name: 'Sebamed Baby Lotion', price: 220, oldPrice: 250, category: 'Baby Care', image: img5 },
  { id: 6, name: 'Chicco Baby Soap', price: 60, oldPrice: 80, category: 'Baby Care', image: img6 },
  { id: 7, name: 'Mee Mee Baby Wipes', price: 75, oldPrice: 90, category: 'Baby Care', image: img7 },
  { id: 8, name: 'Mothercare Feeding Bottle', price: 150, oldPrice: 170, category: 'Baby Care', image: img8 },
];

const BabyCarePage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Baby Care</h1>
      <p>Best products for your baby's care and comfort!</p>
    </div>
    <Row>
      {babyCareProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default BabyCarePage; 