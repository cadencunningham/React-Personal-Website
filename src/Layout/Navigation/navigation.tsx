import React from 'react';
import Button from '../../shared/Button';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation__button-container">
                <Button text={'Home'} />
                <Button text={'Resume'} />
            </div>

            <div className="navigation__button-container">
                <Button text={'Socials'} />
                <Button text={'Contact Me'} />
            </div>
        </nav>
    );
};

export default Navigation;
