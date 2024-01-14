import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { saveShippingAddress } from '../actions/cartActions';

function ShippingScreen() {
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    const dispatch= useDispatch();
    const navigate = useNavigate();

    const [address,setAddress] = useState(shippingAddress.address);
    const [city,setCity] = useState(shippingAddress.city);
    const [postalCode,setPostalCode] = useState(shippingAddress.postalCode);
    const [country,setCountry] = useState(shippingAddress.country);

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShippingAddress({address, city, postalCode, country}));
        navigate("/payment");
    }
  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
            required
            type='text'
            placeholder='Enter address'
            value={address ? address : ''}
            onChange={(e)=> setAddress(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
            required
            type='text'
            placeholder='Enter city'
            value={city ? city : ''}
            onChange={(e)=> setCity(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
            <Form.Label>postalCode</Form.Label>
            <Form.Control
            required
            type='text'
            placeholder='Enter Postal Code'
            value={postalCode ? postalCode : ''}
            onChange={(e)=> setPostalCode(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
            <Form.Label>country</Form.Label>
            <Form.Control
            required
            type='text'
            placeholder='Enter country'
            value={country ? country : ''}
            onChange={(e)=> setCountry(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
            continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
