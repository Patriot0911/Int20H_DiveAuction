'use client';
import AuthForm from '@/components/AuthForm/AuthForm';
import { lobsterFont } from '@/scripts/fonts';
import { AuthActionsTypes } from '@/types';
import './login.css';

const LogInContent = () => {
    return (
        <section
            className={
                `login-container ${lobsterFont.className}`
            }
        >
            <h2>Авторизація</h2>
            <AuthForm
                formtype={AuthActionsTypes.SignIn}
            />
        </section>
    );
};

export default LogInContent;
