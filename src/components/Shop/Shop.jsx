import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [prodcuts, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddtoCart = (product) => {
        //  cart.push(product);
         const newCart = [...cart, product]
         setCart(newCart)
         console.log(cart)
    }
    return (
        <div className='shop-container'>
            <div className="prodcuts-container">
                {
                    prodcuts.map(product => <Product key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* <h5>Order Summary</h5>
                <p>Selected Items : {cart.length}</p>
                <p>Total Price : {cart.price}</p> */}
            </div>
        </div>
    );
};

export default Shop;