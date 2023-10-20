import React, {useState} from 'react';
import ShopItem from "./ShopItem.jsx";

const Shop = () => {
    const [list, setList] = useState([]);

    const addToList = (title) => {
        setList(prev => [...prev, title])
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={addToList} />
            <ShopItem title="Dell X5500" onBuy={addToList} />
            <ShopItem title="Asus NT6000" onBuy={addToList} />
            <ul>
                {
                    list.map((el,i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;