import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data.js';

const ProductsPage = () => {
  return (
    <>
        <div className="text-center mb-4">
            <h1>All Products</h1>
            <p>Check out all of our products!</p>
        </div>
        <Row className="mb-3">
            <Col md={3}>
                <Form.Select aria-label="Sort by">
                    <option>Sort by: Featured</option>
                    <option value="1">Price: Low to High</option>
                    <option value="2">Price: High to Low</option>
                    <option value="3">Avg. Customer Review</option>
                </Form.Select>
            </Col>
        </Row>
        <Row>
            {products.map(product => (
                <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    </>
  );
};

export default ProductsPage; 