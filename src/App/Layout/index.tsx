import React, {useState} from 'react';
import Footer from './Footer';
import HamburgerMenuIcon from './Navigation/HamburgerMenuIcon';
import Header from './Header';
import Navigation from './Navigation';
import Backdrop from '../shared/Backdrop';


interface IProps {
    children: JSX.Element;
}

const Layout = (props: IProps) => {
    const { children } = props;

    const [sideDrawerOpened, setSideDrawerOpened] = useState(false)

    const toggleSideDrawer = () => {
        setSideDrawerOpened(prevState=>!prevState)
    }

    return (
        <>
        <div className="layout">
            <Header />
            <Navigation />
            {children}
            <Footer />
            <HamburgerMenuIcon onClick={toggleSideDrawer}/>
            {sideDrawerOpened && <Backdrop onClick={toggleSideDrawer}/>}
        </div>
        </>
    );
};

export default Layout;
