import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { products } from '../data.js';
import { useCart } from '../context/CartContext.jsx';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();

    const [qty, setQty] = useState(1);

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    const addToCartHandler = () => {
        addToCart(product, qty);
        navigate('/cart');
    };

    return (
        <>
            <Link className='btn btn-light my-3' to='/products'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: This is a placeholder description for {product.name}. More details will come from the backend.
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                             <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        In Stock
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                        <Form.Control
                                            as='select'
                                            value={qty}
                                            onChange={(e) => setQty(Number(e.target.value))}
                                        >
                                            {[...Array(10).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    onClick={addToCartHandler}
                                    className='btn-primary w-100 d-inline-flex align-items-center justify-content-center'
                                    type='button'
                                >
                                    <i className="fas fa-plus" style={{ marginRight: '0.35rem', fontSize: '1.05em' }}></i> Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductDetailsPage; 