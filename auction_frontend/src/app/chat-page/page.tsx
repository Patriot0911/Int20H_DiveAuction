import { Metadata } from "next";
import CreateAuction from "@/components/CreateAuction/CreateAuction";
import AuctionLot from "@/components/AuctionMain/AuctionLot/AuctionLot";
import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import signupList from "@/decalLists/signup";
import AuctionMain from "@/components/AuctionMain/AuctionMain";

export const metadata: Metadata = {
    title: 'Auction Dive | My Lots'
};

const MyAuctionsPage = () => {
    return (
        <>
            <BackgroundDecals
                {...signupList}
            />
            <AuctionMain/>
        </>

    );
};

export default MyAuctionsPage;