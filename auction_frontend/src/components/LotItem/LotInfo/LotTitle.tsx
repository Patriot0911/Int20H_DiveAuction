import { ILotTitleProps } from "@/types";

const LotTitle = ({ title }: ILotTitleProps) => {
    return (
        <h2
            className={'lot-title'}
        >
            {
                title.length > 25 ?
                `${title.slice(0, 25)}...` :
                title
            }
        </h2>
    );
};

export default LotTitle;
