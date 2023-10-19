const ShopItemHeader = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img alt={title} src={image} />
        </header>
    );
};

export default ShopItemHeader;