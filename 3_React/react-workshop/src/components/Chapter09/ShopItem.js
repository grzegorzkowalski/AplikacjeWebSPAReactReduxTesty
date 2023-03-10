const ShopItem = ({title, onBuy}) => {
    const clickHandler = () => {
        if (typeof onBuy === "function") {
            onBuy(title);
        }
    }

    return (
        <>
            <h2>{title}</h2>
            <button onClick={clickHandler}>Kup</button>
        </>
    );
};

export default ShopItem;
