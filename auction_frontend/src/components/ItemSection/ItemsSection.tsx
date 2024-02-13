"use client";
import { lobsterFont } from "@/scripts/fonts";
import { useEffect, useState } from "react";
import { fetchFavs, fetchLots } from "@/scripts/api";
import { ILotData } from "@/types";
import LotList from "./LotList";
import './ItemSection.css';

const ItemsSection = () => {
    const [lots, setLots] = useState<ILotData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        fetchLots() // to sep file 'utils'
        .then(
            async (lotsData: ILotData[]) => {
                if(!lotsData)
                    return setIsLoading(false);
                const favData = await fetchFavs()
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
