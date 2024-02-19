import { IComponentChildrenProp, ILotItemProps } from '@/types';
import LotItemImage from './LotItemImage/LotItemImage';
import LotInfo from './LotInfo/LotInfo';
import LotItemDate from './LotItemDate';
import Link from 'next/link';
import './LotItem.css';

const LotItem = (item: ILotItemProps) => {
    return (
        <LotItemContainer>
            <Link
                className={'item-link'}
                href={`/lots/${item.id}`}
            />
            <LotItemImage
                isFav={item.isFav}
                id={item.id}
                photos={item.photos}
                price={item.endPrice}
            />
            <LotInfo
                {...item}
            />
            <LotItemDate
                createdAt={item.startDate}
            />
        </LotItemContainer>
    );
};

const LotItemContainer = ({ children }: IComponentChildrenProp) => {
    return (
        <div
            className={'lot-item-wrapper'}
        >
            <div
                className={'lot-item-container'}
            >
                {children}
            </div>
        </div>
    );
};

export default LotItem;
