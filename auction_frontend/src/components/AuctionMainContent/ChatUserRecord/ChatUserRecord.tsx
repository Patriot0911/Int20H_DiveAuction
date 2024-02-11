import { IUserChatInfo } from '@/types';
import './ChatUserRectord.css';
import { getAssetUrl } from '@/scripts/api';

const ChatUserRecord = ({ name, photo }: IUserChatInfo) => {
    return (
        <div className="user record-background record-border">
            <img
                src={getAssetUrl(photo)}
                className={"profile-image"}
            />
            <p>{name}</p>
        </div>
    );
};

export default ChatUserRecord;
