import React from 'react';

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {
    const { children } = props;
    return (
        <div>
            <div className="header">HEADER</div>
            {children}
            <div>FOOTER</div>
        </div>
    );
};

export default Layout;
