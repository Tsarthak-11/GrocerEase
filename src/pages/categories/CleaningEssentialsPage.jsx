import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';
import defaultImg from '../../images/category-cleaning-essentials.jpg';

const cleaningEssentialsProducts = [
  { id: 1, name: 'Harpic Toilet Cleaner', price: 90, oldPrice: 110, category: 'Cleaning Essentials', image: defaultImg },
  { id: 2, name: 'Lizol Floor Cleaner', price: 120, oldPrice: 140, category: 'Cleaning Essentials', image: defaultImg },
  { id: 3, name: 'Vim Dishwash Bar', price: 20, oldPrice: 25, category: 'Cleaning Essentials', image: defaultImg },
  { id: 4, name: 'Scotch-Brite Scrub Pad', price: 15, oldPrice: 20, category: 'Cleaning Essentials', image: defaultImg },
  { id: 5, name: 'Dettol Antiseptic Liquid', price: 60, oldPrice: 70, category: 'Cleaning Essentials', image: defaultImg },
  { id: 6, name: 'Colin Glass Cleaner', price: 85, oldPrice: 100, category: 'Cleaning Essentials', image: defaultImg },
  { id: 7, name: 'Domex Disinfectant', price: 95, oldPrice: 110, category: 'Cleaning Essentials', image: defaultImg },
  { id: 8, name: 'Exo Dishwash Gel', price: 55, oldPrice: 65, category: 'Cleaning Essentials', image: defaultImg },
];

const CleaningEssentialsPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Cleaning Essentials</h1>
      <p>Keep your home clean and germ-free with these essentials!</p>
    </div>
    <Row>
      {cleaningEssentialsProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default CleaningEssentialsPage; 