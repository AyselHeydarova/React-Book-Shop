import React from 'react';
import ProductCard from "./ProductCard";

const Favourites = () => {

   const favourites = JSON.parse(localStorage.getItem('Favourites'));

   // const allFavs = [...[...favourites].push(favourites)];

    console.log(favourites);
    const favBooks = favourites.map((book, index)=> <ProductCard key={index} self={book}/>);

    return (
        <div>

            <div className = "Product-list-container">
                {favBooks}
            </div>

        </div>
    );
};

export default Favourites;

// import React, {Component} from 'react';
// import ProductCard from "./ProductCard";
//
// class Favourites extends Component {
//     state = {
//     favBooks: JSON.parse(localStorage.getItem('Favourites'))
// };
//
//     render() {
//         // // const favourites = JSON.parse(localStorage.getItem('Favourites'));
//         // console.log(favourites);
//         const favBooks1 = [...this.state.favBooks];
//
//         const favBooks = favBooks1.map((book, index)=> <ProductCard key={index} self={book}/>);
//         console.log(favBooks);
//
//         return (
//             <div>
//                 <h1>This is my Favourites</h1>
//                             <div className = "Product-list-container">
//                                  {favBooks}
//                             </div>
//             </div>
//         );
//     }
// }
//
// export default Favourites;