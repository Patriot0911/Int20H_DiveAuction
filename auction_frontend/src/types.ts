import { ButtonHTMLAttributes, Dispatch, InputHTMLAttributes, ReactNode, SetStateAction } from "react";
import { APIPathes } from "./scripts/api";

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

export type IFormFieldsProps = InputHTMLAttributes<HTMLInputElement> & IComponentChildrenProp;

export type TFormSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IComponentChildrenProp;

export interface INavButtonProps {
    path: string;
    component: ReactNode;
};

type TFormType = AuthActionsTypes.SignIn | AuthActionsTypes.SignUp;

export interface IAuthUpInputFieldSettings extends IFormFieldsProps {
    name: string;
    formtype: TFormType;
    iconComponent: ReactNode;
};

export interface IAuthUpButtonsProps extends IAuthFormProps{
    // googleHandle: () => void;
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

export interface ILotData {
    auction: ILotItemProps;
    photos: string[];
};

export interface ILotItemProps {
    id: number;
    title: string;
    ownerId: number;
    description: string;
    categoryId: number;
    photos?: string[];
    startDate: string;
    status: string;
    startPrice: number;
    endPrice: number;
    endDate: string;
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

export interface ILotItemDateProps {
    createdAt: string;
};

export interface ILotDescriptionProps {
    description: string;
};

export interface ILotTitleProps {
    title: string;
};

export interface ICatData {
    id: number;
    name: string;
};

export interface ILotSelectCatProps {
    cats: ICatData[];
};

export interface IImageData {
    file: File;
    imgURL: string;
};

export interface IImageUploaderProps {
    images: IImageData[];
    setImages: Dispatch<SetStateAction<IImageData[]>>;
};

export interface ILotDataInputProps {
    label: string;
};

export interface ILotListProps {
    lots: ILotData[];
};

export interface IAuctionLotProps {
    lot?: ILotItemProps;
    photos: string[];
};

export interface ILotInfoProps {
    lot: ILotItemProps;
    photos: string[];
};

export interface ILotTextInfoProps {
    description: string;
    title: string;
};

export interface ILotItemImageProps {
    photos?: string[];
    price: number;
    id: number;
    isFav?: boolean;
};

export interface IPhotoWrapperProps {
    img?: string;
};

export interface IImagesCollageProps {
    photos: string[];
};

export interface IBidInfo {
    id: number;
    photo: string;
    price: number;
    userId: number;
    name: string;
};

export interface IAuctionHistoryProps {
    bids: IBidInfo[];
};


export interface IUserChatInfo {
    email: string;
    id: number;
    name: string;
    photo: string;
};

export interface IAuctionChatProps {
    users: IUserChatInfo[];
};

export interface IIncomeBid {
    activeUsers: IUserChatInfo[];
    bid: IBidInfo;
};

export interface IHistoryRecordProps extends IBidInfo {
    isTheBiggest: boolean;
};

export interface ILotPriceProps {
    price: number;
};
