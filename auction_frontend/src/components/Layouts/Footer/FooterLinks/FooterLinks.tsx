import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import './FooterLinks.css';

const iconProps = {
    size: 30
};
const linkList = [
    {
        path: '#',
        component:
        <FaXTwitter
            {...iconProps}
        />
    },
    {
        path: '#',
        component:
        <FaInstagram
            {...iconProps}
        />
    },
    {
        path: '#',
        component:
        <FaTelegramPlane
            {...iconProps}
        />
    },
    {
        path: '#',
        component:
        <FaFacebookF
            {...iconProps}
        />
    },
    {
        path: '#',
        component:
        <MdMailOutline
            {...iconProps}
        />
    }
];

const FooterLinks = () => {
    return (
        <div
            className={'links'}
        >
            {
                linkList.map(
                    (item, index) =>
                    <Link
                        key={`footer-link-${index}`}
                        href={item.path}
                    >
                        {item.component}
                    </Link>
                )
            }
        </div>
    );
};

export default FooterLinks;
