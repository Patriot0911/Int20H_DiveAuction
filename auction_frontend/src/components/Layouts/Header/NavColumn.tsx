import ProfileButton from "@/components/ProfileButton/ProfileButton";
import NavBar from "../NavBar/NavBar";
import ReduxProvider from "@/redux/provider";

const NavColumn = () => {
    return (
        <div
            className={'nav-column'}
        >
            <ReduxProvider>
                <div
                    className={'nav-container'}
                >
                    <NavBar />
                </div>
                <ProfileButton />
            </ReduxProvider>
        </div>
    );
};

export default NavColumn;
