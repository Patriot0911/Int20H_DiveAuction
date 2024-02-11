import FooterTexts from "@/components/ui/FooterTexts/FooterTexts";

const SecondColumn = () => {
    return (
        <section
            className={'container-column'}
        >
            <FooterTexts
                texttype={'big'}
            >
                Auction Dive - це найсучасніший аукціонний дім,
                який займається виключно благодійністю та переказує усі кошти на потреби
                Збройних Сил України або ж у волонтерські організації, що займаються відновленням внаслідок вторгнення.
            </FooterTexts>
        </section>
    );
};

export default SecondColumn;
