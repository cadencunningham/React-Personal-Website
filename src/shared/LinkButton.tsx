import React from 'react';

interface IProps {
    href: string;
    children?: JSX.Element | string;
    className?: string;
}

const LinkButton = (props: IProps) => {
    const { href, children, className } = props;
    return (
        <a href={href} target="_blank" className={className}>
            {children}
        </a>
    );
};

export default LinkButton;
