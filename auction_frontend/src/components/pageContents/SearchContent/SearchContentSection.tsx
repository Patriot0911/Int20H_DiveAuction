'use client';
import LotList from "@/components/ItemSection/LotList";
import { API_URL } from "@/scripts/api";
import { lobsterFont } from "@/scripts/fonts";
import { ILotData } from "@/types";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import './ItemSection.css';

const SearchContentSection = () => {
    const [lots, setLots] = useState<ILotData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { search } = useParams();
    useEffect(() => {
        fetch(API_URL + `auctions?search=${search}`).then(
            response => {
                if(!response.ok)
                    return setIsLoading(false);
                response.json()
                .then(data => {
                        setIsLoading(false);
                        setLots(data);
                    }
                )
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
                    favs={[]}
                    lots={lots}
                />
            }
        </section>
    );
};

export default SearchContentSection;
