import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const CheckoutPage = () => {
    const { cartItems } = useCart();
    const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);

    const handleRazorpay = () => {
        window.location.href = 'https://razorpay.com/';
    };

    return (
        <>
            <div className="py-4">
                <Container>
                    <Link to="/products" className="text-dark">
                        <i className="fas fa-arrow-left me-2"></i> Continue Shopping
                    </Link>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col lg={7}>
                        <h3>Billing details</h3>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>
                            
                            {/* More form fields can be added here */}

                            <h3 className="mt-5">Payment</h3>
                            <div className="my-3">
                                <Form.Check 
                                    type="radio"
                                    id="creditCard"
                                    label="Credit Card"
                                    name="paymentMethod"
                                    defaultChecked
                                />
                                <Form.Check 
                                    type="radio"
                                    id="paypal"
                                    label="PayPal"
                                    name="paymentMethod"
                                />
                            </div>
                        </Form>
                    </Col>
                    <Col lg={5}>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h4">Order Summary</Card.Title>
                                {cartItems.map(item => (
                                     <div key={item.id} className="d-flex justify-content-between mb-2">
                                        <span>{item.name} (x{item.qty})</span>
                                        <span>${(item.qty * item.price).toFixed(2)}</span>
                                     </div>
                                ))}
                                <hr />
                                <div className="d-flex justify-content-between fw-bold">
                                    <span>Subtotal</span>
                                    <span>${subtotal}</span>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                 <Button variant="primary" className="w-100" type="button" onClick={handleRazorpay}>
                                    <i className="fas fa-credit-card"></i> Pay with Razorpay
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CheckoutPage; 