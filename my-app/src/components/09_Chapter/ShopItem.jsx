import React from 'react';

const ShopItem = ({title, onBuy}) => {

    const buyHandler = () => {
        if (typeof onBuy === "function") {
            onBuy(title);
        }
    }

    return (
        <div>
            <h4>{title}</h4>
            <button onClick={buyHandler}>Kup</button>
        </div>
    );
};

export default ShopItem;
