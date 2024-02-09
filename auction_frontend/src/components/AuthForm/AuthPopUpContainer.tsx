import { IAuthPopUpContainerProps } from "@/types";

const AuthPopUpContainer = ({ errorMsg, closeHandle }: IAuthPopUpContainerProps) => {
    return (
        <div
            className={'auth-popup'}
        >
            <section>
                Виникла помилка!
                <br />
                Повторіть спробу, будь ласка, пізніше!
                <br />
                (Помилка: {errorMsg})
            </section>
            <button
                onClick={closeHandle}
            >
                Закрити
            </button>
        </div>
    );
};

export default AuthPopUpContainer;
