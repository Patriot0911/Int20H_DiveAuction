import { timmanaFont } from "@/scripts/fonts";
import { ILotItemProps } from "@/types";

const LotItemImage = (item: ILotItemProps) => {
    return (
        <section
            className={'lot-img-container'}
        >
            <img
                alt={`lot-${item.id}-img`}
                src={item.image}
            />
            <span
                className={'lot-price-container'}
            >
                <span
                    className={`lot-price ${timmanaFont.className}`}
                >
                    {item.startPrice} $
                </span>
            </span>
        </section>
    );
};

export default LotItemImage;
