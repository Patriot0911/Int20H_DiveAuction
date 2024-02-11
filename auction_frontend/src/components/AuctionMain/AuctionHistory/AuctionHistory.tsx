import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './AuctionHistory.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import {IoSend} from "react-icons/io5";
import ChatUsers from "@/components/AuctionMain/ChatUsers/ChatUsers";
import HistoryRecord from "@/components/AuctionMain/HistoryRecord/HistoryRecord";

const AuctionHistory = () => {
    return (
        <div className="tile-container history standart-border standard-background ">
            <h2>Історія ставок</h2>
            <div className="history-container">
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>
                <HistoryRecord/>

            </div>
        </div>
    );
};

export default AuctionHistory;
