import React from 'react';
import PropTypes from "prop-types";
import ShopItem from "./ShopItem.jsx";

const ShopItemHeader = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} />
        </header>
    );
};

export default ShopItemHeader;

ShopItemHeader.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
};
