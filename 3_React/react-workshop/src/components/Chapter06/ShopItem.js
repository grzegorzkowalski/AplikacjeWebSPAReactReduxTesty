import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription";
import ShopItemPricing from "./ShopItemPricing";

const ShopItem = ({data}) => {
    const {title, image, description, price} = data;
    return (
        <section>
            <ShopItemHeader title={title} image={image} />
            <ShopItemDescription description={description} />
            <ShopItemPricing price={price} />
        </section>
    );
};

export default ShopItem;
