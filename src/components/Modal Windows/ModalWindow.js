import React from 'react';
import './ModalWindow.scss';
import  close from './close.png';
import PropTypes, {arrayOf} from "prop-types";

const ModalWindow = props => {

    return (
        <div className={props.className}>
            <header>{props.header}
                { props.closeButton ?
                    <img className={'close-image'} src={close} alt={'closeButton'} onClick={props.iconHandler}/> : null
                }

            </header>
            <p>{props.text}</p>

            {
                props.showActionBtn ? props.actions.map( (btnText, index) => <button key={index} className={'action-btn'} onClick={props.delete}>{btnText}</button>) : null
            }


        </div>
    );
};


ModalWindow.propTypes = {
    text: PropTypes.string,
    header:PropTypes.string,
    closeButton: PropTypes.bool,
    className:PropTypes.string,
    iconHandler: PropTypes.func,
    actions: arrayOf(PropTypes.string)
};


export default ModalWindow;