import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { addCart } from '../actions/cartActions';

function CartScreen() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    console.log('cartItems: ', cartItems);
    const { id } = useParams();
    const location = useLocation();
    const qty = Number(location.search.split('=')[1]) || 1;
    

    useEffect(()=>{
        if (id) {
            dispatch(addCart(id,qty))
        } else {
            
        }
    },[dispatch,id,qty])
  return (
    <div>
      CART
    </div>
  )
}

export default CartScreen
