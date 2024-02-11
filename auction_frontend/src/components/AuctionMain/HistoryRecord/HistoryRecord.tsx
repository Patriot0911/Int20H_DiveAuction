import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './HistoryRectord.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import {IoSend} from "react-icons/io5";

const HistoryRecord = () => {
    return (
        <>
            <div className="history-record record-background record-border biggest">
                <div className="user">
                    <img src="https://picsum.photos/512/512" alt="" className={"profile-image"}/>
                    <p>Підар Підарок Підоровіч </p>
                </div>
                <div className="bet-count">
                    200000
                </div>
            </div>
            <div className="history-record record-background record-border">
                <div className="user">
                    <img src="https://picsum.photos/512/512" alt="" className={"profile-image"}/>
                    <p>Підар Підарок Підоровіч </p>
                </div>
                <div className="bet-count">
                    200000
                </div>
            </div>
        </>

    )
        ;
};

export default HistoryRecord;
