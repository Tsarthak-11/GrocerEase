import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Image, Form, Button, Card, Alert, Breadcrumb } from 'react-bootstrap';
import '../responsive.css';

const CartPage = () => {
    const { cartItems, removeFromCart, updateCartQty } = useCart();
    const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);
    const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <Container className="py-4">
            {/* Breadcrumbs */}
            <Row>
                <Col>
                    <Breadcrumb className="mb-3">
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/products' }}>Shop</Breadcrumb.Item>
                        <Breadcrumb.Item active>Cart</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col md={8} className="mb-4">
                    <h2 className="mb-4">Shopping Cart <span className="text-muted" style={{ fontSize: '1.1rem' }}>({totalItems} {totalItems === 1 ? 'item' : 'items'})</span></h2>
                    {cartItems.length === 0 ? (
                        <Alert variant='info'>
                            Your cart is empty. <Link to='/products'>Go Shopping</Link>
                        </Alert>
                    ) : (
                        <div className="table-responsive">
                            <Table hover className="align-middle bg-white rounded shadow-sm">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ minWidth: 180 }}>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <Image src={item.image} alt={item.name} width={60} height={60} style={{ objectFit: 'cover', borderRadius: 8 }} />
                                                    <div>
                                                        <Link to={`/product/${item.id}`} className="fw-bold text-dark">{item.name}</Link>
                                                        <div className="text-muted" style={{ fontSize: '0.95rem' }}>{item.category || ''}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>${item.price}</td>
                                            <td style={{ maxWidth: 90 }}>
                                                <Form.Select
                                                    value={item.qty}
                                                    onChange={(e) => updateCartQty(item.id, Number(e.target.value))}
                                                    size="sm"
                                                >
                                                    {[...Array(10).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                            </td>
                                            <td>${(item.qty * item.price).toFixed(2)}</td>
                                            <td>
                                                <Button
                                                    type='button'
                                                    variant='light'
                                                    size='sm'
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <i className='fas fa-trash text-danger'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h4 className="mb-3">Order Summary</h4>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal ({totalItems} items)</span>
                                <span className="fw-bold">${subtotal}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-success">Free Shipping</span>
                                <span className="text-success">$0.00</span>
                            </div>
                            <Button
                                as={Link}
                                to='/checkout'
                                type='button'
                                className='w-100 mb-2'
                                size='lg'
                                disabled={cartItems.length === 0}
                            >
                                Proceed to Checkout
                            </Button>
                            <div className="text-muted small mt-2">* Free shipping on orders over $100.</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CartPage; 