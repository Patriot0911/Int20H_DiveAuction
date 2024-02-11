import { lemonFont, lobsterFont } from "@/scripts/fonts";
import FooterMainInfo from './FooterMainInfo';
import WarningText from "./FooterTexts/WarningText";
import CopyrightText from "./FooterTexts/CopyrightText";
import FooterLinks from "./FooterLinks/FooterLinks";
import './Footer.css';

const Footer = () => {
    return (
        <footer
            className={lemonFont.className}
        >
            <FooterMainInfo />
            <div
                className={`bottom-container ${lobsterFont.className}`}
            >
                <FooterLinks />
                <CopyrightText />
                <WarningText />
            </div>
        </footer>
    );
};

export default Footer;
