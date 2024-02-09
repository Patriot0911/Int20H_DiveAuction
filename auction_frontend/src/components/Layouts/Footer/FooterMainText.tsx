import FirstColumn from "./FooterTexts/FirstColumn";
import SecondColumn from "./FooterTexts/SecondColumn";

const FooterMainText = () => {
    return (
        <div
            className={'middle-text-container'}
        >
            <FirstColumn />
            <div />
            <SecondColumn />
        </div>
    );
};

export default FooterMainText;
