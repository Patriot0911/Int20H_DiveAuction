import FormSubmitButton from "../ui/FormSubmitButton/FormSubmitButton";
import { FcGoogle } from "react-icons/fc";
import { AuthActionsTypes, IAuthUpButtonsProps } from "@/types";

const AuthUpButtons = ({ googleHandle, formtype }: IAuthUpButtonsProps) => {
    return (
        <div
            className={'auth-button-container'}
        >
            <FormSubmitButton>
                {
                    formtype === AuthActionsTypes.SignIn ?
                    <>Увійти</> :
                    <>Створити</>
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
