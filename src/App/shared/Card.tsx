import React from 'react';

interface IProps {
    header?: string;
    headerClassName?: string;
    children: JSX.Element;
    containerClassName?: string;
}

const Card = (props: IProps) => {
    const { header, children, headerClassName, containerClassName } = props;

    return (
        <div className={['card', headerClassName || ''].join(' ')}>
            {header && <div className={['card__header', containerClassName || ''].join(' ')}>{header}</div>}
            {children}
        </div>
    );
};

export default Card;
