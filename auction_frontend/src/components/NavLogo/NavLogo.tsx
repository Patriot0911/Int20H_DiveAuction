import Link from 'next/link';
import './NavLogo.css';
import { Lemon } from 'next/font/google';

const logoFont = Lemon({
    weight: '400',
    subsets: ['latin']
});

const NavLogo = () => {
    return (
        <Link
            href={'/'}
            className={'logo-back'}
        >
            <div
                className={`logo ${logoFont.className}`}
            >
                AUCTION
                <span
                    className={'dive-logo-text'}
                >
                    DIVE
                </span>
            </div>
        </Link>
    );
};

export default NavLogo;
