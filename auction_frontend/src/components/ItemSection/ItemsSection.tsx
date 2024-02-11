"use client";
import { lobsterFont } from "@/scripts/fonts";
import { useEffect, useState } from "react";
import fetchData from "@/scripts/api";
import { IItemsSectionProps, ILotData } from "@/types";
import LotList from "./LotList";
import './ItemSection.css';

const ItemsSection = ({ type }: IItemsSectionProps) => {
    const [lots, setLots] = useState<ILotData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [favLots, setFavLots] = useState<number[]>([]);
    useEffect(() => {
        fetchData(type ?? 'auctions')
        .then(response => {
                setLots(response)
                setIsLoading(false);
            }
        );
        fetchData('fav')
        .then(response => {
                const favs = response.map(
                    (item: ILotData) => item.auction.id
                );
                setFavLots(favs)
            }
        );
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
                    favs={favLots}
                    lots={lots}
                />
            }
        </section>
    );
};

export default ItemsSection;
