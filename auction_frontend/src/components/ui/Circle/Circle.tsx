import { ICircleProps } from '@/types';
import './Circle.css';

const Circle = ({ size, color, classname, ...props }: ICircleProps) => {
    return <div
        style={{
            filter: `blur(${props.blursize})`,
            width: size,
            height: size,
            position: 'absolute',
            backgroundColor: color,
            borderRadius: '50%',
            opacity: props.opacity ?? 1.0,
            left: props.left ?? '500px',
            top: props.top ?? '500px'
        }}
        className={'bg-decal-circle'}
        {...props}
    />;
};

export default Circle;
