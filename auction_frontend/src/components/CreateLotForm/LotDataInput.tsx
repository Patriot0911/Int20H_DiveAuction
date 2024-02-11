import { ILotDataInputProps } from "@/types";
import { Ref, forwardRef } from "react";


const LotDataInput = ({ label }: ILotDataInputProps, ref: Ref<HTMLInputElement>) => {
    return (
        <div
            className={'lot-data-selection'}
        >
            <label>{label}:</label>
            <input
                type={'datetime-local'}
                ref={ref}
            />
        </div>
    );
};

export default forwardRef(LotDataInput);
