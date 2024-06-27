import PropTypes from "prop-types";
import ShopItemHeader from "./ShopItemHeader.jsx";
import ShopItemPricing from "./ShopItemPricing.jsx";
import ShopItemDescription from "./ShopItemDescription.jsx";

const ShopItem = ({computer: {title, image, description, price}}) => {
    return (
        <section>
            <ShopItemHeader title={title} image={image} />
            <ShopItemDescription description={description}/>
            <ShopItemPricing price={price} />
        </section>
    );
};

export default ShopItem;

ShopItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
};
