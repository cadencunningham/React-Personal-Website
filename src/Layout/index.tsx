import React from 'react';

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {
    const { children } = props;
    return (
        <div className="content-container">
            <div className="header">HEADER</div>
            {children}
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default Layout;
