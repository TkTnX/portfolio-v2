import * as React from 'react';

interface ITitleProps {
    title: string
    className?: string
}

const Title: React.FunctionComponent<ITitleProps> = ({title, className}) => {
    return <div className={`hint ${className}`}>{title}</div>;
};

export default Title;
