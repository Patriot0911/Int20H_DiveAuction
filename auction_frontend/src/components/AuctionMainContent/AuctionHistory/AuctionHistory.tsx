import { IAuctionHistoryProps } from '@/types';
import HistoryRecord from '../HistoryRecord/HistoryRecord';
import './AuctionHistory.css';

const AuctionHistory = ({ bids }: IAuctionHistoryProps) => {
    return (
        <div className="tile-container history standart-border standard-background ">
            <h2>Історія ставок</h2>
            <div className="history-container">
                {
                    bids.map(
                        (bid, index) =>
                        <HistoryRecord
                            isTheBiggest={index === 0}
                            key={`bid-history-${bid.id}-${index}`}
                            {...bid}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default AuctionHistory;
