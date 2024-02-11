import { Ref, forwardRef } from 'react';
import { IFormFieldsProps } from '@/types';
import './FormField.css';

const FormField = (props: IFormFieldsProps, ref: Ref<HTMLInputElement>) => {
    const {
        iconComponent,
        ...inputArgs
    } = props;
    return (
        <div
            className={'form-input-container'}
        >
            {iconComponent}
            <input
                ref={ref}
                {...inputArgs}
            />
        </div>
    );
};

export default forwardRef(FormField);
