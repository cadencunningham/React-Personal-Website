import React, { useEffect, useState } from 'react';
import { ROUTES_CONTACT_ME, ROUTES_EXTRAS, ROUTES_HOME, ROUTES_RESUME } from '../../../shared/constants/routes';
import Button from '../../shared/Button';

const NAV_COLLAPSE_CLASS = 'nav__collapse';
const NAV_NAME_CLASS = 'nav-name';

interface IProps {
    currentPath: string;
    handleNavChange: (route: string) => void;
}

const Navigation = (props: IProps) => {
    const { currentPath, handleNavChange } = props;
    const [navExpandObject, setNavExpandObject] = useState({
        class: '',
        lastCurrentHeight: 0,
    });

    const headerTextHelper = (onHomePage: boolean) => {
        setNavExpandObject((prev) => {
            //Start Nav Name
            const windowHeight = window.innerHeight / 2;
            const currentHeight = window.pageYOffset;
            const heightDifference = windowHeight - currentHeight;
            const newFontSize = (heightDifference / windowHeight) * 8;
            const newNameHeight = (heightDifference / windowHeight) * 50;

            //look to improve logic in the future
            const isMobile = window.innerWidth < 800;

            let style = `font-size:${newFontSize >= 4 && onHomePage ? newFontSize : 4}rem;`;
            style =
                style +
                (newNameHeight >= 4.315 && onHomePage
                    ? `top:calc(${newNameHeight}vh - ${isMobile ? 60 : 0}px)`
                    : `top:50%;`);

            document.getElementsByClassName(NAV_NAME_CLASS)[0].setAttribute('style', style);
            //End Nav Name

            if (currentHeight !== prev.lastCurrentHeight) {
                if (heightDifference <= 0 || !onHomePage) {
                    if (currentHeight < prev.lastCurrentHeight) {
                        return {
                            class: '',
                            lastCurrentHeight: currentHeight,
                        };
                    } else {
                        return {
                            class: NAV_COLLAPSE_CLASS,
                            lastCurrentHeight: currentHeight,
                        };
                    }
                }

                return {
                    class: '',
                    lastCurrentHeight: currentHeight,
                };
            }

            return prev;
        });
    };

    useEffect(() => {
        const onHomePage = currentPath === ROUTES_HOME.path;

        document.addEventListener('scroll', () => {
            headerTextHelper(onHomePage);
        });

        headerTextHelper(onHomePage);
    }, [currentPath]);

    return (
        <nav className={['nav', navExpandObject.class || ''].join(' ')}>
            <div className="nav__container">
                <div className="nav__button-container">
                    <Button
                        text={ROUTES_HOME.text}
                        selected={currentPath === ROUTES_HOME.path}
                        onClickHandler={() => handleNavChange(ROUTES_HOME.path)}
                    />
                    <Button
                        text={ROUTES_EXTRAS.text}
                        selected={currentPath === ROUTES_EXTRAS.path}
                        onClickHandler={() => handleNavChange(ROUTES_EXTRAS.path)}
                    />
                </div>

                <label className={[NAV_NAME_CLASS, 'heading-fancy'].join(' ')}>Caden Cunningham</label>

                <div className="nav__button-container">
                    <Button
                        text={ROUTES_RESUME.text}
                        selected={currentPath === ROUTES_RESUME.path}
                        onClickHandler={() => handleNavChange(ROUTES_RESUME.path)}
                    />
                    <Button
                        text={ROUTES_CONTACT_ME.text}
                        selected={currentPath === ROUTES_CONTACT_ME.path}
                        onClickHandler={() => handleNavChange(ROUTES_CONTACT_ME.path)}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
