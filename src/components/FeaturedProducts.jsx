import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';
import productImg1 from '../images/product-img-7.jpg';
import productImg2 from '../images/product-img-20.jpg';
import productImg3 from '../images/product-img-21.jpg';
import productImg4 from '../images/product-img-8.jpg';

const products = [
    { id: 1, name: 'Britannia Cheese Slices', price: 149, oldPrice: 165, category: 'Dairy', image: productImg1 },
    { id: 2, name: 'Blue Diamond Almonds', price: 199, oldPrice: 220, category: 'Snacks', image: productImg2 },
    { id: 3, name: 'Fresh Organic Tomatoes', price: 50, oldPrice: 60, category: 'Vegetables', image: productImg3 },
    { id: 4, name: "Kellogg's Corn Flakes", price: 120, oldPrice: 135, category: 'Breakfast', image: productImg4 },
];

const FeaturedProducts = () => {
    // Show only the first 4 products as featured
    const featured = products.slice(0, 4);

    return (
        <section className="featured-products py-5 bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Popular Products</h2>
                    <p className="text-muted">Get Your Desired Product from Popular Products!</p>
                </div>
                <Row>
                    {featured.map(product => (
                        <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedProducts; 