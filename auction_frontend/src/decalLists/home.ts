import { IBackgroundDecalsProps, ICircleProps } from "@/types";

const circles: ICircleProps[] = [
    {
        color: '#5A0D29',
        size: '513px',
        blurSize: '44.8px',
        opacity: 0.5,
        left: '-85px',
        top: '900px'
    },
    {
        color: '#432554',
        size: '372px',
        blurSize: '48.8px',
        opacity: 0.64,
        left: '1000px',
        top: '200px'
    }
];

const homeList: IBackgroundDecalsProps = {
    circles
};

export default homeList;