import React from 'react';

interface IProps {
    children: JSX.Element | string;
}

const PageTitle = (props: IProps) => {
    const { children } = props;

    return <h1 className="heading-fancy layout__page-title">{children}</h1>;
};

export default PageTitle;
