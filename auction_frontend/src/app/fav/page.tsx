import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import FavContent from "@/components/pageContents/FavContent/FavContent";
import homeList from "@/decalLists/home";

const FavPage = () => {
    return (
        <>
            <BackgroundDecals
                {...homeList}
            />
            <FavContent />
        </>
    );
};

export default FavPage;
