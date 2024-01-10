import React, { useEffect, useState } from 'react'
import FormContainer from '../components/FormContainer';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

function LoginScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = useSelector(state=> state.userLogin);
    const {error, loading, userInfo} = userLogin;

    useEffect(()=>{
        if(userInfo)
        {
            navigate('/');
        }
    },[navigate, userInfo])

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login(email,password))

    }
  return (
    <FormContainer>
      <h1>Sign In</h1>

      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}

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
        New Customer? 
        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
