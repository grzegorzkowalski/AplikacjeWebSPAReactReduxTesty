import ShopItemHeader from "./ShopItemHeader.jsx";
import ShopItemDescription from "./ShopItemDescription.jsx";
import ShopItemPricing from "./ShopItemPricing.jsx";

const ShopItem = ({shopItemData}) => {
    return (
        <section>
            <ShopItemHeader title={shopItemData.title} image={shopItemData.image} />
            <ShopItemDescription description={shopItemData.description} />
            <ShopItemPricing price={shopItemData.price} />
        </section>
    );
};

export default ShopItem;