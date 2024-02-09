import { FaUser } from 'react-icons/fa';
import './ProfileButton.css';

const ProfileButton = () => {
    return (
        <a
            className={'profile'}
        >
            <div
                className={'profile-img-container'}
            >
                <FaUser
                    size={'50px'}
                    color={'#ffff'}
                />
            </div>
        </a>
    );
};

export default ProfileButton;

