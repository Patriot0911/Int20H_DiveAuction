import BannerInfo from './BannerInfo';
import './Banner.css';

const Banner = () => {
    return (
        <div
            className={'banner'}
        >
            <div
                className={'banner-blur'}
            >
                <BannerInfo />
            </div>
        </div>
    );
};

export default Banner;
