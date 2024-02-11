import AuctionMainContent from "@/components/AuctionMainContent/AuctionMainContent";
import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import signupList from "@/decalLists/signup";

const LotItemPage = () => {
    return (
        <>
            <BackgroundDecals
                {...signupList}
            />
            <AuctionMainContent />
        </>
    );
};

export default LotItemPage;
