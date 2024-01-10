import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';

function RegisterScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const userRegister = useSelector(state => state.userRegister);
    const {error, loading, userInfo} = userRegister;

    useEffect(()=>{
        if(userInfo)
        {
            navigate('/');
        }
    },[navigate, userInfo]);

    const submitHandler=(e)=>{
        e.preventDefault();

        if (password !== confirmPassword)
        {
            setMessage("Password do not match");
        }
        else
        {
            dispatch(register(name,email,password));
        }

    }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}

      <Form onSubmit={submitHandler}>

        <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
            required
            type='name'
            placeholder='Enter Name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            required
            type='email'
            placeholder='Enter Email Address'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
            required
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='passwordConfirm'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            required
            type='confirmPassword'
            placeholder='Enter confirm password'
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
            Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
        Have an account? 
        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
