import React from 'react';
import Header from './Header/Header';

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {
    const { children } = props;

    return (
        <div className="layout">
            <Header />
            {children}
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default Layout;
