import React from 'react';
import Button from '../../shared/Button';
import NavName from './NavName';

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="gen__width--100 gen__justify-content--sb gen__display--flex gen_align-items--center">
                <div className="nav__button-container">
                    <Button text={'Home'} selected />
                    <Button text={'Resume'} />
                </div>

                <NavName />

                <div className="nav__button-container">
                    <Button text={'Socials'} />
                    <Button text={'Contact Me'} />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
