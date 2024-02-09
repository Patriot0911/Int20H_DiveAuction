"use client";
import { FormEvent, useState } from "react";
import authInputFields from "@/scripts/authInputFields";
import FormField from "../ui/FormField/FormField";
import HasAccountInfo from "./HasAccountInfo";
import AuthUpButtons from "./AuthUpButtons";
import { IAuthFormProps } from "@/types";
import './AuthForm.css';

const AuthForm = ({ register }: IAuthFormProps) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const submitHandle = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const googleAuthHandle = () => {

    };
    return (
        <form
            className={'auth-form'}
            onSubmit={submitHandle}
        >
            {
                authInputFields.map(
                    (item, index) =>
                    (register || (!register && item.isloginform)) &&
                    <FormField
                        {...item}
                        key={`formfield-${index}`}
                    />
                )
            }
            <HasAccountInfo
                register={register}
            />
            <AuthUpButtons
                register={register}
                googleHandle={googleAuthHandle}
            />
        </form>
    );
};

export default AuthForm;
