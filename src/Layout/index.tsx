import React, { useEffect } from 'react';
import Header from './Header/Header';

interface IProps {
    children: any;
}

const Layout = (props: IProps) => {
    const { children } = props;

    useEffect(() => {
        console.log(
            document.addEventListener('scroll', () => {
                console.log('SCROLL');
            })
        );
    }, []);

    return (
        <div className="content">
            <Header />
            {children}
            <div className="footer">FOOTER</div>
        </div>
    );
};

export default Layout;
