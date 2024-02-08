import Link from "next/link";

const HasAccountInfo = () => {
    return (
        <div
            className={'has-account-info'}
        >
            Вже маєте акаунт?
            <br />
            <Link
                href={'/login'}
            >
                Увійти
            </Link>
        </div>
    );
};

export default HasAccountInfo;
