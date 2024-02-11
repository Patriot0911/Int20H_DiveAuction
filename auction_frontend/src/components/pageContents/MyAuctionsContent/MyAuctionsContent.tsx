import ItemsSection from '@/components/ItemSection/ItemsSection';
import './MyAuctionsContent.css';

const MyAuctionsContent = () => {
    return (
        <div
            className={'my-auctions-page-container'}
        >
            <ItemsSection
                type={'active'}
            />
        </div>
    );
};

export default MyAuctionsContent;
