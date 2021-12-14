import React from 'react';

interface IProps {
    children: JSX.Element;
    className?: string;
    opened?: boolean;
    width?: number;
    widthUnit?: string;
    height?: number;
    heightUnit?: string;
}

const SideDrawer = (props: IProps) => {
    const { children, className, opened, width, widthUnit, height, heightUnit } = props;

    return (
        <div
            className={['side_drawer', className || ''].join(' ')}
            style={{
                width: (opened ? width || 50 : 0) + (widthUnit || '%'),
                minHeight: (height || 100) + (heightUnit || '%'),
            }}
        >
            {children}
        </div>
    );
};

export default SideDrawer;
