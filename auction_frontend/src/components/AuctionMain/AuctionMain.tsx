import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './AuctionMain.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import {IoSend} from "react-icons/io5";
import AuctionLot from "@/components/AuctionMain/AuctionLot/AuctionLot";
import AuctionChat from "@/components/AuctionMain/AuctionChat/AuctionChat";
import AuctionHistory from "@/components/AuctionMain/AuctionHistory/AuctionHistory";

const AuctionMain = () => {
    return (
        <div className="container">
            <div className="chat-lot-container">
                <AuctionLot/>
                <AuctionChat/>
            </div>
            <AuctionHistory/>
        </div>
    );
};

export default AuctionMain;
