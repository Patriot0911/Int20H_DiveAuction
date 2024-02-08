import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import { Metadata } from "next";
import LogInContent from "./LogInContent";
import signupList from "@/decalLists/signup";

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