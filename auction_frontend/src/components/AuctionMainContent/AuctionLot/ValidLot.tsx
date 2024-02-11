import ImagesCollage from "@/components/ImagesCollage/ImagesCollage";
import { ILotInfoProps } from "@/types";
import LotInfo from "./LotInfo";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { redirect } from "next/navigation";

const statusText = {
    active: 'active',
    planned: 'planned',
    finished: 'finished'
};

const ValidLot = ({ lot, photos }: ILotInfoProps) => {
    const [minPrice, setMinPrice] = useState<number>(lot.endPrice+1);
    const [bid, setBid] = useState<number>(lot.endPrice+1);
    const [errorBid, setErrorBid] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const bidChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        const bidValue = parseInt(e.currentTarget.value);
        setErrorBid(bidValue < minPrice || isNaN(bidValue));
        setBid(
            !isNaN(bidValue) ?
            bidValue : 0
        );
    };
    const sendBidHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(errorBid)
            return inputRef.current?.focus();
        if(bid < minPrice) {
            setErrorBid(true);
            return inputRef.current?.focus();
        };
        const token = localStorage.getItem('token');
        const body = JSON.stringify({
            price: bid
        });
        if(!token)
            return redirect('/');
        const auth = {
            'Authorization': `Bearer ${token}`
        };
        fetch(
            `http://localhost:8000/api/auctions/${lot.id}/bid`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...auth
                },
                body
            }
        ).then(
            response => {
                if(response.ok) {
                    setMinPrice(bid+1);
                    setBid(bid+1);
                };
            }
        );
    };
    return (
        <>
            <div
                className={"column left"}
            >
                <ImagesCollage
                    photos={photos}
                />
                <section
                    className={`status-wrapper status-${statusText[lot.status as keyof typeof statusText]}`}
                >
                    <h2>
                        {
                            statusText[lot.status as keyof typeof statusText]
                        }
                    </h2>
                    ({new Date(lot.startDate).toLocaleDateString()} / {new Date(lot.endDate).toLocaleDateString()})
                </section>
                <form
                    className={"bet-buttons-container"}
                    onSubmit={sendBidHandle}
                >
                    <input
                        placeholder={"Ваша ставка"}
                        type={"number"}
                        min={lot.endPrice}
                        value={bid}
                        onChange={bidChangeHandle}
                        className={
                            `std-input bet-buttons ${
                                !errorBid ?
                                'standart-border' : 'error-border'
                            }`
                        }
                        ref={inputRef}
                    />
                    <button
                        type={'submit'}
                        className={`std-input bet-buttons standart-border`}
                    >
                        Поставити
                    </button>
                </form>
            </div>
            <LotInfo
                description={lot.description}
                title={lot.description}
            />
        </>
    );
};

export default ValidLot;
