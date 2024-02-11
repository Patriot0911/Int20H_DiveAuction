import SearchColumn from "./SearchColumn";
import LogoColumn from "./LogoColumn";
import NavColumn from "./NavColumn";
import './Header.css';

const Header = () => {
    return (
        <header>
            <LogoColumn />
            <SearchColumn />
            <NavColumn />
        </header>
    );
};

export default Header;
