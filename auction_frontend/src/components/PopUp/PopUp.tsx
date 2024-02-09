"use client";
import PopUpContainer from './PopUpContainer';
import { IComponentChildrenProp } from '@/types';
import { createPortal } from 'react-dom';
import './PopUp.css';

const PopUp = (props: IComponentChildrenProp) => {
    if (typeof window === 'object')
        return createPortal(
            <PopUpContainer
                {...props}
            />,
            document.getElementById('main-wrapper-id') as HTMLElement
        );
    return null;
};

export default PopUp;
