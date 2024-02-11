import BackgroundDecals from "@/components/BackgroundDecals/BackgroundDecals";
import SearchContent from "@/components/pageContents/SearchContent/SearchContent";
import signupList from "@/decalLists/signup";

const SearchItemPage = () => {
    return (
        <>
            <BackgroundDecals
                {...signupList}
            />
            <SearchContent />
        </>
    );
};

export default SearchItemPage;
