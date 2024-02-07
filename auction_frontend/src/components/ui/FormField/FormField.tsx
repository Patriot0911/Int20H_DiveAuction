import './FormField.css';
import { IFormFieldsProps } from '@/types';

const FormField = (props: IFormFieldsProps) => {
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
                {...inputArgs}
            />
        </div>
    );
};

export default FormField;
