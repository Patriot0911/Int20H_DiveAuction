import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import AuctionLot from "@/components/AuctionMain/AuctionLot/AuctionLot";
import AuctionMain from "@/components/AuctionMain/AuctionMain";
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
            <AuctionMain/>
        </>

    );
};

export default MyAuctionsPage;