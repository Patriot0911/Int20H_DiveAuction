import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './AuctionChat.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import {IoSend} from "react-icons/io5";
import ChatUsers from "@/components/AuctionMain/ChatUsers/ChatUsers";
import MessageRecord from "@/components/AuctionMain/MessageRecord/MessageRecord";

const AuctionChat = () => {
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
            <ChatUsers/>
        </div>
    );
};

export default AuctionChat;
