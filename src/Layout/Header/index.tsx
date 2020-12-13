import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
    return (
        <div className="header">
            <Navigation />

            <div className="header__background-container">
                <div className="header__background-layer--inner" />
                <div className="header__background-layer--center-pulse" />
                <div className="header__background-layer--outer" />
            </div>
        </div>
    );
};

export default Header;
