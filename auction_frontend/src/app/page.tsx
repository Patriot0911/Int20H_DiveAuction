import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import MainContent from "@/components/pageContents/MainContent/MainContent";
import homeList from "@/decalLists/home";

const HomePage = () => {
    return (
        <>
            <BackgroundDecals
                {...homeList}
            />
            <MainContent />
        </>
    );
};

export default HomePage;
