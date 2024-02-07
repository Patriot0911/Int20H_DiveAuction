import BackgroundDecals from '@/components/BackgroundDecals/BackgroundDecals';
import signupList from '@/decalLists/signup';
import { Lobster } from 'next/font/google';
import { Metadata } from 'next';
import SignUpForm from '@/components/SignUpForm/SignUpForm';
import './signup.css';

const lobster = Lobster({
    subsets: ['latin'],
    weight: '400'
});
export const metadata: Metadata = {
    title: 'Auction Dive | Sign Up!'
};

const SignUp = () => {
    return (
        <>
            <BackgroundDecals
                {...signupList}
            />
            <section
                className={
                    `signup-container ${lobster.className}`
                }
            >
                <h2>Реєстрація</h2>
                <SignUpForm />
            </section>
        </>
    );
};

export default SignUp;
