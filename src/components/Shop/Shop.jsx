import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [prodcuts, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        //step :01 get id of the added product
        for (const id in storedCart) {
            //get product from product state by using id
            const addedProduct = prodcuts.find(product => product.id === id);
            if(addedProduct){
                //step :03 add quantity
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                //step :04 add the added cart to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('addedproduct', addedProduct);

        }
        //step :05 set the cart
        setCart(savedCart);
    }, [prodcuts])

    const handleAddtoCart = (product) => {
        //  cart.push(product);
        // const newCart = [...cart, product]
        //if product dosn't exist in cart, then set quantity = 1
        //if exist update quantity by 1
        let newCart = []
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity =1;
            newCart = [...cart, product]
        }else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exist]
        }
        setCart(newCart)
        addToDb(product.id)
        //  console.log(cart)
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