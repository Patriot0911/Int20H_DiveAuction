import { ILotItemProps } from '@/types';
import LotItemImage from './LotItemImage';
import LotInfo from './LotInfo/LotInfo';
import LotItemDate from './LotItemDate';
import Link from 'next/link';
import './LotItem.css';

const LotItem = (item: ILotItemProps) => {
    return (
        <div
            className={'lot-item-wrapper'}
        >
            <div
                className={'lot-item-container'}
            >
                <Link
                    className={'item-link'}
                    href={`/lots/${item.id}`}
                />
                <LotItemImage
                    id={item.id}
                    photo={item.photos as string}
                    price={item.endPrice}
                />
                <LotInfo
                    {...item}
                />
                <LotItemDate
                    createdAt={item.startDate}
                />
            </div>
        </div>
    );
};

export default LotItem;
