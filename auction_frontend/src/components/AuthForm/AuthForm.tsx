"use client";
import { FormEvent, useRef, useState } from "react";
import authInputFields from "@/scripts/authInputFields";
import FormField from "../ui/FormField/FormField";
import HasAccountInfo from "./HasAccountInfo";
import AuthUpButtons from "./AuthUpButtons";
import { IAuthFormProps } from "@/types";
import './AuthForm.css';

const AuthForm = ({ register }: IAuthFormProps) => {
    const [tet, setTet] = useState<string>('');
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = register ? useRef<HTMLInputElement>(null) : null;
    const refsList = {
        userName:   userNameRef,
        email:      emailRef,
        password:   passwordRef
    };
    const submitHandle = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userInfo = {
            name: userNameRef.current?.value,
            email: emailRef?.current?.value,
            password: passwordRef.current?.value
        };
        fetch(
            'http://localhost:8000/api/auth/logout',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `sessionId=${Buffer.from('16ae268b-2ade-439e-8a73-681bdc693449.StpSUwyh9oRIHqbaxhstFHJXILNEIelLwCa39xU6U7A').toString('base64')}`
                },
                body: JSON.stringify({
                    ...userInfo
                }),
                method: 'POST'
            }
        )
        .then(
            (item) => item.json()
            .then(r => console.log(Buffer.from('16ae268b-2ade-439e-8a73-681bdc693449.StpSUwyh9oRIHqbaxhstFHJXILNEIelLwCa39xU6U7A').toString('base64')))
        );
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
                        ref={refsList[item.name as keyof typeof refsList]}
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
