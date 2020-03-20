import React from 'react';
import ProductCard from "./ProductCard";

const Favourites = () => {
   const favourites = JSON.parse(localStorage.getItem('Favourites'));
   const favBooks = favourites.map((book, index)=> <ProductCard key={index} self={book}/>);


    return (

            <div className = "Product-list-container">
                {favBooks}
            </div>
    );
};

export default Favourites;
