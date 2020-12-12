import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
    return (
        <div className="header">
            <Navigation />

            <div className="header__background-container">
                <div className="header__background-layer--1" />
                <div className="header__background-layer--2" />
                <div className="header__background-layer--3" />
            </div>
        </div>
    );
};

export default Header;
