import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './ImagesCollage.css';
import PhotoWrapper from "@/components/PhotoTile/PhotoWrapper";

const ImagesCollage = () => {
    return (
        <div className="images-collage">
            <div className="main-image">
                <PhotoWrapper/>
            </div>
            <div className="image-carousel">
            </div>
        </div>
    );
};

export default ImagesCollage;
