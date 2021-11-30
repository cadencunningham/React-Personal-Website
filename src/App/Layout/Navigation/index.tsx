import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { ROUTES_CONTACT_ME, ROUTES_EXTRAS, ROUTES_HOME, ROUTES_RESUME } from '../../../shared/constants/routes';
import Button from '../../shared/Button';

let lastCurrentHeight = 0;
const NAV_COLLAPSE_CLASS = 'nav__collapse';
const NAV_NAME_CLASS = 'nav-name';

const Navigation = () => {
    let history = useHistory();
    const location = useLocation();
    const [navExpandClass, setNavExpandClass] = useState('');

    function handleNavClick(route:string) {
        history.push(route);
      }

    useEffect(() => {
        document.addEventListener('scroll', () => {
            //Start Nav Name
            const windowHeight = window.innerHeight / 2;
            const currentHeight = window.pageYOffset;
            const heightDifference = windowHeight - currentHeight;
            const newFontSize = (heightDifference / windowHeight) * 8;
            const newNameHeight = (heightDifference / windowHeight) * 50;

            let style = `font-size:${newFontSize >= 4 ? newFontSize : 4}rem;`;
            style = style + (newNameHeight >= 4.315 ? `top:${newNameHeight}vh` : `transform:translateX(-50%);top:0;`);

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
        });
    }, []);

    return (
        <nav className={['nav', navExpandClass].join(' ')}>
            <div className="nav__container">
                <div className="nav__button-container">
                    <Button 
                        text={ROUTES_HOME.text} 
                        selected={location.pathname===ROUTES_HOME.path} 
                        onClickHandler={()=>handleNavClick(ROUTES_HOME.path)}
                    />
                    <Button 
                        text={ROUTES_EXTRAS.text}
                        selected={location.pathname===ROUTES_EXTRAS.path}  
                        onClickHandler={()=>handleNavClick(ROUTES_EXTRAS.path)}
                    />
                </div>

                <label className={NAV_NAME_CLASS}>Caden Cunningham</label>

                <div className="nav__button-container">
                    <Button 
                        text={ROUTES_RESUME.text} 
                        selected={location.pathname===ROUTES_RESUME.path}  
                        onClickHandler={()=>handleNavClick(ROUTES_RESUME.path)}
                    />
                    <Button
                        text={ROUTES_CONTACT_ME.text} 
                        selected={location.pathname===ROUTES_CONTACT_ME.path}  
                        onClickHandler={()=>handleNavClick(ROUTES_CONTACT_ME.path)}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
