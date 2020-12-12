import React from 'react';
import Button from '../../shared/Button';
import NavName from './NavName';

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="gen__width--100 gen__justify-content--sb gen__display--flex">
                <div className="nav__button-container">
                    <Button text={'Home'} selected />
                    <Button text={'Resume'} />
                </div>

                <div className="nav__button-container">
                    <Button text={'Socials'} />
                    <Button text={'Contact Me'} />
                </div>
            </div>

            <NavName />
        </nav>
    );
};

export default Navigation;
