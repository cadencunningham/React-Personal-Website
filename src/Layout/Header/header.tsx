import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className="header">
            <Navigation />

            <label className="header__name">Caden Cunningham</label>

            <div className="header__background-container">
                <div className="header__background-layer--1" />
                <div className="header__background-layer--2" />
            </div>
        </div>
    );
};

export default Header;
