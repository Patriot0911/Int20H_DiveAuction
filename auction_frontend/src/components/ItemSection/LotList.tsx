import NoLots from "../pageContents/MainContent/NoLots";
import { getAssetUrl } from "@/scripts/api";
import LotItem from "../LotItem/LotItem";
import { ILotListProps } from "@/types";

const LotList = ({ lots, favs }: ILotListProps) => {
    return (
        <>
            {
                lots.length > 0 ?
                lots.map(
                    (item, index) =>
                    <LotItem
                        {
                            ...item.auction
                        }
                        isFav={favs.includes(item.auction.id)}
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
