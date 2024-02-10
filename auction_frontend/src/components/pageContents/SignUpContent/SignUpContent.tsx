
import AuthForm from '@/components/AuthForm/AuthForm';
import { lobsterFont } from '@/scripts/fonts';
import { AuthActionsTypes } from '@/types';
import './signup.css';
import ReduxProvider from '@/redux/provider';

const SignUpContent = () => {
    return (
        <section
            className={
                `signup-container ${lobsterFont.className}`
            }
        >
            <h2>Реєстрація</h2>
            <ReduxProvider>
                <AuthForm
                    formtype={AuthActionsTypes.SignUp}
                />
            </ReduxProvider>
        </section>
    );
};

export default SignUpContent;
