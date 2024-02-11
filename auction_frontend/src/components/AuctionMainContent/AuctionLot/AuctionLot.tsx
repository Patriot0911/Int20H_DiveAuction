import './AuctionLot.css';
import { IAuctionLotProps } from '@/types';
import ValidLot from './ValidLot';
import { lobsterFont } from '@/scripts/fonts';

const AuctionLot = ({ lot, photos }: IAuctionLotProps) => {
    return (
        <div
            className={
                `tile-container standart-border standard-background ${
                    !lot ? 'lot-is-loading' : 'lot-container'
                }`
            }
        >
            {
                lot ?
                <ValidLot
                    lot={lot}
                    photos={photos}
                /> :
                <h1
                    className={`loading-text ${lobsterFont.className}`}
                >
                    Loading...
                </h1>
            }
        </div>
    );
};

export default AuctionLot;
