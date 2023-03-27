import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);

    // For push element in an Array this system will be followed by React [...arrayName] 
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <p>Order summary</p>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;