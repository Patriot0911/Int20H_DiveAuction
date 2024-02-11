import { ILotItemDateProps } from "@/types";

const LotItemDate = ({ createdAt }: ILotItemDateProps) => {
    return (
        <span
            className={'lot-date'}
        >
            Створено: {
                new Date(createdAt).toLocaleDateString()
            }
        </span>
    );
};

export default LotItemDate;
