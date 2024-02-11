import { IAuctionChatProps } from '@/types';
import ChatUsers from '../ChatUsers/ChatUsers';
import MessageRecord from '../MessageRecord/MessageRecord';
import './AuctionChat.css';
import {IoSend} from "react-icons/io5";

const AuctionChat = ({ users }: IAuctionChatProps) => {
    return (
        <div className="chat-container">
            <div className="chat-control-container">
                <div className="tile-container chat standart-border standard-background">
                    <MessageRecord/>
                    <MessageRecord/>
                </div>
                <div className="tile-container chat-controls standart-border">
                    <input type="text" className={"std-input"}/>
                    <button className={"std-input"}><IoSend/></button>
                </div>
            </div>
            <ChatUsers
                users={users}
            />
        </div>
    );
};

export default AuctionChat;
