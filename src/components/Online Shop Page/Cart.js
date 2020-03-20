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
        clickedProduct.remove();
        setStateDelete(false);
        let index = clickedProduct.id;

    prevElementsArray.splice(index, 1);

    };
    console.log(prevElementsArray);

    const closeModalHandler =(event)=>{
        event.preventDefault();
        if (event.target === event.currentTarget) {
            setStateDelete(false);
        }
    };

    let cart = JSON.parse(localStorage.getItem('Added to Cart'));
    const cartBooks =  cart ? cart.map((book, index)=> <ProductCard key={index} id={index} self={book} closeButton={true} closeClickHandler={closeHandler}/>) : console.log('wait please');


    return (
            <div className="Product-list-container">
                {cartBooks}

                {
                    showDeleteModal ?

                        <div className="modal-bg" onClick = {closeModalHandler} >
                            <ModalWindow header = 'Delete'
                                         className = {`addToCart-modal`}
                                         text = "You successfully added this book to your shopping cart"
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