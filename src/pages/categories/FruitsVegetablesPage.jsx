import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';

// Import images for each product
import img1 from '../../images/product-img-17.jpg';
import img2 from '../../images/product-img-18.jpg';
import img3 from '../../images/product-img-21.jpg';
import img4 from '../../images/product-img-19.jpg';
import img5 from '../../images/product-img-19.jpg';
import img6 from '../../images/product-img-15.jpg';
import img7 from '../../images/product-img-17.jpg';
import img8 from '../../images/product-img-18.jpg';

const fruitsVegetablesProducts = [
  { id: 1, name: 'Kiwi', price: 80, oldPrice: 100, category: 'Fruits & Vegetables', image: img1 },
  { id: 2, name: 'Banana', price: 30, oldPrice: 40, category: 'Fruits & Vegetables', image: img2 },
  { id: 3, name: 'Tomato', price: 25, oldPrice: 30, category: 'Fruits & Vegetables', image: img3 },
  { id: 4, name: 'Beetroot', price: 20, oldPrice: 25, category: 'Fruits & Vegetables', image: img4 },
  { id: 5, name: 'Pineapple', price: 40, oldPrice: 50, category: 'Fruits & Vegetables', image: img5 },
  { id: 6, name: 'Apple', price: 35, oldPrice: 45, category: 'Fruits & Vegetables', image: img6 },
  { id: 7, name: 'Carrot', price: 60, oldPrice: 70, category: 'Fruits & Vegetables', image: img7 },
  { id: 8, name: 'Potato', price: 30, oldPrice: 40, category: 'Fruits & Vegetables', image: img8 },
];

const FruitsVegetablesPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Fruits & Vegetables</h1>
      <p>Fresh fruits and vegetables for your healthy lifestyle!</p>
    </div>
    <Row>
      {fruitsVegetablesProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default FruitsVegetablesPage; 