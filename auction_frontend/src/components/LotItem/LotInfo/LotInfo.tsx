import { ILotItemProps } from "@/types";
import LotDescription from "./LotDescription";
import LotTitle from "./LotTitle";

const LotInfo = (item: ILotItemProps) => {
    return (
        <section
            className={'lot-info'}
        >
            <LotTitle
                title={item.title}
            />
            <LotDescription
                description={item.description}
            />
        </section>
    );
};

export default LotInfo;
