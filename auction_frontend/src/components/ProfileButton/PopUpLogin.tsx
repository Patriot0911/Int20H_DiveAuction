import Link from "next/link";

const PopUpLogin = () => {
    return (
        <div
            className={'pop-login'}
        >
            <Link
                href={'/login'}
                className={'auth-button'}
            >
                Увійти
            </Link>
            <Link
                href={'/signup'}
                className={'auth-button'}
            >
                Створити
            </Link>
        </div>
    );
};

export default PopUpLogin;
