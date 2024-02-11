import { lobsterFont } from "@/scripts/fonts";

const NoLots = () => {
    return (
        <div
            className={'no-lots-container'}
        >
            <h1
                className={`no-lot-info ${lobsterFont.className}`}
            >
                Не вдалося знайти лоти
            </h1>
            <section>
                Схоже щось пішло не так з підключенням до списку лотів.
                <br/>Спробуйте пошукати нові лоти пізніше!
            </section>
        </div>
    );
};

export default NoLots;
