import React, { useEffect, useState } from 'react';
import { ROUTES_CONTACT_ME, ROUTES_EXTRAS, ROUTES_HOME, ROUTES_RESUME } from '../../../shared/constants/routes';
import Button from '../../shared/Button';

let lastCurrentHeight = 0;
const NAV_COLLAPSE_CLASS = 'nav__collapse';
const NAV_NAME_CLASS = 'nav-name';

interface IProps {
    currentPath: string;
    handleNavChange: (route: string) => void;
}

const Navigation = (props: IProps) => {
    const { currentPath, handleNavChange } = props;
    const [navExpandClass, setNavExpandClass] = useState('');

    const headerTextHelper = (onHomePage: boolean) => {
        //Start Nav Name
        const windowHeight = window.innerHeight / 2;
        const currentHeight = window.pageYOffset;
        const heightDifference = windowHeight - currentHeight;
        const newFontSize = (heightDifference / windowHeight) * 8;
        const newNameHeight = (heightDifference / windowHeight) * 50;

        let style = `font-size:${newFontSize >= 4 && onHomePage ? newFontSize : 4}rem;`;
        style =
            style +
            (newNameHeight >= 4.315 && onHomePage ? `top:${newNameHeight}vh` : `transform:translateX(-50%);top:0;`);

        document.getElementsByClassName(NAV_NAME_CLASS)[0].setAttribute('style', style);
        //End Nav Name

        if (heightDifference <= 0) {
            if (currentHeight < lastCurrentHeight) {
                setNavExpandClass('');
            } else {
                setNavExpandClass(NAV_COLLAPSE_CLASS);
            }
        } else {
            setNavExpandClass('');
        }

        lastCurrentHeight = currentHeight;
    };

    useEffect(() => {
        const onHomePage = currentPath === ROUTES_HOME.path;

        document.addEventListener('scroll', () => {
            headerTextHelper(onHomePage);
        });

        headerTextHelper(onHomePage);
    }, [currentPath]);

    return (
        <nav className={['nav', navExpandClass || ''].join(' ')}>
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
