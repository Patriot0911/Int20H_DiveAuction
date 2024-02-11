import { Ref, forwardRef } from 'react';
import { IFormFieldsProps } from '@/types';
import './FormField.css';

const FormField = ({ children, ...inputArgs }: IFormFieldsProps, ref: Ref<HTMLInputElement>) => {
    return (
        <div
            className={'form-input-container'}
        >
            {children}
            <input
                ref={ref}
                {...inputArgs}
            />
        </div>
    );
};

export default forwardRef(FormField);
