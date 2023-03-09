import ShopSingleItem from "./ShopSingleItem";

const ShopList = ({shopItems}) => {
    return (
        <>
            {
                shopItems.map((el, i) => {
                    return (
                        <ShopSingleItem
                            key={i}
                            title={el.title}
                            image={el.image}
                        />
                    )
                })
            }
        </>
    );
};

export default ShopList;
