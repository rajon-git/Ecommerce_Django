import React, { useState } from 'react'
import FormContainer from '../components/FormContainer';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, redirect } from 'react-router-dom';

function LoginScreen() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("submitted");

    }
  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            type='email'
            placeholder='Enter Email Address'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
            Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
        New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
