import React, {Component} from 'react';
import ProductCard from "./ProductCard";
import './ProductsList.scss';
import ModalWindow from "../Modal Windows/ModalWindow";


class ProductsList extends Component {
    state = {
        showModalWindow: false,
        books: this.props.books,
        addedToCart: [],
        favourites: []
    };

    closeModalHandler =(event)=>{
        event.preventDefault();
        if (event.target === event.currentTarget) {
            this.setState({showModalWindow: false});
        }
    };

    handleStarClick =(event)=> {
        const clickedStarId= event.target.id;
        console.log(clickedStarId);
        this.state.favourites.push(this.state.books[clickedStarId]);
        localStorage.setItem('Favourites', JSON.stringify(this.state.favourites));

        console.log(this.state.favourites);


        if (event.target.className.includes('yellow')) {
            event.target.classList.remove('yellow');
        } else if(event.target === event.currentTarget) {
            event.target.className+= ' yellow'
        }

    };

    handleBtnClick = (event)=> {

        const clickedProductId = event.target.parentElement.parentElement.id;
        this.state.addedToCart.push(this.state.books[clickedProductId]);
        localStorage.setItem('Added to Cart', JSON.stringify(this.state.addedToCart));
        this.setState({showModalWindow: true});

    };


    render() {
        const books = this.props.books.map((book, index)=> <ProductCard key={index} id={index} self={book}
                                                                        starClickHandler={this.handleStarClick}
                                                                        btnClickHandler={this.handleBtnClick}/>);


        return (
                <>
                    <h1 className={'section-name'}>Welcome! Check Our Latest Books</h1>
                    <div className={'Product-list-container'}>
                        {books}
                    </div>

                    {
                        this.state.showModalWindow ?
                            <div className="modal-bg" onClick={this.closeModalHandler}>
                        <ModalWindow header='Success'
                                     className={`addToCart-modal`}
                                     text = "You successfully added this book to your shopping cart"
                                     />
                            </div>
                                     : null
                    }

                </>
        );
    }
}

export default ProductsList;