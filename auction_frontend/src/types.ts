import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export enum AuthPathes {
    SignIn = '/signin',
    SignUp = '/signup'
};
export enum AuthActionsTypes {
    SignIn = 1,
    SignUp = 0
};

export type TRooutLayoutProps = Readonly<IComponentChildrenProp>;

export interface IComponentChildrenProp {
    children?: React.ReactNode;
};

export interface INavBarButtonProps {
    path: string;
    name?: string;
    icon: ReactNode;
};

export interface ICircleProps {
    color: string;
    size: string;
    blursize: string;
    opacity?: number;
    classname?: string;
    left?: string;
    top?: string;
};
export interface IBackgroundDecalsProps {
    circles?: ICircleProps[];
};

export interface IFormFieldsProps extends InputHTMLAttributes<HTMLInputElement> {
    iconComponent: ReactNode;
};

export type TFormSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IComponentChildrenProp;

export interface INavButtonProps {
    path: string;
    component: ReactNode;
};

type TFormType = AuthActionsTypes.SignIn | AuthActionsTypes.SignUp;

export interface IAuthUpInputFieldSettings extends IFormFieldsProps {
    name: string;
    formtype: TFormType;
};

export interface IAuthUpButtonsProps extends IAuthFormProps{
    googleHandle: () => void;
};

export interface IAuthFormProps {
    formtype: TFormType;
};

export type THasAccountInfoProps = IAuthFormProps;

export interface IFooterTextsProps extends IComponentChildrenProp {
    texttype:
        'small' | 'big' |
        'logo' | 'central';
};

export interface IProfileInfo {
    isAuth: boolean;
    data?: IProfileData;
};
export interface IProfileData {
    id: number;
    name: string;
    photo: string;
    email: string;
    verified: boolean;
};

export interface INavBarListItem extends INavButtonProps {
    logged?: boolean;
};

export interface ILotItemProps {
    title: string;
    description: string;
    img: string;
    createdAt: Date | string;
    price: number;
    isFav?: boolean;
};

export interface ICreateProfileSetup {
    name?: string;
    email: string;
    password: string;
};

interface IAuthActionCallBackResponse {
    status: number;
    message: string | IProfileData;
};

type TAuthActionCallBack = (userInfo: ICreateProfileSetup) => Promise<IAuthActionCallBackResponse>;

export type TAuthActions = {
    [key in AuthActionsTypes]: TAuthActionCallBack;
}

export interface IAuthErrorField {
    errorMessage?: string;
};

export interface IAuthPopUpContainerProps {
    errorMsg: string;
    closeHandle: () => void;
};
