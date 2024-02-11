'use client';
import CreateLotForm from '@/components/CreateLotForm/CreateLotForm';
import { useReduxSelector } from '@/redux/store';
import { redirect } from "next/navigation";
import { useEffect } from 'react';
import './CreateAuctionContent.css';

const CreateAuctionContent = () => {
    const isAuth = useReduxSelector(
        selector => selector.UserInfoReducer.value.isAuth
    );
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!isAuth && !token)
            return redirect('/')
    }, []);
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
