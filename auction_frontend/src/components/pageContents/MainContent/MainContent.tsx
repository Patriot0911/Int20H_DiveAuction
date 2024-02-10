import BannerSection from './BannerSection';
import ItemsSection from './ItemsSection';
import './MainContent.css';

const MainContent = () => {
    return (
        <div
            className={'main-page-container'}
        >
            <BannerSection />
            <ItemsSection />
        </div>
    );
};

export default MainContent;
