import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import homeList from "@/decalLists/home";

const Home = () => {
    return (
        <>
            <BackgroundDecals
                {...homeList}
            />
        </>
    );
};

export default Home;
