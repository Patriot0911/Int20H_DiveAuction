import NoLots from "../pageContents/MainContent/NoLots";
import LotItem from "../LotItem/LotItem";
import { ILotListProps } from "@/types";

const LotList = ({ lots }: ILotListProps) => {
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
                        photos={item.photos}
                        key={`item-lot-${index}`}
                    />
                ) :
                <NoLots />
            }
        </>
    );
};

export default LotList;
