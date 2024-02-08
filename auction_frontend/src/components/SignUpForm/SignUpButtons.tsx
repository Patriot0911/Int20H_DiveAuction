import { FcGoogle } from "react-icons/fc";
import FormSubmitButton from "../ui/FormSubmitButton/FormSubmitButton";
import { ISignUpButtonsProps } from "@/types";

const SignUpButtons = ({ googleHandle }: ISignUpButtonsProps) => {
    return (
        <div
            className={'signup-button-container'}
        >
            <FormSubmitButton>
                Створити
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

export default SignUpButtons;
