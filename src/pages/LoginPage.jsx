import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Tabs, Tab, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const LoginPage = () => {
    const [key, setKey] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Email/Password Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    // Email/Password Register
    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    // Google Login
    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Card>
                        <Tabs
                            id="login-register-tabs"
                            activeKey={key}
                            onSelect={(k) => { setKey(k); setError(''); }}
                            className="mb-3"
                            justify
                        >
                            <Tab eventKey="login" title="Login">
                                <Card.Body>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <Button onClick={handleGoogleLogin} variant="danger" className="w-100 mb-3">
                                        <i className="fab fa-google me-2"></i> Sign in with Google
                                    </Button>
                                    <Form onSubmit={handleLogin}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                                            {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Tab>
                            <Tab eventKey="register" title="Register">
                                 <Card.Body>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <Button onClick={handleGoogleLogin} variant="danger" className="w-100 mb-3">
                                        <i className="fab fa-google me-2"></i> Sign up with Google
                                    </Button>
                                    <Form onSubmit={handleRegister}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formRegisterEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formRegisterPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                                        </Form.Group>
                                        <Button variant="success" type="submit" className="w-100" disabled={loading}>
                                            {loading ? <Spinner animation="border" size="sm" /> : 'Register'}
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Tab>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage; 