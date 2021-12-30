import React, { useEffect, useState } from 'react';

const Header = () => {
    const [headerHeight, setHeaderHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeaderHeight(window.innerHeight);
        });
    }, []);

    return (
        <div className="header" style={{ height: headerHeight }}>
            <div className="header__background-container">
                <div className="header__background-layer--inner" />
                <div className="header__background-layer--center-pulse" />
                <div className="header__background-layer--outer" />
            </div>
        </div>
    );
};

export default Header;
