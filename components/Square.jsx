import React,  from 'react';
import PropTypes from 'prop-types';

const Square = () => (
    <button className="square">
        {this.props.value}
    </button>
);

Square.PropTypes = {
    value: PropTypes.string
};

export default Square;
