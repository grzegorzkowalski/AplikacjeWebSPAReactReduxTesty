import {useState} from 'react';
import ShopItem from "./ShopItem.jsx";

const Shop = () => {
    const [list, setList] = useState([]);
    const onBuy = (title) => {
        setList(prev => [...prev, title]);
    }
    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={onBuy} />
            <ShopItem title="Dell X5500" onBuy={onBuy} />
            <ShopItem title="Asus NT6000" />
            <ul>
                {
                    list.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;
