import React from 'react';
import PropTypes from "prop-types";

const Button = props => {
    return (
        <button
            style={props.style}
            onClick={props.onClick}
            className={'Button'}>
            {props.text}
        </button>
    );
};

Button.propTypes={
    onClick: PropTypes.func,
    className: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.object
};



export default Button;