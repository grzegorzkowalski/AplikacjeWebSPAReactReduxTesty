import React from 'react';
import PropTypes from "prop-types";

const ShopItemDescription = ({description}) => {
    return (
        <article>
            <p>{description}</p>
        </article>
    );
};

export default ShopItemDescription;

ShopItemDescription.propTypes = {
    description: PropTypes.string,
};
