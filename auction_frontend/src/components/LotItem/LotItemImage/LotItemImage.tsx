import ImagePlaceholder from "../../ui/ImagePlaceholder/ImagePlaceholder";
import FavButton from "../../ui/FavButton/FavButton";
import { ILotItemImageProps } from "@/types";
import LotPrice from "../LotPrice/LotPrice";
import { getAssetUrl } from "@/scripts/api";
import { useState } from "react";
import './LotItemImage.css';

const LotItemImage = ({ id, photos, price, isFav }: ILotItemImageProps) => {
    const [isValidImg, setImageValid] = useState(true);
    const [curImageIndex, setCurImageIndex] = useState(0);
    const getImageHandle = () => {
        if(!photos || !photos[0])
            return setImageValid(false);
        const curPhoto = photos[curImageIndex];
        if(!curPhoto)
            return setCurImageIndex(0);
        if(
            curPhoto &&
            typeof curPhoto === 'string'
        )  return getAssetUrl(curPhoto);
        return setImageValid(false);
    };
    return (
        <section
            className={'lot-img-container'}
        >
            {
                isValidImg ?
                <img
                    onError={() => setImageValid(false)}
                    onClick={() => setCurImageIndex((index) => index+1)}
                    src={getImageHandle() ?? undefined}
                    alt={`lot-${id}-img`}
                /> :
                <ImagePlaceholder />
            }
            <FavButton
                favStatus={isFav ?? false}
                id={id}
            />
            <LotPrice
                price={price}
            />
        </section>
    );
};

export default LotItemImage;
