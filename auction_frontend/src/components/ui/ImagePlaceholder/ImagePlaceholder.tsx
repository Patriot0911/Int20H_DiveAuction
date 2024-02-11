import { lobsterFont } from '@/scripts/fonts';
import './ImagePlaceholder.css';

const ImagePlaceholder = () => {
    return (
        <div
            className={'img-placeholder'}
        >
            <h2
                className={lobsterFont.className}
            >
                Image not Found
            </h2>
        </div>
    );
};

export default ImagePlaceholder;
