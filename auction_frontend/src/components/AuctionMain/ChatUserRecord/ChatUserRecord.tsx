import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './ChatUserRectord.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import {IoSend} from "react-icons/io5";

const ChatUserRecord = () => {
    return (
        <div className="user record-background record-border">
            <img src="https://picsum.photos/512/512" alt="" className={"profile-image"}/>
            <p>Підар Підарок Підоровіч </p>
        </div>

    );
};

export default ChatUserRecord;
