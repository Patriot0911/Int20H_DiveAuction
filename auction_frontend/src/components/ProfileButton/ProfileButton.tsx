"use client";
import { useReduxSelector } from '@/redux/store';
import { FaUserSecret } from 'react-icons/fa';
import PopUpLogin from './PopUpLogin';
import './ProfileButton.css';

const ProfileButton = () => {
    const isAuth = useReduxSelector(
        selector => selector.UserInfoReducer.value.isAuth
    );
    return (
        <div
            className={'profile'}
        >
            <div
                className={'profile-img-container'}
            >
                {
                    !isAuth ?
                    <FaUserSecret
                        size={'50px'}
                        color={'#fdebff'}
                    />
                    : <>LOGGED IN</>
                }
            </div>
            {
                !isAuth && <PopUpLogin />
            }
        </div>
    );
};

export default ProfileButton;

