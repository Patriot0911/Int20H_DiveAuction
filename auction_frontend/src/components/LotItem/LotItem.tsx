import { ILotItemProps } from '@/types';
import Link from 'next/link';
import LotItemImage from './LotItemImage';
import LotInfo from './LotInfo/LotInfo';
import LotItemDate from './LotItemDate';
import './LotItem.css';

const LotItem = () => { //props: ILotItemProps
    const item = {
        id: 0,
        title: 'Монета Країна супергероїв',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas consequuntur aut consequatur dignissimos fuga adipisci odit, dolorem ipsum libero, cumque atque esse at. Sed illum vel modi aliquam nemo.',
        image: 'https://i.pinimg.com/736x/32/95/2c/32952c6d1699a674bce15c9488df734b.jpg',
        createdAt: new Date().toDateString(),
        price: 50000,
        isFav: false
    }
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
                    createdAt={item.createdAt}
                />
            </div>
        </div>
    );
};

export default LotItem;
