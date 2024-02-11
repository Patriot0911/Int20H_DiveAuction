import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './ChatUsers.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import {IoSend} from "react-icons/io5";
import ChatUserRecord from "@/components/AuctionMain/ChatUserRecord/ChatUserRecord";

const ChatUsers = () => {
    return (
        <div className="tile-container users standart-border standard-background">
            <h2>Користувачі чату</h2>
            <div className="tile-container users-container">
                <ChatUserRecord/>
                <ChatUserRecord/>
                <ChatUserRecord/>
                <ChatUserRecord/>
                <ChatUserRecord/>
                <ChatUserRecord/>
            </div>
        </div>
    );
};

export default ChatUsers;
