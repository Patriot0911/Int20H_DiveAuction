import FormSubmitButton from "../ui/FormSubmitButton/FormSubmitButton";
import { FcGoogle } from "react-icons/fc";
import { IAuthUpButtonsProps } from "@/types";

const AuthUpButtons = ({ googleHandle, register }: IAuthUpButtonsProps) => {
    return (
        <div
            className={'auth-button-container'}
        >
            <FormSubmitButton>
                {
                    register ?
                    <>Створити</> :
                    <>Увійти</>
                }
            </FormSubmitButton>
            <FormSubmitButton
                type={'button'}
                onClick={googleHandle}
            >
                <FcGoogle />
            </FormSubmitButton>
        </div>
    );
};

export default AuthUpButtons;
