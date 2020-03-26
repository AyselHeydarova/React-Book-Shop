import React, {useState} from 'react';
import ProductCard from "./ProductCard";
import ModalWindow from "../Modal Windows/ModalWindow";
import './ProductsList.scss';

const ProductsList = (props) => {

    const [showModalWindow, setStateModal] = useState(false);

    const closeModalHandler = (event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            setStateModal(false);
        }
    };

    const handleStarClick = (event) => {
        const clickedStarId = event.target.id;

        let prevFavs = localStorage.getItem('Favourites');
        let favArr = [];

        if (prevFavs) {
            let favArr = [...JSON.parse(prevFavs)];
            favArr.push(props.books[clickedStarId]);

            localStorage.setItem('Favourites', JSON.stringify(favArr));

        } else {
            favArr.push(props.books[clickedStarId]);
            localStorage.setItem('Favourites', JSON.stringify(favArr));
        }

        if (event.target.className.includes('yellow')) {
            event.target.classList.remove('yellow');
        } else if (event.target === event.currentTarget) {
            event.target.className += ' yellow'
        }
    };

    const handleBtnClick = (event) => {

        const clickedProductId = event.target.parentElement.parentElement.id;
        let prevInCart = localStorage.getItem('Added to Cart');
        let cartArr = [];

        if (prevInCart) {
            cartArr = JSON.parse(prevInCart);
            cartArr.push(props.books[clickedProductId]);
            localStorage.setItem('Added to Cart', JSON.stringify(cartArr));
            setStateModal(true);
        } else {
            cartArr.push(props.books[clickedProductId]);
            localStorage.setItem('Added to Cart', JSON.stringify(cartArr));
            setStateModal(true);
        }
    };

    const allBooks = props.books.map((book, index) => <ProductCard key={index} id={index} self={book}
                                                                   clicked={false}
                                                                   starClickHandler={handleStarClick}
                                                                   btnClickHandler={handleBtnClick}/>);
    return (
        <>
            <h1 className={'section-name'}> Welcome! Check Our Latest Books</h1>
            <div className={'Product-list-container'}>
                {allBooks}
            </div>

            {
                showModalWindow ?
                    <div className="modal-bg" onClick={closeModalHandler}>
                        <ModalWindow header='Success'
                                     className={`addToCart-modal`}
                                     text="You successfully added this book to your shopping cart"
                        />
                    </div>
                    : null
            }

        </>
    );
};

export default ProductsList;


// import React, {Component} from 'react';
// import ProductCard from "./ProductCard";
// import './ProductsList.scss';
// import ModalWindow from "../Modal Windows/ModalWindow";
// import Favourites from "./Favourites";
//
// class ProductsList extends Component {
//
//     state = {
//         showModalWindow: false,
//         books: this.props.books,
//
//     };
//
//
//     closeModalHandler =(event)=>{
//         event.preventDefault();
//         if (event.target === event.currentTarget) {
//             this.setState({showModalWindow: false});
//         }
//     };
//
//     handleStarClick =(event)=> {
//         const clickedStarId= event.target.id;
//
//
//         let prevFavs = localStorage.getItem('Favourites');
//         let favArr = [];
//
//
//         if (prevFavs) {
//             favArr = [...JSON.parse(prevFavs)];
//             favArr.push(this.state.books[clickedStarId]);
//
//             favArr = Array.from(new Set(favArr));
//             localStorage.setItem('Favourites', JSON.stringify(favArr));
//
//         } else {
//             favArr.push(this.state.books[clickedStarId]);
//             localStorage.setItem('Favourites', JSON.stringify(favArr));
//         }
//
//
//         if (event.target.className.includes('yellow')) {
//             event.target.classList.remove('yellow');
//         } else if(event.target === event.currentTarget) {
//             event.target.className+= ' yellow'
//         }
//
//     };
//
//     handleBtnClick = (event)=> {
//
//         const clickedProductId = event.target.parentElement.parentElement.id;
//
//         let prevInCart = localStorage.getItem('Added to Cart');
//         let cartArr = [];
//
//         if(prevInCart) {
//             cartArr = JSON.parse(prevInCart);
//             cartArr.push(this.state.books[clickedProductId]);
//             cartArr = Array.from(new Set (cartArr));
//             localStorage.setItem('Added to Cart', JSON.stringify(cartArr));
//             this.setState({showModalWindow: true});
//         } else {
//             cartArr.push(this.state.books[clickedProductId]);
//             localStorage.setItem('Added to Cart', JSON.stringify(cartArr));
//             this.setState({showModalWindow: true});
//         }
//
//     };
//
//
//     render() {
//         const books = this.props.books.map((book, index)=> <ProductCard key={index} id={index} self={book}
//                                                                         clicked={false}
//                                                                         starClickHandler={this.handleStarClick}
//                                                                         btnClickHandler={this.handleBtnClick}/>);
//
//         return (
//                 <>
//
//                     <h1 className={'section-name'}>Welcome! Check Our Latest Books</h1>
//                     <div className={'Product-list-container'}>
//                         {books}
//                     </div>
//
//                     {
//                         this.state.showModalWindow ?
//                             <div className="modal-bg" onClick={this.closeModalHandler}>
//                         <ModalWindow header='Success'
//                                      className={`addToCart-modal`}
//                                      text = "You successfully added this book to your shopping cart"
//                                      />
//                             </div>
//                                      : null
//                     }
//
//                 </>
//         );
//     }
// }
//
// export default ProductsList;