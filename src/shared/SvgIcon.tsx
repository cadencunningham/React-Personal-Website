import React from 'react';

interface IProps {
    path: string;
    className?: string;
    width?: number;
    height?: number;
    viewBox?: string;
}

const SvgIcon = (props: IProps) => {
    const { className, height, width, path, viewBox } = props;

    return (
        <svg className={className || ''} width={width || '24'} height={height || '24'} viewBox={viewBox || '0 0 24 24'}>
            <path d={path} />
        </svg>
    );
};

export default SvgIcon;
