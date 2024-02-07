import { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from "react";

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
    blurSize: string;
    opacity?: number;
    classname?: string;
    left?: string;
    top?: string;
};
export interface IBackgroundDecalsProps {
    circles?: ICircleProps[];
};

export interface IFormFieldsProps extends HTMLAttributes<HTMLInputElement> {
    iconComponent: ReactNode;
};

export type TFormSubmitButtonProps = HTMLAttributes<HTMLButtonElement> & IComponentChildrenProp;

export interface INavButtonProps {
    path: string;
    component: ReactNode;
};
