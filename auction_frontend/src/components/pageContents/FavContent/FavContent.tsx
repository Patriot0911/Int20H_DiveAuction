import ItemsSection from '@/components/ItemSection/ItemsSection';
import './FavContent.css';

const FavContent = () => {
    return (
        <div
            className={'fav-page-container'}
        >
            <ItemsSection
                type={'fav'}
            />
        </div>
    );
};

export default FavContent;
