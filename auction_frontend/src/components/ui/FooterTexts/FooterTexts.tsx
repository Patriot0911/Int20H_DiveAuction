import { IFooterTextsProps } from '@/types';
import './FooterTexts.css';

const FooterTexts = ({ texttype, children }: IFooterTextsProps) => {
    return (
        <span
            className={`footer-${texttype}-text`}
        >
            {children}
        </span>
    );
};

export default FooterTexts;
