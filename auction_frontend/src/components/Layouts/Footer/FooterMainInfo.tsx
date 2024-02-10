import FooterTexts from "@/components/ui/FooterTexts/FooterTexts";
import FooterMainText from "./FooterMainText";

const FooterMainInfo = () => {
    return (
        <section
            className={'footer-main-info-wrapper'}
        >
            <FooterTexts
                texttype={'logo'}
            >
                Auction Dive
            </FooterTexts>
            <hr/>
            <FooterMainText />
        </section>
    );
};

export default FooterMainInfo;
