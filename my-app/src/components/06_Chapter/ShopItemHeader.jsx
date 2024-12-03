import React from 'react';

const ShopItemHeader = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} style={{width: "200px", height: "200px"}} />
        </header>
    );
};

export default ShopItemHeader;
