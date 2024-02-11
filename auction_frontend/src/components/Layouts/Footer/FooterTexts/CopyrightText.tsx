import FooterTexts from "@/components/ui/FooterTexts/FooterTexts";

const CopyrightText = () => {
    return (
        <div
            className={'central-text'}
        >
            <FooterTexts
                texttype={'central'}
            >
                <p>Copyright © 2024 Auction Dive.</p>
                <p>All Rights Reserved.</p>
            </FooterTexts>
        </div>
    );
};

export default CopyrightText;
