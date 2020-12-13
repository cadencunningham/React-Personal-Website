import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

interface IProps {
    children: JSX.Element;
}

const Layout = (props: IProps) => {
    const { children } = props;

    return (
        <div className="layout">
            <Navigation />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
