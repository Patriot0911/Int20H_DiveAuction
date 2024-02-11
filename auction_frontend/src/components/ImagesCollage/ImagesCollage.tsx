import './ImagesCollage.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";
import { IImagesCollageProps } from '@/types';
import { useState } from 'react';

const ImagesCollage = ({ photos }: IImagesCollageProps) => {
    const [images] = useState<string[]>(photos);
    const [curImage, setCurImage] = useState<number>(0);
    return (
        <div
            className={"images-collage"}
        >
            <div
                className={"main-image"}
                onClick={
                    () => setCurImage(imgId => imgId === images.length-1 ? 0 : imgId+1)
                }
            >
                <PhotoWrapper
                    img={images[curImage]}
                />
            </div>
        </div>
    );
};

export default ImagesCollage;
