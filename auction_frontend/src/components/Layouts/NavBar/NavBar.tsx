import { FaUserGroup } from 'react-icons/fa6';
import { FaHeart, FaHome } from 'react-icons/fa';
import { INavButtonProps } from '@/types';
import NavButton from '@/components/ui/NavButton/NavButton';
import './NavBar.css';

const componentProps = {
    size: '35px'
};
const navList: INavButtonProps[] = [
    {
        path: '#',
        component:
        <FaUserGroup
            {...componentProps}
        />
    },
    {
        path: '#',
        component:
        <FaHeart
            {...componentProps}
        />
    },
    {
        path: '#',
        component:
        <FaHome
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
