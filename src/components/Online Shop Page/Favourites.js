import React from 'react';
import ProductCard from "./ProductCard";

const Favourites = props => {

   const favDeleteHandler = (event) => {
       let prevFavs = localStorage.getItem('Favourites');
       let prevFavsArray = [...JSON.parse(prevFavs)];

       const clickedFavourite = event.target.parentElement.parentElement;
       clickedFavourite.remove();
       let index = clickedFavourite.id;
       prevFavsArray.splice(index ,1);
       localStorage.removeItem('Favourites');
       localStorage.setItem('Favourites', JSON.stringify(prevFavsArray));
   };

    const favourites = JSON.parse(localStorage.getItem('Favourites'));

    const favBooks = favourites.map((book, index)=> <ProductCard key={index} self={book} class={'yellow'} starClickHandler={favDeleteHandler}/>);

    return (
            <div className = "Product-list-container">
                {favourites.length === 0 ? <h3>There are no books in Favourites. Go ahead and add some!</h3> :
                    favBooks
                }
            </div>
    );
};

export default Favourites;
