import { IComponentChildrenProp } from "@/types";

const PopUpContainer = ({ children }: IComponentChildrenProp) => {
    return (
        <div
            className={'popUp-container'}
        >
            <div
                className={'popUp'}
            >
                {children}
            </div>
        </div>
    );
};

export default PopUpContainer;
