import ProfileButton from "@/components/ProfileButton/ProfileButton";
import NavBar from "../NavBar/NavBar";

const NavColumn = () => {
    return (
        <div
            className={'nav-column'}
        >
            <div
                className={'nav-container'}
            >
                <NavBar />
            </div>
            <ProfileButton />
        </div>
    );
};

export default NavColumn;
