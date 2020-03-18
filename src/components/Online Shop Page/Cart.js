import React from 'react';
import ProductCard from "./ProductCard";

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('Added to Cart'));
    console.log(cart);
    const cartBooks = cart.map((book, index)=> <ProductCard key={index} self={book}/>);

    return (

        <div>

            <div className="Product-list-container">
                {cartBooks}
            </div>

        </div>
    );
};

export default Cart;