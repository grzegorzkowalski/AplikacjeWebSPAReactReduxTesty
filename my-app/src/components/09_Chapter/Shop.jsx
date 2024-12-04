import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState([]);

    const buyHandler = (title) => {
        setList(prev => [...prev, title]);
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={buyHandler} />
            <ShopItem title="Dell X5500" onBuy={buyHandler} />
            <ShopItem title="Asus NT6000" onBuy={buyHandler} />
            <ul>
                {
                    list.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;
