"use client";
import { fetchAllItems } from "@/scripts/utils";
import { lobsterFont } from "@/scripts/fonts";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ILotData } from "@/types";
import LotList from "./LotList";
import './ItemSection.css';

const ItemsSection = () => {
    const [lots, setLots] = useState<ILotData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { search } = useParams();
    useEffect(() => {
        const searchOptions = {
            search: (search && Array.isArray(search)) ? search[0] : search
        };
        fetchAllItems(setLots, setIsLoading, searchOptions);
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
