import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <div className="left-column">
                <div className="logo">
                    <span>auction</span>
                    <span>dive</span>
                </div>
            </div>
            <div className="central-column">
                <form className="search-box">
                    <input type="text" placeholder="Search" className="search-bar"/>
                    <button className="search-button">
                        <FontAwesomeIcon icon="search" className="search-icon"/>
                    </button>
                </form>
            </div>
            <div className="right-column">
                <div className="navbar">
                    <a href="#">
                        <div className="icon-wrapper">
                            <FaUserGroup size="35px"/>
                        </div>
                    </a>
                    <a href="#">
                        <div className="icon-wrapper">
                            <FaHeart size="35px"/>
                        </div>
                    </a>
                    <a href="#">
                        <div className="icon-wrapper">
                            <FaHome size="35px"/>
                        </div>
                    </a>
                </div>

                <a className="profile">
                    <div className="profile__pic">
                        <FaUser size="45px"/>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default Header;
