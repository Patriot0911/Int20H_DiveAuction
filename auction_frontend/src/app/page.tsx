import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import MainContent from "@/components/pageContents/MainContent/MainContent";
import homeList from "@/decalLists/home";

const Home = () => {
    return (
        <>
            <BackgroundDecals
                {...homeList}
            />
            <MainContent />
        </>
    );
};

export default Home;
