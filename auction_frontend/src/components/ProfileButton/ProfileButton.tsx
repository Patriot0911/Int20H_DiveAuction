import { FaUserSecret } from 'react-icons/fa';
import './ProfileButton.css';

const ProfileButton = () => {
    return (
        <a
            className={'profile'}
        >
            <div
                className={'profile-img-container'}
            >
                <FaUserSecret
                    size={'50px'}
                    color={'#fdebff'}
                />
            </div>
        </a>
    );
};

export default ProfileButton;

