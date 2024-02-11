import MyAuctionsContent from "@/components/pageContents/MyAuctionsContent/MyAuctionsContent";
import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import signupList from "@/decalLists/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Auction Dive | My Lots'
};

const MyAuctionsPage = () => {
    return (
        <>
            <BackgroundDecals
                {...signupList}
            />
            <MyAuctionsContent />
        </>
    );
};

export default MyAuctionsPage;