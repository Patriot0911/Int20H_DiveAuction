import { ILotDescriptionProps } from "@/types";

const LotDescription = ({ description }: ILotDescriptionProps) => {
    return (
        <section
            className={'lot-item-description'}
        >
            {
                description.length > 170 ?
                `${description.slice(0, 170)}...` :
                description
            }
        </section>
    );
};

export default LotDescription;
