import { Metadata } from "next";
import CreateAuction from "@/components/CreateAuction/CreateAuction";
import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import signupList from "@/decalLists/signup";

export const metadata: Metadata = {
    title: 'Auction Dive | My Lots'
};

const MyAuctionsPage = () => {
    return (
        <>
            <BackgroundDecals
                {...signupList}
            />
            <CreateAuction/>
        </>
    );
};

export default MyAuctionsPage;