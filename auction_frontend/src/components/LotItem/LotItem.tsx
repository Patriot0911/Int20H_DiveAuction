import { ILotItemProps } from '@/types';
import Link from 'next/link';
import LotItemImage from './LotItemImage';
import LotInfo from './LotInfo/LotInfo';
import LotItemDate from './LotItemDate';
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
                    href={'/'}
                />
                <LotItemImage
                    {...item}
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
