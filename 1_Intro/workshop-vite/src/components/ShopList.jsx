import React from 'react';
import ShopItemHeader from "./ShopItemHeader.jsx";

const ShopList = ({devices}) => {
    return (
        <div>
            {
                devices.map((el, i) => <ShopItemHeader key={i} image={el.image} title={el.title} />)
            }
        </div>
    );
};

export default ShopList;