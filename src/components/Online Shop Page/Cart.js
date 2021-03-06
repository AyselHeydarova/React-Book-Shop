import React, { useState} from 'react';
import ProductCard from "./ProductCard";
import ModalWindow from "../Modal Windows/ModalWindow";

const Cart = (props) => {

    const [showDeleteModal, setStateDelete] = useState( false);
    const [clickedProduct, setClickedProduct] = useState('');

    const closeHandler = (event ) => {
        let selectedProduct = event.target.parentElement;
        setClickedProduct(selectedProduct);
        setStateDelete(true);
    };

    let prevCartElements = localStorage.getItem('Added to Cart');
    let prevElementsArray = [...JSON.parse(prevCartElements)];

    const deleteHandler = (e) => {

        setStateDelete(false);

        let index = clickedProduct.id ;
        prevElementsArray.splice(index,1)
        localStorage.removeItem('Added to Cart');
        localStorage.setItem('Added to Cart', JSON.stringify(prevElementsArray));
    };


    const closeModalHandler =(event)=>{
        event.preventDefault();
        if (event.target === event.currentTarget) {
            setStateDelete(false);
        }
    };

    let cart = JSON.parse(localStorage.getItem('Added to Cart'));


    const cartBooks =  cart.map((book, index)=> <ProductCard key={index} id={index} self={book} closeButton={true} closeClickHandler={closeHandler}/>) ;


    return (
            <div className="Product-list-container">
                { cart.length === 0 ? <h3>There are no books in your cart. Click to add some.</h3> :
                    cartBooks
                }

                {
                    showDeleteModal ?

                        <div className="modal-bg" onClick = {closeModalHandler} >
                            <ModalWindow header = 'Are you sure to delete this item?'
                                         className = {`addToCart-modal modal-window`}
                                         text = "The product wil be removed from your cart"
                                         actions = {['Delete', 'Cancel']}
                                         showActionBtn = {true}
                                         delete = {deleteHandler}
                            />
                        </div>
                        : null
                }
            </div>
    );
};

export default Cart;