import React from 'react';
import './ProductCard.scss';
import Button from "../Modal Windows/Button";

const ProductCard = props => {

    const {Name, Price, ProductNumber, Colour, ImageURL} = props.self;


    return (
        <div className={'Product'} id={props.id}>
            {props.closeButton ?
                <i className="fas fa-times-circle close-btn" onClick={props.closeClickHandler}> </i> : null}

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
                <i className={`fas fa-star ${props.class}`} onClick={props.starClickHandler} id={props.id}> </i>
            </div>

        </div>
    );
};

export default ProductCard;