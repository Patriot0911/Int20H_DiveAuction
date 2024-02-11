import './ChatUsers.css';
import ChatUserRecord from '../ChatUserRecord/ChatUserRecord';
import { IAuctionChatProps } from '@/types';

const ChatUsers = ({ users }: IAuctionChatProps) => {
    return (
        <div className="tile-container users standart-border standard-background">
            <h2>Користувачі чату</h2>
            <div className="tile-container users-container">
                {
                    users.map(
                        user =>
                        <ChatUserRecord
                            {...user}
                            key={`chat-user-${user.id}`}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ChatUsers;
