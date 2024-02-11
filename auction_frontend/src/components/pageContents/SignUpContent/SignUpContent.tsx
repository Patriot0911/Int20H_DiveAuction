
import AuthForm from '@/components/AuthForm/AuthForm';
import { lobsterFont } from '@/scripts/fonts';
import { AuthActionsTypes } from '@/types';
import './signup.css';

const SignUpContent = () => {
    return (
        <section
            className={
                `signup-container ${lobsterFont.className}`
            }
        >
            <h2>Реєстрація</h2>
            <AuthForm
                formtype={AuthActionsTypes.SignUp}
            />
        </section>
    );
};

export default SignUpContent;
