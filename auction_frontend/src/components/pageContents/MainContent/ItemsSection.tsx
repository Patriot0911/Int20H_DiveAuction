"use client";
import LotItem from "@/components/LotItem/LotItem";
import { useState } from "react";

interface ILotItem {
    id: number;
    title: string;
    description: string;
    img: string;
};

const ItemsSection = () => {
    const [lots, setLots] = useState<ILotItem[]>([]);
    return (
        <section
            className={'items-section-container'}
        >
            {/* {
                lots.map(
                    (item, index) =>
                    <LotItem
                        key={`item-lot-${index}`}
                    />
                )
            } */}
            <LotItem />
        </section>
    );
};

export default ItemsSection;
