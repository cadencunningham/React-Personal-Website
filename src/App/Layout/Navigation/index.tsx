import React, { useEffect, useState } from 'react';
import Button from '../../shared/Button';

let lastCurrentHeight = 0;
const NAV_COLLAPSE_CLASS = 'nav__collaspe';

const Navigation = () => {
    const [navExpandClass, setNavExpandClass] = useState('');

    useEffect(() => {
        document.addEventListener('scroll', () => {
            //Start Nav Name

            const windowHeight = window.innerHeight / 2;
            const currentHeight = window.pageYOffset;
            const heightDifference = windowHeight - currentHeight;
            const newFontSize = (heightDifference / windowHeight) * 8;
            const newNameHeight = (heightDifference / windowHeight) * 50;

            let style = `font-size:${newFontSize >= 4 ? newFontSize : 4}rem;`;
            style =
                style + (newNameHeight >= 4.315 ? `top:${newNameHeight}vh` : `transform:translate(-50%,0%);top:unset;`);

            document.getElementsByClassName('nav-name')[0].setAttribute('style', style);

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
        <nav className={['nav', navExpandClass].join('')}>
            <div className="gen__width--100 gen__justify-content--sb gen__display--flex gen_align-items--center">
                <div className="nav__button-container">
                    <Button text={'Home'} selected />
                    <Button text={'Jira Board'} />
                </div>

                <label className="nav-name">Caden Cunningham</label>

                <div className="nav__button-container">
                    <Button text={'Resume'} />
                    <Button text={'Contact Me'} />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
