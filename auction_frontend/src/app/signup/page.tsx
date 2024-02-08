import BackgroundDecals from '@/components/BackgroundDecals/BackgroundDecals';
import signupList from '@/decalLists/signup';
import SignUpContent from './SignUpContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Auction Dive | Sign Up!'
};

const SignUpPage = () => {
    return (
        <>
            <BackgroundDecals
                {...signupList}
            />
            <SignUpContent />
        </>
    );
};

export default SignUpPage;
