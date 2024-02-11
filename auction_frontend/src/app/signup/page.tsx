import BackgroundDecals from '@/components/BackgroundDecals/BackgroundDecals';
import SignUpContent from '@/components/pageContents/SignUpContent/SignUpContent';
import signupList from '@/decalLists/signup';
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
