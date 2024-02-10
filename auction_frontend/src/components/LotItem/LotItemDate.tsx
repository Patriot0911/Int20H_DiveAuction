import { ILotItemDateProps } from "@/types";

const LotItemDate = ({ createdAt }: ILotItemDateProps) => {
    return (
        <span
            className={'lot-date'}
        >
            Створено: {createdAt}
        </span>
    );
};

export default LotItemDate;
