'use client';
import AuthForm from '@/components/AuthForm/AuthForm';
import { lobsterFont } from '@/scripts/fonts';
import { AuthActionsTypes } from '@/types';
import ReduxProvider from '@/redux/provider';
import './login.css';

const LogInContent = () => {
    return (
        <section
            className={
                `login-container ${lobsterFont.className}`
            }
        >
            <h2>Авторизація</h2>
            <ReduxProvider>
                <AuthForm
                    formtype={AuthActionsTypes.SignIn}
                />
            </ReduxProvider>
        </section>
    );
};

export default LogInContent;
