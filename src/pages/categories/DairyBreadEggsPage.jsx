import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';
import defaultImg from '../../images/category-dairy-bread-eggs.jpg';

const dairyBreadEggsProducts = [
  { id: 1, name: 'Amul Butter', price: 52, oldPrice: 55, category: 'Dairy, Bread & Eggs', image: defaultImg },
  { id: 2, name: 'Mother Dairy Milk', price: 48, oldPrice: 52, category: 'Dairy, Bread & Eggs', image: defaultImg },
  { id: 3, name: 'Britannia Cheese Slices', price: 149, oldPrice: 165, category: 'Dairy, Bread & Eggs', image: defaultImg },
  { id: 4, name: 'Brown Bread', price: 35, oldPrice: 40, category: 'Dairy, Bread & Eggs', image: defaultImg },
  { id: 5, name: 'Eggs (6 Pack)', price: 40, oldPrice: 45, category: 'Dairy, Bread & Eggs', image: defaultImg },
  { id: 6, name: 'Paneer', price: 80, oldPrice: 90, category: 'Dairy, Bread & Eggs', image: defaultImg },
  { id: 7, name: 'Amul Dahi', price: 25, oldPrice: 30, category: 'Dairy, Bread & Eggs', image: defaultImg },
  { id: 8, name: 'Cheese Cubes', price: 60, oldPrice: 70, category: 'Dairy, Bread & Eggs', image: defaultImg },
];

const DairyBreadEggsPage = () => (
  <>
    <div className="text-center mb-4">
      <h1>Dairy, Bread & Eggs</h1>
      <p>Fresh dairy, bread, and eggs for your daily needs!</p>
    </div>
    <Row>
      {dairyBreadEggsProducts.map(product => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default DairyBreadEggsPage; 