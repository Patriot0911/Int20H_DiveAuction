'use client';
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import './FavButton.css';

export interface IFavButtonProps {
    id: number;
    favStatus: boolean;
};

const FavButton = ({ id, favStatus }: IFavButtonProps) => {
    const [isFav, setIsFav] = useState(favStatus);
    const favControll = () => {
        const token = localStorage.getItem('token');
        if(!token)
            return;
        const auth = {
            'Authorization': `Bearer ${token}`
        };
        const body = JSON.stringify({
            auctionId: id
        });
        fetch('http://localhost:8000/api/me/favorites',
        {
            method: isFav ? 'DELETE' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...auth
            },
            body
        }).then(
            async response => {
                const data = await response.json();
                if(!response.ok)
                    return;
                setIsFav((state) => !state);
            }
        )
    };
    return (
        <button
            className={'fav-button'}
            onClick={favControll}
        >
            {
                isFav ?
                <IoMdHeart
                    className={'fav-icon'}
                    size={25}
                />:
                <FaRegHeart
                    className={'fav-icon'}
                    size={25}
                />
            }
        </button>
    );
};

export default FavButton;
