import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer } from './reducers/userReducers';

const reducer =combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
});


const cartItemFromLocalStorage= localStorage.getItem('cartItems') ?
         JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromLocalStorage= localStorage.getItem('userInfo') ?
         JSON.parse(localStorage.getItem('userInfo')) : null

const initialState={
    cart: {cartItems: cartItemFromLocalStorage},
    userLogin: {userInfo: userInfoFromLocalStorage}
};
const middleware= [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;