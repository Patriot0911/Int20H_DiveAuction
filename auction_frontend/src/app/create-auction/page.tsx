import CreateAuctionContent from "@/components/pageContents/CreateAuctionContent/CreateAuctionContent";
import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import homeList from "@/decalLists/home";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Auction Dive | Create Lot'
};

const CreateAuctionPage = () => {
    return (
        <>
            <BackgroundDecals
                {...homeList}
            />
            <CreateAuctionContent/>
        </>
    );
};

export default CreateAuctionPage;
