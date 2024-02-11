import FormSubmitButton from "../ui/FormSubmitButton/FormSubmitButton";
import { FcGoogle } from "react-icons/fc";
import { AuthActionsTypes, IAuthUpButtonsProps } from "@/types";
import { API_URL, APIPathes } from "@/scripts/api";
import { useRouter } from "next/navigation";

const AuthUpButtons = ({ formtype }: IAuthUpButtonsProps) => {
    const router = useRouter();
    const googleHandle = () => {
        router.replace(API_URL + APIPathes['googleAuth'])
    };
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
