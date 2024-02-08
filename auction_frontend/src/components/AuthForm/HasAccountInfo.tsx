import formPhrases from "@/scripts/formPhrases";
import { THasAccountInfoProps } from "@/types";
import Link from "next/link";

const HasAccountInfo = ({ register }: THasAccountInfoProps) => {
    const formInfo = formPhrases[register ? 0 : 1];
    return (
        <div
            className={'has-account-info'}
        >
            {formInfo.questionLine}
            <br />
            <Link
                href={formInfo.path}
            >
                {formInfo.linkText}
            </Link>
        </div>
    );
};

export default HasAccountInfo;
