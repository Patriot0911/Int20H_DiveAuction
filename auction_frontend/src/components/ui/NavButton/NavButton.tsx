import { INavButtonProps } from "@/types";
import Link from "next/link";
import './NavButton.css';

const NavButton = ({ path, component }: INavButtonProps) => {
    return (
        <Link
            href={path}
            className={'nav-button'}
        >
            <div
                className={'icon-wrapper'}
            >
                {component}
            </div>
        </Link>
    );
};

export default NavButton;
