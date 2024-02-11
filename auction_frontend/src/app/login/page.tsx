import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import LogInContent from "@/components/pageContents/LogInContent/LogInContent";
import signupList from "@/decalLists/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Auction Dive | Log In!'
};

const LogInPage = () => {
    return (
        <>
            <BackgroundDecals
                {...signupList}
            />
            <LogInContent />
        </>
    );
};

export default LogInPage;