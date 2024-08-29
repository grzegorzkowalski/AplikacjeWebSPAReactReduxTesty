import React from 'react';

const ShopItem = ({title, onBuy}) => {
    const clickHandler = () => {
        if (typeof onBuy === "function") {
            onBuy(title);
        }
    }

    return (
        <div>
            <p>{title}</p>
            <button onClick={clickHandler}>Dodaj do koszyka</button>
        </div>
    );
};

export default ShopItem;
