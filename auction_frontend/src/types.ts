import { ButtonHTMLAttributes, HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

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

export interface ISignUpInputFieldSettings extends IFormFieldsProps {
    name: string;
};

export interface ISignUpButtonsProps {
    googleHandle: () => void;
};
