import { FaUserGroup } from 'react-icons/fa6';
import { FaHeart, FaHome } from 'react-icons/fa';
import { INavButtonProps } from '@/types';
import NavButton from '@/components/ui/NavButton/NavButton';
import './NavBar.css';
import { MdOutlineWallet } from 'react-icons/md';

const componentProps = {
    size: '35px'
};
const navList: INavButtonProps[] = [
    {
        path: '/',
        component:
        <FaHome
            {...componentProps}
        />
    },
    {
        path: '/my-auctions',
        component:
        <MdOutlineWallet
            {...componentProps}
        />
    },
    {
        path: '/fav',
        component:
        <FaHeart
            {...componentProps}
        />
    }
];

const NavBar = () => {
    return (
        <nav>
            {
                navList.map(
                    (item, index) =>
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
