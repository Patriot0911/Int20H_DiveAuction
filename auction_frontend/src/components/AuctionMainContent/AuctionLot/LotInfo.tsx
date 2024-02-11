import { ILotTextInfoProps } from "@/types";

const LotInfo = ({ description, title }: ILotTextInfoProps) => {
    return (
        <div
            className={"column right light-background"}
        >
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    );
};

export default LotInfo;
