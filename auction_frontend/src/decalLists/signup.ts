import { IBackgroundDecalsProps, ICircleProps } from "@/types";

const circles: ICircleProps[] = [
    {
        color: '#57434F',
        size: '513px',
        blursize: '44.8px',
        opacity: 0.35,
        top: '50px'
    },
    {
        color: '#4C082D',
        size: '513px',
        blursize: '44.8px',
        opacity: 0.4,
        left: '1590px',
        top: '500px'
    },
    {
        color: '#4C238e',
        size: '513px',
        blursize: '44.8px',
        opacity: 0.4,
        left: '200px',
        top: '620px'
    }
];

const signupList: IBackgroundDecalsProps = {
    circles
};

export default signupList;
