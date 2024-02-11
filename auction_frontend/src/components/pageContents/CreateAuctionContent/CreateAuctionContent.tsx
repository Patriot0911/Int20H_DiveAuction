import CreateLotForm from '@/components/CreateLotForm/CreateLotForm';
import './CreateAuctionContent.css';

const CreateAuctionContent = () => {
    return (
        <div
            className={'create-auction-page-container'}
        >
            <fieldset
                className={'create-auction-container'}
            >
                <legend>
                    Створення Лоту
                </legend>
                <CreateLotForm />
            </fieldset>
        </div>
    );
};

export default CreateAuctionContent;
