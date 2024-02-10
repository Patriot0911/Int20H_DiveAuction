import { lobsterFont } from "@/scripts/fonts";
import FirstColumn from "./FooterTexts/FirstColumn";
import SecondColumn from "./FooterTexts/SecondColumn";

const FooterMainText = () => {
    return (
        <div
            className={`middle-text-container ${lobsterFont.className}`}
        >
            <FirstColumn />
            <div />
            <SecondColumn />
        </div>
    );
};

export default FooterMainText;
