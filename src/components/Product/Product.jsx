import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props)
    const { img, name, seller, quantity, price, ratings } = props.product;
    console.log(props);
    const handleAddtoCart = props.handleAddtoCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings}</p>
            </div>
            <button onClick={()=> handleAddtoCart(props.product)} className='btn-cart'>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;