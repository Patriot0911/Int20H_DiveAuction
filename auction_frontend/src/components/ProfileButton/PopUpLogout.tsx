import { logOutUser } from "@/redux/features/user-info-slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const PopUpLogout = () => {
    const dispatch = useDispatch();
    const logOutHandle = () => {
        dispatch(logOutUser());
        localStorage.removeItem('token');
    };
    return (
        <div
            className={'pop-logout'}
        >
            <Link
                href={'#'}
                className={'logout-button'}
                onClick={logOutHandle}
            >
                Вийти
            </Link>
        </div>
    );
};

export default PopUpLogout;
