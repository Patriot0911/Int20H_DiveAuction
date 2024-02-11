import { IHistoryRecordProps } from '@/types';
import './HistoryRectord.css';
import { getAssetUrl } from '@/scripts/api';

const HistoryRecord = ({ id, photo, price, userId, name, isTheBiggest }: IHistoryRecordProps) => {
    return (
        <>
            <div
                className={`history-record record-background record-border ${isTheBiggest ? 'biggest' : ''}`}
            >
                <div
                    className="user"
                >
                    <img
                        src={getAssetUrl(photo)}
                        className={"profile-image"}
                    />
                    <p>{name}</p>
                </div>
                <div className="bet-count">
                    {price}
                </div>
            </div>
        </>
    );
};

export default HistoryRecord;
