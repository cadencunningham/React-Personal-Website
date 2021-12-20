import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES_HOME } from '../../shared/constants/routes';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import SideDrawerNav from './SideDrawerNav';

interface IProps {
    children: JSX.Element;
}

const Layout = (props: IProps) => {
    const { children } = props;
    const history = useHistory();
    const location = useLocation();

    const handleNavChange = (route: string) => {
        history.push(route);
    };

    return (
        <>
            <div className="layout">
                {location.pathname === ROUTES_HOME.path && <Header />}
                <Navigation currentPath={location.pathname} handleNavChange={handleNavChange} />
                {children}
                <Footer />
                <SideDrawerNav currentPath={location.pathname} handleNavChange={handleNavChange} />
            </div>
        </>
    );
};

export default Layout;
