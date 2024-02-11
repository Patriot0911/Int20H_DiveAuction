"use client";
import LotItem from "@/components/LotItem/LotItem";
import fetchData, { getAssetUrl } from "@/scripts/api";
import { ILotData } from "@/types";
import { useEffect, useState } from "react";

const ItemsSection = () => {
    const [lots, setLots] = useState<ILotData[]>([]);
    useEffect(() => {
        fetchData('auctions')
        .then(response => setLots(response));
    }, []);
    return (
        <section
            className={'items-section-container'}
        >
            {
                lots.map(
                    (item, index) =>
                    <LotItem
                        {
                            ...item.auction
                        }
                        image={getAssetUrl(item.photos[0])}
                        key={`item-lot-${index}`}
                    />
                )
            }
        </section>
    );
};

export default ItemsSection;
