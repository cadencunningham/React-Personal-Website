import React from 'react';
import Navigation from '../Navigation/navigation';

const Header = () => {
    return (
        <div className="header">
            <Navigation />

            <label className="header__name">Caden Cunningham</label>

            <div className="header__background-layer--1" />
            <div className="header__background-layer--2" />
        </div>
    );
};

export default Header;
