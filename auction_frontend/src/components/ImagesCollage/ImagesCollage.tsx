import { IImagesCollageProps } from '@/types';
import { getAssetUrl } from "@/scripts/api";
import { useState } from 'react';
import './ImagesCollage.css';

const ImagesCollage = ({ photos }: IImagesCollageProps) => {
    const [curImage, setCurImage] = useState<number>(0);
    return (
        <div
            className={'images-collage'}
        >
            <img
                src={getAssetUrl(photos[0])}
            />
        </div>
    );
};

export default ImagesCollage;
