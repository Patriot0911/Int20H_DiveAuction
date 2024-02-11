"use client";
import { authUser } from '@/redux/features/user-info-slice';
import { findMe, getAssetUrl } from '@/scripts/api';
import { useReduxSelector } from '@/redux/store';
import { FaUserSecret } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import PopUpLogout from './PopUpLogout';
import PopUpLogin from './PopUpLogin';
import { useEffect } from 'react';
import './ProfileButton.css';

const iconProps = {
    size: '50px',
    color: '#fdebff'
};

const ProfileButton = () => {
    const isAuth = useReduxSelector(
        selector => selector.UserInfoReducer.value.isAuth
    );
    const profileAvatar = useReduxSelector(
        selector => selector.UserInfoReducer.value.data?.photo
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!isAuth && token) {
            findMe()
            .then(
                response => {
                    if(!response)
                        return localStorage.removeItem('token');
                    dispatch(authUser(response));
                    console.log(response);
                }
            );
        }
    }, []);

    return (
        <div
            className={'profile'}
        >
            <div
                className={'profile-img-container'}
            >
                {
                    !profileAvatar || profileAvatar === '/users/default.jpg' ?
                    <FaUserSecret
                        {...iconProps}
                    /> :
                    <img
                        src={getAssetUrl(profileAvatar)}
                    />
                }
            </div>
            {
                isAuth ?
                <PopUpLogout /> :
                <PopUpLogin />
            }
        </div>
    );
};

export default ProfileButton;

