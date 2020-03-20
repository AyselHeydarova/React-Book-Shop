import React from 'react';
import ProductCard from "./ProductCard";

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('Added to Cart'));
    const cartBooks =  cart ? cart.map((book, index)=> <ProductCard key={index} self={book}/>) : console.log('wait please');
    return (
            <div className="Product-list-container">
                {cartBooks}
            </div>
    );
};

export default Cart;