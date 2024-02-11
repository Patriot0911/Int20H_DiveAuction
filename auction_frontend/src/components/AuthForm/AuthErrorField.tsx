import { IAuthErrorField } from "@/types";

const AuthErrorField = ({ errorMessage }: IAuthErrorField) => {
    return (
        <span
            className={'error-field'}
        >
            {errorMessage ? `[Помилка!] ${errorMessage}`: ''}
        </span>
    );
};

export default AuthErrorField;
