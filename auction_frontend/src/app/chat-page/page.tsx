import { Metadata } from "next";
import CreateAuction from "@/components/CreateAuction/CreateAuction";

export const metadata: Metadata = {
    title: 'Auction Dive | My Lots'
};

const MyAuctionsPage = () => {
    return (
        <CreateAuction/>
    );
};

export default MyAuctionsPage;