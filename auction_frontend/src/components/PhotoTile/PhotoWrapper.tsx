import { useState } from 'react';
import './PhotoWrapper.css';
import ImagePlaceholder from '../ui/ImagePlaceholder/ImagePlaceholder';
import { getAssetUrl } from '@/scripts/api';
import { IPhotoWrapperProps } from '@/types';

const PhotoWrapper = ({ img }: IPhotoWrapperProps) => {
    const [isValidImg, setIsValidImg] = useState(!!img);
    return (
        <div
            className={'photo-item-wrapper'}
        >
            <div
                className={'photo-item-container'}
            >
                <section
                    className={'photo-img-container'}
                >
                    {
                        isValidImg ?
                        <img
                            onError={() => setIsValidImg(false)}
                            alt={`lot-${img}-img`}
                            src={img && getAssetUrl(img)}
                        /> :
                        <ImagePlaceholder />
                    }
                </section>
            </div>
        </div>
    );
};

export default PhotoWrapper;
