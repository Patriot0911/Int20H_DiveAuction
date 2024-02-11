import { ILotSelectCatProps } from "@/types";
import { Ref, forwardRef } from "react";


const LotSelectCat = ({ cats }: ILotSelectCatProps, ref: Ref<HTMLSelectElement>) => {
    return (
        <select
            className={"select-category input-background input-border"}
            defaultValue={-1}
            ref={ref}
        >
            <option
                disabled
                hidden
                value={-1}
            >
                Оберіть
                Категорію
            </option>
            {
                cats.map(
                    (item) => item.name.length > 0 &&
                    <option
                        key={`lot-cat-id-${item.id}`}
                        value={item.id}
                    >
                        {item.name}
                    </option>
                )
            }
        </select>
    );
};

export default forwardRef(LotSelectCat);
