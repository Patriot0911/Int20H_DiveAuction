import { lemonFont } from '@/scripts/fonts';
import Link from 'next/link';
import './NavLogo.css';

const NavLogo = () => {
    return (
        <Link
            href={'/'}
            className={'logo-back'}
        >
            <div
                className={`logo ${lemonFont.className}`}
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
