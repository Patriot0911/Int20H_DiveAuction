import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export type TRooutLayoutProps = Readonly<IComponentChildrenProp>;

export interface IComponentChildrenProp {
    children: React.ReactNode;
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

export interface IAuthUpInputFieldSettings extends IFormFieldsProps {
    name: string;
    isloginform?: 1 | 0;
};

export interface IAuthUpButtonsProps extends IAuthFormProps{
    googleHandle: () => void;
};

export interface IAuthFormProps {
    register?: boolean;
};

export type THasAccountInfoProps = IAuthFormProps;
