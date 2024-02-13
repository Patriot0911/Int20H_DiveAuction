import { IBackgroundDecalsProps } from '@/types';
import Circle from '../ui/Circle/Circle';
import './BackgroundDecals.css';

const BackgroundDecals = ({ circles }: IBackgroundDecalsProps) => {
    return (
        <div
            className={'decals-container'}
        >
            {
                circles?.map((item, index) =>
                    <Circle
                        {...item}
                        key={index}
                    />
                )
            }
        </div>
    );
};

export default BackgroundDecals;
