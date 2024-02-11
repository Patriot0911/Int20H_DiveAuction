import { timmanaFont } from "@/scripts/fonts";
import { ILotItemImageProps } from "@/types";
import { useState } from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder/ImagePlaceholder";


const LotItemImage = ({ id, photo, price }: ILotItemImageProps) => {
    const [isValidImg, setImageValid] = useState(true);
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
