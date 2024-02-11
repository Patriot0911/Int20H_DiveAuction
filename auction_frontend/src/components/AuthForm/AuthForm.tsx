"use client";
import { authUser } from "@/redux/features/user-info-slice";
import authInputFields from "@/scripts/authInputFields";
import AuthPopUpContainer from "./AuthPopUpContainer";
import { FormEvent, useRef, useState } from "react";
import FormField from "../ui/FormField/FormField";
import { useReduxSelector } from "@/redux/store";
import HasAccountInfo from "./HasAccountInfo";
import AuthUpButtons from "./AuthUpButtons";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import authActions from "@/scripts/auth";
import PopUp from "../PopUp/PopUp";
import {
    AuthActionsTypes,
    IAuthFormProps,
    ICreateProfileSetup,
    IProfileData
} from "@/types";
import './AuthForm.css';

const AuthForm = ({ formtype }: IAuthFormProps) => {
    const [errorMsg, setErrorMsg] = useState('');
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const isAuth = useReduxSelector(
        selctor => selctor.UserInfoReducer.value.isAuth
    );
    if(isAuth)
        return redirect('/');
    const refsList = {
        userName:   userNameRef,
        email:      emailRef,
        password:   passwordRef
    };
    const isValidInput = (itemType: AuthActionsTypes) => (
        formtype === AuthActionsTypes.SignUp ||
        (formtype === AuthActionsTypes.SignIn && itemType === AuthActionsTypes.SignIn)
    );
    const submitHandle = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userInfo: ICreateProfileSetup = {
            name: userNameRef?.current?.value,
            email: emailRef.current!.value,
            password: passwordRef.current!.value
        };
        const actionCallBack = authActions[formtype];
        actionCallBack(userInfo)
        .then(
            (response) => {
                if(
                    formtype === AuthActionsTypes.SignIn
                ) {
                    if(response.status === 200) {
                        dispatch(
                            authUser(response.message as IProfileData)
                        );
                        return;
                    }
                }
                setErrorMsg(response.message as string);
            }
        );
    };
    return (
        <form
            className={'auth-form'}
            onSubmit={submitHandle}
        >
            {
                authInputFields.map(
                    (item, index) =>
                    isValidInput(item.formtype) &&
                    <FormField
                        {...item}
                        key={`formfield-${index}`}
                        ref={refsList[item.name as keyof typeof refsList]}
                    >
                        {item.iconComponent}
                    </FormField>
                )
            }
            <HasAccountInfo
                formtype={formtype}
            />
            {
                errorMsg.length > 0 &&
                <PopUp>
                    <AuthPopUpContainer
                        closeHandle={() => setErrorMsg('')}
                        errorMsg={errorMsg}
                    />
                </PopUp>
            }
            <AuthUpButtons
                formtype={formtype}
            />
        </form>
    );
};

export default AuthForm;
