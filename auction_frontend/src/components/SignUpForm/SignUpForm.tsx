"use client";
import { FormEvent, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import FormField from "../ui/FormField/FormField";
import FormSubmitButton from "../ui/FormSubmitButton/FormSubmitButton";
import Link from "next/link";
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

    const inputFields = [
        {
            name:           'userName',
            placeholder:    'Ім\'я Користувача',
            required: true,
            iconComponent:
            <FaUserCircle
                {...iconProps}
            />
        },
        {
            name:           'email',
            placeholder:    'Пошта',
            type:           'email',
            required: true,
            iconComponent:
            <IoMailUnread
                {...iconProps}
            />
        },
        {
            name:           'password',
            placeholder:    'Пароль',
            type:           'password',
            required: true,
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
            <div
                className={'has-account-info'}
            >
                Вже маєте акаунт?
                <br />
                <Link
                    href={'/login'}
                >
                    Увійти
                </Link>
            </div>
            <FormSubmitButton>
                Створити
            </FormSubmitButton>
        </form>
    );
};

export default SignUpForm;
