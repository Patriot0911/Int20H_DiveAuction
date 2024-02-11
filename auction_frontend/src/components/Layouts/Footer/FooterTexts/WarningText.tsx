import FooterTexts from "@/components/ui/FooterTexts/FooterTexts";

const WarningText = () => {
    return (
        <div
            className={'right-text'}
        >
            <FooterTexts
                texttype={'small'}
            >
                *Зверніть увагу, що це не справжній сайт для аукціону, а лише умовна версія,
                яка не несе ніяких обов’язків перед людьми, які будуть ним користуватися. Оплата та покупка лотів не є можливою на тестовому проєкті!
            </FooterTexts>
        </div>
    );
};

export default WarningText;
