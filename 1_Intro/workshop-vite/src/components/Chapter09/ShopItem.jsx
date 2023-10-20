import React from 'react';

const ShopItem = ({title, onBuy}) => {

    const addTitle = (title) => {
        if (typeof  onBuy === "function") {
            onBuy(title);
        }
    }

    return (
        <div>
            <h2 onClick={() => addTitle(title)}>{title}</h2>
        </div>
    );
};

export default ShopItem;