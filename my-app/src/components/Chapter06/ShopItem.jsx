import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription.jsx";
import ShopItemPricing from "./ShopItemPricing.jsx";

const ShopItem = ({data: {title, image, description, price}}) => {
    return (
        <section>
            <ShopItemHeader title={title} image={image} />
            <ShopItemDescription description={description} />
            <ShopItemPricing price={price} />
        </section>
    )};

export default ShopItem;
