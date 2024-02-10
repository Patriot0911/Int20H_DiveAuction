import { INavBarListItem } from "@/types";
import { FaHome, FaHeart } from "react-icons/fa";
import { MdOutlineWallet } from "react-icons/md";

const componentProps = {
    size: '35px'
};
const navBarList: INavBarListItem[] = [
    {
        path: '/',
        component:
        <FaHome
            {...componentProps}
        />
    },
    {
        path: '/my-auctions',
        logged: true,
        component:
        <MdOutlineWallet
            {...componentProps}
        />
    },
    {
        path: '/fav',
        logged: true,
        component:
        <FaHeart
            {...componentProps}
        />
    }
];

export default navBarList;
