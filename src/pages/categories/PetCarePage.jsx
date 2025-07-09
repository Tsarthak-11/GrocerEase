import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';
import defaultImg from '../../images/category-pet-care.jpg';

const petCareProducts = [
  { id: 1, name: 'Pedigree Dog Food', price: 250, oldPrice: 280, category: 'Pet Care', image: defaultImg },
  { id: 2, name: 'Whiskas Cat Food', price: 200, oldPrice: 230, category: 'Pet Care', image: defaultImg },
  { id: 3, name: 'Drools Puppy Food', price: 180, oldPrice: 210, category: 'Pet Care', image: defaultImg },
  { id: 4, name: 'Pet Shampoo', price: 120, oldPrice: 140, category: 'Pet Care', image: defaultImg },
  { id: 5, name: 'Dog Chew Bone', price: 60, oldPrice: 80, category: 'Pet Care', image: defaultImg },
  { id: 6, name: 'Cat Litter', price: 90, oldPrice: 110, category: 'Pet Care', image: defaultImg },
  { id: 7, name: 'Pet Toy Ball', price: 40, oldPrice: 50, category: 'Pet Care', image: defaultImg },
  { id: 8, name: 'Dog Collar', price: 70, oldPrice: 90, category: 'Pet Care', image: defaultImg },
];

const PetCarePage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Pet Care</h1>
      <p>Everything your pet needs for a happy life!</p>
    </div>
    <Row>
      {petCareProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default PetCarePage; 