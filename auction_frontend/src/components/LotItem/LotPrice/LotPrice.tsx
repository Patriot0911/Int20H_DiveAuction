import { timmanaFont } from '@/scripts/fonts';
import { ILotPriceProps } from '@/types';
import './LotPrice.css';

const LotPrice = ({ price }: ILotPriceProps) => {
    return (
        <span
            className={'lot-price-container'}
        >
            <span
                className={`lot-price ${timmanaFont.className}`}
            >
                {price} $
            </span>
        </span>
    );
};

export default LotPrice;
