"use client";
import { FormEvent, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { ISignUpInputFieldSettings } from "@/types";
import FormField from "../ui/FormField/FormField";
import HasAccountInfo from "./HasAccountInfo";
import SignUpButtons from "./SignUpButtons";
import './SignUpForm.css';

const iconProps = {
    size: 55,
    color: 'rgb(255, 220, 255)'
};

const SignUpForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const submitHandle = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(1);
    };
    const googleAuthHandle = () => {

    };

    const inputFields: ISignUpInputFieldSettings[] = [
        {
            name:           'userName',
            placeholder:    'Ім\'я Користувача',
            required:       true,
            iconComponent:
            <FaUserCircle
                {...iconProps}
            />
        },
        {
            name:           'email',
            placeholder:    'Пошта',
            type:           'email',
            required:       true,
            iconComponent:
            <IoMailUnread
                {...iconProps}
            />
        },
        {
            name:           'password',
            placeholder:    'Пароль',
            type:           'password',
            required:       true,
            iconComponent:
            <RiLockPasswordFill
                {...iconProps}
            />
        }
    ];
    return (
        <form
            className={'signup-form'}
            onSubmit={submitHandle}
        >
            {
                inputFields.map(
                    (item, index) =>
                    <FormField
                        {...item}
                        key={`formfield-${index}`}
                    />
                )
            }
            <HasAccountInfo />
            <SignUpButtons
                googleHandle={googleAuthHandle}
            />
        </form>
    );
};

export default SignUpForm;
