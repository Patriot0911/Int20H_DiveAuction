
import SignUpForm from '@/components/SignUpForm/SignUpForm';
import { Lobster } from 'next/font/google';
import './signup.css';

const lobster = Lobster({
    subsets: ['latin'],
    weight: '400'
});

const SignUpContent = () => {
    return (
        <section
            className={
                `signup-container ${lobster.className}`
            }
        >
            <h2>Реєстрація</h2>
            <SignUpForm />
        </section>
    );
};

export default SignUpContent;
