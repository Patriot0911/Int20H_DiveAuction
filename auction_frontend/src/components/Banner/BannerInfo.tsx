import BannerDescription from "./BannerDescription";
import BannerTitle from "./BannerTitle";

const BannerInfo = () => {
    return (
        <div
            className={'info-container'}
        >
            <BannerTitle />
            <BannerDescription />
        </div>
    );
};

export default BannerInfo;
