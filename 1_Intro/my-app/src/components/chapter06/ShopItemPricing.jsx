import React from 'react';
import PropTypes from "prop-types";

const ShopItemPricing = ({price}) => {
    return (
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    );
};

export default ShopItemPricing;

ShopItemPricing.propTypes = {
    price: PropTypes.number
};
