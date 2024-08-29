import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription.jsx";
import ShopItemPricing from "./ShopItemPricing.jsx";

const ShopItem = ({data}) => {
    return (
        <section>
            <ShopItemHeader title={data.title} image={data.image} />
            <ShopItemDescription description={data.description} />
            <ShopItemPricing price={data.price} />
        </section>
    )};

export default ShopItem;
