import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <nav className="header-nav">
                <button className="header-nav__button">Resume</button>
                <button className="header-nav__button">Blog</button>

                <label className="header-nav__name">Caden Cunningham</label>

                <button className="header-nav__button">Socials</button>
                <button className="header-nav__button">Contact Me</button>
            </nav>

            <div className="header__background-img" />
        </div>
    );
};

export default Header;
