import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <nav className="header-nav">
                <div>
                    <button className="header-nav__button">Home</button>
                    <button className="header-nav__button">Resume</button>
                </div>

                <div>
                    <button className="header-nav__button">Socials</button>
                    <button className="header-nav__button">Contact Me</button>
                </div>
            </nav>

            <label className="header__name">Caden Cunningham</label>

            <div className="header__background-img" />
        </div>
    );
};

export default Header;