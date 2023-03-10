import {useState} from "react";
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState([]);
    const onBuyHandler = (title) => {
        setList(prev => [...prev, title]);
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={onBuyHandler} />
            <ShopItem title="Dell X5500" onBuy={onBuyHandler} />
            <ShopItem title="Asus NT6000" onBuy={onBuyHandler} />
            <ul>
                {
                    list.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;
