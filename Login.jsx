import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple dummy check
    if (email === 'admin@example.com' && password === 'admin123') {
      alert('Login successful!');
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="mb-4 text-center">Login</h3>

      {showAlert && <Alert variant="danger">Invalid email or password</Alert>}

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
