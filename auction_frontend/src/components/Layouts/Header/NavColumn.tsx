import ProfileButton from "@/components/ProfileButton/ProfileButton";
import NavBar from "../NavBar/NavBar";
import ProfileElement from "@/components/ProfileElement/ProfileElement";

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
            <ProfileElement />
        </div>
    );
};

export default NavColumn;
