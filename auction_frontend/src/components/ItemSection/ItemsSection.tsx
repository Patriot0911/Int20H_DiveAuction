"use client";
import { lobsterFont } from "@/scripts/fonts";
import { useEffect, useState } from "react";
import { IItemsSectionProps, ILotData } from "@/types";
import LotList from "./LotList";
import './ItemSection.css';

const ItemsSection = ({ type }: IItemsSectionProps) => {
    const [lots, setLots] = useState<ILotData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchLots = async () => {
            const response = await fetch('http://localhost:8000/api/auctions');
            if(!response.ok)
                return;
            const data = await response.json();
            if(!data)
                return;
            return data;
        };
        const fetchFavs = async () => {
            const token = localStorage.getItem('token');
            if(!token)
                return [];
            const response = await fetch('http://localhost:8000/api/me/favorites',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if(!response.ok)
                return [];
            const data = await response.json();
            if(!data)
                return [];
            return data;
        };
        fetchLots()
        .then(
            (lotsData: ILotData[]) => {
                if(!lotsData)
                    return setIsLoading(false);
                fetchFavs()
                .then(
                    (favData: ILotData[]) => {
                        if(!favData) {
                            setLots(lotsData);
                        } else {
                            const favLots = favData.map(
                                item => item.auction.id
                            );
                            const lotsDataWithFavs: ILotData[] = lotsData.map(
                                item => ({
                                    ...item,
                                    auction: {
                                        ...item.auction,
                                        isFav: favLots.includes(item.auction.id)
                                    }
                                })
                            );
                            setLots(lotsDataWithFavs);
                        };
                        setIsLoading(false);
                    }
                );
            }
        )
    }, []);
    return (
        <section
            className={
                lots.length > 1 ?
                'items-section-container' : 'items-section-no-items'
            }
        >
            {
                isLoading ?
                <h1
                    className={`loading-text ${lobsterFont.className}`}
                >
                    Loading...
                </h1> :
                <LotList
                    lots={lots}
                />
            }
        </section>
    );
};

export default ItemsSection;
