import CreateAuctionContent from "@/components/pageContents/CreateAuctionContent/CreateAuctionContent";
import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import homeList from "@/decalLists/home";
import { Metadata } from "next";
import ReduxProvider from "@/redux/provider";

export const metadata: Metadata = {
    title: 'Auction Dive | Create Lot'
};

const CreateAuctionPage = () => {
    return (
        <>
            <BackgroundDecals
                {...homeList}
            />
            <ReduxProvider>
                <CreateAuctionContent/>
            </ReduxProvider>
        </>
    );
};

export default CreateAuctionPage;
