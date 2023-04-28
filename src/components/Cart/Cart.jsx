import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    
    // const cart = props.cart // option: 01
    // const {cart} = props  //option 02
    let totalPrice = 0;
    let totalShipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
    //     product.quantity = 1
    // }
    product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        tax = totalPrice * 7 / 100;
        grandTotal = totalPrice + totalShipping + tax;
        quantity = quantity + product.quantity
    }
    return (
        <div className='cart'>
             <h5>Order Summary</h5>
                <p>Selected Items : {quantity}</p>
                <p>Total Price : ${totalPrice.toFixed(2)} </p>
                <p>Total Shipping : ${totalShipping} </p>
                <p>Tax : {tax}</p>
                <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;