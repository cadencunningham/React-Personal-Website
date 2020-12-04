import React from 'react';
import Header from './Header/header';

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {
    const { children } = props;
    return (
        <div className="content-container">
            <Header />
            {children}
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default Layout;
