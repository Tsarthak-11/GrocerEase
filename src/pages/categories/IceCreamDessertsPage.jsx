import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';

// Import 8 different images (update the paths as needed)
import img1 from '../../images/vanilla.webp';
import img2 from '../../images/chocolate.webp';
import img3 from '../../images/strawberry.webp';
import img4 from '../../images/mangokulfi.webp';
import img5 from '../../images/chocobar.webp';
import img6 from '../../images/rasmalai.webp';
import img7 from '../../images/gulab.webp';
import img8 from '../../images/brownie.webp';

const iceCreamDessertsProducts = [
  { id: 1, name: 'Vanilla Ice Cream', price: 60, oldPrice: 80, category: 'Ice Cream & Desserts', image: img1 },
  { id: 2, name: 'Chocolate Ice Cream', price: 70, oldPrice: 90, category: 'Ice Cream & Desserts', image: img2 },
  { id: 3, name: 'Strawberry Sundae', price: 90, oldPrice: 110, category: 'Ice Cream & Desserts', image: img3 },
  { id: 4, name: 'Mango Kulfi', price: 50, oldPrice: 65, category: 'Ice Cream & Desserts', image: img4 },
  { id: 5, name: 'Choco Bar', price: 40, oldPrice: 55, category: 'Ice Cream & Desserts', image: img5 },
  { id: 6, name: 'Rasmalai', price: 120, oldPrice: 140, category: 'Ice Cream & Desserts', image: img6 },
  { id: 7, name: 'Gulab Jamun', price: 80, oldPrice: 100, category: 'Ice Cream & Desserts', image: img7 },
  { id: 8, name: 'Brownie', price: 100, oldPrice: 120, category: 'Ice Cream & Desserts', image: img8 },
];

const IceCreamDessertsPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Ice Cream & Desserts</h1>
      <p>Delicious ice creams and desserts for your sweet tooth!</p>
    </div>
    <Row>
      {iceCreamDessertsProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default IceCreamDessertsPage; 