import { TFormSubmitButtonProps } from '@/types';
import './FormSubmitButton.css';

const FormSubmitButton = ({ children, ...props }: TFormSubmitButtonProps) => {
    return (
        <button
            className={'form-submit-button'}
            type={'submit'}
            {...props}
        >
            <span
                className={'text-container'}
            >
                {children}
            </span>
        </button>
    );
};

export default FormSubmitButton;
