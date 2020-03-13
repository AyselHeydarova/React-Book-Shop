import React from 'react';
import './ProductCard.scss';
import Button from "../Modal Windows/Button";
import '../Modal Windows/ModalWindow.scss'

const ProductCard = props => {

    const {Name, Price, ProductNumber, Colour, ImageURL} = props.self;

    const classes = `fas fa-star `;



    return (
        <div className={'Product'} id={props.id}>

            <div className="Product-image-container">
                <img src={ImageURL} alt="Book cover" className={'Product-image'}/>
            </div>
            <p className={'Product-name'}>{Name}</p>
            <div className="Product-middle">
                <p className={'Product-number'}>{ProductNumber}</p>
                <p className={'Product-colour'}>{Colour}</p>
            </div>

            <div className={'Product-bottom'}>
                <p className={'Product-price'}>{Price}</p>
                <Button text={'Add to cart'} className={'add-btn'} onClick={props.btnClickHandler}/>
                <i className={classes} onClick={props.starClickHandler} id={props.id}></i>
            </div>

        </div>
    );
};

export default ProductCard;