import { timmanaFont } from "@/scripts/fonts";
import { ILotItemImageProps } from "@/types";
import { useState } from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder/ImagePlaceholder";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";


const LotItemImage = ({ id, photo, price, isFav }: ILotItemImageProps) => {
    const [isValidImg, setImageValid] = useState(true);
    const [issFav, setIsFav] = useState(isFav);
    const addFav = () => {
        const token = localStorage.getItem('token');
        if(!token)
            return;
        const auth = {
            'Authorization': `Bearer ${token}`
        };
        fetch('http://localhost:8000/api/me/favorites',
        {
            method: 'POST',
            headers: {
                ...auth
            },
            body: JSON.stringify({
                auctionId: id
            })
        }).then(
            response => {
                if(!response.ok)
                    return;
                setIsFav(true);
            }
        )
    };
    return (
        <section
            className={'lot-img-container'}
        >
            {
                isValidImg ?
                <img
                    onError={() => setImageValid(false)}
                    alt={`lot-${id}-img`}
                    src={photo}
                /> :
                <ImagePlaceholder />
            }
            <div
                className={'fav'}
            >
                {
                    issFav ?
                    <IoMdHeart
                        size={25}
                    />:
                    <FaRegHeart
                        size={25}
                        onClick={addFav}
                    />
                }
            </div>
            <span
                className={'lot-price-container'}
            >
                <span
                    className={`lot-price ${timmanaFont.className}`}
                >
                    {price} $
                </span>
            </span>
        </section>
    );
};

export default LotItemImage;
