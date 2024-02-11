'use client';
import './AuctionMainContent.css';
import AuctionLot from "@/components/AuctionMainContent/AuctionLot/AuctionLot";
import AuctionChat from "@/components/AuctionMainContent/AuctionChat/AuctionChat";
import AuctionHistory from "@/components/AuctionMainContent/AuctionHistory/AuctionHistory";
import { redirect, useParams } from 'next/navigation';
import { fetchLot } from '@/scripts/api';
import { useEffect, useState } from 'react';
import { IBidInfo, IIncomeBid, ILotItemProps, IUserChatInfo } from '@/types';
import { socket } from '@/scripts/sockets';
import './ChatUserRecord/ChatUserRectord.css';

const AuctionMainContent = () => {
    const [lotInfo, setLotInfo] = useState<ILotItemProps>();
    const [users, setUsers] = useState<IUserChatInfo[]>([]);
    const [photos, setPhotos] = useState<string[]>([]);
    const [bidsH, setbidsH] = useState<IBidInfo[]>([]);
    const { id } = useParams();
    useEffect(() => {
        if(Array.isArray(id))
            return;
        const parsedId = parseInt(id);
        if(isNaN(parsedId))
            return redirect('/');
        fetchLot(parsedId)
        .then(
            response => {
                if(!response)
                    return redirect('/');
                const {
                    auction,
                    activeUsers,
                    bids,
                    images
                } = response;
                setLotInfo(auction);
                setPhotos(images);
                const bidsList: IBidInfo[] = bids.map((bid: any) =>{
                        const author = activeUsers.find(
                            (user: any) => user.id === bid.userId
                        );
                        const editedBid = {
                            id: bid.id,
                            photo: author.photo,
                            name: author.name,
                            price: bid.price,
                            userId: bid.userId
                        };
                        return editedBid;
                    }
                );
                setUsers(activeUsers);
                setbidsH(bidsList);
                socket.connect();
                socket.on('new-bid', newBidHandle);
            }
        );
    }, []);

    const newBidHandle = (data: IIncomeBid) => {
        const { bid, activeUsers } = data;
        const author = activeUsers.find(
            (user: any) => user.id === bid.userId
        );
        if(!author)
            return;
        const editedBid = {
            id: bid.id,
            photo: author.photo,
            name: author.name,
            price: bid.price,
            userId: bid.userId
        };
        setbidsH((items) => [editedBid, ...items]);
        setUsers(activeUsers);
    };

    return (
        <div
            className={'container'}
        >
            <div
                className={'chat-lot-container'}
            >
                <AuctionLot
                    lot={lotInfo}
                    photos={photos}
                />
                <AuctionChat
                    users={users}
                />
            </div>
            <AuctionHistory
                bids={bidsH}
            />
        </div>
    );
};

export default AuctionMainContent;
