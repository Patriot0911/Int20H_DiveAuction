import NoLots from "../pageContents/MainContent/NoLots";
import { getAssetUrl } from "@/scripts/api";
import LotItem from "../LotItem/LotItem";
import { ILotListProps } from "@/types";

const LotList = ({ lots }: ILotListProps) => {
    return (
        <>
            {
                lots.length > 1 ?
                lots.map(
                    (item, index) =>
                    <LotItem
                        {
                            ...item.auction
                        }
                        photos={item.photos && getAssetUrl(item.photos[0])}
                        key={`item-lot-${index}`}
                    />
                ) :
                <NoLots />
            }
        </>
    );
};

export default LotList;
