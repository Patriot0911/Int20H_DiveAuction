"use client";
import NavButton from '@/components/ui/NavButton/NavButton';
import { useReduxSelector } from '@/redux/store';
import navBarList from '@/scripts/navBarList';
import './NavBar.css';

const NavBar = () => {
    const isAuth = useReduxSelector(
        selector => selector.UserInfoReducer.value.isAuth
    );
    return (
        <nav>
            {
                navBarList.map(
                    (item, index) =>
                    (!item.logged || (item.logged && isAuth)) &&
                    <NavButton
                        key={`header-nav-button-${index}`}
                        {...item}
                    />
                )
            }
        </nav>
    );
};

export default NavBar;
