"use client";
import { useReduxSelector } from '@/redux/store';
import { FaUserSecret } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import PopUpLogin from './PopUpLogin';
import { useEffect } from 'react';
import './ProfileButton.css';

const ProfileButton = () => {
    const isAuth = useReduxSelector(
        selector => selector.UserInfoReducer.value.isAuth
    );
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if(!isAuth && token) {
    //         // TODO: Fetch /me in sep func
    //     }
    // });
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

