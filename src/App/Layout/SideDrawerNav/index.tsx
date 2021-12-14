import React, { useEffect, useState } from 'react';
import { GEN_CLASS_NO_SCROLL } from '../../../shared/constants/css';
import Backdrop from '../../shared/Backdrop';
import SideDrawer from '../../shared/SideDrawer';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import SideDrawerNavElement from './SideDrawerNavElement';
import * as ROUTES from '../../../shared/constants/routes';

interface IProps {
    currentPath: string;
    handleNavChange: (route: string) => void;
}

const SideDrawerNav = (props: IProps) => {
    const { handleNavChange } = props;

    const [sideDrawerOpened, setSideDrawerOpened] = useState(false);

    const onNavElementClicked = (path: string) => {
        toggleSideDrawer();
        handleNavChange(path);
    };

    const toggleSideDrawer = () => {
        setSideDrawerOpened((prevState) => !prevState);
    };

    useEffect(() => {
        if (sideDrawerOpened) {
            document.body.classList.add(GEN_CLASS_NO_SCROLL);
        } else {
            document.body.classList.remove(GEN_CLASS_NO_SCROLL);
        }
    }, [sideDrawerOpened]);

    return (
        <>
            <HamburgerMenuIcon onClick={toggleSideDrawer} />
            {sideDrawerOpened && <Backdrop onClick={toggleSideDrawer} />}
            <SideDrawer
                opened={sideDrawerOpened}
                className={['side_drawer_nav', sideDrawerOpened ? '' : 'side_drawer_nav--closed_drawer'].join(' ')}
            >
                <ul className="side_drawer_nav--nav_list">
                    <SideDrawerNavElement>
                        <a
                            className="side_drawer_nav--nav_text"
                            onClick={() => onNavElementClicked(ROUTES.ROUTES_HOME.path)}
                        >
                            {ROUTES.ROUTES_HOME.text}
                        </a>
                    </SideDrawerNavElement>
                    <SideDrawerNavElement>
                        <a
                            className="side_drawer_nav--nav_text"
                            onClick={() => onNavElementClicked(ROUTES.ROUTES_EXTRAS.path)}
                        >
                            {ROUTES.ROUTES_EXTRAS.text}
                        </a>
                    </SideDrawerNavElement>
                    <SideDrawerNavElement>
                        <a
                            className="side_drawer_nav--nav_text"
                            onClick={() => onNavElementClicked(ROUTES.ROUTES_RESUME.path)}
                        >
                            {ROUTES.ROUTES_RESUME.text}
                        </a>
                    </SideDrawerNavElement>
                    <SideDrawerNavElement>
                        <a
                            className="side_drawer_nav--nav_text"
                            onClick={() => onNavElementClicked(ROUTES.ROUTES_CONTACT_ME.path)}
                        >
                            {ROUTES.ROUTES_CONTACT_ME.text}
                        </a>
                    </SideDrawerNavElement>
                </ul>
            </SideDrawer>
        </>
    );
};

export default SideDrawerNav;
