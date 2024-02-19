'use client';
import LotList from "@/components/ItemSection/LotList";
import { lobsterFont } from "@/scripts/fonts";
import { fetchFavItems } from "@/scripts/utils";
import { ILotData } from "@/types";
import { useState, useEffect } from "react";
import './ItemSection.css';

const FavItemsSection = () => {
    const [lots, setLots] = useState<ILotData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        fetchFavItems(setLots, setIsLoading);
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

export default FavItemsSection;
