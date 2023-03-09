const ShopSingleItem = ({title, image}) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
        </div>
    );
};

export default ShopSingleItem;
