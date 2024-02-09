import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

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

export interface IFooterTextsProps extends IComponentChildrenProp {
    texttype:
        'small' | 'big' |
        'logo' | 'central';
};

export interface IProfileInfo {
    isAuth: boolean;
    data?: {
        id: number;
        name: string;
        avatar: string;
        email: string;
    }
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
